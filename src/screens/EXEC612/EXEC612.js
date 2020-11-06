/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Avatar } from "react-native-elements";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";

import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";
import { GlobalStyles, resizeHeight, resizeWidth, hp } from "../../helpers";
import { useSelector } from "react-redux";

export default ({ navigation }) => {
  const { user : {image} } = useSelector(state => state)
  function onBackPress() {
    navigation.popToTop();
  }

  return (
    <Container>
      <Header />
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>
          <Row
            style={{
              paddingTop: hp(20),
              paddingHorizontal: 30,
              justifyContent: "center",
            }}
          >
            <Avatar
              rounded
              source={ image ? { uri : image }: require("../../assets/images/group-512.png")}
              size="large"
            />
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Text style={styles.textinfoText}>
              You password has been updated!
            </Text>
          </Row>
          <Row style={{ paddingTop: hp(5), justifyContent: "center" }}>
            <Button
              title="Back To Profile"
              type="clear"
              onPress={onBackPress}
              titleStyle={GlobalStyles.titleStyle}
              buttonStyle={GlobalStyles.buttonStyle}
            />
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  viewView: {
    backgroundColor: "black",
    flex: 1,
  },
  passwordchangedcomponentView: {
    backgroundColor: "transparent",
    marginTop: 125,
    alignItems: "center",
  },
  textinfoText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    marginTop: 20,
  },
  loginbuttoncomponentView: {
    alignItems: "center",
  },
  textloginText: {
    backgroundColor: "transparent",
    color: "black",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: resizeWidth(130),
    marginTop: resizeHeight(23),
  },
});
