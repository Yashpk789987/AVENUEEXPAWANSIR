/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { Text, Badge, Avatar } from 'react-native-elements';
// import { Container, Content } from 'native-base';
// import { Col, Row, Grid } from 'react-native-easy-grid';

// import { hp } from '../../helpers';
// import Separator from '../../components/SeparatorComponent';
// import Play from '../../components/PlayComponent';
// import Header from '../../components/HeaderComponent';

// function List(props) {
//   const {data} = props;
//   const listItems = data.map((data, index) => (
//     <Row
//       style={{
//         paddingHorizontal: 10,
//         paddingVertical: 20,
//         borderBottomColor: 'rgba(171, 171, 171, 0.13)',
//         borderBottomWidth: 2,
//       }}
//     >
//       <Col size={40}>
//         <Avatar
//           containerStyle={{ marginTop: hp(1) }}
//           rounded
//           source={data.image}
//           size="medium"
//         />
//       </Col>
//       <Col style={{ justifyContent: 'center' }} size={50}>
//         <Text style={styles.nameText}>{data.name}</Text>
//       </Col>
//       <Col size={20}>
//         <Play onPress={props.onAudioPlayPress} />
//       </Col>
//     </Row>
//   ));

//   return <Grid>{listItems}</Grid>;
// }

// export default class EXEC632 extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     const { params = {} } = navigation.state;
//     return {
//       header: null,
//       headerLeft: null,
//       headerRight: null,
//     };
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       thumbnail: true,
//       data: [
//         {
//           image: require('./../../assets/images/group-529.png'),
//           name: 'Bingx',
//         },
//       ],
//     };
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <Container>
//         <Header profileImage={require('../../assets/images/group-512.png')} />
//         <Content style={{ backgroundColor: '#000000' }}>
//           <Grid>
//             <Row>
//               <Separator />
//             </Row>

//             <Row
//               style={{
//                 paddingVertical: 10,
//                 paddingHorizontal: 20,
//                 paddingTop: hp(20),
//               }}
//             >
//               <Col>
//                 <Text style={styles.text1Text}>Rate this song</Text>
//               </Col>
//               <Col>
//                 <Text style={styles.textsongnameText}>
//                   Lil Pimp - Money Long
//                 </Text>
//               </Col>
//             </Row>
//             <Row>
//               <Separator />
//             </Row>

//             <Row>
//               <List
//                 data={this.state.data}
//                 onAudioPlayPress={this.onAudioPlayPress}
//               />
//             </Row>

//             <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
//               <Text style={styles.textinfoText}>
//                 4 & 5 star ratings will be saved in your dashboard for later
//                 listening.
//               </Text>
//             </Row>

//             <Row>
//               <Separator />
//             </Row>

//             <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
//               <Text style={styles.textinfoTwoText}>
//                 Once you have rated this song AvenueAR will deposit $10 into
//                 your account. {'\n'}Your next payout will be on the 1st.
//               </Text>
//             </Row>

