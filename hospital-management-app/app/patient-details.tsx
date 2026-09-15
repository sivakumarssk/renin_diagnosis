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

const patient = {
  name: 'Revathi Raj',
  patientId: 'PT12567',
  phone: '+91 9874653210',
  photo: require('../assets/images/revathi.png'),
  age: 26,
  gender: 'Female',
  email: 'revathi.d16@gmail.com',
  bloodGroup: 'O+',
  medicalHistory: true,
  reports: true,
  notes: 'No Notes',
};

export default function PatientDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={16} color="#222" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>View Patient Details</Text>

          <Ionicons name="ellipsis-vertical" size={16} color="#222" />
        </View>

        {/* Patient summary */}
        <View style={styles.patientCard}>
          <Image source={patient.photo} style={styles.avatar} />

          <View style={styles.patientInfo}>
            <Text style={styles.patientName}>{patient.name}</Text>
            <Text style={styles.patientMeta}>
              Patient ID: {patient.patientId}
            </Text>
            <View style={styles.phoneRow}>
              <Ionicons name="call-outline" size={11} color="#666" />
              <Text style={styles.patientSub}>{patient.phone}</Text>
            </View>
          </View>
        </View>

        {/* Personal information */}
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoCard}>
          <InfoRow label="Age / Gender" value={`${patient.age} / ${patient.gender}`} />
          <InfoRow label="Phone" value={patient.phone} />
          <InfoRow label="Email" value={patient.email} />
          <InfoRow label="Blood Group" value={patient.bloodGroup}  />
        </View>

        {/* Medical information */}
        <Text style={styles.sectionTitle}>Medical Information</Text>
        <View style={styles.infoCard}>
          <View style={styles.actionRow}>
            <Text style={styles.actionLabel}>Medical History</Text>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionRow}>
            <Text style={styles.actionLabel}>Reports</Text>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.actionRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.actionLabel}>Notes</Text>
            <Text style={styles.notesText}>{patient.notes}</Text>
          </View>
        </View>

        {/* Close */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <NavItem icon="home-outline" label="Home" />
        <NavItem icon="medkit-outline" label="Doctor" />
        <NavItem icon="calendar-outline" label="Appointments" active />
        <NavItem icon="ellipsis-horizontal" label="More" />
      </View>
    </SafeAreaView>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

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
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },

  header: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  headerTitle: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  patientCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E4E3',
    borderRadius: 12,
    padding: 12,
    marginBottom: 28,
    height:101,
  },

  avatar: {
    width: 77,
    height: 77,
    borderRadius: 22,
    marginRight: 25,
  },

  patientInfo: {
    flex: 1,
  },

  patientName: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  patientMeta: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    // color: '#9AA5A5',
    marginTop: 2,
  },

  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },

  patientSub: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    // color: '#666',
  },

  sectionTitle: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 10,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E4E3',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 20,
    height:218
  },

  infoRow: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: '#EDF1F1',
  },

  infoLabel: {
    fontSize: 15,
    fontFamily: 'InterMedium',
    color: '#264849',
  },

  infoValue: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    // color: '#2F6364',
    textAlign: 'right',
  },

  actionRow: {
    minHeight: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: '#EDF1F1',
  },

  actionLabel: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#2F6364',
  },

  viewButton: {
    borderWidth: 1,
    borderColor: '#D6E4E3',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },

  viewButtonText: {
    fontSize: 11,
    fontFamily: 'InterSemiBold',
    color: '#252525',
  },

  notesText: {
    fontSize: 10.5,
    fontFamily: 'InterMedium',
    color: '#252525',
  },

  closeButton: {
    height: 40,
    width:175,
    borderRadius: 12,
    backgroundColor: '#2F6364',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft:90,
    marginBottom:100
  },

  closeButtonText: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

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
    fontSize: 10,
    fontFamily: 'InterMedium',
    color: '#9AA5A5',
  },

  navLabelActive: {
    color: '#2F6364',
    fontFamily: 'InterSemiBold',
  },
});