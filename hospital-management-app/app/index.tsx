import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/auth/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/hospital.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Hospital Management App
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 166,
    height: 117,
    marginBottom: 18,
  },

  title: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#174C4C',
    textAlign: 'center',
  },
});