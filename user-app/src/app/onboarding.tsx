import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import Svg, {
  Path,
  Polygon,
  Rect,
} from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: '🩺... Book Appointments Easily',
    image: require('../assets/images/appointment.png'),
  },
  {
    title: '📄... Access Medical Reports Anytime',
    image: require('../assets/images/medical reports.png'),
  },
  {
    title: '🧪 Schedule Lab Tests & Home Sample Collection',
    image: require('../assets/images/labtest.png'),
  },
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);

  const handleContinue = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      router.replace('/login');
    }
  };

  const handleSkip = () => {
    router.replace('/login');
  };

  const slide = slides[current];

  return (
    <View style={styles.container}>

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <View style={StyleSheet.absoluteFill}>

        <Svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >

          {/* -------------------------------
              WHITE BACKGROUND
          -------------------------------- */}
          <Rect
            x="0"
            y="0"
            width={width}
            height={height}
            fill="#FFFFFF"
          />

          {/* -------------------------------
              LIGHT TOP GEOMETRIC SHAPE
          -------------------------------- */}
          <Polygon
            points={`
              0,0
              ${width * 0.72},0
              ${width * 0.48},${height * 0.18}
              ${width * 0.12},${height * 0.10}
            `}
            fill="#FAFAFA"
          />

          {/* -------------------------------
              LIGHT RIGHT DIAMOND
          -------------------------------- */}
          <Polygon
            points={`
              ${width * 0.72},0
              ${width},${height * 0.10}
              ${width},${height * 0.35}
              ${width * 0.53},${height * 0.18}
            `}
            fill="#F8F8F8"
          />

          {/* -------------------------------
              LARGE LIGHT DIAGONAL SHAPE
          -------------------------------- */}
          <Polygon
            points={`
              ${width * 0.34},${height * 0.50}
              ${width * 0.58},${height * 0.40}
              ${width * 0.98},${height * 0.76}
              ${width * 0.70},${height * 0.91}
            `}
            fill="#FCFCFC"
          />

          {/* -------------------------------
              BOTTOM LIGHT GEOMETRIC SHAPE
          -------------------------------- */}
          <Polygon
            points={`
              0,${height * 0.67}
              ${width * 0.36},${height * 0.53}
              ${width * 0.73},${height * 0.91}
              ${width * 0.50},${height}
              0,${height}
            `}
            fill="#FBFBFB"
          />

          {/* -------------------------------
              VERY LIGHT DIAGONAL LINE
          -------------------------------- */}
          <Polygon
            points={`
              ${width * 0.78},${height * 0.70}
              ${width},${height * 0.55}
              ${width},${height * 0.59}
              ${width * 0.82},${height * 0.76}
            `}
            fill="#F9F9F9"
          />

          {/* =================================================
              TEAL TOP WAVE
          ================================================== */}

          <Path
            d={`
              M 0 0
              L ${width} 0
              L ${width} ${height * 0.045}

              C
              ${width * 0.90} ${height * 0.045},
              ${width * 0.78} ${height * 0.12},
              ${width * 0.67} ${height * 0.15}

              C
              ${width * 0.55} ${height * 0.19},
              ${width * 0.45} ${height * 0.11},
              ${width * 0.33} ${height * 0.10}

              C
              ${width * 0.20} ${height * 0.09},
              ${width * 0.10} ${height * 0.13},
              0 ${height * 0.16}

              Z
            `}
            fill="#48BFC0"
          />

          {/* -------------------------------
              SUBTLE WAVE HIGHLIGHT
          -------------------------------- */}
          <Path
            d={`
              M 0 ${height * 0.145}

              C
              ${width * 0.12} ${height * 0.105},
              ${width * 0.20} ${height * 0.075},
              ${width * 0.34} ${height * 0.085}

              C
              ${width * 0.46} ${height * 0.095},
              ${width * 0.54} ${height * 0.17},
              ${width * 0.67} ${height * 0.135}

              C
              ${width * 0.81} ${height * 0.095},
              ${width * 0.89} ${height * 0.035},
              ${width} ${height * 0.035}

              L ${width} ${height * 0.055}

              C
              ${width * 0.88} ${height * 0.055},
              ${width * 0.79} ${height * 0.13},
              ${width * 0.67} ${height * 0.16}

              C
              ${width * 0.53} ${height * 0.195},
              ${width * 0.45} ${height * 0.12},
              ${width * 0.33} ${height * 0.11}

              C
              ${width * 0.20} ${height * 0.10},
              ${width * 0.10} ${height * 0.14},
              0 ${height * 0.17}

              Z
            `}
            fill="#55C8C9"
            opacity={0.45}
          />

        </Svg>
      </View>

      {/* =====================================================
          CENTER ILLUSTRATION
      ====================================================== */}

      <View style={styles.imageContainer}>
        <Image
          source={slide.image}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <View style={styles.content}>

        {/* TITLE */}
        <Text style={styles.title}>
          {slide.title}
        </Text>

        {/* =================================================
            DOTS
        ================================================== */}

        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === current && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* =================================================
            CONTINUE BUTTON
        ================================================== */}

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          activeOpacity={0.85}
        >
          <Text style={styles.continueText}>
            Continue
          </Text>
        </TouchableOpacity>

        {/* =================================================
            SKIP BUTTON
        ================================================== */}

        <TouchableOpacity
          style={styles.skipButton}
          onPress={handleSkip}
          activeOpacity={0.85}
        >
          <Text style={styles.skipText}>
            Skip
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  /* =====================================================
     MAIN
  ====================================================== */

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* =====================================================
     IMAGE
  ====================================================== */

  imageContainer: {
    position: 'absolute',

    top: height * 0.17,

    left: 0,
    right: 0,

    height: height * 0.35,

    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 5,
  },

  image: {
    width: width * 0.70,
    height: height * 0.32,
  },

  /* =====================================================
     CONTENT
  ====================================================== */

  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: height * 0.52,
    alignItems: 'center',
    paddingHorizontal: width * 0.12,
    zIndex: 10,
  },

  /* =====================================================
     TITLE
  ====================================================== */

 title: {
  color: '#2B6969',
  fontSize: 15,
  lineHeight: 24,
  fontFamily: 'InterMedium',
  textAlign: 'center',
  letterSpacing: 0.1,
},

  /* =====================================================
     DOTS
  ====================================================== */

  dotsContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 20,

    gap: 10,
  },

  dot: {
    width: 15,
    height: 15,

    borderRadius: 8,

    borderWidth: 1,

    borderColor: '#49AFCB',

    backgroundColor: '#FFFFFF',
  },

  activeDot: {
    backgroundColor: '#269D9B',

    borderColor: '#269D9B',
  },

  /* =====================================================
     CONTINUE BUTTON
  ====================================================== */

  continueButton: {
    width: width * 0.68,

    height: 48,

    marginTop: height * 0.115,

    borderRadius: 14,

    backgroundColor: '#347E7E',

    alignItems: 'center',

    justifyContent: 'center',

    elevation: 2,
  },

    continueText: {
  color: '#FFFFFF',
  fontSize: 14,
  fontFamily: 'InterMedium',
},

  /* =====================================================
     SKIP BUTTON
  ====================================================== */

  skipButton: {
    width: width * 0.68,

    height: 50,

    marginTop: 32,

    borderRadius: 14,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: '#BDBDBD',

    alignItems: 'center',

    justifyContent: 'center',
  },

 skipText: {
  color: '#555555',
  fontSize: 13,
  fontFamily: 'InterMedium',
},
});