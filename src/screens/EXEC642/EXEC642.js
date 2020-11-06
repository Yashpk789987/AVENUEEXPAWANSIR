//
//  EXEC642
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC642 extends React.Component {

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
	
		return <View
				style={styles.viewView}>
				<View
					style={styles.headercomponentView}>
					<Image
						source={require("./../../assets/images/group-224-4.png")}
						style={styles.logoImage}/>
					<View
						style={styles.separatorView}/>
				</View>
				<View
					style={styles.artistdetailcomponentView}>
					<Image
						source={require("./../../assets/images/67.png")}
						style={styles.cancelbuttonImage}/>
					<Image
						source={require("./../../assets/images/group-586.png")}
						style={styles.artistpictureImage}/>
					<Text
						style={styles.textsongnameText}>Lil Pimp - Money Long</Text>
				</View>
				<View
					style={styles.ratingcomponentView}>
					<Text
						style={styles.textratingText}>You rated 5 stars</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/group-273.png")}
						style={styles.ratingImage}/>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.buttoncomponentView}>
					<Image
						source={require("./../../assets/images/icons8-apple-logo.png")}
						style={styles.applelogoImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.textsharebuttonText}>Share</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
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
		alignItems: "center",
	},
	logoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 346,
		height: 68,
	},
	separatorView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		alignSelf: "stretch",
		height: 2,
		marginTop: 37,
	},
	artistdetailcomponentView: {
		backgroundColor: "transparent",
		width: 194,
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
		width: 71,
		height: 68,
		marginTop: 22,
	},
	textsongnameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 194,
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
		marginRight: 1,
	},
	ratingImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 26,
		marginLeft: 1,
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
	applelogoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 13,
		height: 15,
		marginLeft: 77,
	},
	textsharebuttonText: {
		color: "black",
		fontFamily: "ProximaNova-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginRight: 73,
	},
})
