import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function RegisterScreen() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <View style={styles.card}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.replace('/login')}
          >
            <Ionicons
              name="arrow-back"
              size={17}
              color="#111111"
            />
          </TouchableOpacity>

          <Text style={styles.title}>
            Registration
          </Text>

          <View style={{ width: 17 }} />
        </View>

        {/* Phone */}
        <Text style={styles.label}>
          <Ionicons name="call-outline" size={15} color="#252525" />
          {'  '}Phone number 
                </Text>

        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        {/* Email */}
        <Text style={styles.label}>
          <Ionicons name="mail-outline" size={15} color="#252525" />
          {'  '}Email Address
        </Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
        <Text style={styles.label}>
          <Ionicons name="lock-closed-outline" size={15} color="#252525" />
          {'  '}Password
        </Text>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
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
            //   color="#555"
            />
          </TouchableOpacity>
        </View>

        {/* Terms */}
        <TouchableOpacity
          style={styles.termsContainer}
          onPress={() => setAgree(!agree)}
        >
          <Ionicons
            name={
              agree
                ? 'checkbox'
                : 'square-outline'
            }
            size={18}
            color="#258C55"
          />

          <Text style={styles.termsText}>
             I agree to the{' '}
          </Text>

          <Text style={styles.termsLink}>
            Terms and Conditions
          </Text>
        </TouchableOpacity>

        {/* Create Account */}
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.replace('/(tabs)/home')}
        >
          <Text style={styles.createText}>
            Creative Account
          </Text>
        </TouchableOpacity>

        {/* Login */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginLabel}>
            Already have an account?{' '}
          </Text>

          <TouchableOpacity
            onPress={() => router.replace('/login')}
          >
            <Text style={styles.loginLink}>
              Login
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

  card: {
  flex:1,
  width:'100%',
    backgroundColor: '#F2FAF9',
    paddingHorizontal: 9,
    paddingTop: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 80,
  },

  title: {
    fontFamily: 'InterMedium',
    fontSize: 22,
    color: '#111111',
  },

  label: {
    fontFamily: 'InterMedium',
    fontSize: 16,
    color: '#111111',
    marginBottom: 12,
  },

  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 15,
    marginBottom: 13,
    paddingHorizontal: 9,
    fontFamily: 'InterRegular',
    fontSize: 11,
    backgroundColor: '#FFFFFF',
  },

  passwordContainer: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 11,
    backgroundColor: '#FFFFFF',
  },

  passwordInput: {
    flex: 1,
    fontFamily: 'InterRegular',
    fontSize: 11,
  },

  termsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  termsText: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    color: '#5D5D5D',
  },

  termsLink: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: '#0052C7',
  },

  createButton: {
    height: 46,
    width: 296,
    alignSelf: 'center',
    backgroundColor: '#2F6364',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginLeft:15
  },

  createText: {
    fontFamily: 'InterMedium',
    fontSize: 16,
    color: '#FFFFFF',
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },

  loginLabel: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    color: '#2F6364',
  },

  loginLink: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#004766',
  },
});