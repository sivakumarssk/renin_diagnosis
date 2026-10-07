import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

type MenuItem = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
};

const menuItems: MenuItem[] = [
  { icon: 'grid-outline', label: 'Departments' ,onPress: () => router.push('/departments'),},
  { icon: 'person-outline', label: 'Hospital Profile', onPress: () => router.push('/hospital-profile'), },
  { icon: 'location-outline', label: 'Hospital Location',onPress: () => router.push('/hospital-location'), },
  { icon: 'settings-outline', label: 'Settings' },
  { icon: 'log-out-outline', label: 'Logout' },
  { icon: 'help-circle-outline', label: 'Help' },
];

export default function More() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
       <View style={styles.header}>
  <View style={styles.leftHeader}>
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => router.back()}
    >
      <Ionicons name="arrow-back" size={20} color="#222" />
    </TouchableOpacity>

    <Text style={styles.headerTitle}>
      More
    </Text>
  </View>

  <View style={styles.headerRight} />
</View>

        {/* Menu list */}
        <View style={styles.menuCard}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.label}
              style={[
                styles.menuRow,
                index === menuItems.length - 1 && { borderBottomWidth: 0 },
              ]}
              onPress={item.onPress}
            >
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon} size={18} color="#2F6364" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#9AA5A5" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <NavItem icon="home-outline" label="Home" />
        <NavItem icon="medkit-outline" label="Doctor" />
        <NavItem icon="calendar-outline" label="Appointments" />
        <NavItem icon="ellipsis-horizontal" label="More" active />
      </View>
    </SafeAreaView>
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

headerTitle: {
  fontSize: 18,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 4,
},

headerRight: {
  width: 22,
},

  menuCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFF0F0',
    borderRadius: 12,
    paddingHorizontal: 14,
    height:453.75,
    marginTop:30
  },

  menuRow: {
    minHeight: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  menuLabel: {
    fontSize: 16,
    fontFamily: 'InterMedium',
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