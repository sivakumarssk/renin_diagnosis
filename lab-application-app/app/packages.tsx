import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export type PackageItem = {
  id: string;
  name: string;
  testsCount: number;
  price: string;
  image?: any; // require('...') or { uri: '...' } — optional
  fallbackIcon?: keyof typeof Ionicons.glyphMap; // used when no image is available
  iconColor?: string; // color for the fallback icon
  iconBg: string;
  tests: string[];
};

// Replace with real data from your API / store.
// Put your image files in assets/images/ and require() them here,
// or use { uri: 'https://...' } if they come from a URL.
// If you don't have an image yet, omit `image` and set `fallbackIcon` instead.
export const PACKAGES: PackageItem[] = [
  {
    id: 'basic-health',
    name: 'Basic Health Package',
    testsCount: 5,
    price: '₹1,499',
    fallbackIcon: 'heart-outline',
    iconColor: '#7A4FE0',
    iconBg: '#EFE8FC',
    tests: ['CBC', 'Blood Sugar (F)', 'Lipid Profile', 'Urine Routine', 'ECG'],
  },
  {
    id: 'thyroid',
    name: 'Thyroid Package',
    testsCount: 3,
    price: '₹3,999',
    image: require('../assets/images/thyroid.png'),
    iconBg: '#FCE8EE',
    tests: [
      'CBC',
      'Blood Sugar (F)',
      'Lipid Profile',
      'Thyroid Profile',
      'Liver Function Test (LFT)',
    ],
  },
  {
    id: 'diabetes',
    name: 'Diabetis Package',
    testsCount: 3,
    price: '₹1,199',
    image: require('../assets/images/urine.png'),
    iconBg: '#FCEEE4',
    tests: ['Blood Sugar (F)', 'Blood Sugar (PP)', 'HbA1c'],
  },
  {
    id: 'full-body',
    name: 'Full Body Package',
    testsCount: 3,
    price: '₹899',
    image: require('../assets/images/sugar.png'),
    iconBg: '#E5F3FC',
    tests: ['CBC', 'Blood Sugar (F)', 'Lipid Profile'],
  },
];

export default function PackagesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Packages and Services</Text>

        <View style={{ width: 20 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {PACKAGES.map((pkg) => (
  <TouchableOpacity
    key={pkg.id}
    style={styles.card}
    disabled={pkg.id !== 'thyroid'}
    onPress={() => {
      if (pkg.id === 'thyroid') {
        router.push({
          pathname: '/package-details',
          params: { id: pkg.id },
        });
      }
    }}
  >
    <View style={[styles.iconBox, { backgroundColor: pkg.iconBg }]}>
      {pkg.image ? (
        <Image
          source={pkg.image}
          style={styles.iconImage}
          resizeMode="contain"
        />
      ) : (
        <Ionicons
          name={pkg.fallbackIcon ?? 'medkit-outline'}
          size={20}
          color={pkg.iconColor ?? '#555'}
        />
      )}
    </View>

    <View style={styles.info}>
      <Text style={styles.name}>{pkg.name}</Text>
      <Text style={styles.sub}>
        Includes {pkg.testsCount} Tests
      </Text>
    </View>

    <Text style={styles.price}>{pkg.price}</Text>
  </TouchableOpacity>
))}

        <TouchableOpacity
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+ Add Package</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FAF9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom:20
  },

  headerTitle: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  content: {
    padding: 14,
    paddingBottom: 40,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DADADA',
    padding: 12,
    marginBottom: 15,
    height:92
  },

  iconBox: {
    width: 62,
    height: 62,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight:15
  },

  iconImage: {
    width: 38,
    height: 42,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  sub: {
    fontSize: 13,
    fontFamily: 'InterRegular',
    // color: '#888',
    marginTop: 3,
  },

  price: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  addButton: {
    backgroundColor: '#2F6364',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 80,
  },

  addButtonText: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#FFF',
  },
});