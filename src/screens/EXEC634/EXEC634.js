//
//  EXEC634
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC634 extends React.Component {

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
							width: 366,
							height: 102,
							marginLeft: 15,
						}}>
						<Image
							source={require("./../../assets/images/group-224-4.png")}
							style={styles.logoImage}/>
						<View
							style={styles.group108View}>
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
						style={styles.lineView}/>
				</View>
				<View
					style={styles.notificationcomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 37,
							marginLeft: 38,
							marginRight: 37,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.textaRinsiderText}>A&R Insider</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 50,
								height: 32,
							}}>
							<View
								style={styles.notificationcountcomponentView}/>
							<Text
								style={styles.textnumberText}>973</Text>
						</View>
					</View>
					<View
						style={styles.separatorView}/>
				</View>
				<View
					style={styles.playsongcomnponentView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							height: 112,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 72,
								marginLeft: 35,
								marginRight: 34,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-529.png")}
								style={styles.artistpictureImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.buttoncomoponentView}>
								<Text
									style={styles.savebuttonText}>Save</Text>
							</View>
						</View>
						<View
							style={styles.separatorTwoView}/>
					</View>
					<View
						style={styles.playbuttoncomponentView}>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.playbuttonImage}/>
					</View>
				</View>
				<View
					style={styles.playsongcomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							height: 111,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 70,
								marginLeft: 35,
								marginRight: 34,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-586.png")}
								style={styles.artistpictureTwoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.buttoncomoponentTwoView}>
								<Text
									style={styles.savedText}>Saved</Text>
							</View>
						</View>
						<View
							style={styles.separatorThreeView}/>
					</View>
					<View
						style={styles.playbuttoncomponentTwoView}>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.playbuttonTwoImage}/>
					</View>
				</View>
				<View
					style={styles.playsongcomponentTwoView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: -16,
							right: -15,
							top: 1,
							height: 110,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 68,
								marginLeft: 35,
								marginRight: 34,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-643.png")}
								style={styles.artistpictureThreeImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.buttoncomoponentThreeView}>
								<Text
									style={styles.savebuttonTwoText}>Save</Text>
							</View>
						</View>
						<View
							style={styles.separatorFourView}/>
					</View>
					<View
						style={styles.playbuttoncomponentThreeView}>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.playbuttonThreeImage}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.playsongcomponentThreeView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: -16,
							right: -15,
							bottom: 1,
							height: 110,
							justifyContent: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 68,
								marginLeft: 35,
								marginRight: 34,
								marginBottom: 40,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/group-610.png")}
								style={styles.artistpictureFourImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.buttoncomponentView}>
								<Text
									style={styles.savebuttonThreeText}>Save</Text>
							</View>
						</View>
						<View
							style={styles.separatorFiveView}/>
					</View>
					<View
						style={styles.playbuttoncomponentFourView}>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.playbuttonFourImage}/>
					</View>
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
		alignItems: "flex-start",
	},
	logoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		alignSelf: "center",
		width: 346,
		top: 0,
		height: 68,
	},
	group108View: {
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
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 110,
	},
	lineView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		alignSelf: "stretch",
		height: 2,
		marginTop: 3,
	},
	notificationcomponentView: {
		backgroundColor: "transparent",
		height: 53,
		marginTop: 26,
	},
	textaRinsiderText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 189,
		marginTop: 13,
	},
	notificationcountcomponentView: {
		backgroundColor: "rgb(0, 107, 198)",
		borderRadius: 16,
		position: "absolute",
		right: 0,
		width: 50,
		top: 0,
		height: 32,
	},
	textnumberText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		right: 8,
		width: 33,
		top: 6,
	},
	separatorView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 20,
	},
	playsongcomnponentView: {
		backgroundColor: "transparent",
		height: 113,
		marginTop: 27,
	},
	artistpictureImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 75,
		height: 72,
	},
	buttoncomoponentView: {
		backgroundColor: "rgb(0, 107, 198)",
		borderRadius: 24,
		width: 103,
		height: 48,
		marginTop: 12,
		justifyContent: "center",
		alignItems: "center",
	},
	savebuttonText: {
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 37,
	},
	separatorTwoView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 38,
	},
	playbuttoncomponentView: {
		backgroundColor: "transparent",
		borderRadius: 33.84,
		borderWidth: 0.29,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 69,
		top: 1,
		height: 69,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	playbuttonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 38,
		marginRight: 13,
	},
	playsongcomponentView: {
		backgroundColor: "transparent",
		height: 116,
		marginTop: 27,
	},
	artistpictureTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 74,
		height: 70,
	},
	buttoncomoponentTwoView: {
		backgroundColor: "rgb(252, 0, 0)",
		borderRadius: 24,
		width: 103,
		height: 48,
		marginTop: 11,
		justifyContent: "center",
		alignItems: "center",
	},
	savedText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		width: 44,
	},
	separatorThreeView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 39,
	},
	playbuttoncomponentTwoView: {
		backgroundColor: "transparent",
		borderRadius: 33.84,
		borderWidth: 0.29,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 69,
		top: 0,
		height: 69,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	playbuttonTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 38,
		marginRight: 13,
	},
	playsongcomponentTwoView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 385,
		height: 111,
		marginRight: 14,
		marginTop: 18,
	},
	artistpictureThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 71,
		height: 68,
	},
	buttoncomoponentThreeView: {
		backgroundColor: "rgb(0, 107, 198)",
		borderRadius: 24,
		width: 103,
		height: 48,
		marginTop: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	savebuttonTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		width: 37,
	},
	separatorFourView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 40,
	},
	playbuttoncomponentThreeView: {
		backgroundColor: "transparent",
		borderRadius: 33.84,
		borderWidth: 0.29,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 69,
		top: 0,
		height: 69,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	playbuttonThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 38,
		marginRight: 13,
	},
	playsongcomponentThreeView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 385,
		height: 112,
		marginRight: 14,
		marginBottom: 113,
	},
	artistpictureFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 71,
		height: 68,
	},
	buttoncomponentView: {
		backgroundColor: "rgb(0, 107, 198)",
		borderRadius: 24,
		width: 103,
		height: 48,
		marginBottom: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	savebuttonThreeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		width: 37,
	},
	separatorFiveView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
	},
	playbuttoncomponentFourView: {
		backgroundColor: "transparent",
		borderRadius: 33.84,
		borderWidth: 0.29,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 69,
		bottom: 43,
		height: 69,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	playbuttonFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 38,
		marginRight: 13,
	},
})
