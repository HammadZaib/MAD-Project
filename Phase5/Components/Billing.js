import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const BillingScreen = ({navigation}) => {
    return (
        <View>
        <ScrollView style={styles.container}>
            <View style={styles.Header}> 
            <TouchableOpacity>
                <Icon name="bars" size={20} color="black" onPress={() => navigation.navigate('Cart')} />
                </TouchableOpacity >
          <Image
            source={require("../img/logo.png")}
            style={styles.logoimage}
            accessible={true}
            accessibilityLabel={"logo"}
          />
        </View>
        <Text style={styles.info}>BILLING DETAILS</Text>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                style={styles.input}
                placeholder="Full Name"
                keyboardType="Full-Name"
            />
            <Text style={styles.label}>Last Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Phone No"
                keyboardType="Numeber"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email "
                keyboardType="Email"
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Address"
                keyboardType="Address"
            />
            <Text style={styles.label}>City</Text>
            <TextInput
                style={styles.input}
                placeholder="City"
                keyboardType="City"
            />
            
            <Text style={styles.label}>Country</Text>
            <TextInput
                style={styles.input}
                placeholder="Country"
                keyboardType="Country"
            />
            
            <Text style={styles.label}>Postal Code</Text>
            <TextInput
                style={styles.input}
                placeholder="Postal Code"
                keyboardType="Number"
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
            
            </View>
            </ScrollView>
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
          flex: 1,
          width: 390,
          height: 844,
          backgroundColor: '#F1F1F1',
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
        info:{
            marginTop: 30,
            textAlign: 'center',
            letterSpacing: 2,
            fontSize: 20,
            fontWeight: '600',
            // fontFamily: 'Lato_900Black',
        },

    formContainer: {
      width: '100%',
      paddingTop: 40,
      marginHorizontal: 40,
    },
    label: {
      fontWeight: '600',
      fontSize: 14,
      marginBottom: 4,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 15,
      backgroundColor: 'white',
      width: 300,
      height: 40,
      padding: 10,
      marginBottom: 16,
    },
    button: {
        backgroundColor: '#ED203E',
        borderRadius: 25,
        width: 152,
        alignItems: 'center',
        padding: 10,
        marginBottom: 16,
        marginTop: 10,
        height: 50,
        justifyContent: 'center',
        marginLeft: 70,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 16,
        textAlign: 'center',

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
  
export default BillingScreen;