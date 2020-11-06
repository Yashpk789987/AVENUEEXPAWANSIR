/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Badge, Button, Avatar } from "react-native-elements";
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useSelector, useDispatch } from "react-redux";

import { GlobalStyles, resizeHeight, resizeWidth } from "../../helpers";
import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";
import { doLogout } from "../../redux/actions/user";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const { email, image, totalNotifications, totalSubmissions , typeId } = useSelector(
    (state) => state.user
  );

  const goToSubmissions = () => {
    navigation.navigate("Submissions");
  };

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const goToInvite = () => {
    navigation.navigate("Invite");
  };

  const goToSavedSubmissions = () => {
    navigation.navigate("SavedSubmissions");
  };

  const goToARInsider = () => {
    navigation.navigate("ARInsider");
  };

  const goToPayments = () => {
    navigation.navigate("Payments");
  };

  const goToNotifications = () => {
    navigation.navigate("Notifications");
  };

  const makeLogout = () => {
    dispatch(doLogout());
  };

  return (
    <Container>
      <Header
        profileImage={
          image
            ? { uri: `${image}` }
            : require("../../assets/images/group-512.png")
        }
      />

      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>

          <Row style={[styles.cellComponentView, { height: resizeHeight(85) }]}>
            <Col size={40}>
              <TouchableOpacity
                onPress={goToProfile}
                style={styles.cellComponentViewInside}
              >
                <Text style={styles.textprofileText}>Profile</Text>
                <Avatar
                  source={
                    image
                      ? { uri: `${image}` }
                      : require("../../assets/images/group-512.png")
                  }
                  rounded
                  size="small"
                  containerStyle={{ marginLeft: 12, marginTop: 4 }}
                />
              </TouchableOpacity>
            </Col>

            {
              typeId !== 5 && <Col size={30}>
              <View style={styles.cellComponentViewInside}>
                <Button
                  title="Invite"
                  type="clear"
                  titleStyle={GlobalStyles.inviteTitleStyle}
                  buttonStyle={GlobalStyles.inviteButtonStyle}
                  onPress={goToInvite}
                />
              </View>
            </Col>
            }
          </Row>

          <Row>
            <Separator />
          </Row>
          <Row style={styles.cellComponentView}>
            <Col onPress={goToSubmissions} size={70}>
              <View style={styles.cellComponentViewInside}>
                <Text style={styles.textprofileText}>Submissions</Text>
              </View>
            </Col>

            <Col onPress={goToSubmissions} size={30}>
              <Badge
                value={totalSubmissions}
                badgeStyle={{
                  backgroundColor: "rgb(0, 107, 198)",
                  minWidth: 35,
                  minHeight: 35,
                  borderWidth: 0,
                  borderRadius: 50,
                }}
                status="success"
              />
            </Col>
          </Row>
          <Row>
            <Separator />
          </Row>
          <Row style={styles.cellComponentView}>
            <Col onPress={goToNotifications} size={70}>
              <View style={styles.cellComponentViewInside}>
                <Text style={styles.textprofileText}>Notifications</Text>
              </View>
            </Col>
            <Col onPress={goToNotifications} size={30}>
              <Badge
                value={totalNotifications}
                badgeStyle={{
                  backgroundColor: "rgb(0, 107, 198)",
                  minWidth: 35,
                  minHeight: 35,
                  borderWidth: 0,
                  borderRadius: 50,
                }}
                status="success"
              />
            </Col>
          </Row>

          <Row>
            <Separator />
          </Row>
          <Row style={styles.cellComponentView}>
            <TouchableOpacity
              onPress={goToSavedSubmissions}
              style={styles.cellComponentViewInside}
            >
              <Text style={styles.textprofileText}>Saved Songs & Artists</Text>
            </TouchableOpacity>
          </Row>
          <Row>
            <Separator />
          </Row>
          <Row style={styles.cellComponentView}>
            <TouchableOpacity
              onPress={goToARInsider}
              style={styles.cellComponentViewInside}
            >
              <Text style={styles.textprofileText}>A&R Insider</Text>
            </TouchableOpacity>
          </Row>
          <Row>
            <Separator />
          </Row>
          {
            typeId !== 5 && <><Row style={styles.cellComponentView}>
            <TouchableOpacity
              onPress={goToPayments}
              style={styles.cellComponentViewInside}
            >
              <Text style={styles.textprofileText}>Payments</Text>
            </TouchableOpacity>
          </Row>
          <Row>
            <Separator />
          </Row></>
          }

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.textinfoText}>
                {`You are signed in as ${email}`}
              </Text>
            </View>
            <TouchableOpacity onPress={makeLogout}>
              <Text
                style={[
                  styles.textinfoText,
                  { paddingHorizontal: 0, paddingRight: 20 },
                ]}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <Row style={{ justifyContent: "center" }}>
            <Button
              title="Submissions"
              type="clear"
              titleStyle={GlobalStyles.titleStyle}
              buttonStyle={GlobalStyles.buttonStyle}
              onPress={goToSubmissions}
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
  },
  cellComponentView: {
    backgroundColor: "transparent",
    height: resizeHeight(65),
    marginTop: resizeHeight(25),
    alignItems: "flex-start",
  },
  cellComponentViewInside: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  textprofileText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginTop: 7,
  },
  profilepictureImage: {
    backgroundColor: "transparent",
    resizeMode: "contain",
    width: 38,
    height: 38,
    borderRadius: 38 / 2,
    marginLeft: 7,
  },
  separatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    alignSelf: "stretch",
    height: resizeHeight(2),
    marginTop: resizeHeight(24),
  },

  notificationcountcomponentView: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 18.5,
    width: resizeWidth(37),
    height: resizeHeight(37),
    justifyContent: "center",
  },
  countText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginLeft: resizeWidth(15),
    marginRight: resizeWidth(13),
  },
  textinfoText: {
    backgroundColor: "transparent",
    color: "rgb(129, 129, 129)",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  submitbuttoncomponentView: {
    alignSelf: "center",
    alignItems: "center",
  },
});
