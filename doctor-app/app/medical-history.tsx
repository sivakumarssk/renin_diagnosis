import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  bg: '#F4F8F8',
  card: '#FFFFFF',
  primary: '#1E5A54',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  border: '#EEF1F1',
};

type HistoryEntry = {
  id: string;
  date: string;
  condition: string;
  doctor: string;
};

const historyEntries: HistoryEntry[] = [
  { id: '1', date: '10 Aug 2026', condition: 'Fever', doctor: 'Rahul Sharma' },
  { id: '2', date: '22 Jul 2026', condition: 'Cold & Cough', doctor: 'Rahul Sharma' },
  { id: '3', date: '10 Aug 2026', condition: 'Fever', doctor: 'Rahul Sharma' },
  { id: '4', date: '6 Jul 2026', condition: 'Fever', doctor: 'Rahul Sharma' },
  { id: '5', date: '22 Jul 2026', condition: 'Cold & Cough', doctor: 'Rahul Sharma' },
  { id: '6', date: '6 Jul 2026', condition: 'Fever', doctor: 'Rahul Sharma' },
  { id: '7', date: '10 Aug 2026', condition: 'Fever', doctor: 'Rahul Sharma' },
];

export default function MedicalHistoryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={22} color={COLORS.textDark} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Medical History</Text>

        <View style={styles.backButton} />
      </View>

      {/* Medical History List */}
      <ScrollView
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.historyCard}>
          {historyEntries.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.entryRow,
                index === historyEntries.length - 1 && {
                  borderBottomWidth: 0,
                },
              ]}
            >
              {/* Left Side: Date and Condition */}
              <View style={styles.entryLeft}>
                <Text style={styles.entryDate}>{item.date}</Text>
                <Text style={styles.entryCondition}>{item.condition}</Text>
              </View>

              {/* Right Side: Doctor */}
              <Text style={styles.entryDoctor}>{item.doctor}</Text>
            </View>
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

  listContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },

  historyCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
height:674.25,
borderColor:'#FFF0F0',
borderWidth:1,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },

  entryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
  },

  entryLeft: {
    flex: 1,
  },

  entryDate: {
    fontFamily: 'InterSemiBold',
    fontSize: 15,
    color: COLORS.textDark,
    marginBottom: 4,
  },

  entryCondition: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    // color: COLORS.textMuted,
  },

  entryDoctor: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    // color: COLORS.textMuted,
    textAlign: 'right',
    marginLeft: 10,
  },
});