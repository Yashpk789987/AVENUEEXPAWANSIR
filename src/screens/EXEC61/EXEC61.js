import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input } from "react-native-elements";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/HeaderComponent";
import { GlobalStyles, resizeHeight, resizeWidth, wp } from "../../helpers";
import Separator from "../../components/SeparatorComponent";
import Next from "../../components/NextComponent";
import { doStep4 } from "../../redux/actions/user";
import Loader from "../../components/Loader";

// const format = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export default () => {
  const dispatch = useDispatch();
  const {
    user: { userId },
    app: { fetching, error },
  } = useSelector((state) => state);
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userId,
  });
  const [errors, setErrors] = useState(undefined);
  const onSubmit = () => {
    if (state.email === "" || !state.email.includes("@")) {
      setErrors("please enter valid email");
    } else if (state.password.length < 8) {
      setErrors(
        "Your password must be at least 8 characters and include a number or special character."
      );
    } else if (state.password !== state.confirmPassword) {
      setErrors("password and confirm password do not match");
    } else {
      setErrors(undefined);
      dispatch(doStep4(state));
    }
  };

  return (
    <Container>
      {fetching && <Loader />}
      <Header />
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>

          <Row>
            <Text style={styles.text1Text}>Create Your Account & Profile</Text>
          </Row>

          <Row>
            <Separator />
          </Row>

          <Row>
            <Text style={styles.text2Text}>
              Please create your executive user credentials.
              {"\n"}
              You must use the same email address that your AvenueAR invitation
              was sent to.
            </Text>
          </Row>

          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
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
              onChangeText={(text) => setState((s) => ({ ...s, email: text }))}
            />
          </Row>

          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
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

          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Input
              placeholder="Confirm Password"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              secureTextEntry
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={state.confirmPassword}
              onChangeText={(text) =>
                setState((s) => ({ ...s, confirmPassword: text }))
              }
            />
          </Row>
          {errors && (
            <Row>
              <Text style={styles.textpasswordinfoText}>
                {errors}
                {"\n"}
              </Text>
            </Row>
          )}
          {error && (
            <Row style={{ backgroundColor: "red" }}>
              <Text style={styles.textpasswordinfoText}>
                {error}
                {"\n"}
              </Text>
            </Row>
          )}
          <Row style={{ justifyContent: "center", paddingTop: 20 }}>
            <Next onPress={onSubmit} />
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
  headercomponentView: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
    height: resizeHeight(80),
    marginTop: resizeHeight(67),
  },
  logoImage: {
    resizeMode: "stretch",
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    width: resizeWidth(194),
    height: resizeHeight(19),
    marginLeft: resizeWidth(35),
  },
  separatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: resizeHeight(2),
    marginTop: resizeHeight(59),
  },
  textcreateaccountcomponentView: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    height: resizeHeight(34),
    marginTop: resizeHeight(13),
    alignItems: "flex-start",
    marginLeft: 20,
    marginRight: 20,
  },
  text1Text: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  separatorTwoView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    width: resizeWidth(296),
    height: resizeHeight(2),
    marginTop: resizeHeight(8),
  },
  text2Text: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    lineHeight: 20,
    backgroundColor: "transparent",
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  componentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    width: resizeWidth(346),
    height: resizeHeight(47),
    marginTop: 20,
    alignItems: "flex-start",
  },
  textemailText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginLeft: resizeWidth(24),
    marginTop: resizeHeight(9),
  },
  enterpasswordcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(19),
    alignItems: "flex-start",
  },
  textpasswordText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginLeft: resizeWidth(24),
    marginTop: resizeHeight(9),
  },
  enterconfirmcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(18),
    alignItems: "flex-start",
  },
  textconfirmpasswordText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginLeft: resizeWidth(24),
    marginTop: resizeHeight(9),
  },
  textpasswordinfoText: {
    width: "100%",
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    lineHeight: 20,
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  signinbuttoncomponentImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: resizeWidth(47),
    height: resizeHeight(47),
    marginBottom: resizeHeight(79),
  },
});
