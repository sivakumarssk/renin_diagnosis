import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function PrescriptionPreview() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.header}>
  <View style={styles.leftHeader}>
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => router.back()}
    >
      <Ionicons
        name="arrow-back"
        size={18}
        color="#1B1F23"
      />
    </TouchableOpacity>

    <Text style={styles.title}>Prescription Preview</Text>
  </View>

  <View style={styles.headerRight} />
</View>

      <View style={styles.doctorCard}>
  <Image
    source={require('../assets/images/doctor-profile.png')}
    style={styles.doctorImage}
  />

  <View>
    <Text style={styles.doctorName}>Dr. Rahul Sharma</Text>
    <Text style={styles.specialization}>Cardiologist</Text>
    <Text style={styles.regNo}>Reg No: 123456</Text>
  </View>
</View>
<View style={styles.prescriptionCard}>
  <View style={styles.section}>
    <Text style={styles.heading}>City Heart Clinic</Text>
    <Text style={styles.text}>Phone: +91 9876543210</Text>
  </View>

  <View style={styles.section}>
    <Text style={styles.heading}>Patient</Text>
    <Text style={styles.text}>Priya Kumar, 32 Yrs, Female</Text>
  </View>

  <View style={styles.section}>
    <Text style={styles.heading}>Diagnosis</Text>
    <Text style={styles.text}>Viral Fever</Text>
  </View>

  <View style={styles.section}>
    <Text style={styles.heading}>Medicines</Text>
    <Text style={styles.text}>1. Paracetamol 500mg</Text>
    <Text style={styles.text}>1 Tablet, Twice a day 3 days</Text>
  </View>

  <View style={[styles.section, styles.lastSection]}>
    <Text style={styles.heading}>Instructions</Text>
    <Text style={styles.text}>1. Take plenty of water</Text>
  </View>
</View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/home')}
        >
          <Text style={styles.buttonText}>Send To Patient</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F8F8',
  },
  container: {
    padding: 20,
  },
 header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 25,
},

leftHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},

backButton: {
  width: 22,
  height: 22,
  alignItems: 'center',
  justifyContent: 'center',
},

title: {
  fontFamily: 'InterSemiBold',
  fontSize: 15,
  marginLeft: 4,
},

headerRight: {
  width: 22,
},
  doctorCard: {
    height:111,
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '#83C5C0',
  padding: 15,
  marginBottom: 15,
  flexDirection: 'row',
  alignItems: 'center',
},

doctorImage: {
  width: 70,
  height: 70,
  borderRadius: 30,
  marginRight: 15,
},
  doctorName: {
    fontFamily: 'InterSemiBold',
    fontSize: 13,
  },
  specialization: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    // color: '#6B7280',
  },
  regNo: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    // color: '#6B7280',
  },
prescriptionCard: {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#00000040',
  borderRadius: 16,
  overflow: 'hidden',
  marginBottom: 15,
  height:477
},

section: {
  backgroundColor: '#FFFFFF',
  paddingHorizontal: 12,
  paddingVertical: 25,
  borderBottomWidth: 1,
  borderBottomColor: '#888888',
},

lastSection: {
  borderBottomWidth: 0,
},
  heading: {
    fontFamily: 'InterSemiBold',
    fontSize: 12,
    marginBottom: 5,
  },
  text: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    // color: '#555555',
  },
  button: {
    backgroundColor: '#1E5A54',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 30,
    height:42,
    width:302,
    marginLeft:15
  },
  buttonText: {
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
    fontSize: 11,
  },
});