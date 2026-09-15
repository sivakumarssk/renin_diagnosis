import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/images/lab-logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />

              <Text style={styles.appName}>
                Diagnostic Lab APP
              </Text>
            </View>

            {/* Email */}
            <Text style={styles.label}>
              Email Address
            </Text>

            <View style={styles.inputBox}>
              <Ionicons
                name="mail-outline"
                size={17}
                color="#555"
              />

              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#999"
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

            <View style={styles.inputBox}>
              <Ionicons
                name="lock-closed-outline"
                size={17}
                color="#555"
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowPassword(!showPassword)
                }
              >
                <Ionicons
                  name={
                    showPassword
                      ? 'eye-outline'
                      : 'eye-off-outline'
                  }
                  size={17}
                  color="#555"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgot}>
              <Text style={styles.forgotText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Login */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>
                Login
              </Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.line} />

              <Text style={styles.orText}>
                or continue with
              </Text>

              <View style={styles.line} />
            </View>

            {/* Register */}
            <View style={styles.registerRow}>
              <Text style={styles.smallText}>
                Don't have an account?{' '}
              </Text>

              <TouchableOpacity
                onPress={() => router.push('/register')}
              >
                <Text style={styles.link}>
                  Register Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // FULL SCREEN
  container: {
    flex: 1,
    backgroundColor: '#F2FAF9',
  },

  keyboard: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    // paddingBottom:30
  },

  // FULL WIDTH LOGIN AREA
  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#F2FAF9',
    paddingHorizontal: 5,
    paddingVertical: 35,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop:-100
  },

  logo: {
    width: 154,
    height: 154,
  },

  appName: {
    // marginTop: 2,
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#111',
    marginBottom:30
  },

  label: {
    fontSize: 14,
    fontFamily: 'InterMedium',
    color: '#333',
    marginBottom: 7,
  },

  inputBox: {
    height: 52,
    borderWidth: 1,
    borderColor: '#A1A1A1',
    borderRadius: 12,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'InterRegular',
    marginLeft: 8,
    color: '#222',
  },

  forgot: {
    alignItems: 'flex-end',
    marginBottom: 40,
  },

  forgotText: {
    fontSize: 11,
    fontFamily: 'InterMedium',
    color: '#1761A0',
  },

  loginButton: {
    height: 48,
    borderRadius: 8,
    backgroundColor: '#2F6364',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'InterMedium',
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#004A92',
  },

  orText: {
    marginHorizontal: 10,
    fontSize: 13,
    fontFamily: 'InterRegular',
    color: '#003D79',
  },

  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallText: {
    fontSize: 14,
    fontFamily: 'InterRegular',
    color: '#4A6666',
  },

  link: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#1761A0',
  },
});