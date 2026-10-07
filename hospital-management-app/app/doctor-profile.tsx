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

export default function DoctorProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
  <View style={styles.leftHeader}>
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons
        name="arrow-back"
        size={20}
        color="#222"
      />
    </TouchableOpacity>

    <Text style={styles.headerTitle}>
      Doctor Details
    </Text>
  </View>

  <TouchableOpacity>
    <Ionicons
      name="ellipsis-vertical"
      size={13}
      color="#222"
    />
  </TouchableOpacity>
</View>

        {/* Doctor */}
        <View style={styles.profileSection}>
          <Image
            source={ require('../assets/images/renuka1.png')}
            style={styles.profileImage}
          />

          <Text style={styles.doctorName}>
            Dr. Renuka Sharma
          </Text>

          <Text style={styles.specialty}>
            Cardiologist
          </Text>

          <View style={styles.availableRow}>
            <View style={styles.greenDot} />

            <Text style={styles.availableText}>
              Available
            </Text>
          </View>
        </View>

        {/* Information */}
        <View style={styles.infoCard}>
          <InfoRow
            icon="briefcase-outline"
            title="Experience"
            value="10 Years"
          />

          <InfoRow
            icon="school-outline"
            title="Specialist"
            value="MBBS, MD"
          />

          <InfoRow
            icon="cash-outline"
            title="Consultation Fee"
            value="₹500"
          />

          <InfoRow
            icon="time-outline"
            title="OPD Hours"
            value="09:00 AM - 05:00 PM"
          />

          <InfoRow
            icon="call-outline"
            title="Phone"
            value="+91 9876543210"
          />

          <InfoRow
            icon="mail-outline"
            title="Email"
            value="renuka@hospital.com"
          />
        </View>

        {/* Manage Time Slots */}
        <TouchableOpacity
          style={styles.manageButton}
          onPress={() => router.push('/manage-slots')}
        >
          <Text style={styles.manageButtonText}>
            Manage Time Slots
          </Text>
        </TouchableOpacity>

        {/* Edit */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>
            Edit Doctor
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({
  icon,
  title,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
}) {
  return (
    <View style={styles.infoRow}>
      <Ionicons
        name={icon}
        size={24}
        color="#555"
      />

      <Text style={styles.infoTitle}>
        {title}
      </Text>

      <Text style={styles.infoValue}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 65,
  },

  header: {
  height: 25,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 35,
},

leftHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},

headerTitle: {
  fontSize: 15,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 8,
},
  profileSection: {
    alignItems: 'center',
    marginBottom: 12,
  },

  profileImage: {
    width: 142,
    height: 142,
    borderRadius: 30,
    marginBottom: 9,
    resizeMode:'contain'
  },

  doctorName: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  specialty: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    marginTop: 1,
  },

  availableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },

  greenDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#31A567',
    marginRight: 3,
    marginBottom:15
  },

  availableText: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    color: '#31A567',
    marginBottom:15
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E4E3',
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginBottom: 25,
    height:366
  },

  infoRow: {
    minHeight: 54.4,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EDF1F1',
  },

  infoTitle: {
    width: 72,
    fontSize: 11,
    fontFamily: 'InterSemiBold',
    // color: '#555',
    marginLeft: 15,
  },

  infoValue: {
    flex: 1,
    fontSize: 9,
    fontFamily: 'InterMedium',
    color: '#333',
    textAlign: 'right',
  },

  manageButton: {
    height: 46,
    backgroundColor: '#2F6364',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom:13
  },

  manageButtonText: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

  editButton: {
    height: 46,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#004A92',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 6,
  },

  editButtonText: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#004A92',
  },

});