import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { resizeHeight, resizeWidth, wp, hp } from "../helpers";

export default class SeparatorComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <View style={styles.sepratorView} />;
  }
}

const styles = StyleSheet.create({
  sepratorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    width: wp(100),
  },
});
