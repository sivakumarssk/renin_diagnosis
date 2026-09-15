import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const doctors = [
  {
    id: 1,
    name: 'Dr. Renuka Sharma',
    specialty: 'General Physician',
    rating: '4.9',
    available: true,
     image: require('../assets/images/renuka.png'),
  },
  {
    id: 2,
    name: 'Dr. Rahul',
    specialty: 'Cardiologist',
    rating: '4.8',
    available: true,
  image: require('../assets/images/rahul.png'),
  },
  {
    id: 3,
    name: 'Dr. Anjali',
    specialty: 'Orthopedist',
    rating: '4.8',
    available: true,
    image: require('../assets/images/anjali.png'),
  },
  {
    id: 4,
    name: 'Dr. Priya Sharma',
    specialty: 'General Physician',
    rating: '4.5',
    available: true,
    image: require('../assets/images/doctor.png'),
  },
];

export default function Doctors() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons
              name="arrow-back"
              size={13}
              color="#222"
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Doctors</Text>

          <TouchableOpacity>
            <Ionicons
              name="ellipsis-vertical"
              size={13}
              color="#222"
            />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={12}
            color="#777"
          />

          <TextInput
            placeholder="Search doctor"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* Department */}
        <TouchableOpacity style={styles.departmentButton}>
          <Text style={styles.departmentText}>
            All Departments
          </Text>

          <Ionicons
            name="chevron-down"
            size={12}
            color="#333"
          />
        </TouchableOpacity>

        {/* Doctors */}
        {doctors.map((doctor) => (
          <TouchableOpacity
            key={doctor.id}
            style={styles.doctorCard}
            activeOpacity={0.8}
            onPress={() => {
              if (doctor.id === 1) {
                router.push('/doctor-profile');
              }
            }}
          >
           <Image
  source={doctor.image}
  style={styles.doctorImage}
  resizeMode="cover"
/>

            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>
                {doctor.name}
              </Text>

              <Text style={styles.specialty}>
                {doctor.specialty}
              </Text>

              <View style={styles.ratingRow}>
                <Ionicons
                  name="star"
                  size={7}
                  color="#F4B400"
                />

                <Text style={styles.rating}>
                  {doctor.rating}
                </Text>
              </View>
            </View>

            <Text style={styles.available}>
              {doctor.available ? 'Available' : 'Unavailable'}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Add Doctor */}
        <TouchableOpacity style={styles.addDoctorButton}
        onPress={() => router.push('/add-doctor')}>
          <Text style={styles.addDoctorText}>
            + Add Doctor
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/home')}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color="#777"
          />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="person"
            size={24}
            color="#286B6B"
          />
          <Text style={[styles.navLabel, styles.activeNavLabel]}>
            Doctor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/appointments')}
        >
          <Ionicons
            name="calendar-outline"
            size={24}
            color="#777"
          />
          <Text style={styles.navLabel}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name="ellipsis-horizontal"
            size={24}
            color="#777"
          />
          <Text style={styles.navLabel}>More</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 8,
    paddingBottom: 65,
  },

  header: {
    height: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:20
  },

  backButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  searchContainer: {
    height: 54,
    borderWidth: 1,
    borderColor: '#D6E3E2',
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 13,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    marginLeft: 10,
    fontSize: 13,
    fontFamily: 'InterRegular',
    // color: '#222',
  },

  departmentButton: {
    height: 58,
    borderWidth: 1,
    borderColor: '#2F6364',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 25,
  },

  departmentText: {
    fontSize: 15,
    fontFamily: 'InterMedium',
    color: '#333',
  },

  doctorCard: {
    minHeight: 102,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5E4E3',
    borderRadius: 16,
    marginBottom: 15,
    paddingHorizontal: 7,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },

  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginRight: 18,
  },

  doctorInfo: {
    flex: 1,
  },

  doctorName: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  specialty: {
    fontSize: 14,
    fontFamily: 'InterRegular',
    // color: '#555',
    marginTop: 1,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  rating: {
    fontSize: 14,
    fontFamily: 'InterRegular',
    color: '#777',
    marginLeft: 3,
  },

  available: {
    fontSize: 9,
    fontFamily: 'InterMedium',
    color: '#018410',
  },

  addDoctorButton: {
    height: 46,
    backgroundColor: '#286B6B',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom:50
  },

  addDoctorText: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

  bottomNavigation: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 8,
    height: 78,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7E5E4',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navLabel: {
    fontSize: 9,
    fontFamily: 'InterRegular',
    // color: '#777',
    marginTop: 2,
  },

  activeNavLabel: {
    fontFamily: 'InterMedium',
    color: '#286B6B',
  },
});