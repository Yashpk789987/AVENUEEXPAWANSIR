/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Sound from "react-native-sound";
import SoundPlayer from 'react-native-sound-player';
import ProgressCircle from "react-native-progress-circle";
import { Spinner, Icon } from "native-base";
import { Avatar } from "react-native-elements";

import Header from "../../components/HeaderComponent";
import { doLoadSubmissions } from "../../redux/actions/arinsiders";
import Loader from "../../components/Loader";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Item({ submitterProfile, audioUrl, submissionId, saved }) {
  const navigation = useNavigation();
  const [track, setTrack] = useState();
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);

  
  const play =  async () => {
    try {
      setLoading(true)
      await SoundPlayer.playUrl(audioUrl)
      const interval = setInterval(async () => {
        const i = await SoundPlayer.getInfo()
        if(i.currentTime > 0){
          setLoading(false);
          setPlaying(true);
          clearInterval(interval)
        }
      },1000)
      setPlaying(true);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };

  const pause = () => {
    try {
      SoundPlayer.stop()
      setPlaying(false);
    } catch (error) {
      console.log(`cannot play the sound file`, error);
    }
  };


  // if (!track) {
  //   console.log(audioUrl)
  //   const t = new Sound(audioUrl, null, (e) => {
  //     if (e) {
  //       console.log(audioUrl, e);
  //     } else {
  //       setTrack(t);
  //       setTimeout(() => setLoading(false), 2000);
  //     }
  //   });
  // }

  // const play = () => {
  //   if (track) {
  //     track.play();
  //     setPlaying(true);
  //   } else {
  //     alert("Failed To Load Audio");
  //   }
  // };

  // const pause = () => {
  //   if (track) {
  //     track.pause();
  //     setPlaying(false);
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //     if (track) {
  //       setPlaying(false);
  //       track.pause();
  //       track.release();
  //     }
  //   };
  // }, [track]);

  return (
    <View style={styles.playsongcomnponentView}>
      <View>
        <View
          pointerEvents="box-none"
          style={{
            height: 72,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 12,
          }}
        >
          <Avatar rounded source={{ uri: submitterProfile }} size="large" />
          {!loading && (
            <View style={styles.playbuttoncomponentView}>
              <ProgressCircle
                percent={100}
                radius={35}
                borderWidth={2}
                color="white"
                bgColor="black"
                containerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!playing && (
                  <Icon
                    onPress={play}
                    name="play-sharp"
                    style={{ color: "white", marginLeft: 10, fontSize: 48 }}
                  />
                )}
                {playing && (
                  <Icon
                    onPress={pause}
                    name="pause-sharp"
                    style={{ color: "white", fontSize: 40 }}
                  />
                )}
              </ProgressCircle>
            </View>
          )}
          {loading && (
            <Spinner
              style={{ marginLeft: 14, alignSelf: "flex-start" }}
              size="large"
              color="white"
            />
          )}
          <TouchableOpacity
            onPress={() => {
              if (!saved) {
                navigation.navigate("ParticularARInsider", {
                  submissionId,
                });
              }
            }}
            style={[
              styles.buttoncomoponentView,
              {
                backgroundColor: saved ? "red" : "rgb(0, 107, 198)",
              },
            ]}
          >
            <Text style={styles.savebuttonText}>
              {saved ? "Saved" : "Save"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separatorTwoView} />
      </View>
    </View>
  );
}

