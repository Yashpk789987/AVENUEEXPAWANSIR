/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Badge } from "react-native-elements";
import { Container, Content, View } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";
import SwitchPhoto from "../../components/SwitchPhotoComponent";

import { doLoadNotifications } from "../../redux/actions/notifications";
import Loader from "../../components/Loader";

function List({ data }) {
  const listItems = data.map((i) => (
    <Row
      key={`notification-${i.id}`}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: "rgba(171, 171, 171, 0.13)",
        borderBottomWidth: 2,
      }}
    >
      <Notification notification={i} />
    </Row>
  ));
  return <Grid>{listItems}</Grid>;
}

function Notification({ notification: { message, id, read } }) {
  const navigation = useNavigation();
  const [s, set] = useState(read);

  useEffect(() => {
    set(read);
  }, [read]);

  return (
    <>
      <Col style={{ paddingLeft: 18 }} size={30}>
        <SwitchPhoto
          image={require("../../assets/images/group-543.png")}
          value={s}
          onValueChange={(state) => {
            if (!s) {
              set(state);
              setTimeout(() => {
                navigation.navigate("ParticularNotification", { message, id });
                setTimeout(() => set(false), 2000);
              }, 1000);
            }
          }}
        />
      </Col>
      <Col
        style={{
          paddingLeft: 54,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        size={50}
      >
        <Text style={[styles.nameText, { textAlign: "left" }]}>Avenue AR</Text>
        <Text style={[styles.labelText, { textAlign: "left" }]}>CORPORATE</Text>
      </Col>
    </>
  );
}

export default () => {
  const dispatch = useDispatch();
  const {
    app: { fetching },
    notifications: { notifications },
    user: { image },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(doLoadNotifications());
  }, [dispatch]);

  return (
    <Container>
      {fetching && <Loader />}
      <Header back profileImage={{ uri: image }} />
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>
          <Row style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
            <Col size={80}>
              <Text style={styles.textnotificationsText}>Notifications</Text>
            </Col>
            <Col size={20}>
              <Badge
                value={
                  notifications.length === 0
                    ? 0
                    : notifications.filter((i) => !i.read).length
                }
                badgeStyle={{
                  backgroundColor: "rgb(0, 107, 198)",
                  width: 25,
                  height: 25,
                  borderWidth: 0,
                  borderRadius: 18.5,
                }}
                status="success"
              />
            </Col>
          </Row>
          <Row>
            <Separator />
          </Row>
          {notifications.length !== 0 && <List data={notifications} />}
          {notifications.length === 0 && !fetching && (
            <View
              style={{
                flex: 1,
                height: 400,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>No Notifications Found...</Text>
            </View>
          )}
        </Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  nameText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  labelText: {
    color: "white",
    fontFamily: "ProximaNova-Bold",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "transparent",
  },
  textnotificationsText: {
    color: "white",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  musiciconcomponentImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 16,
    height: 16,
    paddingTop: 25,
  },
});
