import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}> 
            <Image
                source={require('../img/Lawn.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'Lawn'}
            />
            </View>
            <View>
            <View style={styles.formContainer}>
                <Text style={styles.name}>Breeze Lawn</Text>
                <Text style={styles.label}>Description</Text>
                <Text style={styles.text}>Digitally printed and embroidered lawn dresses are the source of pure elegance in the summer season. These lawn dresses have the same grace as your mind and want to buy for this summer season. These lawn dresses are best for all casual and formal wear.</Text>
                </View>
                <View style={styles.buttonTab}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Icon name="shopping-cart" size={20} color="white"/>
                <Text style={styles.buttonText}>ADD TO CART</Text>
                <Text style={styles.price}>| $230</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
            <TouchableOpacity style={styles.footerText}>
                <Icon name="home" size={20} color="black"/>
                </TouchableOpacity >
                <TouchableOpacity style={styles.footerText}>
                <Icon name="heart" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText}>
                <Icon name="shopping-cart" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerText}>
                <Icon name="user" size={20} color="black"/>
                </TouchableOpacity>
              </View>
      </View>
        );
    };
  
const styles = StyleSheet.create({
    image: {
        width: 390,
        height: 459,
        // borderRadius: 20,
      },
      container: {
        width: 390,
        height: 844,
        backgroundColor: '#F2F2F2',
      },
    formContainer: {
      marginTop: 15,
      width: '80%',
    },
    name: {
      paddingLeft: 10,
      fontWeight: '600',
      fontSize: 20,
      marginBottom: 35,
    },
    label: {
      fontWeight: '600',
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
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      flexDirection: 'row',
    },
    button: {
      backgroundColor: '#ED203E',
      borderRadius: 15,
      width: 300,
      alignItems: 'center',
      padding: 10,
      marginBottom: 30,
      marginTop: 10,
      flexDirection: 'row',
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
      letterSpacing: 2,
      fontSize: 14,
      paddingLeft: 20,
    },
    price: {
      paddingLeft: 80,
      color: 'white',
    },
    PassText: {
        color: '#A39797',
        fontSize: 11,
        marginBottom: 10,
      },
      footer:{
        backgroundColor: 'grey',
        padding: 10,
        paddingLeft: 0,
        width: 390,
        height: 74,
        borderRadius: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
      },
    footerText: {
      fontSize: 16,
      color: '#333',
        
    },
    footer: {
      backgroundColor: 'white',
      alignItems: 'center',
      width: 390,
      height: 74,
      borderRadius: 15,
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    footerText: {
      marginHorizontal: 40,
    },
});
  
export default ProductScreen;