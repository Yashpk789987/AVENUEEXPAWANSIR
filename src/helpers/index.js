import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Dimensions, Platform, PixelRatio, StyleSheet } from "react-native";

export var { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  "window"
);

const height = 896;
const width = 414;
const ratio = PixelRatio.get() * 100;

function resizeHeight(val) {
  return hp((val / height) * 100);
}

function resizeWidth(val) {
  return wp((val / SCREEN_WIDTH) * 100);
}

const GlobalStyles = StyleSheet.create({
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
    paddingHorizontal: wp(10),
  },
  logoComponentImage: {
    backgroundColor: "transparent",
    resizeMode: "stretch",
  },
  titleStyle: {
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    alignSelf: "center",
    color: "black",
  },
  titleBlueStyle: {
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    alignSelf: "center",
    color: "white",
  },
  buttonStyle: {
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
  buttonBlueStyle: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 29.5,
    borderWidth: 1,
    borderColor: "rgb(0, 107, 198)",
    width: resizeWidth(218),
    height: 59,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonRedStyle: {
    backgroundColor: "rgb(252, 0, 0)",
    borderRadius: 29.5,
    borderWidth: 1,
    borderColor: "rgb(252, 0, 0)",
    width: resizeWidth(218),
    height: 59,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  moreButtonStyle: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 29.5,
    borderWidth: 1,
    borderColor: "rgb(0, 107, 198)",
    width: resizeWidth(118),
    height: 39,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  moreTitleStyle: {
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    alignSelf: "center",
    color: "white",
  },
  inviteTitleStyle: {
    color: "white",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  inviteButtonStyle: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgb(0, 107, 198)",
    width: resizeWidth(131),
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  containerStyleFieldView: {
    backgroundColor: "transparent",
    borderRadius: 18.5,
    borderWidth: 1,
    borderColor: "rgba(51, 51, 51, 0.58)",
    borderStyle: "solid",
    height: resizeHeight(47),
    alignItems: "flex-start",
  },
  containerStyleBoderlessFieldView: {
    backgroundColor: "transparent",
    height: resizeHeight(77),
    paddingVertical: 20,
    alignItems: "flex-start",
  },
  inputStyleFieldView: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    color: "white",
  },
});

export { resizeHeight, resizeWidth, hp, wp, GlobalStyles };
