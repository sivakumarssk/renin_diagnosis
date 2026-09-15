import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const photoOpacity = useRef(new Animated.Value(0)).current;
  const photoScale = useRef(new Animated.Value(1.05)).current;

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.sequence([
      // STAGE 1: photo fades in
      Animated.parallel([
        Animated.timing(photoOpacity, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(photoScale, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]),

      // hold briefly on the photo
      Animated.delay(2500),

      // STAGE 2: cross-fade photo -> outline logo
      Animated.parallel([
        Animated.timing(photoOpacity, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // navigate to login once the splash sequence finishes
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 8200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* =========================
          GRADIENT BACKGROUND
          (white top -> teal bottom)
      ========================== */}
      {/* <LinearGradient
        colors={['#FFFFFF', '#FFFFFF', '#7FBFBD', '#0B4F4A']}
        locations={[0, 0.35, 0.7, 1]}
        style={styles.gradient}
      > */}
      <View style={styles.gradient}>

        {/* STAGE 1: realistic photo banner */}
        <Animated.Image
          source={require('../assets/images/microscope.gif')}
          style={[
            styles.photoImage,
            {
              opacity: photoOpacity,
              // transform: [{ scale: photoScale }],
              transform: [
  { scale: photoScale },
  { scaleX: -1 },
],
            },
          ]}
          resizeMode="cover"
        />

        {/* STAGE 2: outline logo, settles centered */}
        <Animated.View
          style={[
            styles.logoWrapper,
            {
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            },
          ]}
        >
          <Image
            source={require('../assets/images/microscope-second.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </Animated.View>

      {/* </LinearGradient> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* =========================
     STAGE 1: PHOTO BANNER
  ========================== */

 
 photoImage: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: height * 0.275,
  width: width,
  height: height * 0.30,
   backgroundColor: 'transparent',
},

  /* =========================
     STAGE 2: OUTLINE LOGO
  ========================== */

  logoWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoImage: {
    width: 140,
    height: 140,
  },
});
