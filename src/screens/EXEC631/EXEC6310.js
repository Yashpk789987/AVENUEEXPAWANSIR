//
//  EXEC631
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC631 extends React.Component {

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
					style={styles.artistdetailscomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: -3,
							right: 0,
							top: 0,
							bottom: -61,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 71,
								marginLeft: 31,
								marginRight: 34,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-586.png")}
								style={styles.artistpictureImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 69,
									height: 69,
									marginTop: 2,
								}}>
								<View
									style={styles.playbuttoncomponentView}>
									<Image
										source={require("./../../assets/images/path-5.png")}
										style={styles.path28Image}/>
								</View>
								<View
									style={styles.playbuttoncomponentTwoView}>
									<Image
										source={require("./../../assets/images/path-5.png")}
										style={styles.path5Image}/>
								</View>
							</View>
						</View>
						<View
							style={styles.separatorTwoView}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								marginLeft: 34,
								marginRight: 64,
								marginBottom: 19,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.textartistnameText}>Dwayne Wright</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/arrow-2.png")}
								style={styles.arrowImage}/>
						</View>
						<View
							style={styles.separatorThreeView}/>
					</View>
					<Text
						style={styles.textsongnameText}>Lil Pimp</Text>
				</View>
				<View
					style={styles.playercomponentView}>
					<Text
						style={styles.textsongnameTwoText}>Lil Pimp - Money Long</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 289,
							marginTop: 20,
						}}>
						<View
							style={styles.videoplayercomponentView}/>
						<Image
							source={require("./../../assets/images/group-587.png")}
							style={styles.thumbnailImage}/>
						<View
							style={styles.playbuttoncomponentThreeView}>
							<Image
								source={require("./../../assets/images/path.png")}
								style={styles.playbuttonImage}/>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.buttoncomponentView}>
					<Text
						style={styles.rateSaveText}>Rate to save</Text>
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
	artistdetailscomponentView: {
		backgroundColor: "transparent",
		height: 96,
		marginTop: 19,
	},
	artistpictureImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 71,
		height: 68,
	},
	playbuttoncomponentView: {
		backgroundColor: "transparent",
		borderRadius: 33.84,
		borderWidth: 0.29,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 69,
		top: 0,
		height: 69,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	path28Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 38,
		marginRight: 13,
	},
	playbuttoncomponentTwoView: {
		backgroundColor: "transparent",
		borderRadius: 33.84,
		borderWidth: 0.29,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 69,
		top: 0,
		height: 69,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	path5Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 38,
		marginRight: 13,
	},
	separatorTwoView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginLeft: 3,
		marginTop: 23,
	},
	textartistnameText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 144,
	},
	arrowImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 9,
		height: 5,
		marginBottom: 6,
	},
	separatorThreeView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
	},
	textsongnameText: {
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 105,
		top: 29,
	},
	playercomponentView: {
		backgroundColor: "transparent",
		height: 289,
		marginTop: 133,
		alignItems: "flex-start",
	},
	textsongnameTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 177,
		marginLeft: 105,
	},
	videoplayercomponentView: {
		backgroundColor: "black",
		position: "absolute",
		left: 75,
		right: 83,
		top: 3,
		height: 286,
	},
	thumbnailImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 289,
	},
	playbuttoncomponentThreeView: {
		backgroundColor: "transparent",
		borderRadius: 40,
		borderWidth: 1,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 82,
		top: 99,
		height: 82,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	playbuttonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 38,
		height: 45,
		marginRight: 15,
	},
	buttoncomponentView: {
		backgroundColor: "rgb(0, 107, 198)",
		borderRadius: 29.5,
		alignSelf: "center",
		width: 218,
		height: 59,
		marginBottom: 75,
		alignItems: "center",
	},
	rateSaveText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 130,
		marginTop: 23,
	},
})
