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

const hospital = {
  logo: require('../assets/images/hospital.png'),
  tagline: 'Hosital management application',
  name: 'Apollo Hospital',
  phone: '+91 9874451230',
  email: 'abcdiagnostics@gmail.com',
  address: 'Jubilee Hills, Road No. 36,\nHyderabad, Telangana - 500033',
  workingHours: '7:00 AM - 8:00 PM\nMon - Sun',
  type: 'Multi- Speciality',
  about:
    'Hospital is a multi-speciality Hospital providing world-class Healthcare services.',
};

export default function HospitalProfile() {
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

          <Text style={styles.headerTitle}>Hospital Profile</Text>

          <View style={{ width: 16 }} />
        </View>

        {/* Logo + tagline */}
        <View style={styles.logoWrap}>
          <Image source={hospital.logo} style={styles.logo} />
          <Text style={styles.tagline}>{hospital.tagline}</Text>
        </View>

        {/* Info card */}
        <View style={styles.infoCard}>
          <InfoRow
            icon="business-outline"
            label="Hospital Name"
            value={hospital.name}
          />
          <InfoRow
            icon="call-outline"
            label="Phone number"
            value={hospital.phone}
          />
          <InfoRow
            icon="mail-outline"
            label="Email Addresss"
            value={hospital.email}
          />
          <InfoRow
            icon="location-outline"
            label="Address"
            value={hospital.address}
          />
          <InfoRow
            icon="time-outline"
            label="Working Hours"
            value={hospital.workingHours}
          />
          <InfoRow
            icon="medkit-outline"
            label="Hospital Type"
            value={hospital.type}
          />
          <InfoRow
            icon="information-circle-outline"
            label="About Hospital"
            value={hospital.about}
            last
          />
        </View>

        {/* Edit profile */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoRow({
  icon,
  label,
  value,
  last,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <View style={[styles.infoRow, last && { borderBottomWidth: 0 }]}>
      <View style={styles.infoLeft}>
        <Ionicons name={icon} size={16} color="#2F6364" />
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
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
    paddingBottom: 40,
  },

  header: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  headerTitle: {
    fontSize: 18,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  logoWrap: {
    alignItems: 'center',
    marginBottom: 24,
  },

  logo: {
    width: 102,
    height: 71,
    borderRadius: 12,
    marginBottom: 10,
  },

  tagline: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    // color: '#264849',
    marginBottom:20
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 16,
    paddingHorizontal: 14,
    marginBottom: 24,
    height:583.4

  },

  infoRow: {
    minHeight: 80,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
    gap: 10,
  },

  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexShrink: 1,
  },

  infoLabel: {
    fontSize: 14,
    fontFamily: 'InterMedium',
    // color: '#264849',
    flexShrink: 1,
  },

  infoValue: {
    fontSize: 11,
    fontFamily: 'InterRegular',
    color: '#222',
    textAlign: 'right',
    flex: 1,
  },

  editButton: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2F6364',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  editButtonText: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#2F6364',
  },
});