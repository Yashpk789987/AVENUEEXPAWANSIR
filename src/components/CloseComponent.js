import React, { Component } from "react";
import { View } from "react-native";

import { SvgXml } from "react-native-svg";

const xml = `
<svg id="_67" data-name="67" xmlns="http://www.w3.org/2000/svg" width="31.888" height="31.888" viewBox="0 0 31.888 31.888">
  <path id="Path_18" data-name="Path 18" d="M15.944,0A15.944,15.944,0,1,0,31.888,15.944,15.944,15.944,0,0,0,15.944,0Zm0,30.891A14.947,14.947,0,1,1,30.891,15.944,14.947,14.947,0,0,1,15.944,30.891Z" fill="#5d5d5d"/>
  <path id="Path_19" data-name="Path 19" d="M154.578,155.259l5.876-5.876a.5.5,0,1,0-.7-.7l-5.876,5.876L148,148.679a.5.5,0,0,0-.7.7l5.876,5.876-5.876,5.876a.5.5,0,1,0,.7.7l5.876-5.876,5.876,5.876a.5.5,0,0,0,.7-.7Z" transform="translate(-137.983 -139.282)" fill="#5d5d5d"/>
</svg>
`;

const CloseComponent = (props) => {
  return (
    <View>
      <SvgXml xml={xml} />
    </View>
  );
};

export default CloseComponent;
