import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";

const LoginScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../img/logo.png")}
            style={styles.image}
            accessible={true}
            accessibilityLabel={"logo"}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => navigation.navigate("More")}
          >
            <Text style={styles.loginbuttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signUpbutton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signUpbuttonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.orSignup}>
            <View style={styles.line} />
            <Text style={styles.orSignupText}>Or Login with</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                style={styles.socialIcon}
                source={require("../img/fb.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                style={styles.socialIcon}
                source={require("../img/google.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                style={styles.socialIcon}
                source={require("../img/twitter.png")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footerRow}>
            <Text style={styles.agreeText}>
              By creating an account, I agree to Travely's{" "}
              <Text style={styles.link}>Terms of Use</Text> and{" "}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = {
  image: {
    width: 208,
    height: 41,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    height: 844,
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
    position: "absolute",
    top: 60,
  },
  formContainer: {
    width: "80%",
    paddingTop: 10,
  },
  label: {
    // fontWeight: '600',
    fontSize: 16,
    marginBottom: 8,
    letterSpacing: 2,
    fontFamily: "Lato_900Black",
  },
  input: {
    borderRadius: 15,
    backgroundColor: "#f1f1f1",
    padding: 10,
    marginBottom: 20,
  },
  loginbutton: {
    backgroundColor: "#ED203E",
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  signUpbutton: {
    backgroundColor: "#f1f1f1",
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  loginbuttonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 16,
    fontFamily: "Lato_900Black",
  },
  signUpbuttonText: {
    color: "black",
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 16,
    fontFamily: "Lato_900Black",
  },
  orSignup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#A39797",
  },
  orSignupText: {
    color: "#A39797",
    fontSize: 11,
    marginHorizontal: 10,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    marginBottom: 16,
  },
  socialButton: {
    marginHorizontal: 25,
  },
  socialIcon: {
    width: 32,
    height: 33,
  },
  footerRow: {
    marginBottom: -60,
  },
  agreeText: {
    fontSize: 11,
    padding: 20,
    textAlign: "center",
  },
  link: {
    color: "#ED203E",
  },
};

export default LoginScreen;
