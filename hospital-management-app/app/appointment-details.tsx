

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

const appointment = {
  patient: 'Revathi Raj',
  doctorShort: 'Dr. Priya Sharama',
  date: '12 Aug 2026 10AM',
  patientId: 'PT12567',
  photo: require('../assets/images/doctor.png'),

  doctor: 'Dr. Rahul Kumar',
  department: 'Cardiology',
  consultationType: 'In-Clinic',
  appointmentId: 'APT1456799',
  schedule: '12 Aug 2026 | 10:AM',
  status: 'Confirmed',
};

export default function AppointmentDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={18} color="#222" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Appointment Details
          </Text>

          <View style={styles.headerRight} />
        </View>

        {/* Patient Summary Card */}
        <TouchableOpacity
          style={styles.patientCard}
          activeOpacity={0.7}
          onPress={() => router.push('/patient-details')}
        >
          <Image
            source={appointment.photo}
            style={styles.avatar}
          />

          <View style={styles.patientInfo}>
            <Text style={styles.patientName}>
              {appointment.patient}
            </Text>

            <Text style={styles.patientSub}>
              {appointment.doctorShort}
            </Text>

            <Text style={styles.patientMeta}>
              {appointment.date}
            </Text>

            <Text style={styles.patientMeta}>
              Patient ID: {appointment.patientId}
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={18}
            color="#9AA5A5"
          />
        </TouchableOpacity>

        {/* Appointment Details */}
        <View style={styles.detailsContainer}>

          {/* Doctor */}
          <View style={styles.detailCard}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="person-outline"
                size={20}
                color="#555"
              />
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>
                Doctor
              </Text>

              <Text style={styles.detailValue}>
                {appointment.doctor}
              </Text>
            </View>
          </View>

          {/* Department */}
          <View style={styles.detailCard}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="grid-outline"
                size={20}
                color="#555"
              />
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>
                Department
              </Text>

              <Text style={styles.detailValue}>
                {appointment.department}
              </Text>
            </View>
          </View>

          {/* Consultation Type */}
          <View style={styles.detailCard}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="time-outline"
                size={20}
                color="#555"
              />
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>
                Consultation Type
              </Text>

              <Text style={styles.detailValue}>
                {appointment.consultationType}
              </Text>
            </View>
          </View>

          {/* Appointment ID */}
          <View style={styles.detailCard}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="document-text-outline"
                size={20}
                color="#555"
              />
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>
                Appointment ID
              </Text>

              <Text style={styles.detailValue}>
                {appointment.appointmentId}
              </Text>
            </View>
          </View>

          {/* Schedule */}
          <View style={styles.detailCard}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="calendar-outline"
                size={20}
                color="#555"
              />
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>
                Schedule
              </Text>

              <Text style={styles.detailValue}>
                {appointment.schedule}
              </Text>
            </View>
          </View>

          {/* Status */}
          {/* <View style={styles.detailCard}> */}
          <View style={[styles.detailCard, styles.statusCard]}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="information-circle-outline"
                size={20}
                color="#555"
              />
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailTitle}>
                Status
              </Text>

              {/* Only text width gets background */}
              <View style={styles.statusBadge}>
                <Text style={styles.statusBadgeText}>
                  {appointment.status}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.viewPatientButton}
            onPress={() => router.push('/patient-details')}
          >
            <Text style={styles.viewPatientButtonText}>
              View Patient
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>
              Cancel Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem
          icon="home-outline"
          label="Home"
        />

        <NavItem
          icon="medkit-outline"
          label="Doctor"
        />

        <NavItem
          icon="calendar-outline"
          label="Appointments"
          active
        />

        <NavItem
          icon="ellipsis-horizontal"
          label="More"
        />
      </View>
    </SafeAreaView>
  );
}

/* ---------------------------------
   Bottom Navigation Item
---------------------------------- */

function NavItem({
  icon,
  label,
  active,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Ionicons
        name={icon}
        size={20}
        color={active ? '#2F6364' : '#9AA5A5'}
      />

      <Text
        style={[
          styles.navLabel,
          active && styles.navLabelActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

/* ---------------------------------
   Styles
---------------------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 30,
  },

  /* Header */

  header: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 35,
  },

  backButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 17,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  headerRight: {
    width: 30,
  },

  /* Patient Card */

  patientCard: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#83C5C0',

    borderRadius: 16,

    paddingHorizontal: 12,
    paddingVertical: 12,

    marginBottom: 16,

    minHeight: 105,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 22,
    marginRight: 16,
  },

  patientInfo: {
    flex: 1,
  },

  patientName: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 2,
  },

  patientSub: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    color: '#444',
    marginBottom: 3,
  },

  patientMeta: {
    fontSize: 11,
    fontFamily: 'InterMedium',
    color: '#666',
    marginTop: 2,
  },

  /* Appointment Details */

  detailsContainer: {
    gap: 10,
    marginBottom: 33,
  },

  detailCard: {
    minHeight: 56,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#B0B0B0',

    borderRadius: 24,

    paddingHorizontal: 14,
    paddingVertical: 10,
  },
statusCard: {
  borderBottomWidth: 1,
  borderBottomColor: '#B0B0B0',
},
  iconContainer: {
    width: 36,
    height: 36,

    borderRadius: 10,

    backgroundColor: '#F3FAF9',

    alignItems: 'center',
    justifyContent: 'center',
  },

  detailContent: {
    flex: 1,
    marginLeft: 12,

    flexDirection: 'row',
    alignItems: 'center',
  },

  detailTitle: {
    width: 125,

    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#333',
  },

  detailValue: {
    flex: 1,

    fontSize: 11,
    fontFamily: 'InterMedium',
    // color: '#666',

    textAlign: 'right',
  },

  /* Status */

  statusBadge: {
    backgroundColor: '#E5F6EC',

    borderRadius: 6,

    paddingHorizontal: 9,
    paddingVertical: 4,

    alignSelf: 'center',
  },

  statusBadgeText: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    color: '#31A567',
  },

  /* Buttons */

  actionsRow: {
    flexDirection: 'row',
    gap: 10,
  },

  viewPatientButton: {
    flex: 1,

    height: 42,

    borderRadius: 12,

    backgroundColor: '#2F6364',

    alignItems: 'center',
    justifyContent: 'center',
  },

  viewPatientButtonText: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

  cancelButton: {
    flex: 1,

    height: 42,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#D6E4E3',

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButtonText: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    color: '#555',
  },

  /* Bottom Navigation */

  bottomNav: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    borderTopWidth: 1,
    borderTopColor: '#EDF1F1',

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 14,
  },

  navItem: {
    flex: 1,

    alignItems: 'center',

    gap: 3,
  },

  navLabel: {
    fontSize: 9.5,
    fontFamily: 'InterMedium',
    color: '#9AA5A5',
  },

  navLabelActive: {
    color: '#2F6364',
    fontFamily: 'InterSemiBold',
  },
});
