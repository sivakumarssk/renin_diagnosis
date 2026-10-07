import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { getSelectedPatient } from '../store/patientStore';


export default function AddPatientDetails() {
  const {
  flow,
  samplePatientName,
  samplePatientId,
  samplePatientMobile,
  samplePatientEmail,
} = useLocalSearchParams<{
  flow?: string;
  samplePatientName?: string;
  samplePatientId?: string;
  samplePatientMobile?: string;
  samplePatientEmail?: string;
}>();
const actualFlow = flow || 'bookLabTest';



  const storePatient = getSelectedPatient();

 const patient =
  samplePatientName
    ? {
        id: samplePatientId,
        name: samplePatientName,
        age: '',
        gender: '',
        mobile: samplePatientMobile || '',
        email: samplePatientEmail || '',
        address: '',
      }
    : storePatient;

  const [mobile, setMobile] = useState(patient?.mobile ?? '');
  const [email, setEmail] = useState(patient?.email ?? '');
  const [address, setAddress] = useState(patient?.address ?? '');


const handleContinue = () => {
  if (flow === 'appointment') {
    router.push({
      pathname: './appointment-review',
      params: {
        doctorName: 'Dr. Priya sharma',
        specialty: 'General Physician',
        experience: '10 Years Exp.',
        hospital: 'Apollo Hospital, Hyderabad',
        consultationType: 'Video',
        patientName: patient?.name ?? '',
        fee: '500',
      },
    });
  } else {
    router.push({
      pathname: '/review-pay',
      params: {
        patientName: patient?.name ?? '',
        patientAge: patient?.age ?? '',
        patientGender: patient?.gender ?? '',
      },
    });
  }
};
  if (!patient) {
    // Safety fallback if this screen is reached with nothing selected
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Patient Details</Text>
        </View>
        <Text style={{ margin: 16, color: '#777' }}>No patient selected.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Patient Details</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionLabel}>Patient</Text>

        <View style={styles.patientCard}>
          <View style={styles.patientAvatar}>
            <Ionicons name="person" size={18} color="#0B4F4A" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.patientName}>{patient.name}</Text>
            <Text style={styles.patientMeta}>
            25 Years Female
            </Text>

          </View>
          <View style={styles.checkBadge}>
            <Ionicons name="checkmark" size={14} color="#FFFFFF" />
          </View>
        </View>

        <Text style={styles.fieldLabel}>Mobile Number</Text>
      
<View style={styles.input}>
  <Text style={styles.inputText}>+91 9876543210</Text>
</View>
        <Text style={styles.fieldLabel}>Email (optional)</Text>
        <View style={styles.input}>
  <Text style={styles.inputText}>suraksha@gmail.com</Text>
</View>
{/* {(flow === 'bookLabTest' || flow === 'findCenter') && ( */}
{(actualFlow === 'bookLabTest' || actualFlow === 'findCenter') && (
  <>
    <Text style={styles.fieldLabel}>Address</Text>

    <View style={styles.addressRow}>
      <Ionicons
        name="location-outline"
        size={16}
        color="#0B4F4A"
      />

      <Text style={styles.addressText}>
        {/* {address || 'Enter address'} */}
        2-123, Banjara Hills,
Hyderabad, Telangana - 500034
      </Text>
    </View>

    <TouchableOpacity style={styles.addAddressButton}>
      <Ionicons name="add" size={16} color="#0B4F4A" />
      <Text style={styles.addAddressText}>Add new address</Text>
    </TouchableOpacity>
  </>
)}

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue to Review</Text>
        </TouchableOpacity>
      </ScrollView>
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
    paddingBottom: 10,
    marginTop:20
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 17,
    color: '#1A1A1A',
  },

  sectionLabel: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#1A1A1A',
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
  },

  patientCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginHorizontal: 16,
    padding: 14,
    marginBottom: 20,
    borderColor: '#8E8E8E',
    borderWidth: 1,
  },

  patientAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8F3F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  patientName: {
    fontFamily: 'InterBold',
    fontSize: 14,
    color: '#1A1A1A',
  },

  patientMeta: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },

  checkBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#00A89A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fieldLabel: {
    fontFamily: 'InterMedium',
    fontSize: 15,
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 10,
    color: '#333333',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 20,
    borderColor: '#A1A1A1',
    borderWidth: 1,
  },

  inputText: {
    fontFamily: 'InterRegular',
    fontSize: 13,
    color: '#252525',
  },

  addressRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderColor: '#A1A1A1',
    borderWidth: 1,
    minHeight: 52,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 8,
  },

  addressInput: {
    flex: 1,
    marginHorizontal: 0,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 0,
    backgroundColor: 'transparent',
    fontSize: 13,
    color: '#333333',
    textAlignVertical: 'top',
    fontFamily: 'InterRegular',
  },

  addressText: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'InterRegular',
    fontSize: 13,
    color: '#333333',
  },

  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom:110
  },

  addAddressText: {
    fontFamily: 'InterMedium',
    color: '#0B4F4A',
    marginLeft: 6,
    fontSize: 12,
  },

  continueButton: {
    backgroundColor: '#2F6364',
    marginHorizontal: 16,
    marginTop: 30,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    height:50,
    width:269,
    marginLeft:38
  },

  continueButtonText: {
    fontFamily: 'InterBold',
    color: '#FFFFFF',
    fontSize: 13,
  },
});