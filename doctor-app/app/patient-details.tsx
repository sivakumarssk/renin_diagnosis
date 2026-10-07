import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
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

const COLORS = {
  bg: '#F4F8F8',
  card: '#FFFFFF',
  primary: '#1E5A54',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  border: '#EEF1F1',
};

type InfoRow = {
  id: string;
  icon: keyof typeof Feather.glyphMap;
  text: string;
};

type MenuRow = {
  id: string;
  icon: keyof typeof Feather.glyphMap;
  label: string;
  route?: string;
};

const menuRows: MenuRow[] = [
  { id: '1', icon: 'file-text', label: 'Medical History', route: '/medical-history' },
  { id: '2', icon: 'activity', label: 'Health Data' },
  { id: '3', icon: 'clipboard', label: 'Reports' },
];

export default function PatientDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string; name?: string }>();

  // Fallback demo data — replace with a real lookup by params.id when you
  // have a patients data source.
  const name = params.name || 'Ravi Kumar';
  const infoRows: InfoRow[] = [
    { id: '1', icon: 'phone', text: '+91852956410' },
    { id: '2', icon: 'mail', text: 'revathi@g12gmail.com' },
    { id: '3', icon: 'map-pin', text: 'Hyderabad, kukatpally' },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      {/* Header */}
     <View style={styles.header}>
  <View style={styles.leftHeader}>
    <TouchableOpacity
      onPress={() => router.back()}
      style={styles.backButton}
    >
      <Ionicons
        name="arrow-back"
        size={22}
        color={COLORS.textDark}
      />
    </TouchableOpacity>

    <Text style={styles.headerTitle}>Patient Details</Text>
  </View>

  <View style={styles.headerRight} />
</View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Avatar + name */}
        <View style={styles.profileBlock}>
          <Image
            source={require('../assets/images/patient1.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subInfo}>32 Yrs, Male</Text>
        </View>

        {/* Patient information */}
        <Text style={styles.sectionLabel}>Patient Information</Text>
        <View style={styles.infoCard}>
          {infoRows.map((row, index) => (
            <View
              key={row.id}
              style={[
                styles.infoRow,
                index === infoRows.length - 1 && { borderBottomWidth: 0 },
              ]}
            >
              <Feather name={row.icon} size={16} color={COLORS.primary} />
              <Text style={styles.infoText}>{row.text}</Text>
            </View>
          ))}
        </View>

        {/* Menu rows */}
        <View style={styles.menuCard}>
          {menuRows.map((row, index) => (
            <TouchableOpacity
              key={row.id}
              style={[
                styles.menuRow,
                index === menuRows.length - 1 && { borderBottomWidth: 0 },
              ]}
              activeOpacity={0.7}
              onPress={() => {
                if (row.route) {
                  router.push(row.route as any);
                }
              }}
            >
              <View style={styles.menuLeft}>
                <Feather name={row.icon} size={18} color={COLORS.textDark} />
                <Text style={styles.menuLabel}>{row.label}</Text>
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
  fontFamily: 'InterSemiBold',
  fontSize: 16,
  color: COLORS.textDark,
  marginLeft: 4,
},

headerRight: {
  width: 22,
},

  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },
  profileBlock: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 36,
    // backgroundColor: '#E5EAEA',
    marginBottom: 10,
  },
  name: {
    fontFamily: 'InterBold',
    fontSize: 16,
    color: COLORS.textDark,
  },
  subInfo: {
    fontFamily: 'InterRegular',
    fontSize: 13,
    // color: COLORS.textMuted,
    marginTop: 2,
  },
  sectionLabel: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: COLORS.textDark,
    marginBottom: 10,
  },
  infoCard: {
    height:157,
    borderColor:'#00000040',
    borderWidth:1,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    // borderBottomWidth: 1,
    // borderBottomColor: COLORS.border,
  },
  infoText: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: COLORS.textDark,
    marginLeft: 12,
  },
  menuCard: {
    height:261.5,
    borderColor:'#FFF0F0',
    borderWidth:1,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 28,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
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