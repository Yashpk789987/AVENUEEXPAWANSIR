/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React from "react";
import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { Button } from "react-native-elements";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import { useSelector, useDispatch } from "react-redux";

import { GlobalStyles, hp } from "../../helpers";
import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";
import { doSave } from "../../redux/actions/notifications";
import Loader from "../../components/Loader";

export default ({
  route: {
    params: { message, id },
  },
  navigation,
}) => {
  const dispatch = useDispatch();

  const {
    user: { image },
    app: { fetching },
  } = useSelector((state) => state);

  const { height } = useWindowDimensions();

  const save = () => {
    dispatch(doSave({ notificationId: id }, navigation));
  };

  return (
    <Container>
      {fetching && <Loader />}
      <Header back profileImage={{ uri: image }} />
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>
          <Row
            style={{
              paddingTop: hp(15),
              justifyContent: "center",
              paddingHorizontal: 30,
              paddingVertical: 10,
              height: height * 0.65,
            }}
          >
            <Text style={styles.textinfoText}>{message}</Text>
          </Row>
          <Row style={{ paddingTop: hp(5), justifyContent: "center" }}>
            <Button
              onPress={save}
              title="Save"
              type="clear"
              titleStyle={GlobalStyles.titleBlueStyle}
              buttonStyle={GlobalStyles.buttonBlueStyle}
            />
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  textinfoText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  headercomponentView: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
    height: 107,
    alignItems: "center",
  },
  logoImage: {
    resizeMode: "cover",
    backgroundColor: "transparent",
    width: 346,
    height: 68,
  },
  buttoncomponentView: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 29.5,
    width: 218,
    height: 59,
    alignItems: "center",
  },
  savebuttonText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: 130,
    marginTop: 23,
  },
  textmessageText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    lineHeight: 20,
    paddingTop: 2,
    backgroundColor: "transparent",
    width: 334,
    marginLeft: 36,
  },
});
