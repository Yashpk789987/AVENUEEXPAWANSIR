/* eslint-disable react/prop-types */
// /* eslint-disable import/no-unresolved */

// import React from 'react';
// import { Image, StyleSheet, Text, View } from 'react-native';
// import { useSelector } from 'react-redux';

// import Loader from '../../components/Loader';

// export default () => {

//   const {
//     app: { fetching },
//   } = useSelector((state) => state);

//   return (
//     <View style={styles.viewView}>
//       {fetching && <Loader />}
//       <View style={styles.headercomponentView}>
//         <Image
//           source={require('../../assets/images/group-224-4.png')}
//           style={styles.logoImage}
//         />
//         <View style={styles.separatorView} />
//       </View>
//       <View style={styles.songcomponentView}>
//         <View
//           pointerEvents="box-none"
//           style={{
//             position: 'absolute',
//             left: -31,
//             right: -155,
//             top: -1,
//             height: 94,
//           }}
//         >
//           <View
//             pointerEvents="box-none"
//             style={{
//               height: 69,
//               marginLeft: 31,
//               marginRight: 34,
//               flexDirection: 'row',
//               alignItems: 'flex-start',
//             }}
//           >
//             <Image
//               source={require('../../assets/images/group-529.png')}
//               style={styles.artistpictureImage}
//             />
//             <View
//               style={{
//                 flex: 1,
//               }}
//             />
//             <View style={styles.playbuttoncomponentView}>
//               <Image
//                 source={require('../../assets/images/path-5.png')}
//                 style={styles.playbuttonImage}
//               />
//             </View>
//           </View>
//           <View style={styles.separatorTwoView} />
//         </View>
//         <Text style={styles.textnameText}>Bingx</Text>
//       </View>
//       <View style={styles.artistdetailscomponentView}>
//         <View
//           pointerEvents="box-none"
//           style={{
//             height: 18,
//             marginLeft: 34,
//             marginRight: 64,
//             flexDirection: 'row',
//             alignItems: 'flex-start',
//           }}
//         >
//           <Text style={styles.textartistnameText}>Chanler Hendrickson</Text>
//           <View
//             style={{
//               flex: 1,
//             }}
//           />
//           <Image
//             source={require('../../assets/images/arrow.png')}
//             style={styles.arrowImage}
//           />
//         </View>
//         <View style={styles.separatorThreeView} />
//       </View>
//       <View style={styles.videocomponentView}>
//         <Text style={styles.textsongnameText}>Bingx - Dark Side</Text>
//         <View style={styles.videplayercomponentView}>
//           <Image
//             source={require('../../assets/images/screen-shot-2020-05-23-at-111903-pm.png')}
//             style={styles.videothumbnailImage}
//           />
//           <View style={styles.playbuttoncomponentTwoView}>
//             <Image
//               source={require('../../assets/images/path.png')}
//               style={styles.playbuttonTwoImage}
//             />
//           </View>
//         </View>
//       </View>
//       <View
//         style={{
//           flex: 1,
//         }}
//       />
//       <View style={styles.buttoncomponentView}>
//         <Text style={styles.textrateText}>Rate</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   viewView: {
//     backgroundColor: 'black',
//     flex: 1,
//   },
//   headercomponentView: {
//     backgroundColor: 'transparent',
//     height: 107,
//     marginTop: 40,
//   },
//   logoImage: {
//     resizeMode: 'cover',
//     backgroundColor: 'transparent',
//     alignSelf: 'center',
//     width: 346,
//     height: 68,
//   },
//   separatorView: {
//     backgroundColor: 'rgba(171, 171, 171, 0.13)',
//     height: 2,
//     marginTop: 37,
//   },
//   songcomponentView: {
//     backgroundColor: 'transparent',
//     alignSelf: 'flex-start',
//     width: 230,
//     height: 68,
//     marginLeft: 30,
//     marginTop: 22,
//   },
//   artistpictureImage: {
//     resizeMode: 'center',
//     backgroundColor: 'transparent',
//     width: 68,
//     height: 68,
//     marginTop: 1,
//   },
//   playbuttoncomponentView: {
//     backgroundColor: 'transparent',
//     borderRadius: 33.84,
//     borderWidth: 0.29,
//     borderColor: 'white',
//     borderStyle: 'solid',
//     width: 69,
//     height: 69,
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//   },
//   playbuttonImage: {
//     resizeMode: 'center',
//     backgroundColor: 'transparent',
//     width: 32,
//     height: 38,
//     marginRight: 13,
//   },
//   separatorTwoView: {
//     backgroundColor: 'rgba(171, 171, 171, 0.13)',
//     height: 2,
//     marginTop: 23,
//   },
//   textnameText: {
//     color: 'white',
//     fontFamily: 'ProximaNovaA-Thin',
//     fontSize: 20,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'center',
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     alignSelf: 'center',
//     width: 105,
//     top: 26,
//   },
//   artistdetailscomponentView: {
//     backgroundColor: 'transparent',
//     height: 39,
//     marginTop: 47,
//   },
//   textartistnameText: {
//     color: 'white',
//     fontFamily: 'ProximaNova-Regular',
//     fontSize: 15,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'left',
//     backgroundColor: 'transparent',
//     width: 144,
//   },
//   arrowImage: {
//     backgroundColor: 'transparent',
//     resizeMode: 'center',
//     width: 9,
//     height: 5,
//     marginTop: 7,
//   },
//   separatorThreeView: {
//     backgroundColor: 'rgba(171, 171, 171, 0.13)',
//     height: 2,
//     marginTop: 19,
//   },
//   videocomponentView: {
//     backgroundColor: 'transparent',
//     height: 331,
//     marginTop: 30,
//     alignItems: 'flex-start',
//   },
//   textsongnameText: {
//     color: 'white',
//     fontFamily: 'ProximaNova-Regular',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'left',
//     backgroundColor: 'transparent',
//     width: 144,
//     marginLeft: 30,
//   },
//   videplayercomponentView: {
//     backgroundColor: 'black',
//     alignSelf: 'stretch',
//     height: 286,
//     marginTop: 23,
//   },
//   videothumbnailImage: {
//     resizeMode: 'cover',
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     left: 2,
//     width: 389,
//     top: 54,
//     height: 166,
//   },
//   playbuttoncomponentTwoView: {
//     backgroundColor: 'transparent',
//     borderRadius: 40,
//     borderWidth: 1,
//     borderColor: 'white',
//     borderStyle: 'solid',
//     position: 'absolute',
//     alignSelf: 'center',
//     width: 82,
//     top: 96,
//     height: 82,
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//   },
//   playbuttonTwoImage: {
//     resizeMode: 'center',
//     backgroundColor: 'transparent',
//     width: 38,
//     height: 45,
//     marginRight: 15,
//   },
//   buttoncomponentView: {
//     backgroundColor: 'rgb(0, 107, 198)',
//     opacity: 0.38,
//     borderRadius: 29.5,
//     alignSelf: 'center',
//     width: 218,
//     height: 59,
//     marginBottom: 75,
//     alignItems: 'center',
//   },
//   textrateText: {
//     color: 'white',
//     fontFamily: 'ProximaNovaA-Thin',
//     fontSize: 15,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'center',
//     backgroundColor: 'transparent',
//     width: 130,
//     marginTop: 23,
//   },
// });

