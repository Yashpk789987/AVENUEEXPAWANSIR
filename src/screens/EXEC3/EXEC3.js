/* eslint-disable import/no-unresolved */

import React, { useState, useEffect, useCallback } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import OTPTextView from "react-native-otp-textinput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles, resizeHeight, resizeWidth, hp } from "../../helpers";
import { cancel, resendCode, doStep2 } from "../../redux/actions/user";
import Loader from "../../components/Loader";

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    mobileNumber,
    app: { error, fetching },
  } = useSelector((state) => ({
    mobileNumber: state.user.mobileNumber,
    app: state.app,
  }));

  const [message, setMessage] = useState(undefined);

  const [form, setForm] = useState({
    userMobileNumber: mobileNumber,
    code: "",
  });

  function onCancel() {
    navigation.goBack();
    dispatch(cancel());
  }

  function onCodeResendPress() {
    dispatch(resendCode())
      .then((m) => {
        setMessage(m);
        setTimeout(() => {
          setMessage(undefined);
        }, 2000);
      })
      .catch((err) => console.log(err, "here err"));
  }

  const submit = useCallback(
    (f) => {
      dispatch(doStep2(f))
        .then((m) => {
          setMessage(m);
        })
        .catch((err) => console.log(err, "here err"));
    },
    [dispatch]
  );

  useEffect(() => {
    if (form.code.length === 6) {
      submit(form);
    }
  }, [form, submit]);

  return (
    <Container>
      {fetching && <Loader />}
      <Content style={{ backgroundColor: "#000000" }} padder>
        <Grid style={{ alignItems: "center", paddingTop: hp(30) }}>
          <Row>
            <Image
              source={require("../../assets/images/group-271.png")}
              style={GlobalStyles.logoComponentImage}
            />
          </Row>
          <Row style={{ paddingTop: resizeHeight(10) }}>
            <Text style={styles.textentercodeText}>
              Enter the verification code sent to your device
            </Text>
          </Row>
          <Row style={{ paddingTop: resizeHeight(10) }}>
            <Text style={styles.textverificationcodeText}>
              Verification Code
            </Text>
          </Row>
          <Row>
            <View style={styles.entercodecomponentView}>
              <OTPTextView
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
                handleTextChange={(text) =>
                  setForm((f) => ({ ...f, code: text }))
                }
                inputCount={6}
                tintColor="#fff"
                offTintColor="#fff"
                keyboardType="numeric"
              />
            </View>
          </Row>
          <Row>
            <Text onPress={onCodeResendPress} style={styles.textresendcodeText}>
              Did not get a code?
            </Text>
          </Row>
          <Row>
            <Text
              onPress={() => onCancel()}
              style={styles.textcancelbuttonText}
            >
              Cancel
              {"\n"}
            </Text>
          </Row>
          {message && (
            <Row>
              <Text style={styles.textentercodeText}>{message}</Text>
            </Row>
          )}
          {error && (
            <Row>
              <Text style={styles.textentercodeText}>{error}</Text>
            </Row>
          )}
        </Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  viewView: {
    backgroundColor: "black",
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  logocomponentImage: {
    resizeMode: "stretch",
    backgroundColor: "transparent",
  },
  textentercodeText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  textverificationcodeText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginTop: resizeHeight(13),
  },
  entercodecomponentView: {
    backgroundColor: "transparent",
    marginTop: resizeHeight(30),
    flexDirection: "row",
    alignItems: "center",
  },
  box1View: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderStyle: "solid",
    width: resizeWidth(36),
    height: resizeHeight(46),
  },
  textresendcodeText: {
    color: "rgb(0, 107, 198)",
    fontFamily: "ProximaNova-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    width: resizeWidth(180),
    marginTop: resizeHeight(18),
  },
  textcancelbuttonText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: resizeWidth(65),
    marginTop: resizeHeight(8),
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    backgroundColor: "white",
    borderRadius: 4,
    width: 36,
    height: 46,
  },
});
