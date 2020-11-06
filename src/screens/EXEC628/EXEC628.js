//
//  Step12
//  AvenueAR Artist
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, View} from "react-native"
import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from "../../helpers";
import {  Text, Input, Button , Avatar } from 'react-native-elements';
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Thumbnail } from "react-native-thumbnail-video"
import YoutubePlayer from "react-native-yt-player"
import Header from './../../components/HeaderComponent';
import Switch from './../../components/SwitchComponent';
import Separator from './../../components/SeparatorComponent';
import Play from "./../../components/PlayComponent"


function List(props) {
  const data = props.data;

  const listItems = data.map((data, index) =>
		 <Row style={{ paddingHorizontal: 10, paddingVertical: 20, borderBottomColor: "rgba(171, 171, 171, 0.13)", borderBottomWidth: 2}}>
 		  <Col size={40}>
 			<Avatar containerStyle={{ marginTop: hp(1)}} rounded source={data.image} size="medium"/>
 	  	</Col>
 		  <Col style={{	justifyContent:"center" }} size={50}>
 			<Text style={styles.nameText}>{data.name}</Text>
 		  </Col>
			<Col size={20}>
				<Play onPress={props.onAudioPlayPress} />
			</Col>
 		</Row>
  );

	return (
		<Grid>
			 {listItems}
		</Grid>
  );

}


export default class EXEC624 extends React.Component {

	static navigationOptions = ({ navigation }) => {

		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
		this.state = { thumbnail: true }
		this.onLoginPress = this.onLoginPress.bind(this)
		this.onPlayVideoPress  = this.onPlayVideoPress.bind(this)
		this.onAudioPlayPress = this.onAudioPlayPress.bind(this)

		this.state = {
		 thumbnail: true,
     data: [
			{
				image: require("./../../assets/images/group-529.png"),
	 			name: "Bingx"
			}
		 ]
		}

	}

	componentDidMount() {

	}

	onLoginPress() {
		alert("hello")
	}

	onPlayVideoPress() {
		this.setState({ thumbnail: false})
	}

	onAudioPlayPress() {
		alert("hello")
	}

	onFullScreen = fullScreen => {
    console.log("fullscreen ", fullScreen);
  }

	render() {

		var videoContainer;

		if(this.state.thumbnail) {
			videoContainer =  (
				<Thumbnail url="https://www.youtube.com/watch?v=H1HdZFgR-aA"  onPress={this.onPlayVideoPress}/>
			)
		} else{

			videoContainer =  (
				<YoutubePlayer
					videoId="H1HdZFgR-aA"
					autoPlay
					onFullScreen={this.onFullScreen}
					onStart={() => console.log("onStart")}
					onEnd={() => alert("on End")}
				/>
			)
		}


		return (
			<Container>
				 {/* Header Start */}
				 <Header profileImage={require("./../../assets/images/image-2.png")} />
				 {/* Content Start */}
				 <Content style={{ backgroundColor: "#000000"}}>
				 {/* Grid Start */}
				 <Grid>

					   <Row>
						 <Separator/>
						 </Row>

						 <Row>
							 <List data={this.state.data}  onAudioPlayPress={this.onAudioPlayPress}/>
						 </Row>


						 <Row style={{paddingVertical: 20, paddingHorizontal: 20}}>
							 <Col size={90}>
								 <Text style={styles.textnameText}>Chanler Hendrickson</Text>
							 </Col>
							 <Col size={10}>
								 <Image source={require("./../../assets/images/arrow.png")} style={styles.playTwoImage}/>
							 </Col>
						 </Row>

						 <Row>
						 <Separator/>
						 </Row>

						 <Row style={{paddingVertical: 20, paddingHorizontal: 20}}>
							 <Text style={styles.textnameText}>Bingx - Dark Side</Text>
						 </Row>

						 <Row>
							 { videoContainer }
						 </Row>

						 <Row style={{justifyContent: 'center',paddingVertical: 10}}>
							 <Text	style={styles.youRatedThisSongText}>YOU RATED THIS SONG 5 STARS</Text>
						 </Row>

             <Row style={{justifyContent: 'center', paddingVertical: 20}}>
							 <Button
								 title="Rate to save"
								 type="clear"
								 onPress={this.onLoginPress}
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
		backgroundColor: "transparent"
	},
	textnameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
  appleiconImage: {
    resizeMode: "stretch",
    backgroundColor: "transparent",
    marginRight:  5
  },
	playTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9,
		height: 5,
		marginTop: 7,
	},
	youRatedThisSongText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Bold",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center"
	},
})
