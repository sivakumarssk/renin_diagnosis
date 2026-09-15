import React, { useState } from 'react';
import {
  Image,
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

export default function RegisterScreen() {
  const [agree, setAgree] = useState(false);

  const [labName, setLabName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={20}
              color="#222"
            />
          </TouchableOpacity>

          {/* Logo & Title */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/lab-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>
              Register Your Lab
            </Text>
          </View>

          {/* Lab Name */}
          <Field
            label="Lab Name"
            icon="business-outline"
            value={labName}
            onChangeText={setLabName}
          />

          {/* Email */}
          <Field
            label="Email Address"
            icon="mail-outline"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Phone */}
          <Field
            label="Phone Number"
            icon="call-outline"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          {/* Address */}
          <Field
            label="Hospital Address"
            icon="location-outline"
            value={address}
            onChangeText={setAddress}
          />

          {/* Password */}
          <PasswordField
            label="Password"
            value={password}
            onChangeText={setPassword}
            show={showPassword}
            setShow={setShowPassword}
          />

          {/* Confirm Password */}
          <PasswordField
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            show={showConfirm}
            setShow={setShowConfirm}
          />

          {/* Terms */}
          <TouchableOpacity
            style={styles.terms}
            onPress={() => setAgree(!agree)}
          >
            <View
              style={[
                styles.checkbox,
                agree && styles.checked,
              ]}
            >
              {agree && (
                <Ionicons
                  name="checkmark"
                  size={12}
                  color="#FFF"
                />
              )}
            </View>

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
            onPress={handleRegister}
          >
            <Text style={styles.buttonText}>
              Create Account
            </Text>
          </TouchableOpacity>

          {/* Login */}
          <View style={styles.loginRow}>
            <Text style={styles.smallText}>
              Already have an account?{' '}
            </Text>

            <TouchableOpacity
              onPress={() => router.replace('/login')}
            >
              <Text style={styles.link}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- FIELD ---------------- */

function Field({
  label,
  icon,
  value,
  onChangeText,
  keyboardType,
}: {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
}) {
  return (
    <View style={styles.fieldContainer}>
      <View style={styles.labelRow}>
        <Ionicons
          name={icon}
          size={17}
          color="#555"
        />

        <Text style={styles.label}>
          {label}
        </Text>
      </View>

      <TextInput
        style={styles.inputBox}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={`Enter ${label}`}
        placeholderTextColor="#999"
      />
    </View>
  );
}

/* ---------------- PASSWORD FIELD ---------------- */

function PasswordField({
  label,
  value,
  onChangeText,
  show,
  setShow,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  show: boolean;
  setShow: (value: boolean) => void;
}) {
  return (
    <View style={styles.fieldContainer}>
      <View style={styles.labelRow}>
        <Ionicons
          name="lock-closed-outline"
          size={17}
          color="#555"
        />

        <Text style={styles.label}>
          {label}
        </Text>
      </View>

      <View style={styles.passwordBox}>
        <TextInput
          style={styles.passwordInput}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!show}
          placeholder={label}
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          onPress={() => setShow(!show)}
          style={styles.eyeButton}
        >
          <Ionicons
            name={show ? 'eye-outline' : 'eye-off-outline'}
            size={18}
            color="#555"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FAF9',
  },

  content: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 30,
  },

  card: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#F2FAF9',
    paddingHorizontal: 25,
    paddingVertical: 25,
  },

  /* Back */

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop:-60
  },

  /* Logo */

  logoContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },

  logo: {
    width: 116,
    height: 116,
  },

  title: {
    marginTop: 2,
    fontSize: 20,
    fontFamily: 'InterSemiBold',
    color: '#111',
    marginBottom:20
  },


  /* Fields */

  fieldContainer: {
    marginBottom: 14,
  },


labelRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 12,
},

label: {
  fontSize: 13,
  fontFamily: 'InterMedium',
  color: '#333',
  marginLeft: 7,
  // marginBottom:12
},

inputBox: {
  height: 48,
  borderWidth: 1,
  borderColor: '#83C5C0',
  borderRadius: 15,
  backgroundColor: '#FFF',
  paddingHorizontal: 12,
  fontSize: 13,
  fontFamily: 'InterRegular',
  color: '#222',
  marginBottom:10
},

passwordBox: {
  height: 48,
  borderWidth: 1,
  borderColor: '#83C5C0',
  borderRadius: 15,
  backgroundColor: '#FFF',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 12,
  marginBottom:10
},

passwordInput: {
  flex: 1,
  height: '100%',
  fontSize: 13,
  fontFamily: 'InterRegular',
  color: '#222',
},

eyeButton: {
  padding: 5,
},

  input: {
    flex: 1,
    height: '100%',
    fontSize: 13,
    fontFamily: 'InterRegular',
    marginLeft: 9,
    color: '#222',
  },


  /* Terms */

  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 50,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#36A56F',
    borderRadius: 3,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checked: {
    backgroundColor: '#36A56F',
  },

  termsText: {
    fontSize: 11,
    fontFamily: 'InterRegular',
    color: '#444',
  },

  termsLink: {
    fontSize: 11,
    fontFamily: 'InterSemiBold',
    color: '#1761A0',
  },

  /* Button */

  createButton: {
    height: 46,
    width:296,
    borderRadius: 15,
    backgroundColor: '#2F6B6B',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:15
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'InterSemiBold',
  },

  /* Login */

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },

  smallText: {
    fontSize: 11,
    fontFamily: 'InterRegular',
    color: '#555',
  },

  link: {
    fontSize: 11,
    fontFamily: 'InterSemiBold',
    color: '#1761A0',
  },
});