//
//  EXEC644
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC644 extends React.Component {

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
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							width: 366,
							height: 102,
							marginLeft: 15,
						}}>
						<Image
							source={require("./../../assets/images/group-224-4.png")}
							style={styles.logoImage}/>
						<View
							style={styles.backbuttonView}>
							<Image
								source={require("./../../assets/images/arrow.png")}
								style={styles.arrowImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.backText}>Back</Text>
						</View>
					</View>
					<View
						style={styles.separatorView}/>
				</View>
				<View
					style={styles.contactuscomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							width: 346,
							height: 90,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								width: 110,
								top: 0,
								height: 80,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.text1Text}>Contact Us</Text>
							<Text
								style={styles.textnameText}>Name</Text>
						</View>
						<View
							style={styles.namebarcomponentView}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 346,
							height: 37,
							marginTop: 19,
						}}>
						<Text
							style={styles.textemailText}>Email</Text>
						<View
							style={styles.emailbarcomponentView}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 346,
							height: 37,
							marginTop: 18,
						}}>
						<Text
							style={styles.textphoneText}>Phone</Text>
						<View
							style={styles.phonebarcomponentView}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 346,
							height: 265,
							marginTop: 18,
						}}>
						<Text
							style={styles.textmessageText}>Message…</Text>
						<View
							style={styles.messageboxcomponentView}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.buttoncomponentView}>
					<Text
						style={styles.submitbuttonText}>Submit</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "black",
		flex: 1,
		alignItems: "flex-start",
	},
	headercomponentView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 107,
		marginTop: 40,
	},
	logoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 346,
		top: 0,
		height: 68,
	},
	backbuttonView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 151,
		top: 64,
		height: 38,
		flexDirection: "row",
		alignItems: "center",
	},
	arrowImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9,
		height: 5,
		marginLeft: 22,
	},
	backText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 110,
	},
	separatorView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 3,
	},
	contactuscomponentView: {
		backgroundColor: "transparent",
		width: 346,
		height: 484,
		marginLeft: 30,
		marginTop: 32,
		alignItems: "flex-start",
	},
	text1Text: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 23,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 110,
	},
	textnameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 24,
		marginTop: 6,
	},
	namebarcomponentView: {
		backgroundColor: "transparent",
		borderRadius: 18.5,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 346,
		top: 53,
		height: 37,
	},
	textemailText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 24,
		top: 9,
	},
	emailbarcomponentView: {
		backgroundColor: "transparent",
		borderRadius: 18.5,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 346,
		top: 0,
		height: 37,
	},
	textphoneText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 24,
		top: 9,
	},
	phonebarcomponentView: {
		backgroundColor: "transparent",
		borderRadius: 18.5,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 346,
		top: 0,
		height: 37,
	},
	textmessageText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 24,
		top: 12,
	},
	messageboxcomponentView: {
		backgroundColor: "transparent",
		borderRadius: 19,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 346,
		top: 0,
		height: 265,
	},
	buttoncomponentView: {
		backgroundColor: "white",
		borderRadius: 29.5,
		borderWidth: 1,
		borderColor: "rgb(112, 112, 112)",
		borderStyle: "solid",
		alignSelf: "center",
		width: 218,
		height: 59,
		marginBottom: 75,
		alignItems: "center",
	},
	submitbuttonText: {
		color: "black",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 130,
		marginTop: 23,
	},
})
