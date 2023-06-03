import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../img/menu-icon.png')} style={styles.logo} />
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('../img/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('../img/search.png')} style={styles.logo} />
        </View>
      </View>
      <View style={styles.banner}>
        <Image source={require('../img/banner.png')} style={styles.bannerImage} />
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.heading}>Discover</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.heading}>Popular</Text>
        </View>
        <View style={styles.column}></View>
        <View style={[styles.column, styles.filter]}>
          <Image source={require('../img/filter.png')} style={styles.filterIcon} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.productContainer}>
          <Image source={require('../img/product1.png')} style={styles.productImage} />
          <Text style={styles.productName}>Lawn Dress</Text>
          <Text style={styles.productPrice}>$230</Text>
          <Image source={require('../img/like.png')} style={styles.likeIcon} />
        </View>
        <View style={styles.productContainer}>
          <Image source={require('../img/product1.png')} style={styles.productImage} />
          <Text style={styles.productName}>Lawn Dress</Text>
          <Text style={styles.productPrice}>$230</Text>
          <Image source={require('../img/like.png')} style={styles.likeIcon} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.productContainer}>
          <Image source={require('../img/product1.png')} style={styles.productImage} />
          <Text style={styles.productName}>Lawn Dress</Text>
          <Text style={styles.productPrice}>$230</Text>
          <Image source={require('../img/like.png')} style={styles.likeIcon} />
        </View>
        <View style={styles.productContainer}>
          <Image source={require('../img/product1.png')} style={styles.productImage} />
          <Text style={styles.productName}>Lawn Dress</Text>
          <Text style={styles.productPrice}>$230</Text>
          <Image source={require('../img/like.png')} style={styles.likeIcon} />
        </View>
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
  header: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
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
});

export default Home;
