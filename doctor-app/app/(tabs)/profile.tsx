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
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  bg: '#F4F8F8',
  card: '#FFFFFF',
  primary: '#1E5A54',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  border: '#EEF1F1',
};

type MenuItem = {
  id: string;
  label: string;
  icon: keyof typeof Feather.glyphMap;
  route?: string;
};

const menuItems: MenuItem[] = [
  { id: '1', label: 'Earnings', icon: 'trending-up', route: '/earnings' },
  { id: '2', label: 'Manage availability', icon: 'calendar', route: '/manage-availability' },
  { id: '3', label: 'Settings', icon: 'settings' },
  { id: '4', label: 'Notifications', icon: 'bell' },
  { id: '5', label: 'Security', icon: 'shield' },
  { id: '6', label: 'Help', icon: 'help-circle' },
  { id: '7', label: 'Logout', icon: 'log-out' },
];

export default function ProfileMenuScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      {/* Header */}
      <View style={styles.header}>
        {/* Back arrow returns to the previous screen (Home) */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color={COLORS.textDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Doctor card */}
        {/* Doctor card */}
<View style={styles.doctorCard}>
  <View style={styles.doctorCardRow}>

    {/* Doctor Image and Details */}
    <View style={styles.doctorProfileSection}>
      <Image
        source={require('../../assets/images/doctor-profile.png')}
        style={styles.avatar}
      />

      <Text style={styles.doctorName}>Dr. Rahul Shake</Text>
      <Text style={styles.doctorSpecialty}>Cardiologist</Text>
    </View>

    {/* Edit Profile Button */}
    <TouchableOpacity
      style={styles.editButton}
      activeOpacity={0.85}
      onPress={() => router.push('/doctor-profile')}
    >
      <Feather name="edit-2" size={18} color="#FFFFFF" />
      <Text style={styles.editButtonText}>Edit Profile</Text>
    </TouchableOpacity>

  </View>
</View>

        {/* Menu list */}
        <View style={styles.menuCard}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuRow,
                index === menuItems.length - 1 && { borderBottomWidth: 0 },
              ]}
              activeOpacity={0.7}
              onPress={() => {
                if (item.route) {
                  router.push(item.route as any);
                }
              }}
            >
              <View style={styles.menuLeft}>
                <Feather name={item.icon} size={18} color={COLORS.textDark} />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={COLORS.textMuted}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: COLORS.textDark,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },
doctorCard: {
  backgroundColor: COLORS.card,
  borderRadius: 18,
  paddingHorizontal: 20,
  paddingVertical: 16,
  marginBottom: 20,
  height: 140,
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
},

doctorCardRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
},

doctorProfileSection: {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
},

avatar: {
  width: 79,
  height: 79,
  borderRadius: 48,
  backgroundColor: '#E5EAEA',
  marginBottom: 6,
},

doctorName: {
  fontFamily: 'InterSemiBold',
  fontSize: 13,
  color: COLORS.primary,
  textAlign: 'center',
},

doctorSpecialty: {
  fontFamily: 'InterRegular',
  fontSize: 8,
  color: COLORS.textDark,
  marginTop: 2,
  textAlign: 'center',
},

editButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS.primary,
  borderRadius: 16,
  paddingVertical: 14,
  paddingHorizontal: 18,
  marginLeft: 10,
},

editButtonText: {
  fontFamily: 'InterMedium',
  fontSize: 16,
  color: '#FFFFFF',
  marginLeft: 8,
},
  menuCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    height:630,
    borderColor:'#00000040',
    borderWidth:1
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLabel: {
    fontFamily: 'InterMedium',
    fontSize: 16,
    color: COLORS.textDark,
    marginLeft: 14,
  },
});