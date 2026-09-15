import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const filters = [
  'Pending',
  'Confirmed',
  'Completed',
  'Cancelled',
];

export default function BookingsScreen() {
  const [active, setActive] = useState('Confirmed');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={18}
            color="#222"
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Bookings
        </Text>

        <View style={{ width: 18 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.filters}>
          {filters.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.filter,
                active === item &&
                  styles.activeFilter,
              ]}
              onPress={() => setActive(item)}
            >
              <Text
                style={[
                  styles.filterText,
                  active === item &&
                    styles.activeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

       {[1, 2, 3, 4].map((item) => (
  <TouchableOpacity
    key={item}
    style={styles.bookingCard}
    onPress={
      item === 1
        ? () => router.push('/booking-details')
        : undefined
    }
  >
            <View style={styles.avatar}>
              <Ionicons
                name="person"
                size={20}
                color="#1761A0"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>
                Ravi Kumar
              </Text>

              <Text style={styles.test}>
                CBC Test
              </Text>

              <Text style={styles.details}>
               <Ionicons name="home-outline" size={9} color="#000" /> 17 Aug 2026  |  10:00 Am
              </Text>

              <Text style={styles.details}>
                Home Collection
              </Text>
            </View>

            <View style={styles.right}>
              <View style={styles.status}>
                <Text style={styles.statusText}>
                  Confirmed
                </Text>
              </View>

              <Text style={styles.price}>
                ₹450
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
   marginBottom:15
  },

  title: {
    fontSize: 15,
    fontFamily: 'InterMedium',
  },

  content: {
    padding: 10,
    paddingBottom:20,

  },

  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  filter: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 13,
    backgroundColor: '#FFF',
  },

  activeFilter: {
    backgroundColor: '#2F6B6B',
  },

  filterText: {
    fontSize: 11,
    fontFamily: 'InterMedium',
  },

  activeText: {
    color: '#FFF',
  },

  bookingCard: {
    minHeight: 94,
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#00000040',
    marginBottom: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 57,
    height: 57,
    borderRadius: 20,
    backgroundColor: '#E8E7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:15
  },

  info: {
    flex: 1,
    marginLeft: 8,
  },

  name: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
  },

  test: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
  },

  details: {
    fontSize: 10,
    fontFamily: 'InterRegular',
    marginTop: 1,
  },

  right: {
    alignItems: 'flex-end',
  },

  status: {
    backgroundColor: '#D4FFD8',
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 3,
  },

  statusText: {
    fontSize: 10,
    fontFamily: 'InterMedium',
    color: '#149329',
  },

  price: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    marginTop: 4,
  },
});