import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleProductPress = (productId) => {
    navigation.navigate("Product", { productId });
  };
  const renderProductRow = () => {
    const productRows = [];
    let rowIndex = 0;

    while (rowIndex < products.length) {
      const rowProducts = products.slice(rowIndex, rowIndex + 2);

      const productRow = (
        <View key={`row-${rowIndex}`} style={styles.productRow}>
          {rowProducts.map((product) => (
            <View key={product.Product_ID} style={styles.productContainer}>
              <TouchableOpacity
                onPress={() => handleProductPress(product)}
              >
                <Image
                  source={{ uri: product.imageUrl }}
                  style={styles.productImage}
                />
              </TouchableOpacity>
              <Text style={styles.productName}>{product.Name}</Text>
              <Text style={styles.productPrice}>${product.Price}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Wishlist")}>
                <Image
                  source={require("../img/like.png")}
                  style={styles.likeIcon}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );

      productRows.push(productRow);
      rowIndex += 2;
    }

    return productRows;
  };

  return (
    <>
      <ScrollView style={styles.appContainer}>
        <View style={styles.Header}>
          <TouchableOpacity>
            <Icon
              name="bars"
              size={20}
              color="black"
              onPress={() => goBack()}
            />
          </TouchableOpacity>

          <Image
            source={require("../img/logo.png")}
            style={styles.logoimage}
            accessible={true}
            accessibilityLabel={"logo"}
          />
          <TouchableOpacity>
            <Icon
              name="search"
              size={20}
              color="black"
              onPress={() => goBack()}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.banner}>
          <Image
            source={require("../img/Lawn.png")}
            style={styles.bannerImage}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity>
              <Text style={styles.heading}>Discover</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity>
              <Text style={styles.heading}>Popular</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}></View>
          <View style={[styles.column, styles.filter]}>
            <TouchableOpacity>
              <Icon
                name="filter"
                size={20}
                color="black"
                onPress={() => goBack()}
              />
            </TouchableOpacity>
          </View>
        </View>
        {renderProductRow()}
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
    </>
  );
};

const windowWidth = 390;
const imageWidth = (windowWidth - 32 - 16) / 2;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    width: 390,
    height: 844,
    marginBottom: 60,
  },
  Header: {
    height: 74,
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
  },
  logoimage: {
    width: 150,
    height: 29,
    marginHorizontal: 80,
  },
  banner: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  column: {
    flex: 1,
  },
  filter: {
    alignItems: "flex-end",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  productContainer: {
    width: imageWidth,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    marginBottom: 4,
  },
  productPrice: {
    fontWeight: "bold",
  },
  likeIcon: {
    width: 20,
    height: 20,
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
  footerText: {},
});

export default Home;
