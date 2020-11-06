//
//  EXEC647
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class EXEC647 extends React.Component {

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
					style={styles.signincomponentView}>
					<Text
						style={styles.textinfoText}>Your password has been updated!</Text>
					<Image
						source={require("./../../assets/images/vector-art.png")}
						style={styles.buttoncomponentImage}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "black",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	signincomponentView: {
		backgroundColor: "transparent",
		width: 273,
		height: 85,
		alignItems: "center",
	},
	textinfoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNova-Regular",
		fontSize: 17,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignSelf: "stretch",
	},
	buttoncomponentImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 47,
		height: 47,
		marginTop: 17,
	},
})
