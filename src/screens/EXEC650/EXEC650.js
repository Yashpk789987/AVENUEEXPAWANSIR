//
//  IPhoneXRXSMax1119
//  AvenueAR Artist
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity} from "react-native"
import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from "../../helpers";
import {  Input, Button , Avatar } from 'react-native-elements';
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Header from './../../components/HeaderComponent';
import Separator  from "../../components/SeparatorComponent";
import Switch from './../../components/SwitchComponent';



export default class EXEC650 extends React.Component {

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
		this.onLoginPress = this.onLoginPress.bind(this)
	}

	componentDidMount() {

	}


	onLoginPress(){
		this.props.navigation.navigate('SignIn')
	}

	render() {
		return (
			<Container>
				{/* Header Start */}
				<Header />
						{/* Content Start */}
						<Content style={{ backgroundColor: "#000000"}}>
						{/* Grid Start */}
					 	<Grid>

	  						<Row>
		  						<Separator/>
  							</Row>
								<Row style={{ paddingTop: hp(20), paddingHorizontal: 30 , justifyContent: "center"}}>
		 						 <Avatar
		 							 rounded
		 							 source={require("./../../assets/images/group-512.png")}
		 							 size="large"
		 						 />
		 					 </Row>
							  <Row style={{justifyContent: "center"}}>
									<Text style={styles.textinfoText}>Your invitation has been sent!</Text>
								</Row>

								<Row style={{ paddingTop: hp(5), justifyContent: "center" }}>
					          <Button
					            title="Back To Profile"
					            type="clear"
											onPress={this.onLoginPress}
                      titleStyle={GlobalStyles.titleStyle}
   									  buttonStyle={GlobalStyles.buttonStyle}
					          />
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
	},
	passwordchangedcomponentView: {
		backgroundColor: "transparent",
		marginTop: 125,
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
		marginTop: 20,
	},
	loginbuttoncomponentView: {
		alignItems: "center",
	},
	textloginText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ProximaNovaA-Light",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: resizeWidth(130),
		marginTop: resizeHeight(23),
	},
})
