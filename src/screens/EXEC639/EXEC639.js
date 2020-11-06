//
//  EXEC639
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC639 extends React.Component {

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
						position: "absolute",
						left: -75,
						right: -83,
						top: 0,
						height: 898,
					}}>
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
							style={styles.group223View}>
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
								<Image
									source={require("./../../assets/images/bingx-blue-3-5.png")}
									style={styles.bingxBlue3Image}/>
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
									style={styles.rectangle38View}/>
							</View>
						</View>
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
							style={styles.group223TwoView}>
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
								<Image
									source={require("./../../assets/images/bingx-blue-3-9.png")}
									style={styles.bingxBlue3TwoImage}/>
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
									style={styles.rectangle38TwoView}/>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 71,
							right: 82,
							top: 40,
							height: 644,
						}}>
						<Image
							source={require("./../../assets/images/group-224-3.png")}
							style={styles.group224Image}/>
						<View
							style={styles.lineThreeView}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 71,
								marginLeft: 31,
								marginRight: 34,
								marginTop: 19,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-588.png")}
								style={styles.group575Image}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group70View}>
								<Image
									source={require("./../../assets/images/path-5.png")}
									style={styles.path5Image}/>
							</View>
						</View>
						<View
							style={styles.lineView}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 18,
								marginLeft: 34,
								marginRight: 64,
								marginTop: 22,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.dwayneWrightText}>Dwayne Wright</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/arrow.png")}
								style={styles.arrowImage}/>
						</View>
						<View
							style={styles.lineTwoView}/>
						<Text
							style={styles.lilPimpMoneyLonText}>Lil Pimp - Money Long</Text>
						<View
							style={styles.group578View}/>
					</View>
					<View
						style={styles.group261View}>
						<Image
							source={require("./../../assets/images/path-5.png")}
							style={styles.path28Image}/>
					</View>
					<View
						style={styles.group574View}>
						<Image
							source={require("./../../assets/images/hello.png")}
							style={styles.helloImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.group163View}>
							<Text
								style={styles.rateText}>Rate</Text>
						</View>
					</View>
					<View
						style={styles.videoPlayView}>
						<Image
							source={require("./../../assets/images/path.png")}
							style={styles.pathImage}/>
					</View>
				</View>
				<Text
					style={styles.lilPimpText}>Lil Pimp</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "black",
		flex: 1,
	},
	group223View: {
		backgroundColor: "transparent",
		height: 898,
		marginLeft: 72,
		marginRight: 83,
	},
	bingxBlue3Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 898,
	},
	rectangle38View: {
		backgroundColor: "rgb(255, 0, 0)",
		height: 896,
		marginLeft: 3,
	},
	group223TwoView: {
		backgroundColor: "transparent",
		height: 898,
		marginLeft: 72,
		marginRight: 83,
	},
	bingxBlue3TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 898,
	},
	rectangle38TwoView: {
		backgroundColor: "rgb(255, 0, 0)",
		height: 896,
		marginLeft: 3,
	},
	group224Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 346,
		height: 68,
	},
	lineThreeView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginLeft: 3,
		marginTop: 37,
	},
	group575Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 71,
		height: 68,
	},
	group70View: {
		backgroundColor: "transparent",
		borderRadius: 33.84,
		borderWidth: 0.29,
		borderColor: "white",
		borderStyle: "solid",
		width: 69,
		height: 69,
		marginTop: 2,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	path5Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 38,
		marginRight: 13,
	},
	lineView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginLeft: 3,
		marginTop: 23,
	},
	dwayneWrightText: {
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9,
		height: 5,
		marginTop: 7,
	},
	lineTwoView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 19,
	},
	lilPimpMoneyLonText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 177,
		marginLeft: 34,
		marginTop: 30,
	},
	group578View: {
		backgroundColor: "black",
		height: 286,
		marginLeft: 4,
		marginRight: 1,
		marginTop: 23,
	},
	group261View: {
		backgroundColor: "transparent",
		borderRadius: 33.84,
		borderWidth: 0.29,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		right: 116,
		width: 69,
		top: 168,
		height: 69,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	path28Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 38,
		marginRight: 13,
	},
	group574View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 395,
		height: 426,
		alignItems: "flex-start",
	},
	helloImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "stretch",
		width: null,
		height: 289,
	},
	group163View: {
		backgroundColor: "rgb(0, 107, 198)",
		opacity: 0.38,
		borderRadius: 29.5,
		width: 218,
		height: 59,
		marginLeft: 173,
		alignItems: "center",
	},
	rateText: {
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
	videoPlayView: {
		backgroundColor: "transparent",
		borderRadius: 40,
		borderWidth: 1,
		borderColor: "white",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 82,
		top: 494,
		height: 82,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	pathImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 45,
		marginRight: 15,
	},
	lilPimpText: {
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
		top: 195,
	},
})
