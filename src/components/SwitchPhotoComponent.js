import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { Switch } from "react-native-switch";

export default class SwitchPhotoComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Switch
        value={this.props.value}
        onValueChange={this.props.onValueChange}
        disabled={false}
        activeText={"On"}
        inActiveText={"Off"}
        circleSize={60}
        barHeight={69}
        circleBorderWidth={0}
        backgroundActive={"#575757"}
        backgroundInactive={"#575757"}
        circleActiveColor={"#006ac6"}
        circleInActiveColor={"#ffffff"}
        changeValueImmediately={false}
        renderInsideCircle={() => (
          <Avatar rounded source={this.props.image} size="large" />
        )}
        innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
        outerCircleStyle={{}} // style for outer animated circle
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
        switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
        switchBorderRadius={50} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
      />
    );
  }
}

const styles = StyleSheet.create({});
