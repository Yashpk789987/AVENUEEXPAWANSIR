import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { resizeHeight, resizeWidth } from "../helpers";

export default class LinkComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.textText}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
  },
});
