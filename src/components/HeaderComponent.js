/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Avatar } from "react-native-elements";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useNavigation } from "@react-navigation/native";

import { resizeHeight, resizeWidth, wp, hp } from "../helpers";
import Close from "./CloseComponent";

const HeaderComponent = (props) => {
  const navigation = useNavigation();
  let height = hp(15);

  let listens;
  let earnings;
  let logo;
  let close;
  let back;
  let step;
  let profileImage;

  if (props.close) {
    close = (
      <View style={{ justifyContent: "center", paddingTop: hp(2) }}>
        <TouchableOpacity onPress={props.onClosePress}>
          <Close />
        </TouchableOpacity>
      </View>
    );
  }

  if (props.back) {
    back = (
      <Row>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ alignSelf: "center", alignItems: "center" }}
        >
          <Text style={styles.backText}>
            {"  "}
            <Image
              source={require("../assets/images/arrow-back.png")}
              style={styles.arrowImage}
            />{"  "}
            Back
          </Text>
        </TouchableOpacity>
      </Row>
    );
    height += hp(3);
  }
  if (props.step) {
    step = (
      <Row
        style={{
          alignSelf: "center",
          alignItems: "center",
          marginTop: hp(2),
        }}
      >
        <Text style={styles.textstep1Text}>{props.step}</Text>
      </Row>
    );
    height += hp(3);
  }

  if (props.profileImage) {
    profileImage = (
      <Avatar
        containerStyle={{
          marginTop: hp(1),
        }}
        rounded
        source={props.profileImage}
        size={props.back ? "large" : "medium"}
      />
    );
  }

  if (props.listens) {
    listens = (
      <Row>
        <Text style={styles.statsText}>Completed Listens: {props.listens}</Text>
      </Row>
    );
  } else {
    listens = null;
  }

  if (props.earnings) {
    earnings = (
      <Row>
        <Text style={styles.statsText}>Earnings: {props.listens}</Text>
      </Row>
    );
  } else {
    earnings = null;
  }

  if (props.listens && props.earnings) {
    logo = null;
  } else {
    logo = (
      <Row>
        <Image
          source={require("../assets/images/group-271.png")}
          style={styles.logoImage}
        />
      </Row>
    );
  }

  return (
    <Header
      barStyle="light-content" // or directly
      leftComponent={
        <Grid>
          {listens}
          {earnings}
          {logo}
          {step}
          {back}
        </Grid>
      }
      rightComponent={
        <Col>
          {profileImage}
          {close}
        </Col>
      }
      containerStyle={{
        backgroundColor: "black",
        borderBottomColor: "black",
        height,
        paddingTop: hp(5),
      }}
    />
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  componentView: {
    backgroundColor: "transparent",
  },
  logoImage: {
    backgroundColor: "transparent",
    resizeMode: "contain",
    width: 184,
    height: 19,
    marginTop: 25,
  },
  profileimageImage: {
    backgroundColor: "transparent",
    resizeMode: "contain",
    width: resizeWidth(68),
    height: resizeHeight(68),
  },
  arrowImage: {
    resizeMode: "contain",
    backgroundColor: "transparent",
    height:11,width:11
  },
  backText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    paddingTop: 3,
  },
  seperatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    alignSelf: "stretch",
    height: resizeHeight(2),
  },
  textstep1Text: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: wp(100),
  },
  statsText: {
    color: "white",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: wp(100),
    marginTop: resizeHeight(10),
  },
});
