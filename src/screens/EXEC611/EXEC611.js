/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */

import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Button, Avatar } from 'react-native-elements';
import { Container, Content } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';

import Header from '../../components/HeaderComponent';
import Separator from '../../components/SeparatorComponent';
import { GlobalStyles, resizeHeight, resizeWidth, hp } from '../../helpers';

export default ({ navigation }) => {
  function onLoginPress() {
    navigation.replace('Login');
  }

  return (
    <Container>
      <Header />
      <Content style={{ backgroundColor: '#000000' }}>
        <Grid>
          <Row>
            <Separator />
          </Row>
          <Row
            style={{
              paddingTop: hp(20),
              paddingHorizontal: 30,
              justifyContent: 'center',
            }}
          >
            <Avatar
              rounded
              source={require('../../assets/images/group-512.png')}
              size="large"
            />
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Text style={styles.textinfoText}>
              You password has been updated!
            </Text>
          </Row>
          <Row style={{ paddingTop: hp(5), justifyContent: 'center' }}>
            <Button
              title="Login"
              type="clear"
              onPress={onLoginPress}
              titleStyle={GlobalStyles.titleStyle}
              buttonStyle={GlobalStyles.buttonStyle}
            />
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  viewView: {
    backgroundColor: 'black',
    flex: 1,
  },
  passwordchangedcomponentView: {
    backgroundColor: 'transparent',
    marginTop: 125,
    alignItems: 'center',
  },
  textinfoText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 20,
  },
  loginbuttoncomponentView: {
    alignItems: 'center',
  },
  textloginText: {
    backgroundColor: 'transparent',
    color: 'black',
    fontFamily: 'ProximaNovaA-Light',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    width: resizeWidth(130),
    marginTop: resizeHeight(23),
  },
});
