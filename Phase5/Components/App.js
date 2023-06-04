import React from "react";
import LoginScreen from "./components/Login";
import SignupScreen from "./components/Signup";
import ProductScreen from "./components/Product";
import CartScreen from "./components/Cart";
import OrderScreen from "./components/Order";
import ProfileScreen from "./components/Profile";
import ReturnExchangeProcedure from "./components/Return";
import PaymentScreen from "./components/Payment";
import BillingScreen from "./components/Billing";
import More from "./components/More";
import Home from "./components/Home";
import ChangepasswordScreen from "./components/Changepassword";
import ChangenameScreen from "./components/Changename";
import ChangemobScreen from "./components/Changemob";
import ChangeemailScreen from "./components/Changeemail";
import GenderScreen from "./components/Gender";
import BirthdayScreen from "./components/Birthday";
import WishlistScreen from "./components/Wishlist";
import ContactScreen from "./components/Contactus";
import AboutScreen from "./components/Aboutus";
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
