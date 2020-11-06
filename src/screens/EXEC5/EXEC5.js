/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Image, StyleSheet, KeyboardAvoidingView } from "react-native";

import { Text, Button, Avatar, Input } from "react-native-elements";
import { Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import { useDispatch, useSelector } from "react-redux";

import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from "../../helpers";
import { doLogin } from "../../redux/actions/user";
import Loader from "../../components/Loader";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const { error, fetching } = useSelector((state) => state.app);

  const [state, setState] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState(undefined);

  function onLoginPress() {
    if (state.email === "") {
      setErrors("please enter email");
    } else if (state.password === "") {
      setErrors("please enter password");
    } else {
      setErrors(undefined);
      dispatch(doLogin(state));
    }
  }

  function onHomePress() {
    navigation.replace("Index");
  }

  function onForgotPasswordPress() {
    navigation.navigate("ForgotPassword");
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      {fetching && <Loader />}
      <Content style={{ backgroundColor: "#000000" }} padder>
        <Grid style={{ alignItems: "center", paddingTop: hp(30) }}>
          <Row style={{ paddingBottom: 10 }}>
            <Avatar
              rounded
              source={require("../../assets/images/group-530.png")}
              size="medium"
            />
          </Row>
          <Row style={{ paddingTop: 10 }}>
            <Image
              source={require("../../assets/images/group-255.png")}
              style={GlobalStyles.logocomponentImage}
            />
          </Row>
          <Row style={{ paddingTop: 40 }}>
            <Input
              placeholder="Email"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={state.email}
              onChangeText={(text) => setState((p) => ({ ...p, email: text }))}
            />
          </Row>
          <Row style={{ paddingTop: 10 }}>
            <Input
              placeholder="Password"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              secureTextEntry
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={state.password}
              onChangeText={(text) =>
                setState((s) => ({ ...s, password: text }))
              }
            />
          </Row>

          {error && (
            <Row style={{ paddingTop: 20 }}>
              <Text style={styles.textsignupText}>{error}</Text>
            </Row>
          )}

          {errors && (
            <Row style={{ paddingTop: 20 }}>
              <Text style={styles.textsignupText}>{errors}</Text>
            </Row>
          )}

          <Row style={{ paddingTop: 20 }}>
            <Text style={styles.textsignupText}>
              Don’t have an account?
              <Text style={styles.linkText} onPress={onHomePress}>
                Sign Up
              </Text>
            </Text>
          </Row>

          <Row style={{ paddingTop: 5 }}>
            <Text
              style={styles.textforgotpasswordText}
              onPress={onForgotPasswordPress}
            >
              Forgot password
            </Text>
          </Row>
          <Row style={{ paddingTop: 50 }}>
            <Button
              title="Login"
              type="clear"
              titleStyle={GlobalStyles.titleStyle}
              buttonStyle={GlobalStyles.buttonStyle}
              onPress={onLoginPress}
            />
          </Row>
        </Grid>
      </Content>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  viewView: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  headercomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(224),
    height: resizeHeight(113),
    marginTop: resizeWidth(266),
    alignItems: "center",
  },
  profilepictureImage: {
    resizeMode: "contain",
    backgroundColor: "transparent",
    width: resizeWidth(68),
    height: resizeHeight(68),
  },
  logoImage: {
    resizeMode: "contain",
    backgroundColor: "transparent",
    width: resizeWidth(224),
    height: resizeHeight(21),
    marginTop: resizeWidth(24),
  },
  emailcomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(47),
    marginTop: resizeWidth(44),
  },
  textemailText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    position: "absolute",
    left: 24,
    top: 9,
  },
  enteremailcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgb(51, 51, 51)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(47),
  },
  passwordcomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(47),
    marginTop: resizeWidth(18),
  },
  textpasswordText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    position: "absolute",
    left: 24,
    top: 9,
  },
  enterpasswordcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgb(51, 51, 51)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(47),
  },
  textsignupText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  linkText: {
    color: "rgb(0, 107, 198)",
    fontFamily: "ProximaNova-Regular",
  },
  textforgotpasswordText: {
    color: "rgb(0, 107, 198)",
    fontFamily: "ProximaNova-Regular",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
  },
  logincomponentView: {
    marginBottom: resizeHeight(75),
  },
  textloginText: {
    color: "black",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    width: resizeWidth(130),
    marginTop: resizeWidth(23),
  },
});
