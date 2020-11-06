/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "react-native-elements";

import Header from "../../components/HeaderComponent";
import { GlobalStyles, wp } from "../../helpers";
import { doSetNewPassword } from "../../redux/actions/user";
import Loader from "../../components/Loader";

export default ({
  navigation,
  route: {
    params: { userId },
  },
}) => {
  const dispatch = useDispatch();
  const {
    app: { fetching, error },
    user : {image}
  } = useSelector((state) => state);
  const [state, setState] = useState({
    newPassword: "",
    confirmPassword: "",
    userId,
  });
  const [errors, setErrors] = useState(undefined);
  const onSubmit = () => {
    if (state.newPassword.length < 8) {
      setErrors("invalid password");
    } else if (state.newPassword !== state.confirmPassword) {
      setErrors("password and confirm password do not match");
    } else {
      setErrors(undefined);
      dispatch(doSetNewPassword(state, navigation));
    }
  };

  return (
    <View style={styles.viewView}>
      {fetching && <Loader />}
      <Header
        back
        profileImage={ image ? {  uri : image}: require("../../assets/images/group-512.png")}
      />
      <Image
        source={require("../../assets/images/lock-1.png")}
        style={styles.lockImage}
      />
      <Text style={styles.textinfoText}>
        Your password must be at least 8{"\n"}
        characters and include a number or special character.
      </Text>
      {errors && (
        <Text style={[styles.textinfoText, { marginTop: 5 }]}>{errors}</Text>
      )}
      {error && (
        <Text style={[styles.textinfoText, { marginTop: 5 }]}>{error}</Text>
      )}
      <View style={styles.passwordcomponentView}>
        <Input
          secureTextEntry
          placeholderTextColor="white"
          containerStyle={GlobalStyles.containerStyleFieldView}
          inputStyle={GlobalStyles.inputStyleFieldView}
          inputContainerStyle={{
            color: "white",
            borderBottomWidth: 0,
            paddingHorizontal: wp(2),
          }}
          placeholder="New Password"
          value={state.newPassword}
          onChangeText={(text) =>
            setState((p) => ({ ...p, newPassword: text }))
          }
        />

        <View
          style={{
            flex: 1,
          }}
        />


        <Input
          secureTextEntry
          placeholderTextColor="white"
          containerStyle={GlobalStyles.containerStyleFieldView}
          inputStyle={GlobalStyles.inputStyleFieldView}
          inputContainerStyle={{
            color: "white",
            borderBottomWidth: 0,
            paddingHorizontal: wp(2),
          }}
          placeholder="Confirm Password"
          value={state.confirmPassword}
          onChangeText={(text) =>
            setState((p) => ({ ...p, confirmPassword: text }))
          }
        />
      </View>
      <TouchableOpacity onPress={onSubmit}>
        <Image
          source={require("../../assets/images/vector-art-3.png")}
          style={styles.nextstepbuttonImage}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
        }}
      />
      <Text
        onPress={() => navigation.navigate("ContactUs")}
        style={styles.textcontactsupportText}
      >
        Contact Support
      </Text>
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
    alignSelf: "stretch",
    height: 107,
    marginTop: 40,
  },
  logoImage: {
    resizeMode: "cover",
    backgroundColor: "transparent",
    alignSelf: "center",
    width: 346,
    height: 68,
  },
  separatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 37,
  },
  lockImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 20,
    height: 26,
    marginTop: 173,
  },
  textinfoText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    lineHeight: 18,
    backgroundColor: "transparent",
    marginTop: 20,
  },
  passwordcomponentView: {
    backgroundColor: "transparent",
    width: 346,
    height: 92,
    marginTop: 3,
  },
  textnewpasswordText: {
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
  newpasswordbarView: {
    color: "white",
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgb(51, 51, 51)",
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 37,
  },
  newconfirmpasswordText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    position: "absolute",
    left: 24,
    bottom: 10,
  },
  confirmpasswordbarView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgb(51, 51, 51)",
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 37,
  },
  nextstepbuttonImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    opacity: 0.98,
    width: 47,
    height: 47,
    marginTop: 20,
  },
  textcontactsupportText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginBottom: 53,
  },
});
