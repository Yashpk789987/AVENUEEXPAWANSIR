import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { resizeHeight, resizeWidth } from "./../helpers";
import Separator from "./SeparatorComponent";

export default class RadioGroupComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioButtons: this.validate(this.props.radioButtons),
    };
  }

  validate(data) {
    let selected = false; // Variable to check if "selected: true" for more than one button.

    data.map((e) => {
      e.color = e.color ? e.color : "#444";
      e.disabled = e.disabled ? e.disabled : false;
      e.label = e.label ? e.label : "You forgot to give label";
      e.description = e.description
        ? e.description
        : "You forgot to give description";
      e.labelColor = e.labelColor ? e.labelColor : "#444";
      e.labelStyles = e.labelStyles ? e.labelStyles : { color: "#444" };
      e.layout = e.layout ? e.layout : "row";
      e.selected = e.selected ? e.selected : false;

      if (e.selected) {
        if (selected) {
          e.selected = false; // Making "selected: false", if "selected: true" is assigned for more than one button.
          console.log('Found "selected: true" for more than one button');
        } else {
          selected = true;
        }
      }

      e.size = e.size ? e.size : 24;
      e.value = e.value ? e.value : e.label;
    });

    return data;
  }

  onPress = (label) => {
    const { radioButtons } = this.state;
    const labelIndex = radioButtons.findIndex((e) => e.label == label);

    radioButtons.map((data) => (data.selected = false));
    radioButtons[labelIndex].selected = true;

    this.setState({ radioButtons }, () =>
      this.props.onPress(this.state.radioButtons)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: this.props.flexDirection }}>
          {this.state.radioButtons.map((data) => (
            <View>
              <RadioButton
                key={data.label}
                data={data}
                onPress={this.onPress}
                labelStyles={this.props.labelStyles}
              />
              <Separator />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

class RadioButton extends Component {
  render() {
    const { data } = this.props;
    const opacity = data.disabled ? 0.2 : 1;

    let layout = { flexDirection: "row" };

    if (data.layout === "column") {
      layout = { alignItems: "center" };
      margin = { marginTop: 10 };
    }

    return (
      <TouchableOpacity
        style={[layout, { opacity, marginVertical: 5 }]}
        onPress={() => {
          data.disabled ? null : this.props.onPress(data.label);
        }}
      >
        <View style={styles.componentView}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          >
            <View>
              <View
                style={[
                  styles.border,
                  {
                    borderColor: data.color,
                    width: data.size,
                    height: data.size,
                    borderRadius: data.size / 2,
                    alignSelf: "flex-start",
                    marginHorizontal: 10,
                  },
                ]}
              >
                {data.selected && (
                  <View
                    style={{
                      backgroundColor: data.color,
                      width: data.size / 2,
                      height: data.size / 2,
                      borderRadius: data.size / 2,
                    }}
                  />
                )}
              </View>
            </View>

            <View>
              <Text style={styles.textoptionText}>{data.label}</Text>
              <View style={{ flex: 1 }} />
              <Text style={styles.textoptiondetailText}>
                {data.description}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  componentView: {
    backgroundColor: "transparent",
    alignSelf: "center",
  },
  border: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textoptionText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  textoptiondetailText: {
    color: "rgb(204, 204, 204)",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  optioncomponentView: {
    backgroundColor: "transparent",
    alignItems: "flex-start",
  },
});
