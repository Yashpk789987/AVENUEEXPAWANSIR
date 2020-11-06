import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class EXEC63 extends React.Component {
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
        <View style={styles.profilecomponentView}>
          <View
            pointerEvents="box-none"
            style={{
              height: 48,
              marginLeft: 32,
              marginRight: 29,
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}
          >
            <Text style={styles.textprofileText}>Profile</Text>
            <Image
              source={require('./../../assets/images/group-512.png')}
              style={styles.userpictureImage}
            />
            <View
              style={{
                flex: 1,
              }}
            />
            <View style={styles.buttoncomponentView}>
              <Text style={styles.invitebuttonText}>Invite</Text>
            </View>
          </View>
          <View style={styles.separatorTwoView} />
        </View>
        <View style={styles.submissioncomponentView}>
          <View
            pointerEvents="box-none"
            style={{
              height: 32,
              marginLeft: 32,
              marginRight: 34,
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}
          >
            <Text style={styles.textsubmissionsText}>Submissions</Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <View style={styles.countcomponentView}>
              <Text style={styles.textcountText}>788</Text>
            </View>
          </View>
          <View style={styles.separatorThreeView} />
        </View>
        <View style={styles.notificationcomponentView}>
          <View
            pointerEvents="box-none"
            style={{
              height: 37,
              marginLeft: 30,
              marginRight: 36,
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}
          >
            <Text style={styles.textnotificationsText}>N</Text>
            <View
              style={{
                flex: 1,
              }}
            />
            <View style={styles.countcomponentTwoView}>
              <Image
                source={require('./../../assets/images/group-554.png')}
                style={styles.countbuttonImage}
              />
              <Text style={styles.textcountTwoText}>3</Text>
            </View>
          </View>
          <View style={styles.separatorFourView} />
        </View>
        <View style={styles.savedsongsArtistscomponentView}>
          <Text style={styles.textText}>Saved Songs & Artists</Text>
          <View style={styles.separatorFiveView} />
        </View>
        <View style={styles.aRinsidercomponentView}>
          <Text style={styles.textTwoText}>A&R Insider</Text>
          <View style={styles.separatorSixView} />
        </View>
        <View style={styles.paymentscomponentView}>
          <Text style={styles.textThreeText}>Payments</Text>
          <View style={styles.separatorSevenView} />
        </View>
        <View
          style={{
            flex: 1,
          }}
        />
        <Text style={styles.textinfoText}>
          You are signed in as mcaren@umusic.com
        </Text>
        <View style={styles.buttoncomponentTwoView}>
          <Text style={styles.submissionsText}>Submissions</Text>
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
    resizeMode: 'cover',
    backgroundColor: 'transparent',
    width: 346,
    height: 68,
  },
  separatorView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    alignSelf: 'stretch',
    height: 2,
    marginTop: 37,
  },
  profilecomponentView: {
    backgroundColor: 'transparent',
    height: 69,
    marginTop: 20,
  },
  textprofileText: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: 66,
    marginTop: 12,
  },
  userpictureImage: {
    resizeMode: 'stretch',
    backgroundColor: 'transparent',
    width: 38,
    height: 38,
    marginLeft: 7,
    marginTop: 5,
  },
  buttoncomponentView: {
    backgroundColor: 'rgb(0, 107, 198)',
    borderRadius: 24,
    width: 131,
    height: 48,
    justifyContent: 'center',
  },
  invitebuttonText: {
    color: 'white',
    fontFamily: 'ProximaNovaA-Thin',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginLeft: 1,
  },
  separatorTwoView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    height: 2,
    marginTop: 19,
  },
  submissioncomponentView: {
    backgroundColor: 'transparent',
    height: 60,
    marginTop: 20,
  },
  textsubmissionsText: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: 128,
    marginTop: 4,
  },
  countcomponentView: {
    backgroundColor: 'rgb(0, 107, 198)',
    borderRadius: 16,
    width: 50,
    height: 32,
    justifyContent: 'center',
  },
  textcountText: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginLeft: 9,
    marginRight: 8,
  },
  separatorThreeView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    height: 2,
    marginTop: 26,
  },
  notificationcomponentView: {
    backgroundColor: 'transparent',
    height: 62,
    marginTop: 24,
  },
  textnotificationsText: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: 128,
    marginTop: 4,
  },
  countcomponentTwoView: {
    backgroundColor: 'transparent',
    width: 37,
    height: 37,
  },
  countbuttonImage: {
    backgroundColor: 'transparent',
    resizeMode: 'center',
    position: 'absolute',
    right: 0,
    width: 37,
    top: 0,
    height: 37,
  },
  textcountTwoText: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 13,
    top: 9,
  },
  separatorFourView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    height: 2,
    marginTop: 23,
  },
  savedsongsArtistscomponentView: {
    backgroundColor: 'transparent',
    height: 58,
    marginTop: 28,
    alignItems: 'center',
  },
  textText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    width: 355,
  },
  separatorFiveView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    alignSelf: 'stretch',
    height: 2,
    marginTop: 28,
  },
  aRinsidercomponentView: {
    backgroundColor: 'transparent',
    height: 58,
    marginTop: 28,
    alignItems: 'flex-start',
  },
  textTwoText: {
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: 224,
    marginLeft: 32,
  },
  separatorSixView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    alignSelf: 'stretch',
    height: 2,
    marginTop: 28,
  },
  paymentscomponentView: {
    backgroundColor: 'transparent',
    height: 58,
    marginTop: 28,
  },
  textThreeText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    fontSize: 23,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    alignSelf: 'flex-start',
    width: 251,
    marginLeft: 32,
  },
  separatorSevenView: {
    backgroundColor: 'rgba(171, 171, 171, 0.13)',
    height: 2,
    marginTop: 28,
  },
  textinfoText: {
    backgroundColor: 'transparent',
    color: 'rgb(129, 129, 129)',
    fontFamily: 'ProximaNovaA-Thin',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    alignSelf: 'flex-start',
    width: 331,
    marginLeft: 30,
    marginBottom: 56,
  },
  buttoncomponentTwoView: {
    backgroundColor: 'white',
    borderRadius: 29.5,
    borderWidth: 1,
    borderColor: 'rgb(112, 112, 112)',
    borderStyle: 'solid',
    alignSelf: 'center',
    width: 218,
    height: 59,
    marginBottom: 75,
    alignItems: 'center',
  },
  submissionsText: {
    color: 'black',
    fontFamily: 'ProximaNovaA-Thin',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: 130,
    marginTop: 23,
  },
});
