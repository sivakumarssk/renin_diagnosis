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

const schedule = [
  {
    time: '01:00 PM',
    patient: 'Revathi R',
    age: 'Age 36',
    status: 'Confirmed',
  },
  {
    time: '02:00 PM',
    patient: 'Revathi R',
    age: 'Age 30',
    status: 'Confirmed',
  },
  {
    time: '03:00 PM',
    patient: 'Revathi R',
    age: 'Age 25',
    status: 'Confirmed',
  },
];

export default function DoctorDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons
              name="arrow-back"
              size={13}
              color="#222"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            View Patient Details
          </Text>

          <TouchableOpacity style={styles.moreButton}>
            <Ionicons
              name="ellipsis-vertical"
              size={13}
              color="#222"
            />
          </TouchableOpacity>
        </View>

        {/* Doctor Information */}
        <View style={styles.doctorSection}>
          <Image
            source={require('../assets/images/doctor.png')}
            style={styles.doctorImage}
          />

          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>
              Dr. Rahul Sharma
            </Text>

            <Text style={styles.specialty}>
              General Physician
            </Text>
          </View>
        </View>

        {/* Appointment Summary */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <Ionicons
              name="people-outline"
              size={43}
              color="#4E9A9A"
            />
          </View>

          <View style={styles.summaryDetails}>
            <Text style={styles.summaryTitle}>
              Total Appointments Today
            </Text>

            <Text style={styles.summaryNumber}>4</Text>

            <Text style={styles.nextAppointment}>
              Next Appointment: 01:00 PM
            </Text>
          </View>
        </View>

        {/* Schedule */}
        <Text style={styles.scheduleTitle}>
          Today's Schedule
        </Text>

        {schedule.map((item, index) => (
          <View
            key={index}
            style={styles.scheduleCard}
          >
            {/* Time */}
            <View style={styles.timeContainer}>
              <Text style={styles.time}>
                {item.time}
              </Text>
            </View>

            {/* Patient */}
            <View style={styles.patientDetails}>
              <Text style={styles.patientName}>
                {item.patient}
              </Text>

              <Text style={styles.patientAge}>
                {item.age}
              </Text>

              <Text style={styles.status}>
                {item.status}
              </Text>
            </View>

            {/* View Details */}
            <TouchableOpacity
              style={styles.viewDetailsButton}
            >
              <Text style={styles.viewDetailsText}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 14,
    paddingBottom: 65,
  },

  /* Header */

  header: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  backButton: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginLeft: 45,

  },

  moreButton: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Doctor */

  doctorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginLeft: 8,
    marginRight: 15,
  },

  doctorInfo: {
    flex: 1,
  },

  doctorName: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 2,
  },

  specialty: {
    fontSize: 10,
    fontFamily: 'InterRegular',
    // color: '#555',
  },

  /* Summary */

  summaryCard: {
    height: 98,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#A9D4D2',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 25,
  },

  summaryIcon: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#EEF8F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },

  summaryDetails: {
    flex: 1,
  },

  summaryTitle: {
    fontSize: 14,
    fontFamily: 'InterMedium',
    // color: '#555',
  },

  summaryNumber: {
    fontSize: 15,
    fontFamily: 'InterBold',
    color: '#286B6B',
    marginTop: 1,
  },

  nextAppointment: {
    fontSize: 10,
    fontFamily: 'InterRegular',
    // color: '#777',
  },

  /* Schedule */

  scheduleTitle: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 20,
  },

  scheduleCard: {
    minHeight: 104,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E5E4',
    borderRadius:24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 6,
    marginBottom:15,
  },

  timeContainer: {
    width: 42,
  },

  time: {
    fontSize: 13,
    fontFamily: 'InterBold',
    color: '#333',
    lineHeight: 13,
  },

  patientDetails: {
    flex: 1,
    marginLeft: 35,
  },

  patientName: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  patientAge: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    color: '#777',
    marginTop: 1,
  },

  status: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    color: '#018410',
    marginTop: 8,
    backgroundColor:'#DBFFDF',
    width:70,
    height:27,
    textAlign:'center'
  },

  viewDetailsButton: {
    height: 36,
    minWidth: 48,
    paddingHorizontal: 7,
    borderRadius: 12,
    backgroundColor: '#286B6B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  viewDetailsText: {
    fontSize: 10,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },
});