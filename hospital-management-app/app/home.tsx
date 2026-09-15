import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
const appointments = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'General Physician',
    appointmentNo: '4 Appointments',
    time: '01:00 PM',
  },
  {
    id: 2,
    name: 'Dr. Rahul Sharma',
    specialty: 'Cardiologist',
    appointmentNo: '3 Appointments',
    time: '01:00 PM',
  },
  {
    id: 3,
    name: 'Dr. Mourika Sharma',
    specialty: 'Dermatologist',
    appointmentNo: '2 Appointments',
    time: '01:00 PM',
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning!</Text>
            <Text style={styles.appName}>
              Hospital Management App
            </Text>
          </View>

          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons
              name="notifications-outline"
              size={15}
              color="#F39C12"
            />

            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Statistics */}
        <View style={styles.statsGrid}>
          {/* Appointments */}
          <TouchableOpacity style={[styles.statCard, styles.blueCard]}>
            <View style={styles.statTop}>
              <Text style={styles.statNumber}>24</Text>

              <Ionicons
                name="calendar-outline"
                size={13}
                color="#4779D8"
              />
            </View>

            <Text style={styles.statTitle}>Appointments</Text>
            <Text style={styles.statSubtitle}>Today</Text>
          </TouchableOpacity>

          {/* Bookings */}
          <TouchableOpacity style={[styles.statCard, styles.orangeCard]}>
            <View style={styles.statTop}>
              <Text style={styles.statNumber}>8</Text>

              <Ionicons
                name="people-outline"
                size={13}
                color="#E98B43"
              />
            </View>

            <Text style={styles.statTitle}>Bookings</Text>
            <Text style={styles.statSubtitle}>Today</Text>
          </TouchableOpacity>

          {/* Doctors */}
          <TouchableOpacity style={[styles.statCard, styles.greenCard]}>
            <View style={styles.statTop}>
              <Text style={styles.statNumber}>15</Text>

              <Ionicons
                name="person-outline"
                size={13}
                color="#45A86B"
              />
            </View>

            <Text style={styles.statTitle}>Doctors</Text>
            <Text style={styles.statSubtitle}>Available</Text>
          </TouchableOpacity>

          {/* Patients */}
          <TouchableOpacity style={[styles.statCard, styles.purpleCard]}>
            <View style={styles.statTop}>
              <Text style={styles.statNumber}>42</Text>

              <Ionicons
                name="people-circle-outline"
                size={13}
                color="#8B63D6"
              />
            </View>

            <Text style={styles.statTitle}>Patients</Text>
            <Text style={styles.statSubtitle}>Today</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Appointments Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Today's Appointments
          </Text>

          <TouchableOpacity
            onPress={() => router.push('/appointments')}
          >
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Appointment Cards */}
        {appointments.map((appointment) => (
          <TouchableOpacity
  key={appointment.id}
  style={styles.appointmentCard}
  activeOpacity={0.8}
  onPress={() => {
    if (appointment.name === 'Dr. Priya Sharma') {
      router.push('/doctor-details');
    }
  }}
>
            {/* Doctor Image */}
            <View style={styles.doctorImageContainer}>
              <Image
                 source={require('../assets/images/doctor.png')}
                style={styles.doctorImage}
              />
            </View>

            {/* Details */}
            <View style={styles.appointmentDetails}>
              <Text style={styles.doctorName}>
                {appointment.name}
              </Text>

              <Text style={styles.doctorSpecialty}>
                {appointment.specialty}
              </Text>

              <Text style={styles.appointmentInfo}>
                {appointment.appointmentNo}
              </Text>

              <Text style={styles.appointmentTime}>
                Next Appointment: {appointment.time}
              </Text>
            </View>

            {/* Arrow */}
            <Ionicons
              name="chevron-forward"
              size={17.5}
              color="#333"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/home')}
        >
          <Ionicons
            name="home"
            size={17.5}
            color="#286B6B"
          />

          <Text style={[styles.navLabel, styles.activeNavLabel]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/doctors')}
        >
          <Ionicons
            name="person-outline"
            size={17.5}
            color="#777"
          />

          <Text style={styles.navLabel}>Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/appointments')}
        >
          <Ionicons
            name="calendar-outline"
            size={17.5}
            color="#777"
          />

          <Text style={styles.navLabel}>Appointments</Text>
        </TouchableOpacity>

        <TouchableOpacity
  style={styles.navItem}
  onPress={() => router.push('/morescreen')}
>
  <Ionicons
    name="ellipsis-horizontal"
    size={17.5}
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
    paddingTop: 17,
    paddingBottom: 70,
  },

  /* Header */

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },

  greeting: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 2,
  },

  appName: {
    fontSize: 13,
    fontFamily: 'InterRegular',
    color: '#333',
    marginBottom:10
  },

  notificationButton: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationDot: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#F39C12',
    top: 5,
    right: 6,
  },

  /* Statistics */

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  statCard: {
    width: 160,
    height: 97.5,
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 7,
    borderWidth: 1,
  },

  blueCard: {
    backgroundColor: '#EEF5FF',
    borderColor: '#D7E5FA',
  },

  orangeCard: {
    backgroundColor: '#FFF5EC',
    borderColor: '#F7DFCC',
  },

  greenCard: {
    backgroundColor: '#EFFAF2',
    borderColor: '#D5EEDB',
  },

  purpleCard: {
    backgroundColor: '#F5F0FF',
    borderColor: '#E2D8F6',
  },

  statTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 20,
    fontFamily: 'InterBold',
    color: '#286B6B',
  },

  statTitle: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#333',
    marginTop: 1,
  },

  statSubtitle: {
    fontSize: 13,
    fontFamily: 'InterRegular',
    color: '#777',
    marginTop: 1,
  },

  /* Section */

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  viewAll: {
    fontSize: 10,
    fontFamily: 'InterMedium',
    color: '#286B6B',
  },

  /* Appointment */

  appointmentCard: {
    minHeight: 108,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5E5E4',
    borderRadius: 7,
    marginBottom: 7,
    paddingHorizontal: 7,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },

  doctorImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 22,
  },

  doctorImage: {
    width: 70,
    height: 70,
  },

  appointmentDetails: {
    flex: 1,
  },

  doctorName: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 1,
  },

  doctorSpecialty: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    // color: '#555',
    marginBottom: 1,
  },

  appointmentInfo: {
    fontSize: 9,
    fontFamily: 'InterRegular',
    // color: '#555',
    marginBottom: 1,
  },

  appointmentTime: {
    fontSize: 9,
    fontFamily: 'InterRegular',
    // color: '#777',
  },

  /* Bottom Navigation */

  bottomNavigation: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 8,
    height: 43,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7E5E4',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navLabel: {
    fontSize: 7,
    fontFamily: 'InterRegular',
    color: '#777',
    marginTop: 2,
  },

  activeNavLabel: {
    fontFamily: 'InterMedium',
    color: '#286B6B',
  },
});