import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import axios from "axios";

const SignupScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Perform validation checks
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.log("Please fill in all the required fields");
      return;
    }

    if (password !== confirmPassword) {
      console.log("Password does not match");
      return;
    }

    // Send user data to the server
    axios
      .post("http://localhost:5000/api/signup", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log("User registered successfully");
        navigation.navigate("Login");
        // Add any additional logic or navigation after successful registration
      })
      .catch((error) => {
        console.log("Error saving user:", error.message);
        // Handle the error and display an appropriate message to the user
      });
  };

  return (
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
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          keyboardType="First-Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          keyboardType="Last-Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View>
          <Text style={styles.PassText}>Atleast 8 characters</Text>
          <Text style={styles.PassText}>Contains a digit/special character</Text>
        </View>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSignUp();
            
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.footerRow}>
          <Text style={styles.agreeText}>
            By creating an account, I agree to Travely’s{" "}
            <Text style={styles.link}>Terms of Use</Text> and{" "}
            <Text style={styles.link}>Privacy Policy.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  formContainer: {
    width: "80%",
    paddingTop: 57,
  },
  label: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderRadius: 15,
    backgroundColor: "#f1f1f1",
    width: 300,
    height: 40,
    padding: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ED203E",
    borderRadius: 15,
    width: 300,
    alignItems: "center",
    padding: 10,
    marginBottom: 16,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 14,
  },
  PassText: {
    color: "#A39797",
    fontSize: 11,
    marginBottom: 10,
  },
  footertext: {
    height: 40,
    width: 320,
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
});

export default SignupScreen;
