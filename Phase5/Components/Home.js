import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({navigation}) => {
  return (
    <View style={styles.appContainer}>
            <View style={styles.Header}> 
            <TouchableOpacity>
                <Icon name="bars" size={20} color="black" onPress={() => goBack()} />
                </TouchableOpacity >
            
          <Image
            source={require("../img/logo.png")}
            style={styles.logoimage}
            accessible={true}
            accessibilityLabel={"logo"}
          />
                      <TouchableOpacity>
                <Icon name="search" size={20} color="black" onPress={() => goBack()} />
                </TouchableOpacity >
        </View>
      <View style={styles.banner}>
        <Image source={require('../img/banner.png')} style={styles.bannerImage} />
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
                <Icon name="filter" size={20} color="black" onPress={() => goBack()} />
                </TouchableOpacity >
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.productContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Image source={require('../img/product1.png')} style={styles.productImage} />
        </TouchableOpacity>
          <Text style={styles.productName}>Lawn Dress</Text>
          <Text style={styles.productPrice}>$230</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Image source={require('../img/like.png')} style={styles.likeIcon}  />
          </TouchableOpacity>
        </View>
        <View style={styles.productContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Image source={require('../img/product1.png')} style={styles.productImage} />
          </TouchableOpacity>
          <Text style={styles.productName}>Lawn Dress</Text>
          <Text style={styles.productPrice}>$230</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Image source={require('../img/like.png')} style={styles.likeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.productContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Image source={require('../img/product1.png')} style={styles.productImage} />
          </TouchableOpacity>
          <Text style={styles.productName}>Lawn Dress</Text>
          <Text style={styles.productPrice}>$230</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Image source={require('../img/like.png')} style={styles.likeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.productContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <Image source={require('../img/product1.png')} style={styles.productImage} />
          </TouchableOpacity>
          <Text style={styles.productName}>Lawn Dress</Text>
          <Text style={styles.productPrice}>$230</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Image source={require('../img/like.png')} style={styles.likeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
            <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Home')}>
                <Icon name="home" size={20} color="black"/>
                </TouchableOpacity >
                <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Wishlist')}>
                <Icon name="heart" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Cart')}>
                <Icon name="shopping-cart" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('More')}>
                <Icon name="user" size={20} color="black"/>
                </TouchableOpacity>
              </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: 390,
    height: 844,
    backgroundColor: '#f1f1f1',
  },
  Header: {
    width: 390,
    height: 74,
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
},
logoimage: {
    width: 150,
    height: 29,
    marginHorizontal: 80,
},
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  column: {
    flex: 1,
  },
  filter: {
    alignItems: 'flex-end',
  },
  filterIcon: {
    width: '75%',
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productContainer: {
    flex: 1,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    marginBottom: 4,
  },
  productPrice: {
    fontWeight: 'bold',
  },
  likeIcon: {
    width: 20,
    height: 20,
  },
  footer: {
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

export default Home;
