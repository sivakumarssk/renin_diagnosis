import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      

      <View style={styles.card}>

        {/* Doctor Image */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/doctor.png')}
            style={styles.doctorImage}
            resizeMode="contain"
          />

          <Text style={styles.doctorText}>Doctor App</Text>
        </View>

        {/* Mobile / Email */}
        <Text style={styles.label}>
          Mobile Number / Email Address
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={15}
            color="#555"
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <Text style={styles.label}>
          Password
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={15}
            color="#555"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={
                showPassword
                  ? 'eye-outline'
                  : 'eye-off-outline'
              }
              size={15}
              color="#555"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity
          style={styles.forgotContainer}
        >
          <Text style={styles.forgotText}>
            Forget Password ?
          </Text>
        </TouchableOpacity>

        {/* Login */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.replace('/(tabs)/home')}
        >
          <Text style={styles.loginText}>
            Login
          </Text>
        </TouchableOpacity>

        {/* Continue */}
        <View style={styles.orContainer}>
          <View style={styles.line} />

          <Text style={styles.orText}>
            or continue with
          </Text>

          <View style={styles.line} />
        </View>

        {/* Register */}
        <View style={styles.registerContainer}>
          <Text style={styles.accountText}>
            Don't have an account?{' '}
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/register')}
          >
            <Text style={styles.registerText}>
              Register Now
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  topText: {
    alignSelf: 'flex-start',
    marginTop: 35,
    marginLeft: 24,
    fontFamily: 'InterRegular',
    fontSize: 14,
    color: '#D6D6D6',
  },

  card: {
   flex: 1,
width: '100%',
    // marginTop: 10,
    backgroundColor: '#F2FAF9',
    paddingHorizontal: 18,
    paddingTop: 45,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 45,
    marginTop:40
  },

  doctorImage: {
    width: 139,
    height: 139,
  },

  doctorText: {
    marginTop: 5,
    fontFamily: 'InterMedium',
    fontSize: 16,
    color: '#111111',
  },

  label: {
    fontFamily: 'InterMedium',
    fontSize: 16,
    color: '#111111',
    marginBottom: 15,
  },

  inputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: '#A1A1A1',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    marginBottom: 12,
    backgroundColor: '#F8FCFB',
  },

  input: {
    flex: 1,
    marginLeft: 6,
    fontFamily: 'InterRegular',
    fontSize: 15,
    color: '#222222',
    paddingVertical: 0,
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: -2,
    marginBottom: 35,
  },

  forgotText: {
    fontFamily: 'InterBold',
    fontSize: 12,
    color: '#003D79',
  },

  loginButton: {
    height: 46,
    width:296,
    backgroundColor: '#2F6364',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:15
  },

  loginText: {
    fontFamily: 'InterMedium',
    fontSize: 16,
    color: '#FFFFFF',
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#004A92',
  },

  orText: {
    marginHorizontal: 9,
    fontFamily: 'InterRegular',
    fontSize: 16,
    color: '#003D79',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  accountText: {
    fontFamily: 'InterRegular',
    fontSize: 15,
    color: '#2F6364',
  },

  registerText: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#004766',
  },
});