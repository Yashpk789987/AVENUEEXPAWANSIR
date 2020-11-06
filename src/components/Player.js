/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Spinner, Icon } from "native-base";
import ProgressCircle from "react-native-progress-circle";
import SoundPlayer from "react-native-sound-player";

let onFinishedLoadingURLSubscription = null;
let timeIntervalAudio = null;

export default ({ audioUrl }) => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [percentage, setPercentage] = useState(0);

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
    async function foo() {
      try {
        setLoading(true);
        await SoundPlayer.loadUrl(audioUrl);
        onFinishedLoadingURLSubscription = setInterval(async () => {
          const a = await SoundPlayer.getInfo();
          if (a.duration > 0) {
            clearInterval(onFinishedLoadingURLSubscription);
            setLoading(false);
          }
        }, 2000);
      } catch (error) {
        console.log(error, "error in loading");
        setLoading(false);
      }
    }
    foo();
    return () => {
      if (onFinishedLoadingURLSubscription) {
        SoundPlayer.stop();
        onFinishedLoadingURLSubscription = null;
      }
    };
  }, []);

  return (
    <>
      {!loading && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={playing ? pauseAudio : playAudio}
          style={{ justifyContent: "center", alignItems: "center" }}
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
      {loading && <Spinner size="large" color="white" />}
    </>
  );
};
