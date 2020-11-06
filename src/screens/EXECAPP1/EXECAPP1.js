/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */

import React, { useEffect, useCallback, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Container, Content } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { useSelector } from 'react-redux';

import { GlobalStyles, hp, wp } from '../../helpers';

export default ({ navigation }) => {
  const { wasSignUpStarted } = useSelector((state) => state.user);
  const [splash, setSplash] = useState(wasSignUpStarted);
  const onAgreeAndSubscribePress = useCallback(() => {
    setTimeout(() => navigation.navigate('SignUp'), 0.00009);
  }, [navigation]);

  function onPrivacyPolicyPress() {
    navigation.navigate('TermsAndConditions');
  }

  function onSignInPress() {
    navigation.navigate('Login');
  }

  useEffect(() => {
    if (wasSignUpStarted) {
      onAgreeAndSubscribePress();
      setTimeout(() => setSplash(false), 1000);
    }
  }, [wasSignUpStarted, onAgreeAndSubscribePress]);

  if (splash) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <Content style={{ backgroundColor: '#000000' }} padder>
        <Grid style={{ alignItems: 'center', paddingTop: hp(30) }}>
          <Row>
            <Image
              source={require('../../assets/images/group-255.png')}
              style={styles.logoComponentImage}
            />
          </Row>
          <Row style={{ paddingTop: hp(2) }}>
            <Text style={styles.text1Text}>
              Music Executive & Celebrity {'\n'}
              accounts.
            </Text>
          </Row>
          <Row style={{ paddingVertical: hp(2) }}>
            <Text style={styles.text2Text}>
              You must be personally invited to join.
            </Text>
          </Row>
          <Row>
            <Button
              title="Agree & Subscribe"
              type="clear"
              titleStyle={GlobalStyles.titleStyle}
              buttonStyle={GlobalStyles.buttonStyle}
              onPress={onAgreeAndSubscribePress}
            />
          </Row>
          <Row style={{ paddingTop: hp(10) }}>
            <Image
              source={require('../../assets/images/group-254.png')}
              style={styles.applepaycomponentImage}
            />
          </Row>
          <Row style={{ width: wp(80) }}>
            <Text style={styles.texttermsText}>
              Please read our
              <Text style={styles.textLink} onPress={onPrivacyPolicyPress}>
                {' '}
                Privacy Policy
              </Text>
              .
              <Text style={styles.textLink} onPress={onAgreeAndSubscribePress}>
                {' '}
                Agree & Subscribe{' '}
              </Text>
              to accept the{' '}
              <Text style={styles.textLink} onPress={onPrivacyPolicyPress}>
                Terms of Service
              </Text>
              .
            </Text>
          </Row>
          <Row style={{ paddingTop: hp(2) }}>
            <Text style={styles.textsignInText} onPress={onSignInPress}>
              Already a member? Sign in
            </Text>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  text1Text: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: 20,
    backgroundColor: 'transparent',
  },
  text2Text: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  applepaycomponentImage: {
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    width: 40,
    height: 17,
    marginBottom: 10,
  },
  texttermsText: {
    backgroundColor: 'transparent',
    color: '#CCCCCC',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  textLink: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  textsignInText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
});
