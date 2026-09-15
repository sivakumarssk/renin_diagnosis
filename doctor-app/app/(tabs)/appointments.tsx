import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  bg: '#F4F8F8',
  primary: '#1E5A54',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  card: '#FFFFFF',
};

const appointments = [
  {
    id: '1',
    name: 'Priya Kumar',
    type: 'General Consultation',
    date: '17 Aug 2026 10:00 AM',
    price: '₹500',
    image: require('../../assets/images/priya.png'),
  },
  {
    id: '2',
    name: 'Ravi Kumar',
    type: 'General Consultation',
    date: '17 Aug 2026 10:00 AM',
    price: '₹500',
    image: require('../../assets/images/patient5.png'),
  },
  {
    id: '3',
    name: 'Ravi Kumar',
    type: 'General Consultation',
    date: '17 Aug 2026 10:00 AM',
    price: '₹500',
    image: require('../../assets/images/ravi.png'),
  },
  {
    id: '4',
    name: 'Ravi Kumar',
    type: 'General Consultation',
    date: '17 Aug 2026 10:00 AM',
    price: '₹500',
    image: require('../../assets/images/patient5.png'),
  },
];

export default function Appointments() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color={COLORS.textDark} />
          </TouchableOpacity>

          <Text style={styles.title}>Appointments</Text>
          <View style={{ width: 20 }} />
        </View>

        <View style={styles.tabs}>
          <Text style={[styles.tab, styles.activeTab]}>Upcoming</Text>
          <Text style={styles.tab}>Pending</Text>
          <Text style={styles.tab}>Completed</Text>
          <Text style={styles.tab}>Cancelled</Text>
        </View>

        {appointments.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => {
              if (item.name === 'Priya Kumar') {
                router.push({
                  pathname: '/appointment-details',
                  params: {
                    patientName: item.name,
                    patientImage: 'priya',
                  },
                });
              }
            }}
          >
            <Image source={item.image} style={styles.avatar} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: COLORS.textDark,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    color: COLORS.textDark,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: COLORS.primary,
    color: '#FFFFFF',
  },
  card: {
    height:111,
    backgroundColor: COLORS.card,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#83C5C0',
    padding: 12,
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 21,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontFamily: 'InterSemiBold',
    fontSize: 13,
    color: COLORS.textDark,
  },
  type: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    // color: COLORS.textMuted,
  },
  date: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    // color: COLORS.textMuted,
  },
  price: {
    fontFamily: 'InterMedium',
    fontSize: 11,
    color: COLORS.textDark,
  },
});