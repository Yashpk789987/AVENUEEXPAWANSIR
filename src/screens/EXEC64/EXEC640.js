//
//  EXEC64
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC64 extends React.Component {

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
							style={styles.backView}>
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
					style={styles.filldetailscomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 38,
							marginLeft: 1,
							marginTop: 24,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-512.png")}
							style={styles.userpictureImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textchangepasswordText}>Change Password</Text>
					</View>
					<View
						style={styles.namecomponentView}>
						<View
							style={styles.namebarView}/>
						<Text
							style={styles.textnameText}>Mike</Text>
					</View>
					<View
						style={styles.lastnamecomponentView}>
						<View
							style={styles.lastnamebarView}/>
						<Text
							style={styles.textlastnameText}>Caren</Text>
					</View>
					<View
						style={styles.aRexecutivecomponentView}>
						<Text
							style={styles.textaRexecutiveText}>A&R Executive</Text>
						<View
							style={styles.group466View}/>
					</View>
					<View
						style={styles.zipcodecomponentView}>
						<Text
							style={styles.textzipcodeText}>90210</Text>
						<View
							style={styles.zipcodebarView}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.numbercomponentView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Text
								style={styles.textnumberText}>310.555.1212</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.numberbarView}/>
						</View>
					</View>
					<View
						style={styles.genrecomponentView}>
						<View
							style={styles.genrebarView}/>
						<Text
							style={styles.textgenreText}>Pop, Rap, Electronic</Text>
					</View>
					<View
						style={styles.labelcomponentView}>
						<Text
							style={styles.textlabelText}>Universal Music</Text>
						<View
							style={styles.labelbarView}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 61,
						marginLeft: 58,
						marginRight: 34,
						marginTop: 20,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							width: 156,
							height: 18,
							marginTop: 5,
						}}>
						<Text
							style={styles.textfaqSText}>FAQ’s | </Text>
						<Text
							style={styles.textcontactsupportText}>Contact Support</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/group-457.png")}
						style={styles.labeliconImage}/>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.buttoncomponentView}>
					<View
						style={styles.savebuttonView}/>
					<Text
						style={styles.textsavebuttonText}>Save & Update</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "black",
		flex: 1,
	},
	headercomponentView: {
		backgroundColor: "transparent",
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
	backView: {
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
	filldetailscomponentView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 346,
		height: 457,
	},
	userpictureImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 38,
		height: 38,
	},
	textchangepasswordText: {
		backgroundColor: "transparent",
		color: "rgb(0, 107, 198)",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 9,
	},
	namecomponentView: {
		backgroundColor: "transparent",
		height: 37,
		marginTop: 26,
	},
	namebarView: {
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
	textnameText: {
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
	lastnamecomponentView: {
		backgroundColor: "transparent",
		height: 37,
		marginTop: 19,
	},
	lastnamebarView: {
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
	textlastnameText: {
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
	aRexecutivecomponentView: {
		backgroundColor: "transparent",
		height: 37,
		marginTop: 18,
	},
	textaRexecutiveText: {
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
	group466View: {
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
	zipcodecomponentView: {
		backgroundColor: "transparent",
		height: 37,
		marginTop: 18,
	},
	textzipcodeText: {
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
	zipcodebarView: {
		backgroundColor: "transparent",
		borderRadius: 18.5,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 37,
	},
	numbercomponentView: {
		backgroundColor: "transparent",
		height: 37,
		marginBottom: 18,
	},
	textnumberText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 24,
	},
	numberbarView: {
		backgroundColor: "transparent",
		borderRadius: 18.5,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		height: 37,
	},
	genrecomponentView: {
		backgroundColor: "transparent",
		height: 37,
		marginBottom: 19,
	},
	genrebarView: {
		backgroundColor: "transparent",
		borderRadius: 18.5,
		borderWidth: 1,
		borderColor: "rgba(51, 51, 51, 0.58)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 37,
	},
	textgenreText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 24,
		bottom: 10,
	},
	labelcomponentView: {
		backgroundColor: "transparent",
		height: 37,
	},
	textlabelText: {
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
	labelbarView: {
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
	textfaqSText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		top: 0,
	},
	textcontactsupportText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 48,
		top: 0,
	},
	labeliconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 127,
		height: 61,
	},
	buttoncomponentView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 218,
		height: 59,
		marginBottom: 75,
	},
	savebuttonView: {
		backgroundColor: "white",
		borderRadius: 29.5,
		borderWidth: 1,
		borderColor: "rgb(112, 112, 112)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 218,
		bottom: 0,
		height: 59,
	},
	textsavebuttonText: {
		color: "black",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 130,
		top: 23,
	},
})
