//
//  EXEC626
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC626 extends React.Component {

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
					style={styles.songplaycomponentView}>
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
						style={styles.textsongnameText}>Bingx</Text>
				</View>
				<View
					style={styles.artistdetailscomponentView}>
					<View
						pointerEvents="box-none"
						style={{
							height: 18,
							marginLeft: 37,
							marginRight: 64,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.textnameText}>Chanler Hendrickson</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/arrow.png")}
							style={styles.arrowTwoImage}/>
					</View>
					<View
						style={styles.separatorTwoView}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 47,
							marginLeft: 37,
							marginRight: 44,
							marginTop: 7,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.textemailText}>bingx425@gmail.com</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/67-2.png")}
							style={styles.addbuttonImage}/>
					</View>
					<View
						style={styles.separatorThreeView}/>
					<View
						pointerEvents="box-none"
						style={{
							height: 47,
							marginLeft: 37,
							marginRight: 44,
							marginTop: 6,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.textnumberText}>510.691.4454</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/67-2.png")}
							style={styles.addbuttonTwoImage}/>
					</View>
					<View
						style={styles.separatorFourView}/>
					<View
						style={styles.websitelinkcomponentView}>
						<Text
							style={styles.textwebsiteText}>Website www.bingx.com</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/67-2.png")}
							style={styles.addbuttonThreeImage}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.buttoncomponentView}>
					<Image
						source={require("./../../assets/images/icons8-apple-logo.png")}
						style={styles.appleiconImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.sharebuttonText}>Share</Text>
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
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 110,
	},
	lineView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 3,
	},
	songplaycomponentView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 351,
		height: 90,
	},
	artistpictureImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 68,
		height: 68,
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
	separatorView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 23,
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
		bottom: 18,
	},
	artistdetailscomponentView: {
		backgroundColor: "transparent",
		height: 212,
		marginTop: 47,
	},
	textnameText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 144,
	},
	arrowTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9,
		height: 5,
		marginTop: 7,
	},
	separatorTwoView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 19,
	},
	textemailText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 152,
		marginTop: 16,
	},
	addbuttonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 47,
		height: 47,
	},
	separatorThreeView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginTop: 4,
	},
	textnumberText: {
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 91,
		marginTop: 16,
	},
	addbuttonTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 47,
		height: 47,
	},
	separatorFourView: {
		backgroundColor: "rgba(171, 171, 171, 0.13)",
		height: 2,
		marginLeft: 6,
		marginTop: 5,
	},
	websitelinkcomponentView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 341,
		height: 47,
		marginLeft: 37,
		marginTop: 6,
		flexDirection: "row",
		alignItems: "center",
	},
	textwebsiteText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		width: 166,
		marginTop: 18,
	},
	addbuttonThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 47,
		height: 47,
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
		flexDirection: "row",
		alignItems: "center",
	},
	appleiconImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 13,
		height: 15,
		marginLeft: 77,
	},
	sharebuttonText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ProximaNova-Regular",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginRight: 73,
	},
})
