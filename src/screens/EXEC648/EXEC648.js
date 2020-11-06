/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { resizeHeight } from "../../helpers";
import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";

export default ({ navigation }) => {
  return (
    <Container>
      <Header back profileImage={require("../../assets/images/image-2.png")} />
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>

          <Row style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
            <Text style={styles.textnotificationsText}>Invite Someone</Text>
          </Row>

          <Row>
            <Separator />
          </Row>

          <Row style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
            <Col size={85}>
              <Text style={styles.textnameText}>Assistant</Text>
            </Col>
            <Col size={15}>
              <TouchableOpacity
                onPress={() => navigation.navigate("InviteForm", { typeId: 5 })}
              >
                <Image
                  source={require("../../assets/images/67-3.png")}
                  style={styles.addbuttoncomponentImage}
                />
              </TouchableOpacity>
            </Col>
          </Row>

          <Row>
            <Separator />
          </Row>

          <Row style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
            <Col size={85}>
              <Text style={styles.textnameText}>Music Professional</Text>
            </Col>
            <Col size={15}>
              <TouchableOpacity
                onPress={() => navigation.navigate("InviteForm", { typeId: 2 })}
              >
                <Image
                  source={require("../../assets/images/67-3.png")}
                  style={styles.addbuttoncomponentImage}
                />
              </TouchableOpacity>
            </Col>
          </Row>
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
    marginTop: resizeHeight(30),
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
  textnameText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginTop: 15,
  },
});
