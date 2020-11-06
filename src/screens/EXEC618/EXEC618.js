//
//  EXEC618
//  AvenueAR Executive
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
import Header from './../../components/HeaderComponent';
import Separator from './../../components/SeparatorComponent';

export default class EXEC618 extends React.Component {

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
	}

	componentDidMount() {

	}

	render() {
		return (
			<Container>
				 {/* Header Start */}
				 <Header  back={true} profileImage={require("./../../assets/images/image-2.png")} />
				 {/* Content Start */}
 				 <Content style={{ backgroundColor: "#000000"}}>
 				 {/* Grid Start */}
 				 <Grid>
					 <Row>
						 <Separator/>
					 </Row>

					 <Row style={{ paddingTop: hp(20), justifyContent: "center"}}>

						 <Image
	 						source={require("./../../assets/images/group-529.png")}
	 						style={styles.artistpictureImage}/>

					 </Row>

					 <Row style={{justifyContent: "center"}}>
						 <Text style={styles.textsongnameText}>Bingx - Dark Side</Text>
					 </Row>

					 <Row style={{justifyContent: "center"}}>
						 <Text style={styles.textratingText}>You rated 5 stars</Text>

					 </Row>

					 <Row style={{justifyContent: "center"}}>
						 <Image
	 						source={require("./../../assets/images/group-273.png")}
	 						style={styles.starsImage}/>

					 </Row>

					 <Row style={{ paddingTop: hp(5), justifyContent: "center" }}>
							 <Button
								 icon={
									 <Image source={require("./../../assets/images/icons8-apple-logo.png")}  style={styles.appleiconImage}/>
								 }
								 title="Share"
								 type="clear"
								 titleStyle={GlobalStyles.titleStyle}
								 buttonStyle={GlobalStyles.buttonStyle}
							 />
					 </Row>


				 </Grid>

				</Content>

		 </Container>
	 );

	}
}

const styles = StyleSheet.create({
	appleiconImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		marginRight:  5
	},
	viewView: {
		backgroundColor: "black",
		flex: 1,
		alignItems: "center",
	},
	headercomponentView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 107,
		marginTop: 40,
	},
	logoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "center",
		width: 346,
		height: 68,
	},
	separatorView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 37,
	},
	artistdetailscomponentView: {
		backgroundColor: "transparent",
		width: 144,
		height: 160,
		marginTop: 180,
		alignItems: "center",
	},
	cancelbuttonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 33,
		height: 33,
	},
	artistpictureImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 68,
		height: 68
	},
	textsongnameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 144,
		marginTop: 15,
	},
	ratingcomponentView: {
		backgroundColor: "transparent",
		width: 179,
		height: 64,
		marginTop: 19,
	},
	textratingText: {
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 23,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 15,
	},
	starsImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		marginTop: 10
	},
	buttoncomponentView: {
		backgroundColor: "white",
		borderRadius: 29.5,
		borderWidth: 1,
		borderColor: "rgb(112, 112, 112)",
		borderStyle: "solid",
		width: 218,
		height: 59,
		marginBottom: 75,
		flexDirection: "row",
		alignItems: "center",
	},
	textshareText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ProximaNova-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginRight: 73,
	},
})
