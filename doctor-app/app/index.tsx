import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
     
      <View style={styles.content}>
        <Image
          source={require('../assets/images/doctor.png')}
          style={styles.doctorImage}
          resizeMode="contain"
        />

        <Text style={styles.title}>Doctor APP</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  doctorImage: {
    width: 189,
    height: 189,
  },

  title: {
    marginTop: 25,
    fontFamily: 'InterSemiBold',
    fontSize: 15,
    color: '#111111',
  },
});