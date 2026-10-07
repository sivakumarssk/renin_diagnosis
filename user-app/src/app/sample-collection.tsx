

import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

type CollectionType = 'home' | 'center';

type Patient = {
  id?: string;
  name: string;
  mobile?: string;
  email?: string;
};

const DATES = [
  { day: '09', label: 'Yesterday', month: 'Aug' },
  { day: '10', label: 'Today', month: 'Aug' },
  { day: '11', label: 'Tue', month: 'Aug' },
  { day: '12', label: 'Wed', month: 'Aug' },
  { day: '13', label: 'Thu', month: 'Aug' },
];

const TIME_SLOTS = [
  '7:00 AM - 9:00 AM',
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '1:00 PM - 3:00 PM',
  '3:00 PM - 6:00 PM',
  '6:00 PM - 9:00 PM',
];

export default function SampleCollection() {
  const {
    flow: receivedFlow,
    centerKey,
    centerName,
    testKey,
    testName,
    testPrice,
    samplePatientName,
    samplePatientId,
    samplePatientMobile,
    samplePatientEmail,
    selectedDate,
    selectedTime: returnedTime,
  } = useLocalSearchParams<{
    flow?: string;
    centerKey?: string;
    centerName?: string;
    testKey?: string;
    testName?: string;
    testPrice?: string;
    samplePatientName?: string;
    samplePatientId?: string;
    samplePatientMobile?: string;
    samplePatientEmail?: string;
    selectedDate?: string;
    selectedTime?: string;
  }>();
const flow = receivedFlow || 'bookLabTest';

// console.log('SAMPLE COLLECTION FLOW:', flow);
  const [collectionType, setCollectionType] =
    useState<CollectionType>('home');

  const [selectedDateIndex, setSelectedDateIndex] =
    useState(1);

  const [selectedTime, setSelectedTime] =
    useState<string | null>(
      returnedTime || '7:00 AM - 9:00 AM'
    );

  const [selectedPatient, setSelectedPatient] =
    useState<Patient | null>(
      samplePatientName
        ? {
            id: samplePatientId,
            name: samplePatientName,
            mobile: samplePatientMobile,
            email: samplePatientEmail,
          }
        : null
    );

  const handleSelectPatient = () => {
    router.push({
      pathname: '/select-patient',
      params: {
        flow: flow,
        from: 'sampleCollection',

        centerKey: centerKey || '',
        centerName: centerName || '',
        testKey: testKey || '',
        testName: testName || '',
        testPrice: testPrice || '',

        selectedDate:
          DATES[selectedDateIndex]?.label || 'Today',

        selectedTime:
          selectedTime || '7:00 AM - 9:00 AM',
      },
    });
  };

  const handleContinue = () => {
    if (!selectedTime) return;

    // ================= HOME COLLECTION =================
    if (collectionType === 'home') {
      if (!selectedPatient) {
        handleSelectPatient();
        return;
      }

      router.push({
        pathname: '/add-patient-details',
        params: {
          flow: flow || '',
          from: 'sampleCollection',

          centerKey: centerKey || '',
          centerName: centerName || '',
          testKey: testKey || '',
          testName: testName || '',
          testPrice: testPrice || '',

          samplePatientName: selectedPatient.name,
          samplePatientId: selectedPatient.id || '',
          samplePatientMobile: selectedPatient.mobile || '',
          samplePatientEmail: selectedPatient.email || '',

          selectedDate:
            DATES[selectedDateIndex]?.label || 'Today',

          selectedTime: selectedTime,
        },
      });

      return;
    }

    // ================= VISIT CENTER =================
    router.push({
      pathname: '/add-patient-details',
      params: {
        flow: flow || '',
        from: 'sampleCollection',

        centerKey: centerKey || '',
        centerName: centerName || '',
        testKey: testKey || '',
        testName: testName || '',
        testPrice: testPrice || '',

        samplePatientName:
          selectedPatient?.name || '',
        samplePatientId:
          selectedPatient?.id || '',
        samplePatientMobile:
          selectedPatient?.mobile || '',
        samplePatientEmail:
          selectedPatient?.email || '',

        selectedDate:
          DATES[selectedDateIndex]?.label || 'Today',

        selectedTime: selectedTime,
      },
    });
  };

  return (
    <View style={styles.container}>

      {/* ================= HEADER ================= */}

      <View style={styles.header}>
        <View style={styles.headerTopRow}>

          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons
              name="arrow-back"
              size={22}
              color="#1A1A1A"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Choose sample collection
          </Text>

        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >

        {/* ================= COLLECTION TYPE ================= */}

        <Text style={styles.sectionTitle}>
          How would you like to give your Sample
        </Text>

        {/* ================= HOME COLLECTION ================= */}

        <View style={styles.optionCard}>

          <TouchableOpacity
            style={styles.optionRow}
            activeOpacity={0.8}
            onPress={() => setCollectionType('home')}
          >

            <Image
              source={require('../assets/images/sample recommendation.png')}
              style={styles.optionImage}
              resizeMode="contain"
            />

            <View style={styles.optionTextWrap}>

              <Text style={styles.optionTitle}>
                Home sample recomendation
              </Text>

              <Text style={styles.optionSubtitle}>
                We will send a technician to collect your sample
              </Text>

            </View>

            {collectionType === 'home' ? (
              <View style={styles.checkBadge}>
                <Ionicons
                  name="checkmark"
                  size={16}
                  color="#FFFFFF"
                />
              </View>
            ) : (
              <View style={styles.radioOuter} />
            )}

          </TouchableOpacity>

          {/* SELECTED PATIENT */}

          {collectionType === 'home' && selectedPatient && (
            <>
              <View style={styles.divider} />

              <TouchableOpacity
                style={styles.patientRow}
                onPress={handleSelectPatient}
              >

                <View style={styles.patientAvatarSmall}>
                  <Ionicons
                    name="person"
                    size={14}
                    color="#0B4F4A"
                  />
                </View>

                <Text style={styles.patientNameText}>
                  {selectedPatient.name}
                </Text>

                <View style={styles.checkBadgeSmall}>
                  <Ionicons
                    name="checkmark"
                    size={12}
                    color="#FFFFFF"
                  />
                </View>

              </TouchableOpacity>
            </>
          )}

          {/* NO PATIENT SELECTED */}

          {collectionType === 'home' && !selectedPatient && (
            <>
              <View style={styles.divider} />

              <TouchableOpacity
                style={styles.patientRow}
                onPress={handleSelectPatient}
              >

                <View style={styles.patientAvatarSmall}>
                  <Ionicons
                    name="person"
                    size={14}
                    color="#0B4F4A"
                  />
                </View>

                <Text style={styles.patientNameText}>
                  Select Patient
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color="#777"
                />

              </TouchableOpacity>
            </>
          )}

        </View>

        {/* ================= VISIT CENTER ================= */}

        <TouchableOpacity
          style={styles.optionCard}
          activeOpacity={0.8}
          onPress={() => setCollectionType('center')}
        >

          <View style={styles.optionRow}>

            <Image
              source={require('../assets/images/visit-center.png')}
              style={styles.optionImage}
              resizeMode="contain"
            />

            <View style={styles.optionTextWrap}>

              <Text style={styles.optionTitle}>
                Visit Diagnostic center
              </Text>

              <Text style={styles.optionSubtitle}>
                Visit one of our nearby center to give your sample.
              </Text>

            </View>

            {collectionType === 'center' ? (
              <View style={styles.checkBadge}>
                <Ionicons
                  name="checkmark"
                  size={16}
                  color="#FFFFFF"
                />
              </View>
            ) : (
              <View style={styles.radioOuter} />
            )}

          </View>

        </TouchableOpacity>

        {/* ================= SELECT DATE ================= */}

        <Text style={styles.sectionTitle}>
          Select Date
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateRow}
        >

          {DATES.map((d, index) => {

            const active =
              selectedDateIndex === index;

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateCard,
                  active && styles.dateCardActive,
                ]}
                onPress={() =>
                  setSelectedDateIndex(index)
                }
              >

                <Text
                  style={[
                    styles.dateLabel,
                    active &&
                      styles.dateLabelActive,
                  ]}
                >
                  {d.label}
                </Text>

                <Text
                  style={[
                    styles.dateDay,
                    active &&
                      styles.dateDayActive,
                  ]}
                >
                  {d.day}
                </Text>

                <Text
                  style={[
                    styles.dateMonth,
                    active &&
                      styles.dateLabelActive,
                  ]}
                >
                  {d.month}
                </Text>

              </TouchableOpacity>
            );
          })}

        </ScrollView>

        {/* ================= SELECT TIME ================= */}

        <Text style={styles.sectionTitle}>
          Select Time
        </Text>

        <View style={styles.timeGrid}>

          {TIME_SLOTS.map((slot) => {

            const active =
              selectedTime === slot;

            return (
              <TouchableOpacity
                key={slot}
                style={[
                  styles.timeSlot,
                  active &&
                    styles.timeSlotActive,
                ]}
                onPress={() =>
                  setSelectedTime(slot)
                }
              >

                <Text
                  style={[
                    styles.timeSlotText,
                    active &&
                      styles.timeSlotTextActive,
                  ]}
                >
                  {slot}
                </Text>

              </TouchableOpacity>
            );
          })}

        </View>

        {/* ================= CONTINUE BUTTON ================= */}

        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedTime &&
              styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedTime}
        >

          <Text style={styles.continueButtonText}>
            Continue
          </Text>

        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}

