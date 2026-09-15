import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function AppointmentReview() {
  const {
    doctorName = 'Dr. Priya sharma',
    specialty = 'General Physician',
    experience = '10 Years Exp.',
    hospital = 'Apollo Hospital, Hyderabad',
    consultationType = 'Video',
    patientName = 'Revathi Raj',
    fee = '500',
  } = useLocalSearchParams<{
    doctorName?: string;
    specialty?: string;
    experience?: string;
    hospital?: string;
    consultationType?: string;
    patientName?: string;
    fee?: string;
  }>();

  const totalAmount = Number(fee);

  const handleProceed = () => {
    router.push({
      pathname: './payment-options',
      params: { totalAmount: String(totalAmount) },
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review & Pay</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>

        {/* DOCTOR CARD */}
        <View style={styles.doctorCard}>
          <Image
            source={require('../assets/images/doctorPriya.png')}
            style={styles.doctorImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.doctorName}>{doctorName}</Text>
            <Text style={styles.doctorSpecialty}>{specialty}</Text>
            <Text style={styles.doctorExp}>{experience}</Text>
            <View style={styles.hospitalRow}>
              <Ionicons name="business-outline" size={12} color="#666" />
              <Text style={styles.hospitalText}>{hospital}</Text>
            </View>
          </View>
        </View>

        {/* CONSULTATION DETAILS CARD */}
        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Consultation Type</Text>
            <Text style={styles.detailValue}>{consultationType}</Text>
          </View>

          <View style={styles.detailRowMid}>
            <View style={styles.detailLabelRow}>
              <Ionicons name="person-outline" size={14} color="#666" />
              <Text style={styles.detailLabel}>Patient</Text>
            </View>
            <Text style={styles.detailValue}>{patientName}</Text>
          </View>

          <View style={styles.detailRowLast}>
            <View style={styles.detailLabelRow}>
              <Ionicons name="card-outline" size={14} color="#666" />
              <Text style={styles.detailLabel}>Consultation Fee</Text>
            </View>
            <Text style={styles.detailValue}>₹{fee}</Text>
          </View>
        </View>

        {/* TOTAL AMOUNT */}
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalValue}>₹{totalAmount}</Text>
        </View>

      </ScrollView>

      {/* PROCEED BUTTON */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
          <Text style={styles.proceedButtonText}>Proceed to payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 25,
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
  },

  doctorCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 14,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#B2DDD9',
  },

  doctorImage: {
    width: 112,
    height: 116,
    borderRadius: 16,
    marginRight: 12,
    backgroundColor: '#E2E3E6',
  },

  doctorName: {
    fontFamily: 'InterBold',
    fontSize: 13,
    color: '#1A1A1A',
    marginTop: 14,
  },

  doctorSpecialty: {
    fontFamily: 'InterRegular',
    fontSize: 12,
  },

  doctorExp: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    marginBottom: 6,
  },

  hospitalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  hospitalText: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    marginLeft: 4,
  },

  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 60,
    borderWidth: 1,
    borderColor: '#B2DDD9',
    overflow: 'hidden',
  },

  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },

  detailRowMid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },

  detailRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },

  detailLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  detailLabel: {
    fontFamily: 'InterRegular',
    fontSize: 15,
    marginLeft: 6,
  },

  detailValue: {
    fontFamily: 'InterBold',
    fontSize: 14,
    color: '#1A1A1A',
    marginRight: 30,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B2DDD9',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  totalLabel: {
    fontFamily: 'InterSemiBold',
    fontSize: 15,
    color: '#1A1A1A',
  },

  totalValue: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
  },

  bottomBar: {
    padding: 16,
  },

  proceedButton: {
    backgroundColor: '#317070',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    width: 297,
    height: 46,
    marginLeft: 15,
  },

  proceedButtonText: {
    fontFamily: 'InterBold',
    color: '#FFFFFF',
    fontSize: 10,
  },
});