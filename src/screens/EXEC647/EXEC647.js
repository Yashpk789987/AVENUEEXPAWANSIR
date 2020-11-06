//
//  EXEC647
//  AvenueAR Executive
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import {  Image, StyleSheet, View } from "react-native"
import { GlobalStyles, resizeHeight, resizeWidth, hp , wp } from "../../helpers";
import { Text, Button, Avatar } from 'react-native-elements';
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Next  from "../../components/NextComponent";

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

		return (
			<Container>

				 {/* Content Start */}
				 <Content style={{ backgroundColor: "#000000"}} padder>
				 {/* Grid Start */}
				 <Grid style={{alignItems: "center", paddingTop: hp(40) }}>
					 <Row style={{ paddingVertical: 20}}>
						<Text style={styles.textinfoText}>Your password has been updated!</Text>
					 </Row>

					 <Row>
								<Next onPress={this.onPress} />
					 </Row>

				 </Grid>

				</Content>

	  </Container>

		)
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