/* eslint-disable import/no-unresolved */

import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import YouTube from "react-native-youtube";
import SoundPlayer from "react-native-sound-player";
import { Avatar } from "react-native-elements";
import { Spinner, Icon } from "native-base";
import ProgressCircle from "react-native-progress-circle";

import Header from "../../components/HeaderComponent";
import Loader from "../../components/Loader";
import {
  doLoadSubmissionById,
  doClearSelectedSubmission,
} from "../../redux/actions/arinsiders";

let onFinishedLoadingURLSubscription = null;
let timeIntervalAudio = null;

export default ({
  route: {
    params: { submissionId },
  },
  navigation,
}) => {
  const {
    app: { fetching },
    arinsiders: { submission },
    user: { image },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [timer, setTimer] = useState(30);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    dispatch(doLoadSubmissionById(submissionId));
    return () => {
      dispatch(doClearSelectedSubmission());
      if (timeIntervalAudio) {
        clearInterval(timeIntervalAudio);
      }
    };
  }, [dispatch, submissionId]);

  useEffect(() => {
    async function foo() {
      if (submission) {
        try {
          setLoadingAudio(true);
          console.log(submission.audioUrl)
          await SoundPlayer.loadUrl(submission.audioUrl);
          onFinishedLoadingURLSubscription = setInterval(async () => {
            const a = await SoundPlayer.getInfo();
           if (a.duration > 0) {
              clearInterval(onFinishedLoadingURLSubscription);
              setTimeout(() => setLoadingAudio(false),4000)
            }
          }, 2000);
        } catch (error) {
          console.log(error, "error in loading");
          setLoadingAudio(false);
        }
      }
    }
    foo();
    return () => {
      if (onFinishedLoadingURLSubscription) {
        SoundPlayer.stop();
        onFinishedLoadingURLSubscription = null;
      }
    };
  }, [submission]);

  const playAudio = () => {
    try {
      SoundPlayer.play();
      setPlaying(true);
      timeIntervalAudio = setInterval(async () => {
        const info = await SoundPlayer.getInfo();
        setPercentage((info.currentTime / info.duration) * 100);
        if (timer > 0) {
          setTimer((t) => {
            if (t === 0) {
              return 0;
            }
            return t - 1;
          });
        }
      }, 1000);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };

  const pauseAudio = () => {
    try {
      SoundPlayer.pause();
      setPlaying(false);
      if (timeIntervalAudio) {
        clearInterval(timeIntervalAudio);
      }
    } catch (error) {
      console.log(`cannot play the sound file`, error);
    }
  };

  const handleVideoState = (e) => {
    if (e.state === "playing") {
      if (playing) {
        pauseAudio();
      }
    }
  };

  const rateThis = () => {
    if (playing) {
      pauseAudio();
    }
    navigation.navigate("RateSubmissionARInsider", {
      id: submission.submissionId,
      profile: submission.artist.profile,
      audioUrl: submission.audioUrl,
      name: submission.title,
    });
  };

  return (
    <ScrollView style={styles.viewView}>
      {fetching && <Loader />}
      <Header back profileImage={{ uri: `${image}` }} />
      <View style={styles.songcomponentView}>
        <View
          style={{
            height: 94,
          }}
        >
          <View
            pointerEvents="box-none"
            style={{
              width: "100%",
              height: 70,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Avatar
              source={
                submission
                  ? { uri: submission.artist.profile }
                  : require("../../assets/images/group-529.png")
              }
              rounded
              size="large"
            />
            <Text numberOfLines={2} style={styles.textnameText}>
              {submission ? submission.title : ""}
            </Text>
            {!loadingAudio && (
              <TouchableOpacity
                activeOpacity={1}
                onPress={playing ? pauseAudio : playAudio}
                style={styles.playbuttoncomponentView}
              >
                <ProgressCircle
                  percent={percentage}
                  radius={35}
                  borderWidth={2}
                  color="white"
                  bgColor="black"
                >
                  {!playing && (
                    <Icon
                      name="play-sharp"
                      style={{ color: "white", fontSize: 36 }}
                    />
                  )}
                  {playing && (
                    <Icon
                      name="pause-sharp"
                      style={{ color: "white", fontSize: 40 }}
                    />
                  )}
                </ProgressCircle>
              </TouchableOpacity>
            )}
            {loadingAudio && <Spinner size="large" color="white" />}
          </View>
          <View style={styles.separatorTwoView} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setCollapsed(!collapsed)}
        style={styles.artistdetailscomponentView}
      >
        <View
          pointerEvents="box-none"
          style={{
            height: 18,
            paddingHorizontal: "12%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.textartistnameText}>
            {submission ? submission.artist.name : ""}
          </Text>
          <Image
            source={
              collapsed
                ? require("../../assets/images/arrow-down.png")
                : require("../../assets/images/arrow-up.png")
            }
            style={styles.arrowImage}
          />
        </View>
        <View style={styles.separatorThreeView} />
      </TouchableOpacity>
      {!collapsed && (
        <>
          <View
            style={{
              paddingHorizontal: "12%",
              paddingVertical: 18,
              justifyContent: "center",
              alignItems: "flex-start",
              borderBottomWidth: 2,
              borderBottomColor: "rgba(171, 171, 171, 0.13)",
            }}
          >
            <Text style={[styles.textartistnameText, { width: undefined }]}>
              {submission ? submission.artist.email : ""}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: "12%",
              paddingVertical: 18,
              justifyContent: "center",
              alignItems: "flex-start",
              borderBottomWidth: 2,
              borderBottomColor: "rgba(171, 171, 171, 0.13)",
            }}
          >
            <Text style={[styles.textartistnameText, { width: undefined }]}>
              {submission ? `${submission.artist.mobile}` : ""}
            </Text>
          </View>
          {submission && submission.artist.website !== "" && (
            <View
              style={{
                paddingHorizontal: "12%",
                paddingVertical: 18,
                justifyContent: "center",
                alignItems: "flex-start",
                borderBottomWidth: 2,
                borderBottomColor: "rgba(171, 171, 171, 0.13)",
              }}
            >
              <Text style={[styles.textartistnameText, { width: undefined }]}>
                {submission ? `Website  ${submission.artist.website}` : ""}
              </Text>
            </View>
          )}
        </>
      )}

      <View
        style={[
          styles.videocomponentView,
          {
            opacity: !collapsed ? 0 : 1,
          },
        ]}
      >
        {submission && (
          <YouTube
          origin="http://www.youtube.com"
            apiKey="AIzaSyD54ZtfRSPB7S80fXTMx96wWtHRPH9UL2k"
            videoId={submission.videoUrl.split("=")[1]}
            onChangeState={(e) => handleVideoState(e)}
            onChangeQuality={(e) => console.log("QUALITY", e)}
            onError={(e) => console.log("error", e)}
            style={{ alignSelf: "stretch", height: 300 }}
          />
        )}
      </View>
      {collapsed && (
        <TouchableOpacity
          onPress={rateThis}
          style={[styles.buttoncomponentView]}
        >
          <Text style={styles.textrateText}>Rate To Save</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
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
  },
  logoImage: {
    resizeMode: "cover",
    backgroundColor: "transparent",
    alignSelf: "center",
    width: 346,
    height: 68,
  },
  separatorView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 37,
  },
  songcomponentView: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    width: "100%",
    height: 68,
    marginTop: 22,
  },
  artistpictureImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 68,
    height: 68,
    marginTop: 1,
  },
  playbuttoncomponentView: {
    backgroundColor: "transparent",
    borderRadius: 69 / 2,
    borderWidth: 0.29,
    borderColor: "white",
    borderStyle: "solid",
    width: 69,
    height: 69,
    justifyContent: "center",
    alignItems: "center",
  },
  playbuttonImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 32,
    height: 38,
    marginRight: 13,
  },
  separatorTwoView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 23,
  },
  textnameText: {
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    width: 140,
  },
  artistdetailscomponentView: {
    backgroundColor: "transparent",
    height: 39,
    marginTop: 47,
  },
  textartistnameText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 144,
  },
  arrowImage: {
    backgroundColor: "transparent",
    resizeMode: "contain",
    width: 12,
    height: 12,
    marginTop: 4,
  },
  separatorThreeView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 19,
  },
  videocomponentView: {
    backgroundColor: "transparent",
    height: 300,
    marginTop: 10,
    alignItems: "flex-start",
  },
  textsongnameText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 144,
    marginLeft: 30,
  },
  videplayercomponentView: {
    backgroundColor: "black",
    alignSelf: "stretch",
    height: 286,
    marginTop: 23,
  },
  videothumbnailImage: {
    resizeMode: "cover",
    backgroundColor: "transparent",
    position: "absolute",
    left: 2,
    width: 389,
    top: 54,
    height: 166,
  },
  playbuttoncomponentTwoView: {
    backgroundColor: "transparent",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    position: "absolute",
    alignSelf: "center",
    width: 82,
    top: 96,
    height: 82,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  playbuttonTwoImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 38,
    height: 45,
    marginRight: 15,
  },
  buttoncomponentView: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 29.5,
    alignSelf: "center",
    width: 218,
    height: 60,
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textrateText: {
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    width: 130,
  },
});
