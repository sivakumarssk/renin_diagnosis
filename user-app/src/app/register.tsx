
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Register() {
  return (
    <View style={styles.container}>

      {/* =========================
          HEADER
      ========================== */}
      <View style={styles.header}>

        {/* Decorative geometric shapes (background pattern) */}
        <View style={styles.shapeWrapper} pointerEvents="none">
          <View style={[styles.polygon, styles.polygonOne]} />
          <View style={[styles.polygon, styles.polygonTwo]} />
          <View style={[styles.polygon, styles.polygonThree]} />
          <View style={[styles.polygon, styles.polygonFour]} />
        </View>

        {/* LOGO CIRCLE */}
        <View>
          <Image
            source={require('../assets/images/loginlogo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

      </View>

      {/* =========================
          REGISTER FORM (curved white sheet)
      ========================== */}
      <View style={styles.formWrapper}>
        <View style={styles.form}>

          <Text style={styles.welcome}>
            User Regestration
          </Text>

          <Text style={styles.label}>
            Full Name
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#B0B0B0"
          />

          <Text style={styles.label}>
            Email Address
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#B0B0B0"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
          />

          {/* REGISTER BUTTON */}
         <TouchableOpacity
  style={styles.registerButton}
  onPress={() => router.replace('/home')}
>
  <Text style={styles.registerText}>Register</Text>
</TouchableOpacity>

          <Text style={styles.bottomText}>
            Already have an account?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => router.push('/login')}
            >
              Log in
            </Text>
          </Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B4F4A', // matches header so no seam shows behind the curve
  },

  /* =========================
     HEADER
  ========================== */

  header: {
    height: '35%',
    backgroundColor: '#0B4F4A', // dark teal base
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingBottom: 25,

    overflow: 'hidden', // clips shapes to header bounds
  },

  /* =========================
     DECORATIVE SHAPES
  ========================== */

  shapeWrapper: {
    ...StyleSheet.absoluteFillObject,
  },

  polygon: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    opacity: 0.06,
  },

  polygonOne: {
    width: 160,
    height: 160,
    top: -60,
    right: -40,
    transform: [{ rotate: '35deg' }],
  },

  polygonTwo: {
    width: 120,
    height: 120,
    top: 10,
    right: 60,
    transform: [{ rotate: '20deg' }],
    opacity: 0.05,
  },

  polygonThree: {
    width: 140,
    height: 140,
    top: 90,
    right: -60,
    transform: [{ rotate: '50deg' }],
    opacity: 0.08,
  },

  polygonFour: {
    width: 90,
    height: 90,
    bottom: -30,
    right: 30,
    transform: [{ rotate: '15deg' }],
    opacity: 0.05,
  },

  /* =========================
     LOGO CIRCLE
  ========================== */

 

  logoImage: {
    width: 195,
    height: 195,
     marginLeft: -25,
  marginBottom: -15,
  },


  /* =========================
     CURVED WHITE SHEET
  ========================== */

  formWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -25, // pulls the sheet up over the header's bottom edge

    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },

  /* =========================
     FORM
  ========================== */

  form: {
    paddingHorizontal: width * 0.1,
    paddingTop: 65,
  },

 welcome: {
  fontFamily: 'InterBold',
  textAlign: 'center',
  color: '#222222',
  fontSize: 25,
  marginBottom: 25,
},

label: {
  fontFamily: 'InterMedium',
  fontSize: 15,
  color: '#333333',
  marginBottom: 15,
  marginTop: 19,
},

input: {
  fontFamily: 'InterRegular',
  height: 40,
  borderWidth: 1,
  borderColor: '#DDDDDD',
  borderRadius: 5,
  paddingHorizontal: 10,
  fontSize: 13,
  color: '#6B6B6B',
},

registerText: {
  fontFamily: 'InterMedium',
  color: '#FFFFFF',
  fontSize: 20,
},

bottomText: {
  fontFamily: 'InterRegular',
  textAlign: 'center',
  marginTop: 12,
  fontSize: 12,
  color: '#888888',
},

loginLink: {
  fontFamily: 'InterMedium',
  fontSize: 12,
  color: '#287D7D',
},

  /* =========================
     REGISTER BUTTON
  ========================== */

  registerButton: {
    height: 45,

    marginTop: 35,

    borderRadius: 10,

    backgroundColor: '#287D7D',

    alignItems: 'center',
    justifyContent: 'center',
  },
});