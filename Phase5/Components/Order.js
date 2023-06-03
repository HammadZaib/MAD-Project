import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const OrderScreen = ({ navigation }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="bars" size={20} color="black" style={styles.bars} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={require("../img/logo.png")}
            style={styles.logoimage}
            accessible={true}
            accessibilityLabel={"logo"}
          />
        </View>
      </View>
      <View style={styles.orderDetailsCenter}>
        <TouchableOpacity style={styles.orderButton} onPress={toggleDetails}>
          <Text style={styles.orderNo}>#12345</Text>
          <View style={styles.orderDetails}>
            <Text style={styles.orderDate}>June 3, 2023</Text>
            <Icon
              name={showDetails ? "angle-up" : "angle-down"}
              size={20}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.orderDetailsCenter}>
        <TouchableOpacity style={styles.orderButton} onPress={toggleDetails}>
          <Text style={styles.orderNo}>#12345</Text>
          <View style={styles.orderDetails}>
            <Text style={styles.orderDate}>June 3, 2023</Text>
            <Icon
              name={showDetails ? "angle-up" : "angle-down"}
              size={20}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>

      {showDetails && (
        <View style={styles.orderDetailsContainer}>
          <View style={styles.squares}>
            <Image
              source={require("../img/Lawn.png")}
              style={styles.image}
              accessible={true}
              accessibilityLabel={"Lawn"}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Printed Lawn Shirt</Text>
              <Text style={styles.name}>$20.00</Text>
            </View>
          </View>
          <View style={styles.squares}>
            <Image
              source={require("../img/Lawn.png")}
              style={styles.image}
              accessible={true}
              accessibilityLabel={"Lawn"}
            />
            <View style={styles.text}>
              <Text style={styles.name}>Printed Lawn Shirt</Text>
              <Text style={styles.name}>$20.00</Text>
            </View>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.adbanner}>
        <Image
          source={require("../img/ad.png")}
          style={styles.adbanner}
          accessible={true}
          accessibilityLabel={"Lawn"}
        />
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Login')}>
          <Icon name="home" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon name="heart" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon name="shopping-cart" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon name="user" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adbanner: {
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 30,
  },


  image: {
    alignSelf: "center",
    marginLeft: 20,
    width: 90,
    height: 120,
    borderRadius: 20,
  },
  text: {
    flexDirection: "column",
    padding: 20,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  header: {
    height: 74,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  bars: {
    marginRight: "auto",
  },
  logoContainer: {
    alignItems: "center",
    width: "50%",
  },
  logoimage: {
    width: 208,
    height: 41,
  },
  orderButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: 317,
    borderRadius: 25,
  },
  squares: {
    borderRadius: 15,
    margin: 10,
    flexDirection: "row",
    backgroundColor: "white",
    width: 317,
    height: 150,
  },
  name: {
    fontWeight: "bold",
  },
  exit: {
    position: "absolute",
    marginHorizontal: "95%",
  },
  orderNo: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 2,
  },
  orderDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderDate: {
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 2,
  },
  orderDetailsCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  orderDetailsContainer: {
    width: 351,

    backgroundColor: "#f1f1f1",
    marginTop: 20,
    marginLeft: 20,
  },

  productDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  productName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 12,
    color: "#888",
  },
  orderTotal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  orderTotalLabel: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10,
  },
  orderTotalValue: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#888",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 25,
    // borderTopWidth: 1,
    // borderTopColor: '#e2e2e2',
  },
  footerIcon: {
    width: 25,
    height: 25,
  },
  activeIcon: {
    tintColor: "#000",
  },
  inactiveIcon: {
    tintColor: "#b4b4b4",
  },
});

export default OrderScreen;
