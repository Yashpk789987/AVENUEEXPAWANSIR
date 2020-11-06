import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Modal, StyleSheet} from 'react-native';

export default () => {
  return (
    <Modal statusBarTranslucent transparent>
      <View style={styles.modal}>
        <LottieView
          style={{height: 120, width: 120}}
          source={require('../assets/lottie/white-loader.json')}
          autoPlay
          loop
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 5,
  },
});
