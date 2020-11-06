import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { resizeHeight, resizeWidth } from "./../helpers";

import { SvgXml } from "react-native-svg";

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
  <g id="Vector_Art" data-name="Vector Art" transform="translate(66 -20) rotate(90)">
    <path id="Path_1" data-name="Path 1" d="M43,20A23,23,0,1,0,66,43,23,23,0,0,0,43,20Zm9.989,26.169a1.355,1.355,0,0,1-1.909.139L43,39.322,34.92,46.307a1.354,1.354,0,1,1-1.77-2.048l8.966-7.75a1.355,1.355,0,0,1,1.77,0l8.965,7.75a1.353,1.353,0,0,1,.139,1.909Z" fill="#fff"/>
  </g>
</svg>
`;

const styles = StyleSheet.create({
  nextstepbuttoncomponentImage: {
    resizeMode: "center",
    width: resizeWidth(48),
    height: resizeHeight(60),
  },
});

export default NextComponent = (props) => {
  return (
    <TouchableOpacity
      style={styles.nextstepbuttoncomponentImage}
      onPress={props.onPress}
    >
      <SvgXml xml={xml} />
    </TouchableOpacity>
  );
};
