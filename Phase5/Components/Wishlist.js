import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WishlistScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}> 
            <TouchableOpacity>
                <Icon name="arrow-left" size={20} color="black" onPress={() => navigation.navigate('Home')} />
                </TouchableOpacity >
                <Text style={styles.cart}>Wishlist</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.squares}>
                <Image
                    source={require('../img/Lawn.png')}
                    style={styles.image}
                    accessible={true}
                    accessibilityLabel={'Lawn'}
                />
                <View style={styles.text}>
                <Text style={styles.name}>Printed Lawn Shirt</Text>
                <Text>Price</Text>
                </View>
                <TouchableOpacity style={styles.exit}>
                      <Icon name="times" size={20} color="black"/>
                </TouchableOpacity >
                </View>
                <View style={styles.squares}>
                <Image
                    source={require('../img/Lawn.png')}
                    style={styles.image}
                    accessible={true}
                    accessibilityLabel={'Lawn'}
                />
                <View style={styles.text}>
                <Text style={styles.name}>Printed Lawn Shirt</Text>
                <Text>Price</Text>
                </View>
                <TouchableOpacity style={styles.exit}>
                      <Icon name="times" size={20} color="black"/>
                </TouchableOpacity >
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
      container: {
        width: 390,
        height: 844,
        backgroundColor: '#F1F1F1',
        flex:1,
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
    cart: {
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 100,
        letterSpacing: 3,
    },

    body:{
        width: 351,
        height: 360,
        backgroundColor: '#F1F1F1',
        position: 'absolute',
        marginTop: '30%',
        marginLeft: 20,
    },

    squares: {
        // borderWidth: 1,
        borderRadius: 15,
        margin:10,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    image: {
        width: 78,
        height: 115,
        borderRadius: 20,
      },
    name:{
        fontWeight: 'bold',
    },
    text: {
        flexDirection:'column',
        padding:20,
        justifyContent: 'space-between',
    },
    exit: {
        position: 'absolute',
        marginHorizontal: '95%',
    },
    bill:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '110%',
        position: 'absolute',

    },
    billText: {
        marginHorizontal: 80,
    },
    orderDetailsContainer:{
        marginTop: '90%'
    },
    orderDetail: {
        padding: 15,
        paddingBottom:0,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    orderDetailLabel: {
        fontSize: 14,
      },
      orderDetailValue: {
        //   fontWeight: "bold",
          fontSize: 14,
        },
        orderTotal: {
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
        },
        orderTotalLabel: {
            fontWeight: "bold",
            fontSize: 16,
        },
        orderTotalValue: {
            fontWeight: "bold",
            fontSize: 16,
        },
        button: {
            backgroundColor: '#ED203E',
            borderRadius: 25,
            alignItems: 'center',
            padding: 10,
            // position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100,
            width: 217,
            height: 50,
            marginHorizontal: 95,
        },
        buttonText: {
        color: 'white',
        fontWeight: '600',
        letterSpacing: 2,
        fontSize: 14,
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
  
export default WishlistScreen;