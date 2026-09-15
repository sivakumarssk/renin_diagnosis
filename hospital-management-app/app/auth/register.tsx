import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Register() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={14}
              color="#111"
            />
          </TouchableOpacity>

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>
              Create Hospital Account
            </Text>

            <Text style={styles.headerSubtitle}>
              Register your Hospital
            </Text>
          </View>
        </View>

        {/* Hospital Name */}
        <View style={styles.inputSection}>
          <View style={styles.labelRow}>
            <Ionicons
              name="business-outline"
              size={18}
              color="#444"
            />
            <Text style={styles.label}>Hospital Name</Text>
          </View>

          <TextInput style={styles.input} />
        </View>

        {/* Email */}
        <View style={styles.inputSection}>
          <View style={styles.labelRow}>
            <Ionicons
              name="mail-outline"
              size={18}
              color="#444"
            />
            <Text style={styles.label}>Email Address</Text>
          </View>

          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Phone */}
        <View style={styles.inputSection}>
          <View style={styles.labelRow}>
            <Ionicons
              name="call-outline"
              size={18}
              color="#444"
            />
            <Text style={styles.label}>Phone number</Text>
          </View>

          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        {/* Address */}
        <View style={styles.inputSection}>
          <View style={styles.labelRow}>
            <Ionicons
              name="location-outline"
              size={18}
              color="#444"
            />
            <Text style={styles.label}>Hospital Address</Text>
          </View>

          <TextInput style={styles.input} />
        </View>

        {/* Password */}
        <View style={styles.inputSection}>
          <View style={styles.labelRow}>
            <Ionicons
              name="lock-closed-outline"
              size={18}
              color="#444"
            />
            <Text style={styles.label}>Password</Text>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry
            />

            <Ionicons
              name="eye-off-outline"
              size={18}
              color="#555"
            />
          </View>
        </View>

        {/* Confirm Password */}
        <View style={styles.inputSection}>
          <View style={styles.labelRow}>
            <Ionicons
              name="lock-closed-outline"
              size={18}
              color="#444"
            />
            <Text style={styles.label}>Confirm Password</Text>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry
            />

            <Ionicons
              name="eye-off-outline"
              size={18}
              color="#555"
            />
          </View>
        </View>

        {/* Terms */}
        <View style={styles.termsContainer}>
          <Ionicons
            name="checkbox-outline"
            size={18}
            color="#239B5A"
          />

          <Text style={styles.termsText}>
            I agree to the{' '}
          </Text>

          <TouchableOpacity>
            <Text style={styles.termsLink}>
              Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>

        {/* Create Account */}
       <TouchableOpacity
  style={styles.createButton}
  onPress={() => router.replace('/home')}
>
  <Text style={styles.createButtonText}>
    Create Account
  </Text>
</TouchableOpacity>

        {/* Login */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?
          </Text>

          <TouchableOpacity
            onPress={() => router.replace('/auth/login')}
          >
            <Text style={styles.loginLink}>
              {' '}Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 23,
    paddingTop: 49,
    paddingBottom: 25,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  backButton: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },

  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 18,
  },

  headerTitle: {
    fontSize: 16,
    fontFamily: 'InterBold',
    color: '#111',
    marginBottom: 3,
  },

  headerSubtitle: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    color: '#444',
    marginBottom:6
  },

  inputSection: {
    marginBottom: 7,
  },

  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 12,
  },

  label: {
    fontSize: 16,
    fontFamily: 'InterMedium',
    color: '#333',
    marginBottom:8
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#A9D6D5',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 7,
    fontSize: 8,
    fontFamily: 'InterRegular',
    color: '#222',
    marginBottom:8
  },

  passwordContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: '#A9D6D5',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
  },

  passwordInput: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    fontSize: 8,
    fontFamily: 'InterRegular',
    color: '#222',
    marginBottom:10
  },

  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginBottom: 20,
  },

  termsText: {
    fontSize: 14,
    fontFamily: 'InterRegular',
    color: '#555',
    marginLeft: 3,
  },

  termsLink: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#0052C7',
  },

  createButton: {
    height: 46,
    backgroundColor: '#286B6B',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },

  createButtonText: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  loginText: {
    fontSize: 16,
    fontFamily: 'InterRegular',
    color: '#555',
  },

  loginLink: {
    fontSize: 14,
    fontFamily: 'InterBold',
    color: '#167878',
  },
});