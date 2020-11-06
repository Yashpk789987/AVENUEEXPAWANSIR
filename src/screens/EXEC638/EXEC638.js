//
//  EXEC638
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC638 extends React.Component {

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
					style={styles.ratesongcomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 28,
							marginLeft: 38,
							marginRight: 31,
							marginTop: 9,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.text1Text}>Rate this song</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textsongnameText}>Rebah - Love Is Blind</Text>
					</View>
					<View
						style={styles.separatorTwoView}/>
				</View>
				<View
					style={styles.songdetailcomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: -33,
							right: -30,
							top: 1,
							height: 99,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 68,
								marginLeft: 33,
								marginRight: 151,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/group-610.png")}
								style={styles.artistpictureImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textsongnameTwoText}>Rebah</Text>
						</View>
						<View
							style={styles.separatorThreeView}/>
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
						<View
							style={styles.playbuttoncomponentView}>
							<Image
								source={require("./../../assets/images/path-5.png")}
								style={styles.playbuttonImage}/>
						</View>
					</View>
				</View>
				<Text
					style={styles.textinfoText}>In order to save this song you must rate a {"\n"}4 or 5.</Text>
				<View
					style={styles.separatorFourView}/>
				<Text
					style={styles.textinfoTwoText}>Once you have rated this song we will immediately notify the song owner. If they accept your rating you will receive an additional $5.</Text>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.ratingbuttoncomponentView}>
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
								style={styles.ratebutton1View}/>
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
								style={styles.textnumberText}>4</Text>
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
								style={styles.ratebutton2View}/>
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
								style={styles.textnumberTwoText}>5</Text>
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
	ratesongcomponentView: {
		backgroundColor: "transparent",
		width: 419,
		height: 54,
	},
	text1Text: {
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 23,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 156,
	},
	textsongnameText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 174,
		marginTop: 3,
	},
	separatorTwoView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 15,
	},
	songdetailcomponentView: {
		backgroundColor: "transparent",
		width: 353,
		height: 69,
		marginTop: 26,
	},
	artistpictureImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 71,
		height: 68,
	},
	textsongnameTwoText: {
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 105,
		marginTop: 26,
	},
	separatorThreeView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 29,
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 38,
		marginRight: 13,
	},
	textinfoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Thin",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		paddingTop: 2,
		alignSelf: "flex-end",
		width: 363,
		marginRight: 17,
		marginTop: 58,
	},
	separatorFourView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		alignSelf: "stretch",
		height: 2,
		marginTop: 29,
	},
	textinfoTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 350,
		marginTop: 27,
	},
	ratingbuttoncomponentView: {
		backgroundColor: "transparent",
		width: 136,
		height: 65,
		marginBottom: 72,
		flexDirection: "row",
		alignItems: "center",
	},
	ratebutton1View: {
		backgroundColor: "rgb(93, 181, 255)",
		borderRadius: 32.5,
		width: 65,
		height: 65,
	},
	textnumberText: {
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
	ratebutton2View: {
		backgroundColor: "rgb(0, 107, 198)",
		borderRadius: 32.5,
		width: 65,
		height: 65,
	},
	textnumberTwoText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 33,
		marginRight: 16,
	},
})
