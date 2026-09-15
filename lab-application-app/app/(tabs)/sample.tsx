import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useLab } from '../../src/context/LabContext';

const recentBookings = [
  {
    id: '1',
    name: 'Ravi Kumar',
    test: 'CBC Test',
    date: '17 Aug 2026',
    time: '10:00 Am',
    collection: 'Home Collection',
    status: 'Collected',
    price: '₹450',
  },
  {
    id: '2',
    name: 'Ravi Kumar',
    test: 'CBC Test',
    date: '17 Aug 2026',
    time: '10:00 Am',
    collection: 'Home Collection',
    status: 'Collected',
    price: '₹450',
  },
   {
    id: '3',
    name: 'Ravi Kumar',
    test: 'CBC Test',
    date: '17 Aug 2026',
    time: '10:00 Am',
    collection: 'Home Collection',
    status: 'Collected',
    price: '₹450',
  },
  {
    id: '4',
    name: 'Ravi Kumar',
    test: 'CBC Test',
    date: '17 Aug 2026',
    time: '10:00 Am',
    collection: 'Home Collection',
    status: 'Collected',
    price: '₹450',
  },
];

export default function SamplesScreen() {
   const { resetSample } = useLab();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={18}
            color="#222"
          />
        </TouchableOpacity>

        <Text style={styles.title}>Samples</Text>

        <View style={{ width: 18 }} />
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        <TouchableOpacity style={styles.activeFilter}>
          <Text style={styles.activeFilterText}>
            Collected
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>
            Collected
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>
            Processing
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      {/* Same Recent Bookings */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {recentBookings.map((booking) => (
         <TouchableOpacity
  key={booking.id}
  style={styles.card}
  onPress={() => {
     if (booking.id === '1') {
    resetSample();
    router.push('/sample-details');
     }
  }}
>
            {/* Avatar */}
            <View style={styles.avatar}>
              <Ionicons
                name="person"
                size={22}
                color="#004A92"
              />
            </View>

            {/* Information */}
            <View style={styles.info}>
              <Text style={styles.name}>
                {booking.name}
              </Text>

              <Text style={styles.test}>
                {booking.test}
              </Text>

              <Text style={styles.details}>
               <Ionicons name="home-outline" size={8} color="#000" /> {booking.date}  |  {booking.time}
              </Text>

              <Text style={styles.collection}>
                {booking.collection}
              </Text>
            </View>

            {/* Right */}
            <View style={styles.right}>
              <View style={styles.status}>
                <Text style={styles.statusText}>
                  {booking.status}
                </Text>
              </View>

              <Text style={styles.price}>
                {booking.price}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FAF9',
  },

  header: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginBottom:20
  },

  title: {
    fontSize: 15,
    fontFamily: 'InterMedium',
    color: '#222',
  },

  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 2,
    marginBottom: 50,
  },

  filter: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 15,
  },

  activeFilter: {
    backgroundColor: '#2F6B6B',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 15,
  },

  filterText: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    color: '#222',
  },

  activeFilterText: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    color: '#FFF',
  },

  content: {
    paddingHorizontal: 8,
    paddingBottom: 30,
  },

  card: {
    minHeight: 94,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00000040',
    marginBottom: 25,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#E8E7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:13
  },

  info: {
    flex: 1,
    marginLeft: 9,
  },

  name: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  test: {
    fontSize: 11,
    fontFamily: 'InterMedium',
    color: '#222',
    marginTop: 1,
  },

  details: {
    fontSize: 9,
    fontFamily: 'InterRegular',
    // color: '#444',
    marginTop: 2,
  },

  collection: {
    fontSize: 9,
    fontFamily: 'InterRegular',
    // color: '#444',
    marginTop: 1,
  },

  right: {
    alignItems: 'flex-end',
  },

  status: {
    backgroundColor: '#D5FFD9',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 10,
  },

  statusText: {
    fontSize: 11,
    fontFamily: 'InterMedium',
    color: '#149329',
  },

  price: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginTop: 5,
  },
});