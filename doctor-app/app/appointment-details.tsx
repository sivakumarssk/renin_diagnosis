import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AppointmentDetails() {
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
        size={20}
        color="#1B1F23"
      />
    </TouchableOpacity>

    <Text style={styles.title}>Appointments Details</Text>
  </View>

  <View style={styles.headerRight} />
</View>

        {/* Patient Card */}
        <View style={styles.patientCard}>
          <Image
            source={require('../assets/images/priya.png')}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.patientName}>Priya Kumar</Text>
            <Text style={styles.patientInfo}>32 Yrs, Female</Text>
          </View>
        </View>

        {/* Consultation */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="videocam-outline" size={16} color="#1E5A54" />
            <Text style={styles.cardTitle}>Video Consultation</Text>
          </View>

          <Text style={styles.label}>Schedule</Text>
          <Text style={styles.value}>17 Aug 2026, Monday</Text>

          <Text style={styles.label}>10:00 AM</Text>
        </View>

        {/* Patient Information */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Patient Information</Text>

          <Text style={styles.infoText}>📞 +91852956410</Text>
          <Text style={styles.infoText}>✉️ Priyathis@gmail.com</Text>
          <Text style={styles.infoText}>📍 Hyderabad, Kukatpally</Text>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => router.push('./video-consultation')}
        >
          <Text style={styles.buttonText}>Start Consultation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
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
  fontSize: 14,
  marginLeft: 4,
},

headerRight: {
  width: 22,
},
  patientCard: {
    height:111,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#83C5C0',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 21,
    marginRight: 12,
  },
  patientName: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
  },
  patientInfo: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    // color: '#6B7280',
  },
  card: {
    height:113,
    borderColor:'#00000040',
    borderWidth:1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontFamily: 'InterSemiBold',
    fontSize: 13,
    marginLeft: 6,
  },
  label: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    // color: '#6B7280',
    marginTop: 4,
  },
  value: {
    fontFamily: 'InterRegular',
    fontSize: 9,
  },
  infoText: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    marginTop: 10,
  },
  startButton: {
    height:42,
    width:307,
    backgroundColor: '#1E5A54',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 40,
    marginLeft:15
  },
  buttonText: {
    fontFamily: 'InterMedium',
    color: '#FFFFFF',
    fontSize: 11,
  },
  cancelButton: {
     height:42,
    width:307,
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 16,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    marginLeft:15
  },
  cancelText: {
    fontFamily: 'InterMedium',
    fontSize: 11,
  },
});