//
//  IPhoneXRXSMax1115
//  AvenueAR Artist
//
//  Created by Rohan Dey.
//  Copyright © 2018 AvenueAR. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity} from "react-native"
import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from "../../helpers";
import {  Input, Button , Avatar, Badge } from 'react-native-elements';
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Header from './../../components/HeaderComponent';
import Separator  from "../../components/SeparatorComponent";
import Play from './../../components/PlayComponent';




function List(props) {
  const data = props.data;

  const listItems = data.map((data, index) =>
		 <Row style={{ paddingHorizontal: 10, paddingVertical: 20, borderBottomColor: "rgba(171, 171, 171, 0.13)", borderBottomWidth: 2}}>
 		  <Col size={20}>
 			<Avatar containerStyle={{ marginTop: hp(1)}} rounded source={data.image} size="large"/>
 	  	</Col>
			<Col style={{ marginTop: hp(1)}} size={20}>
				<Play onPress={props.onAudioPlayPress} />
			</Col>
			<Col style={{ marginTop: hp(1)}} size={30}>
				{ data.saved ?
				<Button
					title="Saved"
					type="clear"
					onPress={this.onLoginPress}
					titleStyle={GlobalStyles.titleBlueStyle}
					buttonStyle={GlobalStyles.buttonRedStyle}
				/>
			  :
				<Button
					title="Save"
					type="clear"
					onPress={this.onLoginPress}
					titleStyle={GlobalStyles.titleBlueStyle}
					buttonStyle={GlobalStyles.buttonBlueStyle}
				/>
			 }
			</Col>
 		</Row>
  );

	return (
		<Grid>
			 {listItems}
		</Grid>
  );

}


export default class EXEC635 extends React.Component {

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
		this.onValueChange = this.onValueChange.bind(this)
		this.state = {
		 value: '',
     data: [
			{
				image: require("./../../assets/images/group-529.png"),
	 			saved: true,
				type: "Artist"
			},
			{
				image: require("./../../assets/images/group-586.png"),
	 			saved: false,
				type: "Artist"
			},
		 ]
		}
	}

	componentDidMount() {

	}

	onValueChange(state, index) {
	  var stateCopy = Object.assign({}, this.state);
	  stateCopy.data[index].val = state;

	  this.setState(stateCopy);
	}

	render() {

		return (
			<Container>
				 {/* Header Start */}
				 <Header profileImage={require("./../../assets/images/group-530.png")} />

				 {/* Content Start */}
 				 <Content style={{ backgroundColor: "#000000"}}>
 				 {/* Grid Start */}
 				 <Grid>
					 <Row>
						 <Separator/>
					 </Row>


					 <Row style={{ paddingHorizontal: 10, paddingVertical: 20}}>
						 <Col size={80}>
							 <Text style={styles.textnotificationsText}>Submissions</Text>
						 </Col>

						 <Col size={20}>
							<Badge value="5" badgeStyle={{ backgroundColor: "rgb(0, 107, 198)", width: 25, height: 25, borderWidth: 0, borderRadius: 18.5}} status="success" />
						 </Col>

					 </Row>

					 <Row>
						 <Separator/>
					 </Row>

					 <List data={this.state.data} onValueChange={this.onValueChange} />



				 </Grid>

				</Content>

		 </Container>
	 );


	}
}

const styles = StyleSheet.create({
	nameText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ProximaNovaA-Light",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: resizeHeight(30)
	},
	labelText: {
		color: "white",
		fontFamily: "ProximaNova-Bold",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent"
	},
	textnotificationsText: {
		color: "white",
		fontFamily: "ProximaNovaA-Light",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	musiciconcomponentImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 16,
		paddingTop: 25
	},
})
