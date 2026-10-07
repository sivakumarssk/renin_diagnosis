import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  bg: '#F4F8F8',
  card: '#FFFFFF',
  primary: '#1E5A54',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  border: '#EEF1F1',
  available: '#1E9E6D',
};

type DateOption = {
  id: string;
  day: string;
  date: string;
};

type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
};

const dateOptions: DateOption[] = [
  { id: '1', day: 'Mon', date: '12' },
  { id: '2', day: 'Tue', date: '13' },
  { id: '3', day: 'Wed', date: '14' },
  { id: '4', day: 'Thu', date: '15' },
  { id: '5', day: 'Fri', date: '16' },
];

const initialSlots: TimeSlot[] = [
  { id: '1', time: '09:00 AM', available: true },
  { id: '2', time: '09:30 AM', available: true },
  { id: '3', time: '10:00 AM', available: true },
  { id: '4', time: '10:30 AM', available: false },
  { id: '5', time: '11:00 AM', available: false },
  { id: '6', time: '11:30 AM', available: false },
  { id: '7', time: '12:00 PM', available: true },
  { id: '8', time: '12:30 PM', available: true },
];

export default function ManageAvailabilityScreen() {
  const router = useRouter();
  const [selectedDateId, setSelectedDateId] = useState('1');
  const [slots, setSlots] = useState<TimeSlot[]>(initialSlots);

  const toggleSlot = (id: string) => {
    setSlots((prev) =>
      prev.map((slot) =>
        slot.id === id ? { ...slot, available: !slot.available } : slot
      )
    );
  };

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

    <Text style={styles.headerTitle}>Manage Availability</Text>
  </View>

  <View style={styles.headerRight} />
</View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Select Date */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionLabel}>Select Date</Text>
          <TouchableOpacity>
            <Feather name="calendar" size={18} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.dateRow}
          contentContainerStyle={{ paddingRight: 8 }}
        >
          {dateOptions.map((option) => {
            const selected = option.id === selectedDateId;
            return (
              <TouchableOpacity
                key={option.id}
                style={[styles.dateChip, selected && styles.dateChipSelected]}
                activeOpacity={0.8}
                onPress={() => setSelectedDateId(option.id)}
              >
                <Text
                  style={[
                    styles.dateChipDay,
                    selected && styles.dateChipTextSelected,
                  ]}
                >
                  {option.day}
                </Text>
                <Text
                  style={[
                    styles.dateChipDate,
                    selected && styles.dateChipTextSelected,
                  ]}
                >
                  {option.date}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Time Slots */}
        <Text style={[styles.sectionLabel, { marginTop: 24, marginBottom: 12 }]}>
          Time Slots
        </Text>

        <View>
          {slots.map((slot) => (
            <TouchableOpacity
              key={slot.id}
              style={styles.slotRow}
              activeOpacity={0.7}
              onPress={() => toggleSlot(slot.id)}
            >
              <Text style={styles.slotTime}>{slot.time}</Text>
              <View style={styles.slotRight}>
                <Text
                  style={[
                    styles.slotStatus,
                    { color: slot.available ? COLORS.available : COLORS.textMuted },
                  ]}
                >
                  {slot.available ? 'Available' : 'Unavailable'}
                </Text>
                {slot.available ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color={COLORS.available}
                    style={{ marginLeft: 8 }}
                  />
                ) : (
                  <View style={styles.emptyCircle} />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Save button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.85}
          onPress={() => router.back()}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 16,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionLabel: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: COLORS.textDark,
  },
  dateRow: {
    flexDirection: 'row',
  },
  dateChip: {
    width: 56,
    height: 64,
    borderRadius: 14,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  dateChipSelected: {
    backgroundColor: '#004A92',
  },
  dateChipDay: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: 2,
  },
  dateChipDate: {
    fontFamily: 'InterSemiBold',
    fontSize: 15,
    color: COLORS.textDark,
  },
  dateChipTextSelected: {
    color: '#FFFFFF',
  },
  slotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.02,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  slotTime: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: COLORS.textDark,
  },
  slotRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slotStatus: {
    fontFamily: 'InterMedium',
    fontSize: 13,
  },
  emptyCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    marginLeft: 8,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 8,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});