/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */

import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";

import { resizeHeight } from "../../helpers";
import Header from "../../components/HeaderComponent";
import Separator from "../../components/SeparatorComponent";
import { doLoadPayments } from "../../redux/actions/payments";
import Loader from "../../components/Loader";

export default () => {
  const {
    app: { fetching },
    payments: { payments, totalAmount, totalListens },
    user: { image },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doLoadPayments());
  }, [dispatch]);

  return (
    <Container>
      {fetching && <Loader />}
      <Header back profileImage={{ uri: `${image}` }} />
      <Content style={{ backgroundColor: "#000000" }}>
        <Grid>
          <Row>
            <Separator />
          </Row>
          <Row style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
            <Text style={styles.textnotificationsText}>Payments</Text>
          </Row>
          <Row>
            <Separator />
          </Row>
          {payments.map((item, index) => (
            <React.Fragment key={`payment-${index}`}>
              <Row>
                <Separator />
              </Row>
              <Row style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                <Col size={65}>
                  <Text style={styles.textnameText}>{item.month}</Text>
                </Col>
                <Col size={35}>
                  <NumberFormat
                    value={item.amount}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={(formattedValue) => (
                      <Text style={styles.textnameRText}>{formattedValue}</Text>
                    )}
                  />
                </Col>
              </Row>
            </React.Fragment>
          ))}

          <Row style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
            <Text style={styles.textnameText}>Totals</Text>
          </Row>
          <Row style={{ paddingHorizontal: 20 }}>
            <NumberFormat
              value={totalListens}
              displayType="text"
              thousandSeparator
              renderText={(formattedValue) => (
                <Text style={styles.textnameText}>
                  {`Completed listens ${formattedValue}`}
                </Text>
              )}
            />
          </Row>
          <Row style={{ paddingHorizontal: 20 }}>
            <NumberFormat
              value={totalAmount}
              displayType="text"
              thousandSeparator
              prefix="$"
              renderText={(formattedValue) => (
                <Text style={styles.textnameText}>
                  {`Year to date earnings ${formattedValue}`}
                </Text>
              )}
            />
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

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
  textnameText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginTop: 15,
  },
  textnameRText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "ProximaNova-Regular",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    marginTop: 15,
  },
});
