<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}> 
            <TouchableOpacity>
                <Icon name="arrow-left" size={20} color="black" onPress={() => navigation.navigate('More')}/>
                </TouchableOpacity >
                <Text style={styles.cart}>PROFILE</Text>
            </View>
            <Text style={styles.info}>Account Information</Text>
            <View style={styles.main}>
            <TouchableOpacity style={styles.fields}  onPress={() => navigation.navigate('Name')}>
                <Text>Full name</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}  onPress={() => navigation.navigate('Pass')}>
                <Text>Change Password</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}  onPress={() => navigation.navigate('Mob')}>
                <Text>Add Mob</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}  onPress={() => navigation.navigate('Email')}>
                <Text>Change Email</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}  onPress={() => navigation.navigate('Gender')}>
                <Text>Gender</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}  onPress={() => navigation.navigate('Birthday')}>
                <Text>Birthday</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >                                    
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
        backgroundColor: 'F1F1F1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cart: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 130,
        letterSpacing: 2,
        // fontFamily: 'Lato_900Black',
    },
    info:{
        marginTop: 30,
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: 20,
        fontWeight: '600',
        // fontFamily: 'Lato_900Black',
    },
    main:{
        padding: 20,
        marginTop:50,
    },
    fields:{
        borderRadius: 15,
        backgroundColor: '#f1f1f1',
        width: '100%',
        height: 40,
        padding: 10,
        marginBottom: 16,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '300',
    },
    image: {
        width: 12.5,
        height: 20,
        borderRadius: 20,
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
  
=======
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, onPress } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}> 
            <TouchableOpacity>
                <Icon name="arrow-left" size={20} color="black" onPress={() => goBack()} />
                </TouchableOpacity >
                <Text style={styles.cart}>PROFILE</Text>
            </View>
            <Text style={styles.info}>Account Information</Text>
            <View style={styles.main}>
            <TouchableOpacity style={styles.fields}>
                <Text>Full name</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}>
                <Text>Change Password</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}>
                <Text>Add Mob</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}>
                <Text>Change Email</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}>
                <Text>Gender</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >
            <TouchableOpacity style={styles.fields}>
                <Text>Birthday</Text>
                <Image source={require('../img/right-arrow.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'right-arrow'}
                />
            </TouchableOpacity >                                    
            </View>
              <View style={styles.footer}>
              <TouchableOpacity style={styles.footerText} onPress={() => navigation.navigate('Login')}>
                <Icon name="home" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerText}>
                <Icon name="heart" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerText}>
                <Icon name="shopping-cart" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerText}>
                <Icon name="user" size={20} color="black" />
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
        backgroundColor: 'F1F1F1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cart: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 130,
        letterSpacing: 2,
        // fontFamily: 'Lato_900Black',
    },
    info:{
        marginTop: 30,
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: 20,
        fontWeight: '600',
        // fontFamily: 'Lato_900Black',
    },
    main:{
        padding: 20,
        marginTop:50,
    },
    fields:{
        borderRadius: 15,
        backgroundColor: '#f1f1f1',
        width: '100%',
        height: 40,
        padding: 10,
        marginBottom: 16,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '300',
    },
    image: {
        width: 12.5,
        height: 20,
        borderRadius: 20,
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
  
>>>>>>> a9de5568c2e9dd635a23cafe7f6a02800dd6d0d9
export default ProfileScreen;