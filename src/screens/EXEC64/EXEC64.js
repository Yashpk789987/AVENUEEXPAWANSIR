/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import ImagePicker from "react-native-image-picker";
import { Input, Button, Avatar } from "react-native-elements";
import { Container, Content, Root, ActionSheet } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader";
import get from "../../api/get";
import { setLoading } from "../../redux/actions/app";
import { updateProfile } from "../../redux/actions/user";
import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from "../../helpers";
import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    app: { fetching },
    user: {
      userId,
      firstName,
      lastName,
      typeId,
      website,
      zipCode,
      genreId,
      label,
      image,
    },
  } = useSelector((state) => state);

  const [errors, setErrors] = useState(undefined);
  const [types, setTypes] = useState([]);
  const [genres, setGenres] = useState([]);
  const [state, setState] = useState({
    userId,
    firstName,
    lastName,
    typeId,
    zipCode,
    website,
    genreId,
    label,
    avatarSource: `${image}`,
    image: "",
  });

  const fetchDropdowns = useCallback(async () => {
    dispatch(setLoading(true));
    const response = await get("/fetch-data-for-dropdowns");
    if (response) {
      setTypes(response.type);
      setGenres(response.genres);
    }
    dispatch(setLoading(false));
  }, [dispatch]);

  function update() {
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
    } else {
      setErrors(undefined);
      dispatch(updateProfile(state)).then(() => navigation.goBack());
    }
  }

  function selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        setState((prev) => ({
          ...prev,
          avatarSource: response.uri,
          image: response.data,
        }));
      }
    });
  }

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
    if (!state.typeId || types.length === 0) {
      return "Type";
    }
    
    return types.find((i) => i.id === state.typeId).type;
  }, [state.typeId, types]);

  const genre = useMemo(() => {
    if (!state.genreId || genres.length === 0) {
      return "Genre";
    }
    return genres.find((i) => i.id === state.genreId).genre;
  }, [state.genreId, genres]);

  console.log(types,genres)

  return (
    <Container>
      {fetching && <Loader />}
      <Header back profileImage={{ uri: image }} />
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>

          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Col size={3}>
              <Avatar
                rounded
                containerStyle={{ marginHorizontal: 10 }}
                onPress={selectPhotoTapped}
                source={{ uri: state.avatarSource }}
                size="medium"
                avatarStyle={{
                  borderWidth: 1,
                  borderColor: "rgb(0, 107, 198)",
                }}
              />
            </Col>

            <Col size={2}>
              <Text
                style={styles.editpasswordcomponentText}
                onPress={() => navigation.navigate("ChangePassword")}
              >
                Change Password
              </Text>
            </Col>
          </Row>

          <Row style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
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
              value={state.firstName}
              onChangeText={(text) =>
                setState((p) => ({ ...p, firstName: text }))
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
              value={state.lastName}
              onChangeText={(text) =>
                setState((p) => ({ ...p, lastName: text }))
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
              value={state.zipCode}
              onChangeText={(text) =>
                setState((p) => ({ ...p, zipCode: text }))
              }
            />
          </Row>

          <Row style={{ paddingVertical: 5, paddingHorizontal: 20 }}>
            <Input
              placeholder="website"
              containerStyle={GlobalStyles.containerStyleFieldView}
              placeholderTextColor="white"
              inputContainerStyle={{
                color: "white",
                borderBottomWidth: 0,
                paddingHorizontal: wp(2),
              }}
              inputStyle={GlobalStyles.inputStyleFieldView}
              value={state.website}
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
              onChangeText={(text) => setState((p) => ({ ...p, label: text }))}
            />
          </Row>
          <TouchableOpacity onPress={() => navigation.navigate("ContactUs")}>
            <Row
              style={{
                justifyContent: "flex-start",
                paddingHorizontal: 40,
                paddingVertical: 5,
              }}
            >
              <Text style={styles.faqScomponentText}>FAQ’s | </Text>
              <Text style={styles.faqScomponentText}>Contact Support</Text>
              <Col>
                <Image
                  source={require("../../assets/images/group-457.png")}
                  style={styles.labeliconImage}
                />
              </Col>
            </Row>
          </TouchableOpacity>
          <Text style={{ color: "white", textAlign: "center" }}>{errors}</Text>
          <Row style={{ justifyContent: "center", paddingTop: hp(5) }}>
            <Button
              onPress={update}
              title="Save  & Update"
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
  viewView: {
    backgroundColor: "black",
    flex: 1,
  },
  containerView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  paddingView: {
    paddingHorizontal: wp(5),
  },
  componentFieldView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    width: resizeWidth(346),
    height: resizeHeight(47),
    marginVertical: 5,
    alignItems: "flex-start",
  },
  inputContainerStyle: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  seperatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: resizeHeight(2),
    marginTop: resizeHeight(37),
  },
  editprofilepicturecomponentImage: {
    resizeMode: "contain",
    backgroundColor: "transparent",
    width: resizeWidth(38),
    height: resizeHeight(38),
  },
  editpasswordcomponentText: {
    color: "rgb(0, 107, 198)",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginTop: resizeHeight(9),
  },
  editnamecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(26),
  },
  textnameText: {
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
  namebarView: {
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
  editlastnamecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(19),
  },
  textlastnameText: {
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
  lastnamebarView: {
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
  editpkacomponentView: {
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
  pkabarView: {
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
  editnumbercomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(18),
  },
  textnumberText: {
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
  numberbarView: {
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
  editipcomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(19),
  },
  textipText: {
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
  ipbarView: {
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
  editgenrecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(18),
  },
  textgenreText: {
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
  genrebarView: {
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
  editagecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(19),
  },
  text29Text: {
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
  agebarView: {
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
  editemailcomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(346),
    height: resizeHeight(37),
    marginTop: resizeHeight(19),
  },
  textemailText: {
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
  emailbarView: {
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
  faqScomponentText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  contactsupportcomponentText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    position: "absolute",
  },
  buttonTextComponentView: {
    color: "black",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  labeliconImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 127,
    height: 61,
  },
  buttoncomponentView: {
    backgroundColor: "white",
    borderRadius: 29.5,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    width: resizeWidth(218),
    height: 59,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  saveUpdatebuttoncomponentView: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  textsavebuttonText: {
    color: "black",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    width: resizeWidth(130),
    marginTop: resizeHeight(23),
  },
});