export default () => {
  const [fetched, setFetched] = useState(false);
  const { bottom } = useSafeAreaInsets();
  const {
    app: { fetching },
    arinsiders: { submissions, totalSubmissions },
    user: { image },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchMore = () => {
    dispatch(doLoadSubmissions(4));
  };

  useEffect(() => {
    if (submissions.length === 0 && !fetched) {
      dispatch(doLoadSubmissions(4));
      setFetched(true);
    }
  }, [submissions, dispatch, fetched]);

  return (
    <View style={styles.viewView}>
      {fetching && <Loader />}
      <Header back profileImage={{ uri: `${image}` }} />
      <View style={styles.notificationcomponentView}>
        <View
          pointerEvents="box-none"
          style={{
            height: 37,
            paddingHorizontal: 37,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.textaRinsiderText}>A&R Insider</Text>
          <View
            style={{
              flex: 1,
            }}
          />
          <View
            pointerEvents="box-none"
            style={{
              width: 50,
              height: 32,
              alignItems: "center",
            }}
          >
            <View style={styles.notificationcountcomponentView} />
            <Text style={styles.textnumberText}>{totalSubmissions}</Text>
          </View>
        </View>
        <View style={styles.separatorView} />
      </View>
      {submissions.length === 0 && !fetching && (
        <View
          style={{
            height: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>No Songs Found...</Text>
        </View>
      )}
      {submissions.length !== 0 && (
        <ScrollView>
          {submissions.map((item) => (
            <Item
              key={`song-${item.id}`}
              submissionId={item.id}
              audioUrl={item.audioUrl}
              submitterProfile={item.submitterProfile}
              saved={item.saved}
            />
          ))}
        </ScrollView>
      )}
      {totalSubmissions - submissions.length > 0 && (
        <TouchableOpacity
          onPress={fetchMore}
          style={[styles.morebuttoncomponentView, { marginBottom: bottom }]}
        >
          <View style={styles.morebuttonView} />
          <Text style={styles.morecountText}>
            {`${totalSubmissions - submissions.length} more`}
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
    height: 107,
    marginTop: 40,
    alignItems: "flex-start",
  },
  logoImage: {
    backgroundColor: "transparent",
    resizeMode: "cover",
    position: "absolute",
    alignSelf: "center",
    width: 346,
    top: 0,
    height: 68,
  },
  group108View: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    width: 151,
    top: 64,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
  },
  arrowImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 9,
    height: 5,
    marginLeft: 22,
  },
  backText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 110,
  },
  lineView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    alignSelf: "stretch",
    height: 2,
    marginTop: 3,
  },
  notificationcomponentView: {
    backgroundColor: "transparent",
    height: 53,
    marginTop: 26,
  },
  textaRinsiderText: {
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 189,
  },
  notificationcountcomponentView: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 16,
    position: "absolute",
    right: 0,
    width: 50,
    top: 0,
    height: 32,
  },
  textnumberText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    position: "absolute",
    right: 8,
    width: 33,
    top: 6,
  },
  separatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 20,
  },
  playsongcomnponentView: {
    backgroundColor: "transparent",
    height: 113,
    marginTop: 27,
  },
  artistpictureImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 75,
    height: 72,
  },
  buttoncomoponentView: {
    borderRadius: 24,
    width: 103,
    height: 48,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  savebuttonText: {
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent",
  },
  separatorTwoView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 38,
  },
  playbuttoncomponentView: {
    backgroundColor: "transparent",
    borderRadius: 33.84,
    borderWidth: 0.29,
    borderColor: "white",
    borderStyle: "solid",
    width: 69,
    top: 1,
    height: 69,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  playbuttonImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 32,
    height: 38,
    marginRight: 13,
  },
  playsongcomponentView: {
    backgroundColor: "transparent",
    height: 116,
    marginTop: 27,
  },
  artistpictureTwoImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 74,
    height: 70,
  },
  buttoncomoponentTwoView: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 24,
    width: 103,
    height: 48,
    marginTop: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  savebuttonTwoText: {
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent",
    width: 37,
  },
  separatorThreeView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 39,
  },
  playbuttoncomponentTwoView: {
    backgroundColor: "transparent",
    borderRadius: 33.84,
    borderWidth: 0.29,
    borderColor: "white",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: 69,
    top: 0,
    height: 69,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  playbuttonTwoImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 32,
    height: 38,
    marginRight: 13,
  },
  playsongcomponentTwoView: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    width: 385,
    height: 111,
    marginRight: 14,
    marginTop: 18,
  },
  artistpictureThreeImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 71,
    height: 68,
  },
  buttoncomoponentThreeView: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 24,
    width: 103,
    height: 48,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  savebuttonThreeText: {
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent",
    width: 37,
  },
  separatorFourView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 40,
  },
  playbuttoncomponentThreeView: {
    backgroundColor: "transparent",
    borderRadius: 33.84,
    borderWidth: 0.29,
    borderColor: "white",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: 69,
    top: 0,
    height: 69,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  playbuttonThreeImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 32,
    height: 38,
    marginRight: 13,
  },
  playsongcomponentThreeView: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    width: 385,
    height: 112,
    marginRight: 14,
    marginBottom: 113,
  },
  artistpictureFourImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 71,
    height: 68,
  },
  buttoncomoponentFourView: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 24,
    width: 103,
    height: 48,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  savebuttonFourText: {
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent",
    width: 37,
  },
  separatorFiveView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
  },
  playbuttoncomponentFourView: {
    backgroundColor: "transparent",
    borderRadius: 33.84,
    borderWidth: 0.29,
    borderColor: "white",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: 69,
    bottom: 43,
    height: 69,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  playbuttonFourImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 32,
    height: 38,
    marginRight: 13,
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
