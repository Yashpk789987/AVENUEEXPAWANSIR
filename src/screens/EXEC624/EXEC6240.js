//
//  EXEC624
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


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
					style={styles.playbuttoncomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: -31,
							right: -34,
							top: 21,
							bottom: -25,
							justifyContent: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 69,
								marginLeft: 31,
								marginRight: 34,
								marginBottom: 23,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/group-529.png")}
								style={styles.artistpictureImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.playbuttoncomponentTwoView}>
								<Image
									source={require("./../../assets/images/path-5.png")}
									style={styles.path28Image}/>
							</View>
						</View>
						<View
							style={styles.separatorTwoView}/>
					</View>
					<Text
						style={styles.textnameText}>Bingx</Text>
				</View>
				<View
					style={styles.artistdetailcomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 18,
							marginLeft: 34,
							marginRight: 64,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.textnameTwoText}>Chanler Hendrickson</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/arrow.png")}
							style={styles.arrowTwoImage}/>
					</View>
					<View
						style={styles.separatorThreeView}/>
				</View>
				<View
					style={styles.playercomponentView}>
					<Text
						style={styles.textsongnameText}>Bingx - Dark Side</Text>
					<View
						style={styles.videoplayercomponentView}>
						<Image
							source={require("./../../assets/images/screen-shot-2020-05-23-at-111903-pm.png")}
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
				<Text
					style={styles.youRatedThisSongText}>YOU RATED THIS SONG 5 STARS</Text>
				<View
					style={styles.playbuttoncomponentFourView}>
					<Image
						source={require("./../../assets/images/icons8-apple-logo.png")}
						style={styles.appieconImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.textshareText}>Share</Text>
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
		resizeMode: "center",
		backgroundColor: "transparent",
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
	separatorView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		alignSelf: "stretch",
		height: 2,
		marginTop: 3,
	},
	playbuttoncomponentView: {
		backgroundColor: "transparent",
		width: 351,
		height: 90,
	},
	artistpictureImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 68,
		height: 68,
	},
	playbuttoncomponentTwoView: {
		backgroundColor: "transparent",
		borderRadius: 33.84,
		borderWidth: 0.29,
		borderColor: "white",
		borderStyle: "solid",
		width: 69,
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
	separatorTwoView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 23,
	},
	textnameText: {
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
		bottom: 18,
	},
	artistdetailcomponentView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 39,
		marginTop: 47,
	},
	textnameTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 144,
	},
	arrowTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9,
		height: 5,
		marginTop: 7,
	},
	separatorThreeView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 19,
	},
	playercomponentView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 331,
		marginTop: 30,
		alignItems: "flex-start",
	},
	textsongnameText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 144,
		marginLeft: 30,
	},
	videoplayercomponentView: {
		backgroundColor: "black",
		alignSelf: "stretch",
		height: 286,
		marginTop: 23,
	},
	thumbnailImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 2,
		width: 389,
		top: 54,
		height: 166,
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
		top: 96,
		height: 82,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	playbuttonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 45,
		marginRight: 15,
	},
	playbuttoncomponentFourView: {
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
	appieconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 13,
		height: 15,
		marginLeft: 77,
	},
	textshareText: {
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
