import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";
// import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn.shopify.comhttps://cdn.shopify.com/s/files/1/1464/0726/files/gslogo_410x.png?v=1614308413/s/files/1/1464/0726/files/gslogo_410x.png?v=1614308413",
          }}
          resizeMode="contain"
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
        <View style={styles.forgotRememberContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.rememberContainer}>
            <TouchableOpacity style={styles.checkbox} />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
        </View>
        <TouchableHighlight
          style={styles.loginButton}
          underlayColor="#ed203fd8"
          onPress={() => {
            // Handle login button press
          }}
        >
          <Text style={styles.loginbuttonText}>Login</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.signUpButton}>
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
              source={require("./fb.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={require("./google.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={require("./twitter.png")}
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
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 41,
  },
  formContainer: {
    width: "80%",
    paddingTop: 70,
  },
  label: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderRadius: 15,
    backgroundColor: "#f1f1f1",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 16,
  },
  loginButton: {
    borderRadius: 15,
    alignItems: "center",
    padding: 8,
    marginBottom: 16,
    backgroundColor: "#ED203E",
    linearGradient: ["#ED203E", "#ed203fd8"],
  },
  signUpButton: {
    backgroundColor: "#f1f1f1",
    borderRadius: 15,
    alignItems: "center",
    padding: 8,
    marginBottom: 16,
  },
  loginbuttonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 14,
  },
  signUpbuttonText: {
    color: "black",
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 14,
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
    marginBottom: 16,
  },
  socialButton: {
    marginHorizontal: 8,
  },
  socialIcon: {
    width: 32,
    height: "auto",
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
  forgotRememberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: "#ED203E",
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#ED203E",
    marginRight: 8,
  },
  rememberText: {
    color: "#ED203E",
  },
};

export default LoginScreen;
