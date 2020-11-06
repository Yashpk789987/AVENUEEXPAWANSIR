//
//  EXECAPP11
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, View } from "react-native"


export default class EXECAPP11 extends React.Component {

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
						alignSelf: "center",
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<Image
						source={require("./../../assets/images/group-677.png")}
						style={styles.group677Image}/>
				</View>
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
	group677Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 54,
		height: 54,
	},
})
