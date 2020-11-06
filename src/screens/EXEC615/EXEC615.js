import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GlobalStyles, resizeHeight, resizeWidth, hp, wp } from "../../helpers";
import { Input, Button, Avatar, Badge } from "react-native-elements";
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Header from "./../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";
import SwitchPhoto from "./../../components/SwitchPhotoComponent";

function List(props) {
  const data = props.data;

  const listItems = data.map((data, index) => (
    <Row
      style={{
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderBottomColor: "rgba(171, 171, 171, 0.13)",
        borderBottomWidth: 2,
      }}
    >
      <Col size={30}>
        <SwitchPhoto
          image={data.image}
          value={data.val}
          onValueChange={(state) => props.onValueChange(state, index)}
        />
      </Col>

      <Col size={10}>
        <Text style={styles.nameText}>{data.type}</Text>
      </Col>
    </Row>
  ));

  return <Grid>{listItems}</Grid>;
}

export default class Step22 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  };

  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      value: "",
      data: [
        {
          image: require("./../../assets/images/group-529.png"),
          val: false,
          type: "Artist",
        },
        {
          image: require("./../../assets/images/group-586.png"),
          val: false,
          type: "Artist",
        },
      ],
    };
  }

  componentDidMount() {}

  onValueChange(state, index) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.data[index].val = state;

    this.setState(stateCopy);
  }

  render() {
    return (
      <Container>
        {/* Header Start */}
        <Header
          listens={"11"}
          earnings={"1"}
          profileImage={require("./../../assets/images/group-530.png")}
        />

        {/* Content Start */}
        <Content style={{ backgroundColor: "#000000" }}>
          {/* Grid Start */}
          <Grid>
            <Row>
              <Separator />
            </Row>

            <Row style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
              <Col size={80}>
                <Text style={styles.textnotificationsText}>Submissions</Text>
              </Col>

              <Col size={20}>
                <Badge
                  value="5"
                  badgeStyle={{
                    backgroundColor: "rgb(0, 107, 198)",
                    width: 25,
                    height: 25,
                    borderWidth: 0,
                    borderRadius: 18.5,
                  }}
                  status="success"
                />
              </Col>
            </Row>

            <Row>
              <Separator />
            </Row>

            <List data={this.state.data} onValueChange={this.onValueChange} />

            <Row style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
              <Button
                title="784 More"
                type="clear"
                titleStyle={GlobalStyles.moreTitleStyle}
                buttonStyle={GlobalStyles.moreButtonStyle}
                onPress={this.onSubmitPress}
              />
            </Row>
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
    marginTop: resizeHeight(30),
  },
  labelText: {
    color: "white",
    fontFamily: "ProximaNova-Bold",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "transparent",
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
    paddingTop: 25,
  },
});
