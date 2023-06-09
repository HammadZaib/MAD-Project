import React from "react";
import LoginScreen from "./Components/Login";
import SignupScreen from "./Components/Signup";
import ProductScreen from "./Components/Product";
import CartScreen from "./Components/Cart";
import OrderScreen from "./Components/Order";
import ProfileScreen from "./Components/Profile";
import ReturnExchangeProcedure from "./Components/Return";
import PaymentScreen from "./Components/Payment";
import BillingScreen from "./Components/Billing";
import More from "./Components/More";
import Home from "./Components/Home";
import ChangepasswordScreen from "./Components/Changepassword";
import ChangenameScreen from "./Components/Changename";
import ChangemobScreen from "./Components/Changemob";
import ChangeemailScreen from "./Components/Changeemail";
import GenderScreen from "./Components/Gender";
import BirthdayScreen from "./Components/Birthday";
import WishlistScreen from "./Components/Wishlist";
import ContactScreen from "./Components/Contactus";
import AboutScreen from "./Components/Aboutus";
import Icon from 'react-native-vector-icons/FontAwesome';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Billing" component={BillingScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Return" component={ReturnExchangeProcedure} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Gender" component={GenderScreen} />
        <Stack.Screen name="Birthday" component={BirthdayScreen} />
        <Stack.Screen name="Email" component={ChangeemailScreen} />
        <Stack.Screen name="Name" component={ChangenameScreen} />
        <Stack.Screen name="Mob" component={ChangemobScreen} />
        <Stack.Screen name="Pass" component={ChangepasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
