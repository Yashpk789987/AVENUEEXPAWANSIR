//
//  IPhoneXRXSMax1115
//  AvenueAR Artist
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity} from "react-native"
import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from "../../helpers";
import {  Input, Button , Avatar, Badge } from 'react-native-elements';
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Thumbnail } from "react-native-thumbnail-video"
import YoutubePlayer from "react-native-yt-player"
import Header from './../../components/HeaderComponent';
import Separator from './../../components/SeparatorComponent';





export default class EXEC66 extends React.Component {

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
		this.state = { thumbnail: true };
		this.onPress1 = this.onPress1.bind(this)
		this.onPress2 = this.onPress2.bind(this)
		this.onPlayVideoPress  = this.onPlayVideoPress.bind(this)

	}

	componentDidMount() {

	}

	onPress1() {
	   alert(`clicked`)
	}

	onPress2() {
	   alert(`clicked`)
	}

	onPlayVideoPress() {
		this.setState({ thumbnail: false})
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
				 <Header profileImage={require("./../../assets/images/group-512.png")} />

				 {/* Content Start */}
 				 <Content style={{ backgroundColor: "#000000"}}>
 				 {/* Grid Start */}
 				 <Grid>
					 <Row>
						 <Separator/>
					 </Row>

					 <Row style={{ paddingHorizontal: 10, paddingVertical: 20}}>
						 <Text style={styles.textfaqsText}>FAQ’s & How to videos</Text>
					 </Row>

					 <Row>
						 <Separator/>
					 </Row>

					 <Row>
						 { videoContainer }
					 </Row>





				 </Grid>

				</Content>

		 </Container>
	 );


	}
}

const styles = StyleSheet.create({
	categoryText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Light",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 17,
	},
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
		backgroundColor: "transparent",
		textTransform: "uppercase"
	},
	blueText: {
		color: "white",
		fontFamily: "ProximaNova-Bold",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		textTransform: "uppercase",
		color: "rgb(0, 107, 198)",
	},
	textnotificationsText: {
		color: "white",
		fontFamily: "ProximaNovaA-Light",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	musiciconcomponentImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 16,
		paddingTop: 25
	},
	cancelbuttonSevenImage: {
		resizeMode: "contain",
		backgroundColor: "transparent",
		height: 33,
		marginTop: 10
	},
	addbuttoncomponentImage: {
		resizeMode: "contain",
		backgroundColor: "transparent",
		width: 69,
		height: 69
	},
	addbuttoncomponentImage: {
		resizeMode: "contain",
		backgroundColor: "transparent",
		width: 47,
		height: 47,
	},
 textfaqsText: {
	color: "white",
	fontFamily: "ProximaNova-Regular",
	fontSize: 23,
	fontStyle: "normal",
	fontWeight: "normal",
	textAlign: "left",
	backgroundColor: "transparent",
 }
})
