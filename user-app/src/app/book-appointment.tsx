import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { router, useLocalSearchParams } from 'expo-router';


export default function BookAppointment() {
  const { flow } = useLocalSearchParams<{ flow?: string }>();
const handleSelect = () => {
  router.push({
    pathname: '/choose-department',
    params: {
      flow: flow === 'findHospital' ? 'findHospital' : 'bookAppointment',
    },
  });
};
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Appointment</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.sectionTitle}>Choose Consultation</Text>
        <View style={styles.card}>
  <View style={styles.topRow}>
    <View style={styles.cardTextWrap}>
      <Text style={styles.cardTitle}>Video Consultation</Text>
      <Text style={styles.cardSubtitle}>
        Consult with a doctor from the comfort of your home
      </Text>
    </View>

    <Image
      source={require('../assets/images/videoConsult.png')}
      style={styles.cardImage}
      resizeMode="contain"
    />
  </View>

  <TouchableOpacity
    style={styles.selectButton}
    onPress={handleSelect}
  >
    <Text style={styles.selectButtonText}>Select</Text>
  </TouchableOpacity>
</View>

<View style={styles.card}>
  <View style={styles.topRow}>
    <View style={styles.cardTextWrap}>
      <Text style={styles.cardTitle}>In-clinic Consultation</Text>
      <Text style={styles.cardSubtitle}>
        Visit the hospital and consult the doctor in person
      </Text>
    </View>

    <Image
      source={require('../assets/images/clinicConsult.png')}
      style={styles.cardImage}
      resizeMode="contain"
    />
  </View>

  <TouchableOpacity
    style={styles.selectButton}
    // onPress={handleSelect}
  >
    <Text style={styles.selectButtonText}>Select</Text>
  </TouchableOpacity>
</View>
      </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//      flex: 1, 
//      backgroundColor: '#F3FAF9' 
//     },
//   header: {
//      flexDirection: 'row',
//       alignItems: 'center',
//        paddingHorizontal: 16,
//         paddingTop: 20,
//          paddingBottom: 25
//          },
//   backButton: { 
//     marginRight: 14 
//   },
//   headerTitle: { 
//     fontSize: 21,
//      fontWeight: '500',
//      },
//   sectionTitle: { 
//     fontSize: 18,
//      fontWeight: '400',
//        marginBottom: 18
//       },
// card: {
//   backgroundColor: '#FFFFFF',
//   borderRadius: 12,
//   borderWidth: 1,
//   borderColor: '#D9EFEC',
//   paddingHorizontal: 10,
//   paddingTop: 25,
//   paddingBottom: 6,
//   marginBottom: 16,
//   height:145,
// },

// topRow: {
//   flexDirection: 'row',
//   alignItems: 'flex-start',
//   justifyContent: 'space-between',
// },

// cardTextWrap: {
//   flex: 1,
//   marginRight: 6,
// },

// cardTitle: {
//   fontSize: 15,
//   fontWeight: '700',
//   color: '#1A1A1A',
//   marginBottom: 6,
// },

// cardSubtitle: {
//   fontSize: 16,
//   color: '#5D5D5D',
//   lineHeight: 18,
//   paddingRight: 12,
// },

// cardImage: {
//   width: 75,
//   height: 65,
//   marginLeft: 7,
// },

// selectButton: {
//   backgroundColor: '#245EE6',
//   borderRadius: 6,
//   height: 30,
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '75%',
//   alignSelf: 'center',
//   marginTop: 10,
// },

// selectButtonText: {
//   color: '#FFFFFF',
//   fontSize: 14,
//   fontWeight: '600',
// },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 25,
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterMedium',
    fontSize: 20,
  },

  sectionTitle: {
    fontFamily: 'InterBold',
    fontSize: 18,
    marginBottom: 18,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9EFEC',
    paddingHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 6,
    marginBottom: 16,
    height: 170,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  cardTextWrap: {
    flex: 1,
    marginRight: 6,
  },

  cardTitle: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
    marginBottom: 9,
  },

  cardSubtitle: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    lineHeight: 18,
    paddingRight: 12,
    marginBottom:12
  },

  cardImage: {
    width: 118,
    height: 79,
    marginLeft: 7,
  },

  selectButton: {
    backgroundColor: '#2C58BE',
    borderRadius: 12,
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    alignSelf: 'center',
    marginTop: 10,

  },

  selectButtonText: {
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
    fontSize: 14,
  },
});