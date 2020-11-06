/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React, { useState, useEffect, useCallback } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OTPTextView from "react-native-otp-textinput";

import {
  doVerifyCodeForNewPassword,
  resendCodeForNewPassword,
} from "../../redux/actions/user";
import Loader from "../../components/Loader";

export default ({
  navigation,
  route: {
    params: { mobileNumber },
  },
}) => {
  const dispatch = useDispatch();
  const { error, fetching } = useSelector((state) => state.app);
  const [state, setState] = useState({ mobileNumber, code: "" });
  const [message, setMessage] = useState(undefined);
  const submit = useCallback(
    (form) => {
      dispatch(doVerifyCodeForNewPassword(form, navigation));
    },
    [navigation, dispatch]
  );

  const resend = () => {
    dispatch(resendCodeForNewPassword(mobileNumber))
      .then((res) => {
        setMessage(res);
        setTimeout(() => setMessage(undefined), 2000);
      })
      .catch((err) => {
        setMessage(err);
        setTimeout(() => setMessage(undefined), 2000);
      });
  };

  useEffect(() => {
    if (state.code.length === 6) {
      submit(state);
    }
  }, [state, submit]);

  return (
    <View style={styles.viewView}>
      {fetching && <Loader />}
      <View style={styles.headercomponentView}>
        <Image
          source={require("../../assets/images/group-424.png")}
          style={styles.logoImage}
        />
      </View>
      <Text style={styles.textinfo1Text}>
        Enter the verification code sent to 
        {"\n"}
        your device
      </Text>
      <Text style={styles.textinfo2Text}>Verification Code</Text>
      <View style={styles.entercodecomponentView}>
        <OTPTextView
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          handleTextChange={(text) => setState((f) => ({ ...f, code: text }))}
          inputCount={6}
          tintColor="#fff"
          offTintColor="#fff"
          keyboardType="numeric"
        />
      </View>
      {error && (
        <Text style={styles.cancelText}>
          {error}
          {"\n"}
        </Text>
      )}
      {message && (
        <Text style={styles.cancelText}>
          {message}
          {"\n"}
        </Text>
      )}
      <TouchableOpacity onPress={resend}>
        <Text style={styles.textlinkText}>Didn't get a code?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>
          Cancel
          {"\n"}
        </Text>
      </TouchableOpacity>
    </View>
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
    width: 194,
    height: 19,
    marginTop: 291,
    alignItems: "center",
  },
  logoImage: {
    backgroundColor: "transparent",
    resizeMode: "stretch",
    width: 194,
    height: 19,
  },
  textinfo1Text: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: 241,
    marginTop: 10,
  },
  textinfo2Text: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 152,
    marginTop: 13,
  },
  entercodecomponentView: {
    backgroundColor: "transparent",
    width: 266,
    height: 46,
    marginTop: 17,
    flexDirection: "row",
    alignItems: "center",
  },
  entercode1View: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderStyle: "solid",
    width: 36,
    height: 46,
  },
  entercode2View: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderStyle: "solid",
    width: 36,
    height: 46,
    marginLeft: 10,
  },
  entercode3View: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderStyle: "solid",
    width: 36,
    height: 46,
    marginLeft: 10,
  },
  entercode4View: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderStyle: "solid",
    width: 36,
    height: 46,
    marginRight: 10,
  },
  entercode5View: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderStyle: "solid",
    width: 36,
    height: 46,
    marginRight: 10,
  },
  entercode6View: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderStyle: "solid",
    width: 36,
    height: 46,
  },
  textlinkText: {
    color: "rgb(0, 107, 198)",
    fontFamily: "ProximaNova-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    width: 166,
    marginTop: 18,
  },
  cancelText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: "80%",
    marginTop: 8,
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
