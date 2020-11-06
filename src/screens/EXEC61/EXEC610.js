//
//  EXEC61
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC61 extends React.Component {

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
					pointerEvents="box-none"
					style={{
						alignSelf: "flex-start",
						width: 372,
						height: 127,
						marginTop: 67,
					}}>
					<View
						style={styles.headercomponentView}>
						<Image
							source={require("./../../assets/images/group-424.png")}
							style={styles.logoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							width: 372,
							top: 93,
							height: 34,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.text1Text}>Create your Account & Profile</Text>
						<View
							style={styles.separatorView}/>
					</View>
				</View>
				<Text
					style={styles.text2Text}>Please create your executive user credentials.{"\n"}You must use the same email address that your AvenueAR invitation was sent to. </Text>
				<View
					style={styles.createaccountcomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							width: 346,
							height: 37,
						}}>
						<View
							style={styles.emailboxView}/>
						<Text
							style={styles.textemailText}>Email</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 346,
							height: 37,
							marginTop: 19,
						}}>
						<View
							style={styles.passwordboxView}/>
						<Text
							style={styles.textpasswordText}>Password</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 346,
							height: 37,
							marginTop: 18,
						}}>
						<View
							style={styles.confirmpasswordboxView}/>
						<Text
							style={styles.textconfirmpasswordText}>Confirm Password</Text>
					</View>
				</View>
				<Text
					style={styles.text3Text}>Your password must be at least 8 characters and include a number or special character.{"\n"}</Text>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("./../../assets/images/vector-art.png")}
					style={styles.nextstepbuttonImage}/>
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
		position: "absolute",
		left: 0,
		width: 296,
		top: 0,
		height: 127,
		alignItems: "flex-start",
	},
	logoImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 194,
		height: 19,
		marginLeft: 35,
	},
	text1Text: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 337,
		marginLeft: 35,
	},
	separatorView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		width: 296,
		height: 2,
		marginTop: 8,
	},
	text2Text: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
		width: 346,
		marginTop: 25,
	},
	createaccountcomponentView: {
		backgroundColor: "transparent",
		width: 346,
		height: 148,
		marginTop: 49,
		alignItems: "flex-start",
	},
	emailboxView: {
		backgroundColor: "transparent",
		borderRadius: 18.5,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 346,
		top: 0,
		height: 37,
	},
	textemailText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 24,
		top: 9,
	},
	passwordboxView: {
		backgroundColor: "transparent",
		borderRadius: 18.5,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 346,
		top: 0,
		height: 37,
	},
	textpasswordText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 24,
		top: 9,
	},
	confirmpasswordboxView: {
		backgroundColor: "transparent",
		borderRadius: 18.5,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 346,
		top: 0,
		height: 37,
	},
	textconfirmpasswordText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 24,
		top: 9,
	},
	text3Text: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 327,
		marginLeft: 34,
		marginTop: 22,
	},
	nextstepbuttonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 47,
		height: 47,
		marginBottom: 79,
	},
})
