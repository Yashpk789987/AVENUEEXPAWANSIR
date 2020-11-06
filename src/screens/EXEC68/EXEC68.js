/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { Input, Button, Avatar } from "react-native-elements";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import { useSelector, useDispatch } from "react-redux";

import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from "../../helpers";
import { doVerifyForNewPassword } from "../../redux/actions/user";
import Loader from "../../components/Loader";

export default ({ navigation }) => {
  const { error, fetching } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [state, setState] = useState({ mobileNumber: "" });
  const [errors, setErrors] = useState(undefined);

  function onSubmitPress() {
    if (state.mobileNumber === "") {
      setErrors("please enter mobile number");
    } else if (!state.mobileNumber.includes("+")) {
      setErrors("please enter mobile number with country code");
    } else {
      setErrors(undefined);
      dispatch(doVerifyForNewPassword(state, navigation));
    }
  }

  return (
    <Container>
      {fetching && <Loader />}
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid style={{ alignItems: "center", justifyContent: "center" }}>
          <Row style={{ paddingTop: hp(30) }}>
            <Avatar
              rounded
              source={require("../../assets/images/group-512.png")}
              size="large"
            />
          </Row>

          <Row>
            <Image
              source={require("../../assets/images/group-255.png")}
              style={styles.logoImage}
            />
          </Row>

          <Row style={{ paddingVertical: 20, paddingHorizontal: 40 }}>
            <Input
              keyboardType="phone-pad"
              placeholder="Verify Your Mobile Number"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={[
                GlobalStyles.inputStyleFieldView,
                {
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                },
              ]}
              value={state.mobileNumber}
              onChangeText={(text) => setState({ mobileNumber: text })}
            />
          </Row>
          {errors && (
            <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
              <Text style={styles.textinfoText}>{errors}</Text>
            </Row>
          )}
          {error && (
            <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
              <Text style={styles.textinfoText}>{error}</Text>
            </Row>
          )}
          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Text style={styles.textinfoText}>
              AvenueAR will send you an SMS message to verify your phone number.
            </Text>
          </Row>
          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Text style={styles.textinfoText}>
              Carrier SMS charges may apply.
            </Text>
          </Row>
          <Row style={{ paddingTop: 10 }}>
            <Button
              title="Submit"
              type="clear"
              titleStyle={GlobalStyles.titleStyle}
              buttonStyle={GlobalStyles.buttonStyle}
              onPress={onSubmitPress}
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
    alignItems: "center",
  },
  headercomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(224),
    height: resizeHeight(113),
    marginTop: resizeHeight(266),
    alignItems: "center",
  },
  profilepictureImage: {
    backgroundColor: "transparent",
    resizeMode: "contain",
    width: resizeWidth(68),
    height: resizeHeight(68),
  },
  logoImage: {
    resizeMode: "stretch",
    backgroundColor: "transparent",
    width: resizeWidth(224),
    height: resizeHeight(21),
    marginTop: resizeHeight(24),
  },
  verifynumbercomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(360),
    height: resizeHeight(47),
    marginTop: resizeHeight(47),
  },
  enternumbercomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(360),
    top: 0,
    height: resizeHeight(47),
  },
  textnumberText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    top: 9,
  },
  textinfoText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
  },
  submitbuttoncomponentView: {
    width: resizeWidth(218),
    height: resizeHeight(59),
    marginTop: resizeHeight(25),
    alignItems: "center",
  },
  textsubmitbuttonText: {
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
