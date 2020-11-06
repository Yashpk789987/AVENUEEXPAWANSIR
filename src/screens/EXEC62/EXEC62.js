/* eslint-disable import/no-unresolved */
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import ImagePicker from "react-native-image-picker";
import { Input, Avatar, Text } from "react-native-elements";
import { Container, Content, ActionSheet, Root } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useDispatch, useSelector } from "react-redux";

import { GlobalStyles, resizeHeight, resizeWidth, wp } from "../../helpers";
import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";
import Next from "../../components/NextComponent";

import get from "../../api/get";
import { doStep5 } from "../../redux/actions/user";
import { setLoading } from "../../redux/actions/app";
import Loader from "../../components/Loader";

const options = {
  title: "Select Photo",
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};

export default () => {
  const dispatch = useDispatch();
  const {
    app: { fetching },
    user: { userId },
  } = useSelector((state) => state);
  const [errors, setErrors] = useState(undefined);
  const [types, setTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [state, setState] = useState({
    userId,
    firstName: "",
    lastName: "",
    typeId: undefined,
    zipCode: "",
    website: "",
    genreId: undefined,
    label: "",
    avatarSource: require("../../assets/images/group-302.png"),
    image: undefined,
  });

  const fetchDropdowns = useCallback(async () => {
    dispatch(setLoading(true));
    const response = await get("/fetch-data-for-dropdowns");
    console.log(response);
    if (response) {
      setTypes(response.type);
      setGenres(response.genres);
    }
    dispatch(setLoading(false));
  }, [dispatch]);

  const onPress = () => {
    if (state.firstName === "") {
      setErrors("please enter first name");
    } else if (state.lastName === "") {
      setErrors("please enter last name");
    } else if (state.typeId === undefined) {
      setErrors("please select type");
    } else if (state.zipCode === "") {
      setErrors("please enter zipcode");
    } else if (state.website === "") {
      setErrors("please enter website");
    } else if (state.genreId === undefined) {
      setErrors("please select genre");
    } else if (state.label === "") {
      setErrors("please select label");
    } else if (state.image === undefined) {
      setErrors("please choose profile picture");
    } else {
      setErrors(undefined);
      dispatch(doStep5(state));
    }
  };

  const selectPhotoTapped = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };
        setState((prev) => ({
          ...prev,
          avatarSource: source,
          image: response.data,
        }));
      }
    });
  };

  const openTypesPicker = () => {
    Keyboard.dismiss();
    ActionSheet.show(
      {
        options: types.map((t) => t.type),
        cancelButtonIndex: 0,
        destructiveButtonIndex: 0,
        title: "Select type",
      },
      (i) => {
        setState((p) => ({ ...p, typeId: types[i].id }));
      }
    );
  };

  const openGenresPicker = () => {
    Keyboard.dismiss();
    ActionSheet.show(
      {
        options: genres.map((t) => t.genre),
        cancelButtonIndex: 0,
        destructiveButtonIndex: 0,
        title: "Select genre",
      },
      (i) => {
        setState((p) => ({ ...p, genreId: genres[i].id }));
      }
    );
  };

  useEffect(() => {
    fetchDropdowns();
  }, [fetchDropdowns]);

  const type = useMemo(() => {
    if (!state.typeId) {
      return "Type";
    }
    return types.find((i) => i.id === state.typeId).type;
  }, [state.typeId, types]);

  const genre = useMemo(() => {
    if (!state.genreId) {
      return "Genre";
    }
    return genres.find((i) => i.id === state.genreId).genre;
  }, [state.genreId, genres]);

  return (
    <Container>
      {fetching && <Loader />}
      <Header />
      <Content
        keyboardShouldPersistTaps="handled"
        style={{ backgroundColor: "black" }}
      >
        <Grid>
          <Row>
            <Separator />
          </Row>

          <Row
            style={{
              paddingTop: 20,
              paddingBottom: 5,
              paddingHorizontal: 20,
            }}
          >
            <Input
              placeholder="First Name"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={state.first_name}
              onChangeText={(text) =>
                setState((prev) => ({ ...prev, firstName: text }))
              }
            />
          </Row>

          <Row style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
            <Input
              placeholder="Last Name"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={state.last_name}
              onChangeText={(text) =>
                setState((prev) => ({ ...prev, lastName: text }))
              }
            />
          </Row>

          <Row style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
            <Root>
              <TouchableOpacity
                onPress={() => openTypesPicker()}
                style={[
                  GlobalStyles.containerStyleFieldView,
                  {
                    color: "white",
                    paddingHorizontal: wp(5.5),
                    width: "100%",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={{ color: "white" }}>{type}</Text>
              </TouchableOpacity>
            </Root>
          </Row>

          <Row style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
            <Input
              placeholder="Zip Code"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={state.zip_code}
              onChangeText={(text) =>
                setState((prev) => ({ ...prev, zipCode: text }))
              }
            />
          </Row>

          <Row style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
            <Input
              placeholder="website url"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={state.phone}
              onChangeText={(text) =>
                setState((prev) => ({ ...prev, website: text }))
              }
            />
          </Row>

          <Row style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
            <Root>
              <TouchableOpacity
                onPress={() => openGenresPicker()}
                style={[
                  GlobalStyles.containerStyleFieldView,
                  {
                    color: "white",
                    paddingHorizontal: wp(5.5),
                    width: "100%",
                    justifyContent: "center",
                  },
                ]}
              >
                <Text style={{ color: "white" }}>{genre}</Text>
              </TouchableOpacity>
            </Root>
          </Row>

          <Row style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
            <Input
              placeholder="Label"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={state.label}
              onChangeText={(text) =>
                setState((prev) => ({ ...prev, label: text }))
              }
            />
          </Row>

          <Row
            style={{
              height: 200,
              paddingTop: 10,
              paddingHorizontal: 30,
              justifyContent: "center",
            }}
          >
            <Text style={styles.infoText}>
              {errors && errors}
              {errors && "\n"}
              {errors && "\n"}
              Please note that your user credentials are confidential and will
              never be seen or shared with anyone but AvenueAR. AvenueAR
              deposits all payments that are owed to you on the first of each
              month.
              {"\n"}
              {"\n"}
              Our CEO and founder, Jay Leopardi, welcomes you to the Ave! Please
              replace his photo with a professional profile picture of you or
              your band.
            </Text>
          </Row>

          <Row style={{ paddingTop: 10, paddingHorizontal: 20 }}>
            <Col size={40}>
              <Avatar
                rounded
                onPress={selectPhotoTapped}
                source={
                  state.image
                    ? { uri: `data:image/jpeg;base64,${state.image}` }
                    : state.avatarSource
                }
                size="medium"
                avatarStyle={{
                  borderWidth: 1,
                  borderColor: "rgb(0, 107, 198)",
                }}
              />
            </Col>
            <Col size={60}>
              <Next onPress={onPress} />
            </Col>
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
  componentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    width: resizeWidth(346),
    height: resizeHeight(47),
    marginTop: 10,
    alignItems: "flex-start",
  },
  firstnamecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(59),
  },
  textfirstnameText: {
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
  namebarcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(37),
  },
  lastnamecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(19),
  },
  textlastnameText: {
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
  namebarcomponentTwoView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(37),
  },
  professionalnamecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(18),
  },
  textpkaText: {
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
  namebarcomponentThreeView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(37),
  },
  zipcodecompoenetView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(18),
  },
  textzipcodeText: {
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
  zipcodebarcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(37),
  },
  ipcomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(19),
  },
  textipText: {
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
  ipbarcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(37),
  },
  genrecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(18),
  },
  textgenreText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    position: "absolute",
    left: 24,
    top: 9,
  },
  genrebarcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(37),
  },
  agecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(19),
  },
  textageText: {
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
  agebarcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(37),
  },
  websitecompoenentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(19),
  },
  textwebsiteaddressText: {
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
  addressbarcomponentView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(346),
    top: 0,
    height: resizeHeight(37),
  },
  infoText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  info2Text: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  profilepicturecompoenntImage: {
    backgroundColor: "transparent",
    resizeMode: "contain",
    alignSelf: "flex-start",
    width: resizeWidth(67),
    height: resizeHeight(68),
    marginLeft: resizeWidth(3),
  },
  nextstepcomponentImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(47),
    bottom: 79,
    height: resizeHeight(47),
  },
});
