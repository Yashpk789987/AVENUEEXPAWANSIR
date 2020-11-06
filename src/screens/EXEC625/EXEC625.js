import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from '../../helpers';
import { Text, Input, Button, Avatar } from 'react-native-elements';
import { Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Thumbnail } from 'react-native-thumbnail-video';
import YoutubePlayer from 'react-native-yt-player';
import Header from './../../components/HeaderComponent';
import Switch from './../../components/SwitchComponent';
import Separator from './../../components/SeparatorComponent';
import Play from './../../components/PlayComponent';

function List(props) {
  const data = props.data;

  const listItems = data.map((data, index) => (
    <Row
      style={{
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: 'rgba(171, 171, 171, 0.13)',
        borderBottomWidth: 2,
      }}
    >
      <Col size={40}>
        <Avatar
          containerStyle={{ marginTop: hp(1) }}
          rounded
          source={data.image}
          size="medium"
        />
      </Col>
      <Col style={{ justifyContent: 'center' }} size={50}>
        <Text style={styles.nameText}>{data.name}</Text>
      </Col>
      <Col size={20}>
        <Play onPress={props.onAudioPlayPress} />
      </Col>
    </Row>
  ));

  return <Grid>{listItems}</Grid>;
}

export default class EXEC625 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  };

  constructor(props) {
    super(props);
    this.state = { thumbnail: true };
    this.onLoginPress = this.onLoginPress.bind(this);

    this.state = {
      thumbnail: true,
      data: [
        {
          image: require('./../../assets/images/group-529.png'),
          name: 'Bingx',
        },
      ],
    };
  }

  componentDidMount() {}

  onLoginPress() {
    alert('hello');
  }

  render() {
    return (
      <Container>
        <Header profileImage={require('./../../assets/images/group-530.png')} />
        <Content style={{ backgroundColor: '#000000' }}>
          <Grid>
            <Row>
              <Separator />
            </Row>
            <Row>
              <List
                data={this.state.data}
                onAudioPlayPress={this.onAudioPlayPress}
              />
            </Row>
            <Row style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Col size={90}>
                <Text style={styles.textnameText}>Chanler Hendrickson</Text>
              </Col>
              <Col size={10}>
                <Image
                  source={require('../../assets/images/arrow.png')}
                  style={styles.playTwoImage}
                />
              </Col>
            </Row>
            <Row>
              <Separator />
            </Row>
            <Row style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Col size={85}>
                <Text style={styles.textnameText}>bingx425@gmail.com</Text>
              </Col>
              <Col size={15}>
                <TouchableOpacity onPress={this.onLoginPress}>
                  <Image
                    source={require('../../assets/images/67-3.png')}
                    style={styles.addbuttoncomponentImage}
                  />
                </TouchableOpacity>
              </Col>
            </Row>
            <Row>
              <Separator />
            </Row>
            <Row style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Col size={85}>
                <Text style={styles.textnameText}>510.691.4454</Text>
              </Col>
              <Col size={15}>
                <TouchableOpacity onPress={this.onLoginPress}>
                  <Image
                    source={require('../../assets/images/67-3.png')}
                    style={styles.addbuttoncomponentImage}
                  />
                </TouchableOpacity>
              </Col>
            </Row>
            <Row>
              <Separator />
            </Row>
            <Row style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Col size={85}>
                <Text style={styles.textnameText}>Website www.bingx.com</Text>
              </Col>
              <Col size={15}>
                <TouchableOpacity onPress={this.onLoginPress}>
                  <Image
                    source={require('./../../assets/images/67-3.png')}
                    style={styles.addbuttoncomponentImage}
                  />
                </TouchableOpacity>
              </Col>
            </Row>
            <Row style={{ justifyContent: 'center', paddingVertical: 30 }}>
              <Button
                title="Rate"
                type="clear"
                titleStyle={GlobalStyles.titleBlueStyle}
                buttonStyle={GlobalStyles.buttonBlueStyle}
              />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  nameText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'ProximaNovaA-Light',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
  },
  labelText: {
    color: 'white',
    fontFamily: 'ProximaNova-Bold',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
  textnameText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    marginTop: 15,
  },
  playTwoImage: {
    backgroundColor: 'transparent',
    resizeMode: 'center',
    width: 9,
    height: 5,
    marginTop: 7,
  },
  addbuttoncomponentImage: {
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    width: 47,
    height: 47,
  },
});
