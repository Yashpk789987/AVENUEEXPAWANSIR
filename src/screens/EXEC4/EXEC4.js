import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { resizeHeight, resizeWidth } from '../../helpers';

import Header from '../../components/HeaderComponent';
import Separator from '../../components/SeparatorComponent';

export default class EXEC4 extends React.Component {
  componentDidMount() {}
  onClosePress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Container>
        <Header close onClosePress={this.onClosePress} />

        <Content style={{ backgroundColor: '#000000' }}>
          <Grid>
            <View style={{ paddingHorizontal: 10 }}>
              <Row>
                <Text style={styles.termsConditionsText}>
                  Terms & Conditions
                </Text>
              </Row>
              <Row>
                <Text style={styles.text2Text}>
                  Please read and accept our terms.
                </Text>
              </Row>
            </View>
            <Row>
              <Separator />
            </Row>
            <Row style={{ paddingHorizontal: 10 }}>
              <Text style={styles.textwelcometoavenuearText}>
                Welcome to AvenueAR!
                {'\n'}
                {'\n'}
                These terms and conditions outline the rules and regulations for
                the use of Company Name's Website, located at Website.com.
                {'\n'}
                {'\n'}
                ​By accessing this website we assume you accept these terms and
                conditions. Do not continue to use Website Name if you do not
                agree to take all of the terms and conditions stated on this
                page.
                {'\n'}
                {'\n'}​ The following terminology applies to these Terms and
                Conditions, Privacy Statement and Disclaimer Notice and all
                Agreements: "Client", "You" and "Your" refers to you, the person
                log on this website and compliant to the Company's terms and
                conditions.
                {'\n'}
                {'\n'}
                “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our
                Company. “Party”, “Parties”, or “Us”, refers to both the Client
                and ourselves. All terms refer to the offer, acceptance and
                consideration of payment necessary to undertake the process of
                our assistance to the Client in the most appropriate manner for
                the express purpose of meeting the Client's needs in respect of
                provision of the Company's stated services, in accordance with
                and subject to, prevailing law of Netherlands.{'\n'}
                {'\n'}
                Any use of the above terminology or other words in the singular,
                plural, capitalization and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
                {'\n'}
                {'\n'}
              </Text>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewView: {
    backgroundColor: 'black',
    flex: 1,
  },
  headercomponentView: {
    backgroundColor: 'transparent',
    width: resizeWidth(350),
    height: resizeHeight(33),
    marginTop: resizeHeight(60),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logoImage: {
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    width: resizeWidth(194),
    height: resizeHeight(19),
    marginTop: resizeHeight(7),
  },
  cancelbuttoncomponentImage: {
    backgroundColor: 'transparent',
    resizeMode: 'center',
    width: resizeWidth(33),
    height: resizeHeight(33),
  },
  termstextcomponentView: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    height: resizeHeight(54),
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  termsConditionsText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  text2Text: {
    color: 'white',
    fontFamily: 'ProximaNovaA-Light',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    marginVertical: 10,
  },
  separatorView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    height: resizeHeight(2),
    marginTop: resizeHeight(13),
  },
  textwelcometoavenuearText: {
    backgroundColor: 'transparent',
    color: 'rgb(171, 171, 171)',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    marginTop: resizeHeight(40),
  },
});
