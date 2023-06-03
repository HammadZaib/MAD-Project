import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const OrderScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}> 
            <TouchableOpacity>
                <Icon name="bars" size={20} color="black" onPress={() => goBack()} />
                </TouchableOpacity >
                <View style={styles.logoContainer}>
                <Image
                source={require('../img/logo.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'logo'}
            />
            </View>
            </View>
            <Text style={styles.order}>MY ORDERS</Text>
            <View style={styles.orders}>

            </View>
        </View>
        );
    };
  
const styles = StyleSheet.create({
      container: {
        width: 390,
        height: 844,
        backgroundColor: '#F2F2F2',
        flex:1,
      },
      Header: {
          width: 390,
          height: 74,
          borderRadius: 15,
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        },
        image: {
          width: 2,
          height: 15,
        },
        logoContainer: {
            alignItems: 'center',
            marginHorizontal: 100,
            width: 5,
          },

        order:{
            marginTop: 20,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600',
            letterSpacing: 2,
        },
        body:{
        width: 351,
        height: 360,
        backgroundColor: '#F2F2F2',
        position: 'absolute',
        marginTop: '30%',
        marginLeft: 20,
    },

    squares: {
        borderWidth: 1,
        margin:10,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    image: {
        width: 78,
        height: 115,
        borderRadius: 20,
      },
    text: {
        flexDirection:'column',
        padding:20,
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
    button: {
        backgroundColor: '#ED203E',
        borderRadius: 15,
        alignItems: 'center',
        padding: 10,
        marginTop: '150%',
        position: 'relative',
        justifyContent: 'center',
        
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        letterSpacing: 2,
        fontSize: 14,
    },
    footer: {
      backgroundColor: 'white',
      alignItems: 'center',
      width: 390,
      height: 74,
      borderRadius: 15,
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: '198%',
      position: 'absolute',
    },
    footerText: {
      marginHorizontal: 40,
    },
});
  
export default OrderScreen;