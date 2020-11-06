/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text, Input } from "react-native-elements";
import { Container, Content } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import CountryPicker, { DARK_THEME } from "react-native-country-picker-modal";

import Next from "../../components/NextComponent";
import { GlobalStyles, resizeHeight, resizeWidth, hp } from "../../helpers";
import { doStep1 } from "../../redux/actions/user";
import Loader from "../../components/Loader";

export default () => {
  const dispatch = useDispatch();
  const { error, fetching } = useSelector((state) => state.app);
  const [country, setCountry] = useState(undefined);
  const [errors, setErrors] = useState(undefined);

  const [form, setForm] = useState({
    countryCode: "",
    mobileNumber: "",
  });

  const setState = (obj) => {
    setForm((f) => ({ ...f, ...obj }));
  };

  const onChangeText = (text) => {
    setState({ mobileNumber: text });
  };

  const onSubmit = () => {
    if (form.countryCode === "") {
      setErrors("please choose country");
      return;
    }
    if (form.mobileNumber === "") {
      setErrors("please enter your mobile number");
      return;
    }
    setErrors(undefined);
    dispatch(
      doStep1({ mobileNumber: `+${form.countryCode} ${form.mobileNumber}` })
    );
  };

  const onChangeCountry = (c) => {
    setCountry(c.cca2);
    setState({ countryCode: c.callingCode[0] });
  };

  return (
    <Container>
      {fetching && <Loader />}
      <Content style={{ backgroundColor: "#000000" }} padder>
        <Grid style={{ alignItems: "center", paddingTop: hp(30) }}>
          <Row>
            <Image
              source={require("../../assets/images/group-255.png")}
              style={styles.logoComponentImage}
            />
          </Row>
          <Row>
            <Text style={styles.textinfo1Text}>
              Please enter your mobile number.
            </Text>
          </Row>
          <Row>
            <Grid>
              <Col size={28}>
                <View style={styles.selectCountryComponentView}>
                  <CountryPicker
                    setWithCallingCode
                    onSelect={onChangeCountry}
                    countryCode={country}
                    placeholder="Country"
                    theme={DARK_THEME}
                  />
                </View>
              </Col>
              <Col size={72}>
                <Input
                  keyboardType="phone-pad"
                  placeholder="Verify your mobile number"
                  containerStyle={[
                    GlobalStyles.containerStyleFieldView,
                    { width: resizeWidth(257) },
                  ]}
                  placeholderTextColor="white"
                  inputContainerStyle={{
                    color: "white",
                    borderBottomWidth: 0,
                  }}
                  inputStyle={[
                    GlobalStyles.inputStyleFieldView,
                    { textAlign: "center" },
                  ]}
                  value={form.mobileNumber}
                  onChangeText={(text) => onChangeText(text)}
                />
              </Col>
            </Grid>
          </Row>
          <Row>
            <Text style={styles.textinfo2Text}>
              AvenueAR will send you an SMS message to verify your phone number.
            </Text>
          </Row>
          <Row>
            <Text style={styles.textinfo2Text}>
              Carrier SMS charges may apply
            </Text>
          </Row>
          <Row style={{ paddingTop: 15 }}>
            <Next onPress={onSubmit} />
          </Row>
          {errors && (
            <Row>
              <Text style={styles.textinfo2Text}>{errors}</Text>
            </Row>
          )}
          {error && (
            <Row>
              <Text style={styles.textinfo2Text}>{error}</Text>
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
    backgroundColor: "transparent",
    resizeMode: "stretch",
  },
  textinfo1Text: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginVertical: 10,
  },
  verifynumbercomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(367),
    height: resizeHeight(47),
    marginTop: resizeHeight(28),
    flexDirection: "row",
    alignItems: "flex-start",
  },
  textcountryText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: resizeWidth(57),
  },
  selectCountryComponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    width: resizeWidth(91),
    height: resizeHeight(47),
    justifyContent: "center",
    alignItems: "center",
  },
  textnumberText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: resizeHeight(47),
    justifyContent: "center",
    alignItems: "center",
  },
  enternumbercomponentView: {
    width: resizeWidth(247),
  },
  textinfo2Text: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: resizeWidth(349),
    marginTop: resizeHeight(19),
  },
});
