/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Text, Avatar, Input, Button } from "react-native-elements";
import { Container, Content, View } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import CountryPicker, { DARK_THEME } from "react-native-country-picker-modal";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../../components/Loader";
import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from "../../helpers";
import { invite } from "../../redux/actions/invites";

export default ({
  navigation,
  route: {
    params: { typeId },
  },
}) => {
  const {
    user: { userId },
    app: { fetching },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const [forms, setForms] = useState([
    {
      name: "",
      mobileNumber: "",
      countrySortName: "",
      country: "Country",
    },
  ]);

  function addMore() {
    setForms((p) => [
      ...p,
      {
        name: "",
        mobileNumber: "",
        countrySortName: "",
        country: "Country",
      },
    ]);
  }

  function onChangeText(field, value, index) {
    const f = [...forms];
    f[index][field] = value;
    setForms(f);
  }

  function onChangeCountry(value, index) {
    const f = [...forms];
    f[index].countrySortName = value.cca2;
    f[index].country = value.name;
    setForms(f);
  }

  function submit() {
    const filters = forms.filter((item) => {
      return (
        item.country === "" || item.name === "" || item.countrySortName === ""
      );
    });
    if (filters.length > 0) {
      alert("please fill all fields");
    } else {
      const data = {
        executiveId: userId,
        typeId,
        isAssistant: false,
        invites: forms,
      };
      dispatch(invite(data, navigation));
    }
  }

  return (
    <Container>
      {fetching && <Loader />}
      <Content
        keyboardShouldPersistTaps="always"
        style={{ backgroundColor: "#000000" }}
        padder
      >
        <Grid style={{ alignItems: "center", paddingTop: hp(20) }}>
          <Row style={{ paddingBottom: 10 }}>
            <Avatar
              rounded
              source={require("../../assets/images/image-2.png")}
              size="large"
            />
          </Row>
          <Row style={{ paddingTop: 10, paddingBottom: 30 }}>
            <Image
              source={require("../../assets/images/group-255.png")}
              style={GlobalStyles.logocomponentImage}
            />
          </Row>

          {forms.map((item, index) => (
            <React.Fragment key={`form-${index}`}>
              <Row style={{ paddingVertical: 10, marginTop: 20 }}>
                <Input
                  placeholder="Name of Assistant"
                  containerStyle={[
                    GlobalStyles.containerStyleFieldView,
                    {
                      borderRadius: 18.5,
                      borderWidth: 1,
                      borderColor: "rgb(0, 107, 198)",
                    },
                  ]}
                  placeholderTextColor="white"
                  inputContainerStyle={{
                    color: "white",
                    borderBottomWidth: 0,
                    paddingHorizontal: wp(2),
                  }}
                  inputStyle={GlobalStyles.inputStyleFieldView}
                  value={item.name}
                  onChangeText={(text) => onChangeText("name", text, index)}
                />
              </Row>

              <Row style={{ paddingVertical: 10 }}>
                <Input
                  placeholder="Mobile Number"
                  containerStyle={[
                    GlobalStyles.containerStyleFieldView,
                    {
                      borderRadius: 18.5,
                      borderWidth: 1,
                      borderColor: "rgb(0, 107, 198)",
                    },
                  ]}
                  placeholderTextColor="white"
                  keyboardType="number-pad"
                  inputContainerStyle={{
                    color: "white",
                    borderBottomWidth: 0,
                    paddingHorizontal: wp(2),
                  }}
                  inputStyle={GlobalStyles.inputStyleFieldView}
                  value={item.phone}
                  onChangeText={(text) =>
                    onChangeText("mobileNumber", text, index)
                  }
                />
              </Row>

              <Row style={{ paddingVertical: 10 }}>
                <View
                  style={[
                    GlobalStyles.containerStyleFieldView,
                    {
                      width: "100%",
                      borderRadius: 18.5,
                      borderWidth: 1,
                      borderColor: "rgb(0, 107, 198)",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: wp(6),
                    },
                  ]}
                >
                  <CountryPicker
                    containerButtonStyle={{
                      width: width * 0.8,
                    }}
                    setWithCallingCode
                    onSelect={(value) => onChangeCountry(value, index)}
                    placeholder={item.country}
                    theme={DARK_THEME}
                  />
                </View>
              </Row>
            </React.Fragment>
          ))}
          <Row style={{ paddingTop: 10 }}>
            <TouchableOpacity onPress={addMore}>
              <Image
                source={require("../../assets/images/67-3.png")}
                style={styles.addbuttoncomponentImage}
              />
            </TouchableOpacity>
          </Row>

          <Row style={{ paddingTop: 10 }}>
            <Text style={styles.textinfoText}>
              Add more assistants to invite
            </Text>
          </Row>

          <Row style={{ paddingTop: 10 }}>
            <Text style={styles.textinfoText}>
              Please add a contact to invite.
              {"\n"}​ Carrier SMS charges may apply
            </Text>
          </Row>
          <Row style={{ paddingTop: 24 }}>
            <Button
              onPress={submit}
              buttonStyle={{
                backgroundColor: "white",
                width: 180,
                height: 50,
                borderRadius: 24,
              }}
              title="Send"
              titleStyle={{ color: "black" }}
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
  },
  textinfoText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  addbuttoncomponentImage: {
    resizeMode: "contain",
    backgroundColor: "transparent",
    width: 47,
    height: 47,
  },
});
