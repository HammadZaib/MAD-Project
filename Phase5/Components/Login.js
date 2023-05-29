import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';


const LoginScreen = ({navigation}) => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
                source={require('../img/logo.png')}
                style={styles.image}
                accessible={true}
                accessibilityLabel={'logo'}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
              source={require('../img/fb.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={require('../img/google.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              style={styles.socialIcon}
              source={require('../img/twitter.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footerRow}>
          <Text style={styles.agreeText}>
            By creating an account, I agree to Travely's{' '}
            <Text style={styles.link}>Terms of Use</Text> and{' '}
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 390,
    height: 844,
    backgroundColor:'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  formContainer: {
    width: '80%',
    paddingTop: 70,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderRadius: 15,
    backgroundColor: '#f1f1f1',
    padding: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#ED203E',
    borderRadius: 15,
    alignItems: 'center',
    padding: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    letterSpacing: 2,
    fontSize: 14,
  },
  orSignup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A39797',
  },
  orSignupText: {
    color: '#A39797',
    fontSize: 11,
    marginHorizontal: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    textAlign: 'center',
  },
  link: {
    color: '#ED203E',
  },
};

export default LoginScreen;