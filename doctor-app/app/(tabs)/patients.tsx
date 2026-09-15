import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';

const COLORS = {
  bg: '#F4F8F8',
  card: '#FFFFFF',
  primary: '#1E5A54',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  border: '#EEF1F1',
  searchBg: '#EAF3F2',
};

type PatientListItem = {
  id: string;
  name: string;
  line1: string;
  line2: string;
  avatar: any;
};

const patients: PatientListItem[] = [
  {
    id: '1',
    name: 'Ravi Kumar',
    line1: '28 Yrs, Male',
    line2: '+9185462701',
    avatar: require('../../assets/images/patient1.png'),
  },
  {
    id: '2',
    name: 'Vinayi',
    line1: '32 Yrs, Male',
    line2: '+9185462701',
    avatar: require('../../assets/images/patient2.png'),
  },
  {
    id: '3',
    name: 'Priya',
    line1: 'General Consultation',
    line2: '12 Aug 2026 10 AM  •  ₹500',
    avatar: require('../../assets/images/patient3.png'),
  },
  {
    id: '4',
    name: 'Ravinder',
    line1: 'General Consultation',
    line2: '12 Aug 2026 10 AM  •  ₹500',
    avatar: require('../../assets/images/patient4.png'),
  },
  {
    id: '5',
    name: 'Vikram Singh',
    line1: 'General Consultation',
    line2: '12 Aug 2026 10 AM  •  ₹500',
    avatar: require('../../assets/images/patient5.png'),
  },
];

export default function PatientsScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Patients</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchWrap}>
        <Ionicons name="search" size={18} color={COLORS.textMuted} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Patient"
          placeholderTextColor={COLORS.textMuted}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.patientCard}
            activeOpacity={0.7}
            onPress={() =>
              router.push({
                pathname: '/patient-details',
                params: { id: item.id, name: item.name },
              })
            }
          >
<Image
  source={item.avatar}
  style={styles.avatar}
/>
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={styles.patientName}>{item.name}</Text>
              <Text style={styles.patientLine}>{item.line1}</Text>
              <Text style={styles.patientLine}>{item.line2}</Text>
            </View>
            <Feather name="chevron-right" size={18} color={COLORS.textMuted} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: COLORS.textDark,
  },
  searchWrap: {
    height:54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 20,
    borderColor:'#CECECE',
    borderWidth:1

  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'InterRegular',
    fontSize: 10,
    color: COLORS.textDark,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  patientCard: {
    height:111,
    borderColor:'#83C5C0',
    borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 24,
    // backgroundColor: '#E5EAEA',
  },
  patientName: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: COLORS.textDark,
    marginBottom: 2,
  },
  patientLine: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    // color: COLORS.textMuted,
  },
});