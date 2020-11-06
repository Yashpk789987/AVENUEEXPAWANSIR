import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="68.003" height="68" viewBox="0 0 68.003 68">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_60" data-name="Rectangle 60" width="68" height="68" fill="none"/>
    </clipPath>
  </defs>
  <g id="video-play" transform="translate(34.001 34)" style="isolation: isolate">
    <g id="Group_261" data-name="Group 261" transform="translate(-34.001 -34)" clip-path="url(#clip-path)">
      <circle id="Ellipse_21" data-name="Ellipse 21" cx="33.84" cy="33.84" r="33.84" transform="translate(0.118 0.176) rotate(-0.1)" fill="none" stroke="#fff" stroke-width="0.294"/>
      <path id="Path_28" data-name="Path 28" d="M80.9,89.193l32.489-19.211L80.9,50.8Z" transform="translate(-57.136 -35.878)" fill="#fff" fill-rule="evenodd"/>
    </g>
  </g>
</svg>
`;

const styles = StyleSheet.create({
  playbuttoncomponentView: {
    resizeMode: "contain",
    backgroundColor: "transparent",
  },
});

export default () => {
  return (
    <TouchableOpacity style={styles.playbuttoncomponentView}>
      <SvgXml xml={xml} />
    </TouchableOpacity>
  );
};
