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
import {
  PATIENTS,
  setSelectedPatient,
  getSelectedPatient,
} from '../store/patientStore';

export default function SelectPatient() {
  const {
    flow,
    from,

    centerKey,
    centerName,

    testKey,
    testName,
    testPrice,

    selectedDate,
    selectedTime,
  } = useLocalSearchParams<{
    flow?: string;
    from?: string;

    centerKey?: string;
    centerName?: string;

    testKey?: string;
    testName?: string;
    testPrice?: string;

    selectedDate?: string;
    selectedTime?: string;
  }>();
  const [selectedId, setSelectedId] = useState<string>(
    PATIENTS[0]?.id ?? ''
  );

//   const handleDone = () => {
//     const patient =
//       PATIENTS.find((p) => p.id === selectedId) ?? null;

//     if (!patient) {
//       return;
//     }
//     if (from === 'sampleCollection') {
//       router.replace({
//         pathname: '/sample-collection',
//         params: {
//           centerKey: centerKey || '',
//           centerName: centerName || '',

//           testKey: testKey || '',
//           testName: testName || '',
//           testPrice: testPrice || '',

//           selectedDate: selectedDate || '',
//           selectedTime: selectedTime || '',

//           // samplePatientName: patient.name,
//           // samplePatientId: patient.id,
//           samplePatientName: patient.name,
// samplePatientId: patient.id,
// samplePatientMobile: patient.mobile || '',
// samplePatientEmail: patient.email || '',
//         },
//       });

//       return;
//     }

//     /*
//      * ============================================
//      * APPOINTMENT FLOW
//      * ============================================
//      */
//     if (flow === 'appointment') {
//       setSelectedPatient(patient);

//       router.push({
//         pathname: './add-patient-details',
//         params: {
//           flow: 'appointment',
//         },
//       });

//       return;
//     }

//     /*
//      * ============================================
//      * NORMAL FLOW
//      * ============================================
//      */
//     setSelectedPatient(patient);

//     router.back();
//   };

const handleDone = () => {
  const patient =
    PATIENTS.find((p) => p.id === selectedId) ?? null;

  if (!patient) {
    return;
  }

  // ============================================
  // SAMPLE COLLECTION FLOW
  // ============================================
  if (from === 'sampleCollection') {
    router.replace({
      pathname: '/sample-collection',
      params: {
        flow: flow || '',

        centerKey: centerKey || '',
        centerName: centerName || '',

        testKey: testKey || '',
        testName: testName || '',
        testPrice: testPrice || '',

        selectedDate: selectedDate || '',
        selectedTime: selectedTime || '',

        samplePatientName: patient.name,
        samplePatientId: patient.id,
        samplePatientMobile: patient.mobile || '',
        samplePatientEmail: patient.email || '',
      },
    });

    return;
  }

  // ============================================
  // APPOINTMENT FLOW
  // ============================================
  if (flow === 'appointment') {
    setSelectedPatient(patient);

    router.push({
      pathname: './add-patient-details',
      params: {
        flow: 'appointment',
      },
    });

    return;
  }

  // ============================================
  // NORMAL FLOW
  // ============================================
  setSelectedPatient(patient);

  router.back();
};
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

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
          Select Patient
        </Text>

      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* PATIENT LIST */}
        {PATIENTS.map((p) => {

          const active =
            selectedId === p.id;

          return (
            <TouchableOpacity
              key={p.id}
              style={styles.patientCard}
              activeOpacity={0.8}
              onPress={() =>
                setSelectedId(p.id)
              }
            >

              {/* RADIO / CHECK */}
              {active ? (
                <View style={styles.checkBadge}>
                  <Ionicons
                    name="checkmark"
                    size={14}
                    color="#FFFFFF"
                  />
                </View>
              ) : (
                <View style={styles.radioOuter} />
              )}

              <View style={styles.patientInfo}>

                <Text style={styles.patientName}>
                  {p.name}
                </Text>

                <Text style={styles.patientMeta}>
                  {p.age} Years, {p.gender}
                </Text>

                <View style={styles.phoneRow}>

                  <Ionicons
                    name="call"
                    size={11}
                    color="#666"
                  />

                  <Text style={styles.phoneText}>
                    {p.mobile}
                  </Text>

                </View>

              </View>

            </TouchableOpacity>
          );
        })}

        {/* ADD PATIENT */}
        <TouchableOpacity
          style={styles.addPatientRow}
        >
          <Ionicons
            name="add"
            size={16}
            color="#0B4F4A"
          />

          <Text style={styles.addPatientText}>
            Add Patient
          </Text>
        </TouchableOpacity>

        {/* DONE */}
        <TouchableOpacity
          style={styles.doneButton}
          onPress={handleDone}
          activeOpacity={0.8}
        >
          <Text style={styles.doneButtonText}>
            Done
          </Text>
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

  scrollContent: {
    paddingBottom: 30,
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
  fontSize: 17,
  color: '#1A1A1A',
},

  patientCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 16,
    padding: 14,
    marginBottom: 18,
    borderColor:'#B0B0B0',
    borderWidth:1
  },

  patientInfo: {
    flex: 1,
    marginLeft: 30,
  },

 patientName: {
  fontFamily: 'InterBold',
  fontSize: 16,
  color: '#1A1A1A',
},
patientMeta: {
  fontFamily: 'InterRegular',
  fontSize: 12,
  // color: '#888',
  marginTop: 2,
},

  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

 phoneText: {
  fontFamily: 'InterRegular',
  fontSize: 12,
  color: '#666',
  marginLeft: 4,
},
  checkBadge: {
    width: 26,
    height: 26,
    borderRadius: 11,
    backgroundColor: '#00A89A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCC',
  },

  addPatientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 6,
    marginBottom: 150,
  },

  addPatientText: {
  fontFamily: 'InterMedium',
  color: '#0B4F4A',
  marginLeft: 6,
  fontSize: 14,
},

  doneButton: {
    backgroundColor: '#2F6364',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    height:50,
    width:297,
    marginLeft:30
  },

  doneButtonText: {
  fontFamily: 'InterBold',
  color: '#FFFFFF',
  fontSize: 13,
},
});