//             <Row
//               style={{
//                 justifyContent: 'center',
//                 paddingVertical: 10,
//                 paddingHorizontal: 20,
//               }}
//             >
//               <Badge
//                 value="1"
//                 containerStyle={{ paddingHorizontal: 10 }}
//                 textStyle={styles.textnumberBlackText}
//                 badgeStyle={styles.ratebutton0View}
//                 status="success"
//               />
//               <Badge
//                 value="2"
//                 containerStyle={{ paddingHorizontal: 10 }}
//                 textStyle={styles.textnumberBlackText}
//                 badgeStyle={styles.ratebutton0View}
//                 status="success"
//               />
//               <Badge
//                 value="3"
//                 containerStyle={{ paddingHorizontal: 10 }}
//                 textStyle={styles.textnumberBlackText}
//                 badgeStyle={styles.ratebutton0View}
//                 status="success"
//               />
//               <Badge
//                 value="4"
//                 containerStyle={{ paddingHorizontal: 10 }}
//                 textStyle={styles.textnumberText}
//                 badgeStyle={styles.ratebutton1View}
//                 status="success"
//               />
//               <Badge
//                 value="5"
//                 containerStyle={{ paddingHorizontal: 10 }}
//                 textStyle={styles.textnumberText}
//                 badgeStyle={styles.ratebutton2View}
//                 status="success"
//               />
//             </Row>
//           </Grid>
//         </Content>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   nameText: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     fontFamily: 'ProximaNovaA-Light',
//     fontSize: 20,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'left',
//   },
//   textinfoText: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     fontFamily: 'ProximaNovaA-Thin',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'left',
//     lineHeight: 20,
//     paddingTop: 2,
//     alignSelf: 'flex-end',
//   },
//   text1Text: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     fontFamily: 'ProximaNovaA-Thin',
//     fontSize: 23,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'left',
//   },
//   textsongnameText: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     fontFamily: 'ProximaNova-Regular',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'left',
//   },
//   viewView: {
//     backgroundColor: 'black',
//     flex: 1,
//     alignItems: 'center',
//   },
//   headercomponentView: {
//     backgroundColor: 'transparent',
//     alignSelf: 'stretch',
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
//   ratesongcomponentView: {
//     backgroundColor: 'transparent',
//     width: 419,
//     height: 54,
//   },
//   text1Text: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     fontFamily: 'ProximaNovaA-Thin',
//     fontSize: 23,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'left',
//     width: 156,
//   },
//   textsongnameText: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     fontFamily: 'ProximaNova-Regular',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'left',
//     width: 174,
//     marginTop: 3,
//   },
//   separatorTwoView: {
//     backgroundColor: 'rgba(171, 171, 171, 0.13)',
//     height: 2,
//     marginTop: 15,
//   },
//   songdetailcomponentView: {
//     backgroundColor: 'transparent',
//     width: 353,
//     height: 69,
//     marginTop: 26,
//   },
//   artistpictureImage: {
//     resizeMode: 'center',
//     backgroundColor: 'transparent',
//     width: 71,
//     height: 68,
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
//   textsongnameTwoText: {
//     color: 'white',
//     fontFamily: 'ProximaNovaA-Thin',
//     fontSize: 20,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'center',
//     backgroundColor: 'transparent',
//     width: 105,
//     marginRight: 151,
//   },
//   separatorThreeView: {
//     backgroundColor: 'rgba(171, 171, 171, 0.13)',
//     alignSelf: 'stretch',
//     height: 2,
//     marginTop: 47,
//   },
//   separatorFourView: {
//     backgroundColor: 'rgba(171, 171, 171, 0.13)',
//     alignSelf: 'stretch',
//     height: 2,
//     marginTop: 29,
//   },
//   textinfoTwoText: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     fontFamily: 'ProximaNova-Regular',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'left',
//   },
//   ratingbuttoncomponentView: {
//     backgroundColor: 'transparent',
//     width: 136,
//     height: 65,
//     marginBottom: 72,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratebutton1View: {
//     backgroundColor: 'rgb(93, 181, 255)',
//     borderRadius: 32.5,
//     width: 55,
//     height: 55,
//     borderWidth: 0,
//   },
//   textnumberText: {
//     color: 'white',
//     fontFamily: 'ProximaNova-Regular',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'center',
//     backgroundColor: 'transparent',
//   },
//   textnumberBlackText: {
//     color: 'black',
//     fontFamily: 'ProximaNova-Regular',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'center',
//     backgroundColor: 'transparent',
//   },
//   ratebutton2View: {
//     backgroundColor: 'rgb(0, 107, 198)',
//     borderRadius: 32.5,
//     width: 55,
//     height: 55,
//     borderWidth: 0,
//   },
//   ratebutton0View: {
//     backgroundColor: 'white',
//     borderRadius: 32.5,
//     width: 55,
//     height: 55,
//     borderWidth: 0,
//   },
//   textnumberTwoText: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     fontFamily: 'ProximaNova-Regular',
//     fontSize: 18,
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     textAlign: 'center',
//     width: 33,
//     marginRight: 16,
//   },
// });

import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, Badge, Avatar } from "react-native-elements";
import { Container, Content, View, Spinner } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import SoundPlayer from "react-native-sound-player";
import ProgressCircle from "react-native-progress-circle";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";

import { hp } from "../../helpers";
import Separator from "../../components/SeparatorComponent";
import Header from "../../components/HeaderComponent";
import Loader from "../../components/Loader";
import table from "../../helpers/table";
import { doRateSubmission } from "../../redux/actions/arinsiders";

let onFinishedLoadingURLSubscription = null;
let timeIntervalAudio = null;

