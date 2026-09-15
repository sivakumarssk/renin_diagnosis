import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  bg: '#F4F8F8',
  card: '#FFFFFF',
  primary: '#1E5A54',
  primaryLight: '#0EA5A0',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  border: '#EEF1F1',
  star: '#F5A623',
};

type InfoRow = {
  id: string;
  label: string;
  value: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

const infoRows: InfoRow[] = [
  { id: '1', label: 'Qualification', value: 'MBBS, MD (Cardiology)', icon: 'certificate-outline' },
  { id: '2', label: 'Experience', value: '8+ Years', icon: 'briefcase-outline' },
  { id: '3', label: 'Consultation Fee', value: '₹500', icon: 'cash' },
  { id: '4', label: 'Hospital/Clinic', value: 'City Hospital Clinic', icon: 'hospital-building' },
  { id: '5', label: 'Languages', value: 'English, Hindi', icon: 'translate' },
];

export default function DoctorProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      {/* Header */}
      <SafeAreaView style={styles.headerSafeArea} edges={['top']}>
        <View style={styles.header}>
          {/* Back arrow returns to the previous screen (Home) */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.avatarWrap}>
          <Image
            source={require('../assets/images/doctor-profile.png')}
            style={styles.avatar}
          />
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.bodyContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.name}>Dr. Rahul Sharma</Text>
        <Text style={styles.specialty}>Cardiologist</Text>

        <View style={styles.ratingRow}>
          <FontAwesome name="star" size={14} color={COLORS.star} />
          <Text style={styles.ratingText}>4.2 (26 Reviews)</Text>
        </View>

        <View style={styles.infoList}>
          {infoRows.map((row) => (
            <View key={row.id} style={styles.infoRow}>
              <View style={styles.infoIconWrap}>
                <MaterialCommunityIcons name={row.icon} size={18} color={COLORS.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.infoLabel}>{row.label}</Text>
                <Text style={styles.infoValue}>{row.value}</Text>
              </View>
            </View>
          ))}

          <View style={styles.infoRow}>
            <View style={styles.infoIconWrap}>
              <Ionicons name="person-outline" size={18} color={COLORS.primary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.infoLabel}>About</Text>
              <Text style={styles.aboutText}>
                I am a Cardiologist with 8+ years of experience in treating heart-related
                diseases.
              </Text>
            </View>
          </View>
        </View>

        {/* Edit Profile navigates to the Edit Profile screen */}
        <TouchableOpacity
          style={styles.editButton}
          activeOpacity={0.85}
          onPress={() => router.push('/edit-profile')}
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  headerSafeArea: {
    backgroundColor: COLORS.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrap: {
    alignItems: 'center',
    paddingBottom: 36,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    backgroundColor: '#E5EAEA',
  },
  body: {
    flex: 1,
    marginTop: -24,
    backgroundColor: COLORS.bg,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bodyContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 32,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'InterBold',
    fontSize: 18,
    color: COLORS.textDark,
    marginTop: 4,
  },
  specialty: {
    fontFamily: 'InterRegular',
    fontSize: 13,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  ratingText: {
    fontFamily: 'InterMedium',
    fontSize: 12,
    color: COLORS.textMuted,
    marginLeft: 6,
  },
  infoList: {
    width: '100%',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  infoIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#E6F1F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  infoLabel: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 2,
  },
  infoValue: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: COLORS.textDark,
  },
  aboutText: {
    fontFamily: 'InterRegular',
    fontSize: 13,
    color: COLORS.textDark,
    lineHeight: 18,
  },
  editButton: {
    width: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  editButtonText: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});