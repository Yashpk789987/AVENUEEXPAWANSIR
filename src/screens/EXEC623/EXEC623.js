/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Badge } from "react-native-elements";
import { Container, Content, Icon, Spinner } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useDispatch, useSelector } from "react-redux";
import ProgressCircle from "react-native-progress-circle";
import Sound from "react-native-sound";
import SoundPlayer from 'react-native-sound-player'

import Loader from "../../components/Loader";
import { doLoadSavedSubmissions } from "../../redux/actions/savedSubmissions";
import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";

import Close from "../../components/CloseComponent";
import { hp } from "../../helpers";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function List({ savedSubmissions }) {
  if (savedSubmissions.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>No Saved Songs Found...</Text>
      </View>
    );
  }
  const listItems = savedSubmissions.map((item) => (
    <Row
      key={`audio-${item.id}`}
      style={{
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: "rgba(171, 171, 171, 0.13)",
        borderBottomWidth: 2,
      }}
    >
      <Item
        submissionId={item.id}
        audioUrl={item.audioUrl}
        submitterProfile={item.submitterProfile}
      />
    </Row>
  ));
  return <Grid>{listItems}</Grid>;
}

function Item({ submitterProfile, audioUrl, submissionId }) {
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
    <>
      <Col
        onPress={() =>
          navigation.navigate("ParticularSavedSubmission", { submissionId })
        }
        size={40}
      >
        <Avatar
          containerStyle={{ marginTop: hp(1) }}
          rounded
          source={{ uri: submitterProfile }}
          size="large"
        />
        <Image
          source={require("../../assets/images/67-2.png")}
          style={styles.addbuttonImage}
        />
      </Col>
      <Col size={50}>
        {!loading && (
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
        )}
        {loading && (
          <Spinner
            style={{ marginLeft: 14, alignSelf: "flex-start" }}
            size="large"
            color="white"
          />
        )}
      </Col>
      <Col size={10}>
        <Close />
      </Col>
    </>
  );
}

export default () => {
  const [fetched, setFetched] = useState(false);
  const { bottom } = useSafeAreaInsets();
  const dispatch = useDispatch();

  const {
    app: { fetching },
    savedSubmissions: { savedSubmissions, totalCount },
    user: { image },
  } = useSelector((state) => state);

  const fetchMore = () => {
    dispatch(doLoadSavedSubmissions(4));
  };

  useEffect(() => {
    if (savedSubmissions.length === 0 && !fetched) {
      dispatch(doLoadSavedSubmissions(4));
      setFetched(true);
    }
  }, [dispatch, savedSubmissions, fetched]);

  return (
    <Container style={{ backgroundColor: "black" }}>
      {fetching && <Loader />}
      <Header back profileImage={{ uri: `${image}` }} />
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>

          <Row
            style={{
              paddingHorizontal: 10,
              paddingVertical: 20,
              alignItems: "center",
            }}
          >
            <Col size={90}>
              <Text style={styles.textnotificationsText}>Favorites</Text>
            </Col>

            <Col size={10}>
              <Badge
                value={totalCount}
                badgeStyle={{
                  backgroundColor: "rgb(0, 107, 198)",
                  width: 25,
                  height: 25,
                  borderWidth: 0,
                  borderRadius: 18.5,
                }}
                status="success"
              />
            </Col>
          </Row>
          <Row>
            <Separator />
          </Row>
          {savedSubmissions.length !== 0 && (
            <List savedSubmissions={savedSubmissions} />
          )}
          {savedSubmissions.length === 0 && !fetching && (
            <View
              style={{
                height: 400,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>
                No Saved Submissions Found...
              </Text>
            </View>
          )}
        </Grid>
      </Content>
      {totalCount - savedSubmissions.length > 0 && (
        <TouchableOpacity
          onPress={fetchMore}
          style={[styles.morebuttoncomponentView, { marginBottom: bottom }]}
        >
          <View style={styles.morebuttonView} />
          <Text style={styles.morecountText}>
            {`${totalCount - savedSubmissions.length} more`}
          </Text>
        </TouchableOpacity>
      )}
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
    textAlign: "left",
  },
  labelText: {
    color: "white",
    fontFamily: "ProximaNova-Bold",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "transparent",
  },
  textnotificationsText: {
    color: "white",
    fontFamily: "ProximaNovaA-Light",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  musiciconcomponentImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 16,
    height: 16,
    paddingTop: 25,
  },
  addbuttonImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    position: "absolute",
    left: 50,
    width: 47,
    top: 15,
    height: 47,
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
