import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { PACKAGES } from './packages';

export default function PackageDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const pkg = PACKAGES.find((p) => p.id === id) ?? PACKAGES[0];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Tests</Text>

        <View style={{ width: 20 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={[styles.iconBox, { backgroundColor: pkg.iconBg }]}>
          <Image
            source={pkg.image}
            style={styles.iconImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.name}>{pkg.name}</Text>

        <Text style={styles.includesTitle}>Includes Tests</Text>

        <View style={styles.testsCard}>
          {pkg.tests.map((test, index) => (
            <View
              key={test}
              style={[
                styles.testRow,
                // index !== pkg.tests.length - 1 && styles.testRowBorder,
              ]}
            >
              <Ionicons name="checkmark" size={20} color="#018410" />
              <Text style={styles.testLabel}>{test}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>Edit Package</Text>
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
    marginBottom:30
  },

  headerTitle: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  content: {
    padding: 14,
    paddingBottom: 40,
    alignItems: 'center',
  },

  iconBox: {
    width: 85,
    height: 85,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },

  iconImage: {
    width: 60,
    height: 63,
  },

  name: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 18,
  },

  includesTitle: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#333',
    // alignSelf: 'flex-start',
    marginBottom: 8,
    textAlign:'center',
    justifyContent:'center'

  },

  testsCard: {
    width: 271,
    height:255,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00000040',
    paddingHorizontal: 14,
    marginBottom: 30,
  },

  testRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 8,
  },

 

  testLabel: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginLeft:13
  },

  editButton: {
    width: 296,
    height:50,
    borderWidth: 1,
    borderColor: '#2F6364',
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
  },

  editButtonText: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#2F6364',
  },
});