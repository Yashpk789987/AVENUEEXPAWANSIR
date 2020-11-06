import React, { Component } from "react";
import { TextInput, Text, StyleSheet } from "react-native";
import { resizeHeight, resizeWidth } from "../helpers";

export default class TextInputRoundedComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let textnumberText;
    switch (this.props.style) {
      case "left":
        textnumberText = styles.textnumberTextleft;
        break;
      case "leftFixed":
        textnumberText = styles.textnumberTextleftFixed;
        break;
      default:
        textnumberText = styles.textnumberText;
    }

    return (
      <TextInput
        style={textnumberText}
        onChangeText={this.props.onChangeText}
        secureTextEntry={this.props.secureTextEntry}
        value={this.props.value}
        placeholder={this.props.placeholder}
        autoCapitalize={"none"}
        placeholderTextColor="white"
      />
    );
  }
}

const styles = StyleSheet.create({
  textnumberText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    height: resizeHeight(47),
    marginHorizontal: 20,
  },
  textnumberTextleft: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: resizeHeight(47),
    marginHorizontal: 20,
  },
  textnumberTextleftFixed: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    height: resizeHeight(47),
    width: resizeWidth(346),
    marginHorizontal: 20,
  },
});
