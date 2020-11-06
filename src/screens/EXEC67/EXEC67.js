/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { Container, Content } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import { useSelector, useDispatch } from "react-redux";

import { GlobalStyles, wp } from "../../helpers";
import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";
import Loader from "../../components/Loader";
import { doContactUs } from "../../redux/actions/user";

export default ({ navigation }) => {
  const { app : {fetching, error } , user : {image} } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submit = () => {
    if (form.name === "") {
      setErrors("please enter name");
    } else if (form.email === "" || !form.email.includes("@")) {
      setErrors("please enter valid email");
    } else if (form.phone === "") {
      setErrors("please enter phone number");
    } else if (form.message === "") {
      setErrors("please enter message");
    } else {
      setErrors(undefined);
      dispatch(doContactUs(form, navigation));
    }
  };

  const [errors, setErrors] = useState(undefined);

  return (
    <Container>
      {fetching && <Loader />}
      <Header
        back
        profileImage={ image ? {  uri : image}: require("../../assets/images/group-512.png")}
      />

      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>

          <Row style={{ paddingTop: 20, paddingHorizontal: 20 }}>
            <Text style={styles.textcontactusText}>Contact Us</Text>
          </Row>

          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Input
              placeholder="Name"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={form.name}
              onChangeText={(text) => setForm((p) => ({ ...p, name: text }))}
            />
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
              value={form.email}
              onChangeText={(text) => setForm((p) => ({ ...p, email: text }))}
            />
          </Row>

          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Input
              placeholder="Phone"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={form.phone}
              onChangeText={(text) => setForm((p) => ({ ...p, phone: text }))}
            />
          </Row>

          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Input
              multiline
              numberOfLines={12}
              placeholder="Message"
              containerStyle={[
                GlobalStyles.containerStyleFieldView,
                { height: 250 },
              ]}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              style={{ textAlignVertical: "top" }}
              value={form.message}
              onChangeText={(text) => setForm((p) => ({ ...p, message: text }))}
            />
          </Row>
          <Row>
            {errors && (
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: 5,
                }}
              >
                {errors}
              </Text>
            )}
            {error && (
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: 5,
                }}
              >
                {error}
              </Text>
            )}
          </Row>
          <Row
            style={{
              justifyContent: "center",
              paddingHorizontal: 40,
              paddingVertical: 5,
            }}
          >
            <Button
              onPress={submit}
              title="Submit"
              type="clear"
              titleStyle={GlobalStyles.titleStyle}
              buttonStyle={GlobalStyles.buttonStyle}
            />
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  textcontactusText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
});
