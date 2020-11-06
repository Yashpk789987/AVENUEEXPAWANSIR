import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { resizeHeight, resizeWidth } from "../helpers";

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.agreeSubscribecomponentView}
      >
        <View style={styles.agreeSubscribebuttonView} />
        <Text style={styles.textText}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  agreeSubscribecomponentView: {
    backgroundColor: "transparent",
    width: resizeWidth(256),
    height: resizeHeight(64),
    marginTop: resizeHeight(13),
  },
  agreeSubscribebuttonView: {
    backgroundColor: "white",
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "rgb(112, 112, 112)",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(256),
    top: 0,
    height: resizeHeight(64),
  },
  textText: {
    color: "black",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    position: "absolute",
    alignSelf: "center",
    width: resizeWidth(130),
    top: resizeHeight(25),
  },
});
