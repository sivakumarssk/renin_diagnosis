import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Hospital Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/hospital.png')}
            style={styles.hospitalImage}
            resizeMode="contain"
          />
        </View>

        {/* Welcome */}
        <Text style={styles.welcomeText}>
          Welcome Back!
        </Text>

        {/* Email */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>
            Email Address
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={16}
              color="#555"
              style={styles.inputIcon}
            />

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>
        </View>

        {/* Password */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>
            Password
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={16}
              color="#555"
              style={styles.inputIcon}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.input}
            />

            <Ionicons
              name="eye-off-outline"
              size={16}
              color="#555"
            />
          </View>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity
          style={styles.forgotButton}
        >
          <Text style={styles.forgotText}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>

        {/* Login */}
        <TouchableOpacity
  style={styles.loginButton}
  onPress={() => router.replace('/home')}
>
  <Text style={styles.loginButtonText}>Login</Text>
</TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />

          <Text style={styles.orText}>
            or continue with
          </Text>

          <View style={styles.divider} />
        </View>

        {/* Google */}
        <TouchableOpacity
          style={styles.googleButton}
          activeOpacity={0.8}
        >
          <Text style={styles.googleText}>
            G
          </Text>

          <Text style={styles.googleButtonText}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Register */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Don't have an account?
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/auth/register')}
          >
            <Text style={styles.registerLink}>
              {' '}Register Now
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 55,
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  hospitalImage: {
    width: 166,
    height: 117,
    borderRadius:29
  },

  welcomeText: {
    fontSize: 17,
    fontFamily: 'InterBold',
    color: '#111',
    textAlign: 'center',
    marginBottom: 30,
  },

  inputSection: {
    marginBottom: 9,
  },

  label: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    color: '#222',
    marginBottom: 6,
  },

  inputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: '#B7C8C7',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#F7FCFB',
  },

  inputIcon: {
    marginRight: 6,
    width:24,
    height:24
  },

  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    fontFamily: 'InterRegular',
    // color: '#222',
    paddingVertical: 0,
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 1,
    marginBottom: 22,
  },

  forgotText: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    color: '#003D79',
    marginBottom:12
  },

  loginButton: {
    height: 46,
    width:296,
    backgroundColor: '#286B6B',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },

  loginButtonText: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 13,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#004A92',
  },

  orText: {
    fontSize: 16,
    fontFamily: 'InterMedium',
    color: '#003D79',
    marginHorizontal: 10,
  },

  googleButton: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 22,
  },

  googleText: {
    fontSize: 11,
    fontFamily: 'InterBold',
    color: '#4285F4',
    marginRight: 5,
  },

  googleButtonText: {
    fontSize: 8,
    fontFamily: 'InterMedium',
    color: '#176C6C',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerText: {
    fontSize: 14,
    fontFamily: 'InterRegular',
    color: '#555',
  },

  registerLink: {
    fontSize: 14,
    fontFamily: 'InterBold',
    color: '#004766',
  },
});