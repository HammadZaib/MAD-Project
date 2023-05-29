import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("./logo.png")}
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
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          keyboardType="Last-Name"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="Email"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
    width: 300,
    height: 40,
    padding: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ED203E",
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    letterSpacing: 2,
    fontSize: 14,
  },
});

export default SignupScreen;
