import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View } from 'react-native';

import { resizeHeight, resizeWidth } from '../helpers';

const styles = StyleSheet.create({
  agreeSubscribecomponentView: {
    backgroundColor: 'transparent',
    width: resizeWidth(256),
    height: resizeHeight(64),
    marginTop: resizeHeight(13),
  },
  agreeSubscribebuttonView: {
    backgroundColor: 'white',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgb(112, 112, 112)',
    borderStyle: 'solid',
    position: 'absolute',
    alignSelf: 'center',
    width: resizeWidth(256),
    top: 0,
    height: resizeHeight(64),
  },
  textText: {
    color: 'black',
    fontFamily: 'ProximaNovaA-Light',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    position: 'absolute',
    alignSelf: 'center',
    width: resizeWidth(130),
    top: 25,
  },
});

const Button = ({ children }) => {
  return (
    <View style={styles.agreeSubscribecomponentView}>
      <View style={styles.agreeSubscribebuttonView} />
      <Text style={styles.textText}>{children}</Text>
    </View>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Button;
