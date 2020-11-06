//
//  EXEC628
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC628 extends React.Component {

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
						style={styles.lineView}/>
				</View>
				<View
					style={styles.songcomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: -31,
							right: -155,
							top: -1,
							height: 94,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 69,
								marginLeft: 31,
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
								style={styles.playbuttoncomponentView}>
								<Image
									source={require("./../../assets/images/path-5.png")}
									style={styles.playbuttonImage}/>
							</View>
						</View>
						<View
							style={styles.separatorView}/>
					</View>
					<Text
						style={styles.textnameText}>Bingx</Text>
				</View>
				<View
					style={styles.artistdetailscomponentView}>
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
							style={styles.textartistnameText}>Chanler Hendrickson</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/arrow.png")}
							style={styles.arrowImage}/>
					</View>
					<View
						style={styles.separatorTwoView}/>
				</View>
				<View
					style={styles.videocomponentView}>
					<Text
						style={styles.textsongnameText}>Bingx - Dark Side</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 286,
							marginTop: 23,
						}}>
						<View
							style={styles.videplayercomponentView}>
							<Image
								source={require("./../../assets/images/screen-shot-2020-05-23-at-111903-pm.png")}
								style={styles.thumbnailImage}/>
						</View>
						<View
							style={styles.playbuttoncomponentTwoView}>
							<Image
								source={require("./../../assets/images/path.png")}
								style={styles.playbuttonTwoImage}/>
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
						style={styles.textrateText}>Rate</Text>
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
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 346,
		height: 68,
	},
	lineView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		alignSelf: "stretch",
		height: 2,
		marginTop: 37,
	},
	songcomponentView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 230,
		height: 68,
		marginLeft: 30,
		marginTop: 22,
	},
	artistpictureImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 68,
		height: 68,
		marginTop: 1,
	},
	playbuttoncomponentView: {
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
	playbuttonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 38,
		marginRight: 13,
	},
	separatorView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 23,
	},
	textnameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		alignSelf: "center",
		width: 105,
		top: 26,
	},
	artistdetailscomponentView: {
		backgroundColor: "transparent",
		height: 39,
		marginTop: 47,
	},
	textartistnameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 144,
	},
	arrowImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 9,
		height: 5,
		marginTop: 7,
	},
	separatorTwoView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 19,
	},
	videocomponentView: {
		backgroundColor: "transparent",
		height: 331,
		marginTop: 30,
		alignItems: "flex-start",
	},
	textsongnameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 144,
		marginLeft: 30,
	},
	videplayercomponentView: {
		backgroundColor: "black",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 286,
		alignItems: "flex-start",
	},
	thumbnailImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 389,
		height: 166,
		marginLeft: 2,
		marginTop: 54,
	},
	playbuttoncomponentTwoView: {
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
	playbuttonTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 45,
		marginRight: 15,
	},
	buttoncomponentView: {
		backgroundColor: "rgb(0, 107, 198)",
		opacity: 0.38,
		borderRadius: 29.5,
		alignSelf: "center",
		width: 218,
		height: 59,
		marginBottom: 75,
		alignItems: "center",
	},
	textrateText: {
		color: "white",
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
