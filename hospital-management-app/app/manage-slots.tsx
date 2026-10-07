import React, { useState } from 'react';
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

type DateItem = {
  day: string;
  date: number;
};

type TimeSlot = {
  time: string;
  available: boolean;
};

const dates: DateItem[] = [
  { day: 'Mon', date: 12 },
  { day: 'Tue', date: 13 },
  { day: 'Wed', date: 14 },
  { day: 'Thu', date: 15 },
  { day: 'Fri', date: 16 },
  { day: 'Sat', date: 17 },
];

const initialSlots: TimeSlot[] = [
  { time: '09:00 Am', available: true },
  { time: '09:30 Am', available: true },
  { time: '10:00 Am', available: true },
  { time: '10:30 Am', available: false },
  { time: '11:00 Am', available: false },
  { time: '11:30 Am', available: false },
  { time: '12:00 Pm', available: true },
  { time: '12:30 Pm', available: true },
];

export default function ManageAvailability() {
  const [selectedDate, setSelectedDate] = useState<number>(17);
  const [slots, setSlots] = useState<TimeSlot[]>(initialSlots);

  const toggleSlot = (index: number): void => {
    setSlots((prev) =>
      prev.map((slot, i) =>
        i === index ? { ...slot, available: !slot.available } : slot
      )
    );
  };

  const handleSave = (): void => {
    // Persist selectedDate + slots here
    console.log('Saved', selectedDate, slots);
  };

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
      onPress={() => router.back()}
      style={styles.backButton}
    >
      <Ionicons name="arrow-back" size={20} color="#222" />
    </TouchableOpacity>

    <Text style={styles.headerTitle}>
      Manage Availability
    </Text>
  </View>
</View>

        {/* Select Date */}
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Select Date</Text>

          <TouchableOpacity>
            <Ionicons name="calendar-outline" size={18} color="#222" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateList}
        >
          {dates.map((item) => {
            const isSelected = item.date === selectedDate;

            return (
              <TouchableOpacity
                key={item.date}
                style={[styles.dateCard, isSelected && styles.dateCardSelected]}
                onPress={() => setSelectedDate(item.date)}
              >
                <Text style={[styles.dateDay, isSelected && styles.dateTextSelected]}>
                  {item.day}
                </Text>

                <Text style={[styles.dateNumber, isSelected && styles.dateTextSelected]}>
                  {item.date}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Time Slots */}
        <Text style={styles.scheduleTitle}>Time Slots</Text>

        {slots.map((slot, index) => (
          <TouchableOpacity
            key={slot.time}
            style={styles.slotCard}
            activeOpacity={0.7}
            onPress={() => toggleSlot(index)}
          >
            <Text style={styles.slotTime}>{slot.time}</Text>

            <View style={styles.slotStatus}>
              <Text
                style={[
                  styles.slotStatusText,
                  slot.available ? styles.availableText : styles.unavailableText,
                ]}
              >
                {slot.available ? 'Available' : 'Unavailable'}
              </Text>

              <View
                style={[
                  styles.statusCircle,
                  slot.available && styles.statusCircleAvailable,
                ]}
              >
                {slot.available && (
                  <Ionicons name="checkmark" size={12} color="#FFFFFF" />
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 14,
    paddingBottom: 24,
  },
  header: {
  height: 25,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
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
  fontSize: 15,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 8,
},
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },
  dateList: {
    paddingBottom: 22,
    gap: 10,
  },
  dateCard: {
    width: 57,
    height: 63,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E5E4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom:10
  },
  dateCardSelected: {
    backgroundColor: '#004A92',
    borderColor: '#004A92',
  },
  dateDay: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    // color: '#777',
    marginBottom: 4,
  },
  dateNumber: {
    fontSize: 15,
    fontFamily: 'InterBold',
    color: '#222',
  },
  dateTextSelected: {
    color: '#FFFFFF',
  },
  scheduleTitle: {
    fontSize: 17,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 15,
  },
  slotCard: {
    minHeight: 56,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E5E4',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  slotTime: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },
  slotStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  slotStatusText: {
    fontSize: 12,
    fontFamily: 'InterRegular',
  },
  availableText: {
    color: '#018410',
  },
  unavailableText: {
    color: '#777',
  },
  statusCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#D6E5E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusCircleAvailable: {
    backgroundColor: '#018410',
    borderColor: '#018410',
  },
  footer: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  saveButton: {
    height: 46,
    width:296,
    borderRadius: 12,
    backgroundColor: '#2F6364',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:30
  },
  saveButtonText: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },
});