//
//  EXEC641
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC641 extends React.Component {

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
								source={require("./../../assets/images/bingx-blue-3-2.png")}
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
						left: -4,
						right: -1,
						top: 308,
						bottom: 72,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 28,
							marginLeft: 38,
							marginRight: 31,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.rateThisSongText}>Rate this song</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.lilPimpMoneyLonText}>Lil Pimp - Money Long</Text>
					</View>
					<View
						style={styles.lineView}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 69,
							marginLeft: 36,
							marginRight: 30,
							marginTop: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/group-588.png")}
							style={styles.group579Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.lilPimpText}>Lil Pimp</Text>
						<View
							style={styles.group261View}>
							<Image
								source={require("./../../assets/images/path-5.png")}
								style={styles.path28Image}/>
						</View>
					</View>
					<View
						style={styles.lineTwoView}/>
					<Text
						style={styles.inOrderToSaveThiText}>In order to save this song you must rate a {"\n"}4 or 5.</Text>
					<View
						style={styles.lineThreeView}/>
					<Text
						style={styles.onceYouHaveRatedText}>Once you have rated this song we will immediately notify the song owner. If they accept your rating you will receive an additional $5.</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.group335View}>
						<View
							pointerEvents="box-none"
							style={{
								width: 65,
								height: 65,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.ellipse28View}/>
							</View>
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
									style={styles.textText}>4</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 65,
								height: 65,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.ellipse29View}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Text
									style={styles.textTwoText}>5</Text>
							</View>
						</View>
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
		position: "absolute",
		left: -1,
		right: -1,
		top: 40,
		height: 107,
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
	group223View: {
		backgroundColor: "transparent",
		height: 898,
	},
	bingxBlue3Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 898,
	},
	rectangle38View: {
		backgroundColor: "rgb(255, 0, 0)",
		height: 896,
		marginLeft: 3,
	},
	rateThisSongText: {
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 23,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 156,
	},
	lilPimpMoneyLonText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 174,
		marginTop: 3,
	},
	lineView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 15,
	},
	group579Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 71,
		height: 68,
		marginTop: 1,
	},
	lilPimpText: {
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 105,
		marginRight: 52,
		marginTop: 27,
	},
	group261View: {
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
	lineTwoView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginLeft: 3,
		marginTop: 29,
	},
	inOrderToSaveThiText: {
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		paddingTop: 2,
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 363,
		marginRight: 18,
		marginTop: 27,
	},
	lineThreeView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 29,
	},
	onceYouHaveRatedText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 350,
		marginTop: 27,
	},
	group335View: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 136,
		height: 65,
		flexDirection: "row",
		alignItems: "center",
	},
	ellipse28View: {
		backgroundColor: "rgb(93, 181, 255)",
		borderRadius: 32.5,
		width: 65,
		height: 65,
	},
	textText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 33,
		marginLeft: 16,
	},
	ellipse29View: {
		backgroundColor: "rgb(0, 107, 198)",
		borderRadius: 32.5,
		width: 65,
		height: 65,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 33,
		marginRight: 16,
	},
})