export default ({
  route: {
    params: { id, profile, audioUrl, name },
  },
  navigation,
}) => {
  const dispatch = useDispatch();
  const {
    user: { userId, image },
    app: { fetching },
  } = useSelector((state) => state);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const [form, setForm] = useState({
    executiveId: userId,
    submissionId: id,
    rating: 0,
    points: 0,
    actionType: 0,
  });

  const playAudio = () => {
    try {
      SoundPlayer.play();
      setPlaying(true);
      timeIntervalAudio = setInterval(async () => {
        const info = await SoundPlayer.getInfo();
        setPercentage((info.currentTime / info.duration) * 100);
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

  useEffect(() => {
    try {
      setLoadingAudio(true);
      SoundPlayer.loadUrl(audioUrl);
          onFinishedLoadingURLSubscription = setInterval(async () => {
            const a = await SoundPlayer.getInfo();
           if (a.duration > 0) {
              clearInterval(onFinishedLoadingURLSubscription);
              setTimeout(() => setLoadingAudio(false),4000)
            }
          }, 2000);
    } catch (error) {
      setLoadingAudio(false);
    }

    return () => {
      if (onFinishedLoadingURLSubscription) {
        SoundPlayer.stop();
        onFinishedLoadingURLSubscription = null;
      }
    };
  }, [audioUrl]);

  const setRating = (rating) => {
    if (rating === 5) {
      setForm((p) => ({
        ...p,
        ...table("5_STAR_RATING"),
        rating,
      }));
    } else {
      setForm((p) => ({
        ...p,
        ...table("30_SECOND_LISTEN"),
        rating,
      }));
    }
  };

  useEffect(() => {
    if (form.rating !== 0) {
      dispatch(doRateSubmission(form, navigation));
    }
  }, [form, dispatch, navigation]);

  return (
    <Container>
      {fetching && <Loader />}
      <Header back profileImage={{ uri: `${image}` }} />
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>
          <Row
            style={{
              paddingVertical: 10,
              paddingHorizontal: 8,
              paddingTop: hp(20),
            }}
          >
            <Col>
              <Text style={styles.text1Text}>Rate this song</Text>
            </Col>
            <Col>
              <Text numberOfLines={1} style={styles.textsongnameText}>
                {name}
              </Text>
            </Col>
          </Row>
          <Row>
            <Separator />
          </Row>

          <View
            style={{
              paddingVertical: 20,
              borderBottomColor: "rgba(171, 171, 171, 0.13)",
              borderBottomWidth: 2,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Avatar rounded source={{ uri: `${profile}` }} size="medium" />

            <Text numberOfLines={2} style={styles.nameText}>
              {name}
            </Text>

            {!loadingAudio && (
              <TouchableOpacity
                activeOpacity={1}
                onPress={playing ? pauseAudio : playAudio}
                style={styles.playbuttoncomponentView}
              >
                <ProgressCircle
                  percent={percentage}
                  radius={24}
                  borderWidth={2}
                  color="white"
                  bgColor="black"
                >
                  {!playing && (
                    <Icon
                      name="play-sharp"
                      style={{ color: "white", fontSize: 30, marginLeft: 5 }}
                    />
                  )}
                  {playing && (
                    <Icon
                      name="pause-sharp"
                      style={{ color: "white", fontSize: 30, marginLeft: 2 }}
                    />
                  )}
                </ProgressCircle>
              </TouchableOpacity>
            )}
            {loadingAudio && <Spinner size="large" color="white" />}
          </View>

          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Text style={styles.textinfoText}>
              In order to save this song you must rate a 4 or 5 .
            </Text>
          </Row>

          <Row>
            <Separator />
          </Row>

          <Row style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Text style={styles.textinfoTwoText}>
              Once you have rated this song we will immediatey notify the song
              owner. if they accept your rating you will receive an additional
              $5 .
            </Text>
          </Row>

          <Row>
            <View
              style={{
                marginTop: 30,
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Badge
                onPress={() => setRating(4)}
                value="4"
                textStyle={styles.textnumberText}
                badgeStyle={styles.ratebutton1View}
                status="success"
              />
              <Badge
                onPress={() => setRating(5)}
                value="5"
                textStyle={styles.textnumberText}
                badgeStyle={styles.ratebutton2View}
                status="success"
              />
            </View>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  nameText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: "40%",
  },
  textinfoText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    lineHeight: 20,
    paddingTop: 2,
    alignSelf: "flex-end",
  },
  viewView: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
  },
  headercomponentView: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
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
  ratesongcomponentView: {
    backgroundColor: "transparent",
    width: 419,
    height: 54,
  },
  text1Text: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 156,
  },
  textsongnameText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: 174,
    marginTop: 3,
  },
  separatorTwoView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    height: 2,
    marginTop: 15,
  },
  songdetailcomponentView: {
    backgroundColor: "transparent",
    width: 353,
    height: 69,
    marginTop: 26,
  },
  artistpictureImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 71,
    height: 68,
  },
  playbuttoncomponentView: {
    backgroundColor: "transparent",
    borderRadius: 24,
    borderWidth: 0.29,
    borderColor: "white",
    borderStyle: "solid",
    width: 48,
    height: 48,
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
  textsongnameTwoText: {
    color: "white",
    fontFamily: "ProximaNovaA-Thin",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    width: 105,
    marginRight: 151,
  },
  separatorThreeView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    alignSelf: "stretch",
    height: 2,
    marginTop: 47,
  },
  separatorFourView: {
    backgroundColor: "rgba(171, 171, 171, 0.13)",
    alignSelf: "stretch",
    height: 2,
    marginTop: 29,
  },
  textinfoTwoText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  ratingbuttoncomponentView: {
    backgroundColor: "transparent",
    width: 136,
    height: 65,
    marginBottom: 72,
    flexDirection: "row",
    alignItems: "center",
  },
  ratebutton1View: {
    backgroundColor: "rgb(93, 181, 255)",
    borderRadius: 32.5,
    width: 55,
    height: 55,
    borderWidth: 0,
    marginHorizontal: 12,
  },
  textnumberText: {
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  textnumberBlackText: {
    color: "black",
    fontFamily: "ProximaNova-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  ratebutton2View: {
    backgroundColor: "rgb(0, 107, 198)",
    borderRadius: 32.5,
    width: 55,
    height: 55,
    borderWidth: 0,
  },
  ratebutton0View: {
    backgroundColor: "white",
    borderRadius: 32.5,
    width: 55,
    height: 55,
    borderWidth: 0,
  },
  textnumberTwoText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: 33,
    marginRight: 16,
  },
});