/* =======================================================
   STYLES
======================================================= */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  /* HEADER */

  header: {
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 5,
    marginTop:20
  },

  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 18,
    color: '#1A1A1A',
  },

  /* SECTION TITLE */

  sectionTitle: {
    fontFamily: 'InterRegular',
    fontSize: 16,
    color: '#1A1A1A',
    marginHorizontal: 16,
    marginTop: 15,
    marginBottom: 25,
  },

  /* OPTION CARD */

  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 14,
    marginBottom: 16,
    borderColor: '#DADADA',
    borderWidth: 1,
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionImage: {
    width: 72,
    height: 66,
    marginRight: 12,
  },

  optionTextWrap: {
    flex: 1,
  },

  optionTitle: {
    fontFamily: 'InterBold',
    fontSize: 12.5,
    color: '#1A1A1A',
    marginBottom: 4,
  },

  optionSubtitle: {
    fontFamily: 'InterRegular',
    fontSize: 13,
    lineHeight: 16,
  },

  /* CHECK */

  checkBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0B4F4A',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#CCC',
    marginLeft: 8,
  },

  /* PATIENT */

  divider: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#DCEDEA',
    marginVertical: 12,
  },

  patientRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  patientAvatarSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E8F3F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  patientNameText: {
    flex: 1,
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: '#1A1A1A',
  },

  checkBadgeSmall: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0B4F4A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* DATE */

  dateRow: {
    paddingHorizontal: 16,
    gap: 10,
  },

  dateCard: {
    width: 65,
    height: 82,
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3EFEC',
  },

  dateCardActive: {
    backgroundColor: '#1F90FF',
    borderColor: '#1F90FF',
  },

  dateLabel: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    color: '#888',
    marginBottom: 4,
  },

  dateLabelActive: {
    color: '#FFFFFF',
  },

  dateDay: {
    fontFamily: 'InterBold',
    fontSize: 16,
    color: '#1A1A1A',
  },

  dateDayActive: {
    color: '#FFFFFF',
  },

  dateMonth: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },

  /* TIME */

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },

  timeSlot: {
    width: '48%',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0B4F4A',
    alignItems: 'center',
    marginBottom: 10,
  },

  timeSlotActive: {
    backgroundColor: '#317070',
  },

  timeSlotText: {
    fontFamily: 'InterMedium',
    fontSize: 11,
    color: '#0B4F4A',
  },

  timeSlotTextActive: {
    color: '#FFFFFF',
  },

  /* CONTINUE */

  continueButton: {
    backgroundColor: '#2F6364',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
  },

  continueButtonDisabled: {
    opacity: 0.5,
  },

  continueButtonText: {
    fontFamily: 'InterRegular',
    color: '#FFFFFF',
    fontSize: 13,
  },

});