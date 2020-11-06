/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NumberFormat from "react-number-format";
import { useNavigation } from "@react-navigation/native";

import SwitchPhoto from "../../components/SwitchPhotoComponent";

import { doLoadSubmissions } from "../../redux/actions/submissions";
import Loader from "../../components/Loader";

function Item({ item }) {
  const navigation = useNavigation();
  const [s, set] = useState(false);
  return (
    <View style={styles.switchcomponentTwoView}>
      <View
        pointerEvents="box-none"
        style={{
          height: 72,
          marginLeft: 34,
          marginRight: 35,
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <SwitchPhoto
          image={{ uri: item.submitterProfile }}
          value={s}
          onValueChange={(state) => {
            if (!s) {
              set(state);
              setTimeout(() => {
                navigation.navigate("ParticularSubmission", {
                  submissionId: item.id,
                });
                setTimeout(() => set(false), 2000);
              }, 1000);
            }
          }}
        />
        <Text style={styles.textTwoText}>{item.submitterType}</Text>
      </View>
      <View style={styles.separatorFourView} />
    </View>
  );
}

export default ({ navigation }) => {
  const [fetched, setFetched] = useState(false);
  const { bottom } = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {
    app: { fetching },
    user: { image, completedListens, totalEarnings },
    submissions: { submissions, totalCount },
  } = useSelector((state) => state);

  const fetchMore = () => {
    dispatch(doLoadSubmissions(4));
  };

  useEffect(() => {
    if (submissions.length === 0 && !fetched) {
      dispatch(doLoadSubmissions(4));
      setFetched(true);
    }
  }, [dispatch, submissions, fetched]);

  return (
    <View style={styles.viewView}>
      {fetching && <Loader />}
      <View style={styles.headercomponentView}>
        <View
          pointerEvents="box-none"
          style={{
            height: 102,
            marginLeft: 15,
            marginRight: 35,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <View
            pointerEvents="box-none"
            style={{
              width: 208,
              height: 90,
              marginTop: 12,
              alignItems: "flex-start",
            }}
          >
            <View style={styles.earningdetailcomponentView}>
              <NumberFormat
                value={completedListens}
                displayType="text"
                thousandSeparator
                renderText={(formattedValue) => (
                  <Text style={styles.completedListens11Text}>
                    {`Completed listens ${formattedValue}`}
                  </Text>
                )}
              />
              <View
                style={{
                  flex: 1,
                }}
              />
              <NumberFormat
                value={totalEarnings}
                displayType="text"
                thousandSeparator
                prefix="$"
                renderText={(formattedValue) => (
                  <Text style={styles.earnings112860Text}>
                    {`Earnings ${formattedValue}`}
                  </Text>
                )}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backbuttonView}
            >
              <Image
                source={require("../../assets/images/chevron-left.png")}
                style={styles.arrowImage}
              />
              <View
                style={{
                  flex: 1,
                }}
              />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
            }}
          />
          <Avatar
            source={
              image
                ? { uri: `${image}` }
                : require("../../assets/images/group-512.png")
            }
            rounded
            size="large"
          />
        </View>
        <View style={styles.separatorView} />
      </View>
      <View style={styles.submissioncomponentView}>
        <View
          pointerEvents="box-none"
          style={{
            height: 32,
            marginLeft: 35,
            marginRight: 35,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.textsubmissionsText}>Submissions</Text>
          <View
            style={{
              flex: 1,
            }}
          />
          <View style={styles.submissioncountView}>
            <Text style={styles.textcountText}>{totalCount}</Text>
          </View>
        </View>
        <View style={styles.separatorTwoView} />
      </View>

      {submissions.length === 0 && !fetching && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "white" }}>No Submissions Found...</Text>
        </View>
      )}

      {submissions.length !== 0 && (
        <ScrollView>
          {submissions.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ScrollView>
      )}

      {totalCount - submissions.length > 0 && (
        <TouchableOpacity
          onPress={fetchMore}
          style={[
            styles.morebuttoncomponentView,
            { marginBottom: Platform.OS === "android" ? bottom + 10 : bottom },
          ]}
        >
          <View style={styles.morebuttonView} />
          <Text style={styles.morecountText}>
            {`${totalCount - submissions.length} more`}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewView: {
    backgroundColor: "black",
    flex: 1,
  },
  headercomponentView: {
    backgroundColor: "transparent",
    height: 111,
    marginTop: 40,
  },
  earningdetailcomponentView: {
    backgroundColor: "transparent",
    width: 188,
    height: 46,
    marginLeft: 20,
    alignItems: "flex-start",
  },
  completedListens11Text: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  earnings112860Text: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 137,
  },
  backbuttonView: {
    backgroundColor: "transparent",
    width: 151,
    height: 38,
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  arrowImage: {
    resizeMode: 'contain',
    backgroundColor: "transparent",
    width: 12,
    height: 12,
    marginLeft: 22,
  },
  backText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 110,
  },
  userpictureImage: {},
  separatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 7,
  },
  submissioncomponentView: {
    backgroundColor: "transparent",
    height: 52,
    marginTop: 16,
  },
  textsubmissionsText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 149,
    marginTop: 2,
  },
  submissioncountView: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 16,
    width: 50,
    height: 32,
    justifyContent: "center",
  },
  textcountText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginLeft: 9,
    marginRight: 8,
  },
  separatorTwoView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 18,
  },
  switchcomponentView: {
    backgroundColor: "transparent",
    height: 112,
    marginTop: 34,
  },
  switchbuttonView: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 112,
    alignItems: "flex-start",
  },
  switchView: {
    backgroundColor: "rgb(87, 87, 87)",
    borderRadius: 36,
    width: 144,
    height: 72,
    marginLeft: 35,
  },
  userpictureTwoImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 75,
    height: 72,
  },
  textText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent",
    width: 149,
    marginTop: 23,
  },
  separatorThreeView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    alignSelf: "stretch",
    height: 2,
  },
  switchcomponentTwoView: {
    backgroundColor: "transparent",
    height: 112,
    marginTop: 34,
  },
  switchbuttonTwoView: {
    backgroundColor: "rgb(87, 87, 87)",
    borderRadius: 36,
    position: "absolute",
    left: 3,
    width: 142,
    top: 0,
    height: 72,
  },
  userpictureThreeImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 71,
    top: 0,
    height: 70,
  },
  textTwoText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    width: 149,
    marginTop: 23,
  },
  separatorFourView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 38,
  },
  switchcomponentThreeView: {
    backgroundColor: "transparent",
    alignSelf: "center",
    width: 344,
    height: 72,
    marginTop: 34,
  },
  switchTwoView: {
    backgroundColor: "rgb(87, 87, 87)",
    borderRadius: 36,
    width: 142,
    height: 72,
  },
  textThreeText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent",
    width: 149,
  },
  userpictureFourImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: null,
    height: 68,
    marginLeft: 37,
    marginRight: 308,
  },
  separatorFiveView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
  },
  switchcomponentFourView: {
    backgroundColor: "transparent",
    height: 112,
    marginBottom: 24,
    justifyContent: "flex-end",
  },
  switchThreeView: {
    backgroundColor: "rgb(87, 87, 87)",
    borderRadius: 36,
    position: "absolute",
    left: 0,
    width: 142,
    bottom: 0,
    height: 72,
  },
  userpictureFiveImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 71,
    bottom: 2,
    height: 68,
  },
  textFourText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    width: 149,
    marginBottom: 21,
  },
  separatorSixView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
  },
  morebuttoncomponentView: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    width: 106,
    height: 32,
    marginLeft: 34,
    marginVertical: 12,
  },
  morebuttonView: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 16,
    position: "absolute",
    left: 0,
    width: 106,
    bottom: 0,
    height: 32,
  },
  morecountText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    position: "absolute",
    left: 17,
    width: 73,
    bottom: 5,
  },
});
