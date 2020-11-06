import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class EXEC65 extends React.Component {
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

  render() {
    return (
      <View style={styles.viewView}>
        <View style={styles.headercomponentView}>
          <Image
            source={require("./../../assets/images/group-424.png")}
            style={styles.logoImage}
          />
          <View
            style={{
              flex: 1,
            }}
          />
          <Image
            source={require("./../../assets/images/67.png")}
            style={styles.cancelImage}
          />
        </View>
        <View style={styles.applepaytermscomponentView}>
          <Text style={styles.textnameText}>Apple Pay</Text>
          <View
            pointerEvents="box-none"
            style={{
              height: 20,
              marginLeft: 25,
              marginRight: 22,
              marginTop: 6,
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Text style={styles.textinfo1Text}>
              Please read Apple Pay terms.
            </Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <Image
              source={require("./../../assets/images/group-472.png")}
              style={styles.appleiconImage}
            />
          </View>
          <View style={styles.separatorView} />
          <Text style={styles.texttermsConditionText}>
            Apple Pay Platform{"\n"}
            {"\n"}Web Merchant Terms and Conditions{"\n"}
            {"\n"}Purpose{"\n"}
            {"\n"}These Terms and Conditions set forth the rights and
            obligations of Apple and You as they relate to Your use of the Apple
            Pay Platform to conduct transactions from or through Your Websites.
            These Terms and Conditions may be modified by Apple from time to
            time, and Your continued use of the Apple Pay Web APIs and Apple Pay
            Platform will be deemed acceptance of such updated Terms and
            Conditions.{"\n"}
            {"\n"}1. Accepting these Terms and Conditions; Definitions{"\n"}
            {"\n"}1.1 Acceptance{"\n"}
            {"\n"}In order to use the Apple Pay Web APIs and Apple Pay Platform,
            You must first accept these Terms and Conditions. If You do not or
            cannot accept these Terms and Conditions, You are not permitted to
            use the Apple Pay Web APIs or Apple Pay Platform. Do not download or
            use the Apple Pay Web APIs or Apple Pay Platform in that case. You
            accept and agree to the terms of these Terms and Conditions on Your
            own behalf and/or on behalf of Your company, organization,
            educational institution, or agency, instrumentality, as its
            authorized legal representative, by using, or continuing to use, the
            Apple Pay Web APIs or Apple Pay Platform.{"\n"}
            {"\n"}1.2 Definitions{"\n"}
            {"\n"}Whenever capitalized in these Terms and Conditions:{"\n"}
            {"\n"}“Affiliates” mean any other corporation, partnership, limited
            liability company, joint venture, association, trust, unincorporated
            organization or other business entity that controls, is controlled
            by, or is under common control with an entity, where “control” means
            that the entity possesses, directly or indirectly, the power to
            direct or cause the direction of the management policies of the
            other entity, whether through ownership of voting securities, an
            interest in registered capital, by contract, or otherwise.{"\n"}
            {"\n"}“Apple Marketing Guidelines” means the guidelines set forth at
            http://www.apple.com/legal/trademark/guidelinesfor3rdparties.html
            (or any successor URL), the Apple Pay Identity Guidelines for iOS
            Developers available at
            https://developer.apple.com/apple-pay/Apple-Pay-Identity-Guidelines.pdf
            (or any successor URL), the Apple Pay Merchant Marketing Guide as
            provided to You by Apple, plus any additional marketing and use
            guidelines provided by Apple in writing (including all amendments to
            any of the foregoing as may be furnished from time to time by Apple
            to You).
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewView: {
    backgroundColor: "black",
    flex: 1,
  },
  headercomponentView: {
    backgroundColor: "transparent",
    alignSelf: "center",
    width: 350,
    height: 33,
    marginTop: 60,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  logoImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 194,
    height: 19,
    marginTop: 7,
  },
  cancelImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 33,
    height: 33,
  },
  applepaytermscomponentView: {
    backgroundColor: "transparent",
    height: 859,
    marginLeft: 9,
    marginRight: 9,
    marginTop: 48,
  },
  textnameText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    width: 203,
    marginLeft: 25,
  },
  textinfo1Text: {
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 260,
  },
  appleiconImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 40,
    height: 17,
  },
  separatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 13,
  },
  texttermsConditionText: {
    backgroundColor: "transparent",
    color: "rgb(171, 171, 171)",
    fontFamily: "ProximaNova-Regular",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    alignSelf: "center",
    width: 353,
    marginTop: 25,
  },
});
