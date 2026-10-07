import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

const doctors = Array.from({ length: 7 }).map((_, i) => ({
  id: i + 1,
  name: 'Dr. Rahul',
  specialty: 'Cardiologist',
  experience: '10 Years exp',
  available: true,
  image: require('../assets/images/rahul.png'),
}));

export default function DepartmentDoctors() {
  const params = useLocalSearchParams<{ name?: string }>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#222" />
          </TouchableOpacity>
          {/* {params.name ? <Text style={styles.headerTitle}>{params.name}</Text> : null} */}
          <View style={{ width: 16 }} />
        </View>

        {doctors.map((doctor) => (
          <TouchableOpacity
            key={doctor.id}
            style={styles.doctorCard}
            activeOpacity={0.8}
            // onPress={() => router.push('/doctor-profile')}
          >
            <Image source={doctor.image} style={styles.doctorImage} resizeMode="cover" />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorMeta}>
                {doctor.experience}+ {'\n'}
                {doctor.specialty}
              </Text>
            </View>
            <Text style={styles.available}>
              {doctor.available ? 'Available' : 'Unavailable'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F3FAF9'
   },
  scrollContent: { 
    paddingHorizontal: 16, 
    paddingTop: 8,
     paddingBottom: 30
     },
  header: {
     height: 25,
      flexDirection: 'row',
       alignItems: 'center',
        justifyContent: 'space-between',
         marginBottom: 25 
        },
  doctorCard: { 
    minHeight: 104,
     flexDirection: 'row', 
     alignItems: 'center',
      backgroundColor: '#FFFFFF',
       borderWidth: 1,
        borderColor: '#B2DDD9',
         borderRadius: 14,
          paddingHorizontal: 10,
           paddingVertical: 8,
            marginBottom: 12
           },
  doctorImage: {
     width: 70, 
     height: 70,
      borderRadius: 14,
       marginRight: 15 },
  doctorInfo: { flex: 1 },
  doctorName: { 
    fontSize: 15,
     fontFamily: 'InterSemiBold',
      color: '#222' 
    },
  doctorMeta: {
     fontSize: 13,
      fontFamily: 'InterMedium',
        marginTop: 2,
         lineHeight: 15
         },
  available: { fontSize: 12, fontFamily: 'InterMedium', color: '#018410' },
});