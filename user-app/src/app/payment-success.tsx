import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function PaymentSuccess() {

  useEffect(() => {
    // Show success screen for 3 seconds
    const timer = setTimeout(() => {
      router.replace('/home' as any);
    }, 3000);

    // Clear timer when screen is removed
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.iconMask}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.icon}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.title}>
        Payment Successfully Done
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  iconMask: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
  },

  icon: {
    width: 150,
    height: 150,
  },

  title: {
    fontFamily: 'InterSemiBold',
    fontSize: 19,
    color: '#1A1A1A',
    textAlign: 'center',
  },
});
