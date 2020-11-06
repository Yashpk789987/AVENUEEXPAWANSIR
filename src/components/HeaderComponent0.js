import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { resizeHeight, resizeWidth } from "./../helpers";
import Close from "./CloseComponent";

class HeaderComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    var close, back, step, profileImage;

    if (this.props.close) {
      close = (
        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity onPress={this.props.onClosePress}>
            <Close />
          </TouchableOpacity>
        </View>
      );
    }

    if (this.props.back) {
      back = (
        <View
          style={{
            height: 20,
            marginHorizontal: 10,
            marginVertical: 5,
          }}
        >
          <View
            pointerEvents="box-none"
            style={{ flexDirection: "row", alignItems: "flex-end" }}
          >
            <Image
              source={require("./../assets/images/arrow-back.png")}
              style={styles.arrowImage}
            />
            <Text style={styles.backText}>Back</Text>
          </View>
        </View>
      );
    }
    if (this.props.step) {
      step = (
        <View
          style={{
            height: 20,
            marginHorizontal: 10,
            marginVertical: 5,
          }}
        >
          <Text style={styles.textstep1Text}>{this.props.step}</Text>
        </View>
      );
    }

    if (this.props.profileImage) {
      profileImage = (
        <View>
          <Image
            source={this.props.profileImage}
            style={styles.profileimageImage}
          />
        </View>
      );
    }

    return (
      <View style={styles.componentView}>
        <View style={{ height: 60 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                source={require("./../assets/images/group-271.png")}
                style={styles.logoImage}
              />
            </View>
            {profileImage}
            {close}
          </View>
        </View>

        {step}

        {back}
        <View style={styles.seperatorView} />
      </View>
    );
  }
}

HeaderComponent.propTypes = {
  profileImage: PropTypes.node,
};

export default HeaderComponent;

const styles = StyleSheet.create({
  componentView: {
    backgroundColor: "transparent",
  },
  logoImage: {
    resizeMode: "stretch",
    backgroundColor: "transparent",
    marginTop: 10,
  },
  profileimageImage: {
    backgroundColor: "transparent",
    resizeMode: "contain",
    width: resizeWidth(68),
    height: resizeHeight(68),
    marginTop: 5,
  },
  arrowImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    height: resizeHeight(10),
    marginBottom: 7,
  },
  backText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: resizeWidth(110),
    marginLeft: 10,
  },
  seperatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    alignSelf: "stretch",
    height: resizeHeight(2),
    marginTop: resizeHeight(11),
  },
  textstep1Text: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
  },
});
