import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductScreen = ({ navigation, route }) => {
  const [product, setProduct] = useState(route.params.productId);
  const [cartItem, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([cartItem, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const updatedCartItems = cartItem.filter((item) => item !== product);
    setCartItems(updatedCartItems);
  };

  const handleProductPress = (product) => {
    addToCart(product);
    navigation.navigate("Cart", { product });
    
  };
  return (
    <View>
      <ScrollView style={styles.container}>
        {product ? (
          <>
            <View style={styles.logoContainer}>
              <Image
                source={{ uri: product.imageUrl }}
                style={styles.image}
                accessible={true}
                accessibilityLabel={"Lawn"}
              />
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.name}>{product.Name}</Text>

              <Text style={styles.label}>Description</Text>
              <Text style={styles.text}>{product.Description}</Text>
            </View>

            <View style={styles.buttonTab}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleProductPress(product)}
              >
                <Icon name="shopping-cart" size={20} color="white" />
                <Text style={styles.buttonText}>ADD TO CART</Text>
                <Text style={styles.price}>| ${product.Price}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerText}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerText}
          onPress={() => navigation.navigate("Wishlist")}
        >
          <Icon name="heart" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerText}
          onPress={() => navigation.navigate("Cart")}
        >
          <Icon name="shopping-cart" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerText}
          onPress={() => navigation.navigate("More")}
        >
          <Icon name="user" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 390,
    height: 459,
  },
  container: {
    width: 390,
    height: 844,
    backgroundColor: "#F1F1F1",
  },
  formContainer: {
    marginTop: 15,
    width: "80%",
  },
  name: {
    paddingLeft: 10,
    fontWeight: "600",
    fontSize: 20,
    marginBottom: 35,
  },
  label: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 4,
    paddingLeft: 10,
  },
  text: {
    fontSize: 14,
    paddingLeft: 10,
    paddingTop: 15,
  },
  buttonTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#ED203E",
    borderRadius: 15,
    width: 300,
    alignItems: "center",
    padding: 10,
    marginBottom: 90,
    marginTop: 50,
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 14,
    paddingLeft: 20,
  },
  price: {
    paddingLeft: 80,
    color: "white",
  },
  PassText: {
    color: "#A39797",
    fontSize: 11,
    marginBottom: 10,
  },
  footer: {
    width: 390,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 25,
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

export default ProductScreen;
