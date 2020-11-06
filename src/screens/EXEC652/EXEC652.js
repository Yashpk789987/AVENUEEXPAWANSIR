import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class EXEC652 extends React.Component {
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
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.viewView}>
        <View style={styles.headercomponentView}>
          <Image
            source={require('./../../assets/images/group-224-4.png')}
            style={styles.logoImage}
          />
          <View style={styles.separatorView} />
        </View>
        <View
          pointerEvents="box-none"
          style={{
            height: 140,
            marginTop: 161,
          }}
        >
          <View style={styles.songnamecomponentView}>
            <View
              pointerEvents="box-none"
              style={{
                height: 28,
                marginLeft: 38,
                marginRight: 31,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <Text style={styles.textratethissongText}>Rate this song</Text>
              <View
                style={{
                  flex: 1,
                }}
              />
              <Text style={styles.textsongnameText}>Rebah - Love Is Blind</Text>
            </View>
            <View style={styles.separatorTwoView} />
          </View>
          <View style={styles.playsongcomponentView}>
            <View
              pointerEvents="box-none"
              style={{
                flex: 1,
                marginTop: 68,
                marginBottom: 29,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <Image
                source={require('./../../assets/images/17ebce-7e4d7f711e17405c8a9021cc6217c28e-mv2.png')}
                style={styles.artistpictureImage}
              />
              <View
                style={{
                  flex: 1,
                }}
              />
              <Text style={styles.textnameText}>Rebah</Text>
              <View style={styles.playbuttoncomponentView}>
                <Image
                  source={require('./../../assets/images/path-5.png')}
                  style={styles.playbuttonImage}
                />
              </View>
            </View>
            <View style={styles.separatorThreeView} />
          </View>
        </View>
        <View style={styles.ratingtextcomponentView}>
          <Text style={styles.textText}>
            4 & 5 star ratings will be saved in your dashboard for later
            listening.
          </Text>
          <View style={styles.separatorFourView} />
        </View>
        <Text style={styles.onceYouHaveRatedText}>
          Once you have rated this song AvenueAR will deposit $10 into your
          account. {'\n'}Your next payout will be on the 1st.
        </Text>
        <View
          style={{
            flex: 1,
          }}
        />
        <View style={styles.rattingbuttoncomponentView}>
          <View
            pointerEvents="box-none"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 65,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}
          >
            <View
              pointerEvents="box-none"
              style={{
                width: 65,
                height: 65,
              }}
            >
              <Image
                source={require('./../../assets/images/group-661.png')}
                style={styles.rate1Image}
              />
              <Text style={styles.text1Text}>1</Text>
            </View>
            <View
              pointerEvents="box-none"
              style={{
                width: 65,
                height: 65,
                marginLeft: 6,
              }}
            >
              <View style={styles.rate2View} />
              <Text style={styles.text2Text}>2</Text>
            </View>
            <View
              style={{
                flex: 1,
              }}
            />
            <View
              pointerEvents="box-none"
              style={{
                width: 65,
                height: 65,
                marginRight: 6,
              }}
            >
              <View style={styles.rate4View} />
              <Text style={styles.text4Text}>4</Text>
            </View>
            <View
              pointerEvents="box-none"
              style={{
                width: 65,
                height: 65,
              }}
            >
              <View style={styles.rate5View} />
              <Text style={styles.text5Text}>5</Text>
            </View>
          </View>
          <Image
            source={require('./../../assets/images/group-659.png')}
            style={styles.rate3Image}
          />
          <Text style={styles.text3Text}>3</Text>
        </View>
      </View>
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
    height: 107,
    marginTop: 40,
    alignItems: 'center',
  },
  logoImage: {
    backgroundColor: 'transparent',
    resizeMode: 'cover',
    width: 346,
    height: 68,
  },
  separatorView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    alignSelf: 'stretch',
    height: 2,
    marginTop: 37,
  },
  songnamecomponentView: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 122,
  },
  textratethissongText: {
    color: 'white',
    fontFamily: 'ProximaNovaA-Thin',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: 156,
  },
  textsongnameText: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'right',
    backgroundColor: 'transparent',
    width: 174,
    marginTop: 3,
  },
  separatorTwoView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    height: 2,
    marginTop: 15,
  },
  playsongcomponentView: {
    backgroundColor: 'transparent',
    position: 'absolute',
    alignSelf: 'center',
    width: 353,
    top: 3,
    height: 137,
  },
  artistpictureImage: {
    backgroundColor: 'transparent',
    resizeMode: 'center',
    alignSelf: 'flex-end',
    width: 71,
    height: 68,
  },
  textnameText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'ProximaNovaA-Thin',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    width: 105,
    marginRight: 52,
    marginTop: 27,
  },
  playbuttoncomponentView: {
    backgroundColor: 'transparent',
    borderRadius: 33.84,
    borderWidth: 0.29,
    borderColor: 'white',
    borderStyle: 'solid',
    width: 69,
    height: 69,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  playbuttonImage: {
    resizeMode: 'center',
    backgroundColor: 'transparent',
    width: 32,
    height: 38,
    marginRight: 13,
  },
  separatorThreeView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    height: 2,
    marginTop: 29,
  },
  ratingtextcomponentView: {
    backgroundColor: 'transparent',
    height: 73,
    marginTop: 58,
    alignItems: 'flex-end',
  },
  textText: {
    color: 'white',
    fontFamily: 'ProximaNovaA-Thin',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: 363,
    marginRight: 18,
  },
  separatorFourView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    alignSelf: 'stretch',
    height: 2,
    marginTop: 27,
  },
  onceYouHaveRatedText: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    lineHeight: 20,
    paddingTop: 2,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    width: 363,
    marginRight: 17,
    marginTop: 27,
  },
  rattingbuttoncomponentView: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    width: 350,
    height: 65,
    marginBottom: 72,
  },
  rate1Image: {
    backgroundColor: 'transparent',
    resizeMode: 'center',
    position: 'absolute',
    left: 0,
    width: 65,
    bottom: 0,
    height: 65,
  },
  text1Text: {
    color: 'black',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 15,
    width: 33,
    bottom: 21,
  },
  rate2View: {
    backgroundColor: 'white',
    borderRadius: 32.5,
    position: 'absolute',
    left: 0,
    width: 65,
    bottom: 0,
    height: 65,
  },
  text2Text: {
    backgroundColor: 'transparent',
    color: 'black',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    position: 'absolute',
    left: 17,
    width: 33,
    bottom: 21,
  },
  rate4View: {
    backgroundColor: 'rgb(93, 181, 255)',
    borderRadius: 32.5,
    position: 'absolute',
    right: 0,
    width: 65,
    bottom: 0,
    height: 65,
  },
  text4Text: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    position: 'absolute',
    right: 16,
    width: 33,
    bottom: 21,
  },
  rate5View: {
    backgroundColor: 'rgb(0, 107, 198)',
    borderRadius: 32.5,
    position: 'absolute',
    right: 0,
    width: 65,
    bottom: 0,
    height: 65,
  },
  text5Text: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 16,
    width: 33,
    bottom: 21,
  },
  rate3Image: {
    backgroundColor: 'transparent',
    resizeMode: 'center',
    position: 'absolute',
    alignSelf: 'center',
    width: 64,
    bottom: 0,
    height: 65,
  },
  text3Text: {
    color: 'black',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    alignSelf: 'center',
    width: 33,
    bottom: 21,
  },
});
