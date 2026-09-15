import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

type MenuItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
  route?: string;
};

const HEALTH_ITEMS: MenuItem[] = [
  {
    key: 'personal',
    label: 'Personal Information',
    icon: <Feather name="user" size={18} color="#317070" />,
    bg: '#E7F3F1',
  },
  {
    key: 'medical',
    label: 'Medical History',
    icon: <MaterialCommunityIcons name="pill" size={18} color="#8B6CD9" />,
    bg: '#EFEBFF',
  },
  {
    key: 'prescriptions',
    label: 'Prescriptions',
    icon: <Feather name="file-text" size={18} color="#3B7DD8" />,
    bg: '#EAF1FF',
  },
  {
    key: 'reports',
    label: 'Reports',
    icon: <Feather name="clipboard" size={18} color="#D8A13B" />,
    bg: '#FFF3E0',
    route: '/reports',
  },
  {
    key: 'appointments',
    label: 'Appointments',
    icon: <Feather name="calendar" size={18} color="#3B9BD8" />,
    bg: '#E6F4FB',
  },
];

const SUPPORT_ITEMS: MenuItem[] = [
  {
    key: 'payments',
    label: 'Payments & Invoices',
    icon: <MaterialCommunityIcons name="credit-card-outline" size={18} color="#317070" />,
    bg: '#E7F3F1',
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <Feather name="settings" size={18} color="#3B7DD8" />,
    bg: '#EAF1FF',
  },
  {
    key: 'help',
    label: 'Help & Support',
    icon: <Feather name="headphones" size={18} color="#8B6CD9" />,
    bg: '#EFEBFF',
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <Feather name="log-out" size={18} color="#E14D5A" />,
    bg: '#FDEDEE',
  },
];

export default function Profile() {
  const handlePress = (item: MenuItem) => {
    if (item.key === 'logout') {
      router.replace('/login');
      return;
    }
    if (item.route) {
      router.push(item.route as any);
    }
  };

  return (
    <View style={styles.container}>

      {/* =========================
          HEADER
      ========================== */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* =========================
            USER CARD
        ========================== */}
        <View style={styles.userCard}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.userAvatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Revathi Raj</Text>
            <View style={styles.phoneRow}>
              <Feather name="phone" size={12} color="#666" />
              <Text style={styles.userPhone}>+91 987456321</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editButton}>
            <Feather name="edit-2" size={12} color="#FFFFFF" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* =========================
            MY HEALTH
        ========================== */}
        <Text style={styles.sectionTitle}>My Health</Text>

        <View style={styles.menuGroup}>
          {HEALTH_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={styles.menuRow}
              onPress={() => handlePress(item)}
            >
              <View style={[styles.menuIconWrap, { backgroundColor: item.bg }]}>
                {item.icon}
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={18} color="#BBB" />
            </TouchableOpacity>
          ))}
        </View>

        {/* =========================
            ACCOUNT & SUPPORT
        ========================== */}
        <Text style={styles.sectionTitle}>Account & Support</Text>

        <View style={styles.menuGroup}>
          {SUPPORT_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={styles.menuRow}
              onPress={() => handlePress(item)}
            >
              <View style={[styles.menuIconWrap, { backgroundColor: item.bg }]}>
                {item.icon}
              </View>
              <Text
                style={[
                  styles.menuLabel,
                  item.key === 'logout' && { color: '#E14D5A' },
                ]}
              >
                {item.label}
              </Text>
              {item.key !== 'logout' && (
                <Ionicons name="chevron-forward" size={18} color="#BBB" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 35,
    paddingBottom: 20,
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 20,
    color: '#1A1A1A',
  },

  /* USER CARD */
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 14,
    marginBottom: 24,
    borderColor: '#00000040',
    borderWidth: 1,
  },

  userAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 29,
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
    marginBottom: 4,
  },

  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userPhone: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },

  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#317070',
    borderRadius: 12,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },

  editButtonText: {
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
    fontSize: 11,
    marginLeft: 5,
  },

  /* SECTION TITLE */
  sectionTitle: {
    fontFamily: 'InterBold',
    fontSize: 17,
    color: '#1A1A1A',
    marginHorizontal: 16,
    marginBottom: 15,
  },

  /* MENU */
  menuGroup: {
    marginHorizontal: 16,
    marginBottom: 24,
  },

  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },

  menuIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  menuLabel: {
    flex: 1,
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#1A1A1A',
  },
});