import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function ReviewPay() {
  const {
    patientName = 'Priyanka',
    patientAge = '25',
    patientGender = 'Female',
    testName = 'CBC ( Complete Blood Count )',
    collectionType = 'Home Sample Collection',
    date = '10 Aug 2025',
    time = '7:00 PM - 9:00 AM',
    centerName = 'Apollo Diagnostics',
    address = '2-123, Banjara Hills,\nHyderabad, Telangana - 500034',
  } = useLocalSearchParams<{
    patientName?: string;
    patientAge?: string;
    patientGender?: string;
    testName?: string;
    collectionType?: string;
    date?: string;
    time?: string;
    centerName?: string;
    address?: string;
  }>();

  const testAmount = 199;
  const homeCollectionCharge = 50;
  const totalAmount = testAmount + homeCollectionCharge;

  const handlePay = () => {
    router.push({
      pathname: '/payment', // update to your actual payment route
      params: { totalAmount: String(totalAmount) },
    });
  };
const TEST_IMAGE = require('../assets/images/testCBC.png'); // update filename to match yours
  return (
    <View style={styles.container}>
      {/* HEADER */}
    
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
         
         <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review & Pay</Text>
      </View>


        {/* ADDRESS */}
        <View style={styles.addressRow}>
          <Ionicons name="location-outline" size={14} color="#666" />
          <Text style={styles.addressText}>{address}</Text>
        </View>

        {/* BOOKING SUMMARY CARD */}
        

{/* ================================
    BOOKING SUMMARY
================================= */}
<View style={styles.bookingCard}>

  {/* HEADER */}
  <View style={styles.bookingHeader}>
    <Text style={styles.bookingTitle}>
      Booking Summary
    </Text>

    <TouchableOpacity>
      <Text style={styles.bookingEdit}>
        Edit
      </Text>
    </TouchableOpacity>
  </View>

  {/* TEST */}
  <View style={styles.bookingRow}>
    <Text style={styles.bookingLabel}>
      Test
    </Text>

    <View style={styles.testRow}>
      <View style={styles.testIconWrap}>
        <Image
          source={TEST_IMAGE}
          style={styles.testIconImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.testName}>
        {testName}
      </Text>
    </View>
  </View>

  {/* COLLECTION TYPE */}
  <View style={styles.bookingRow}>
    <Text style={styles.bookingLabel}>
      Collection Type
    </Text>

    <Text style={styles.bookingValue}>
      {collectionType}
    </Text>
  </View>

  {/* DATE & TIME */}
  <View style={styles.bookingRow}>
    <Text style={styles.bookingLabel}>
      Date & Time
    </Text>

    <Text style={styles.bookingValue}>
      Today, {date}
      {'\n'}
      {time}
    </Text>
  </View>

  {/* PATIENT */}
  <View style={styles.bookingRowLast}>
    <Text style={styles.bookingLabel}>
      Patient
    </Text>

    <Text style={styles.bookingValue}>
      {patientName} ({patientAge} Years, {patientGender})
    </Text>
  </View>

</View>

        {/* SELECTED CENTER */}
        <Text style={styles.sectionTitle}>Selected Center</Text>
        <View style={styles.centerCard}>
          <Image
            source={require('../assets/images/centerApollo1.png')}
            style={styles.centerImage}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.centerName}>{centerName}</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={12} color="#F5A623" />
              <Text style={styles.ratingText}>4.5/5</Text>
            </View>
            <View style={styles.centerAddressRow}>
              <Ionicons name="location-outline" size={12} color="#666" />
              <Text style={styles.centerAddressText}>
                2.1 Km, Banjara hills Hyderabad{'\n'}Telangana
              </Text>
            </View>
          </View>
        </View>

        {/* PRICE DETAILS */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Price Details</Text>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Test Amount</Text>
            <Text style={styles.priceValue}>₹{testAmount}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Home Collection Charges</Text>
            <Text style={styles.priceValue}>₹{homeCollectionCharge}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.priceRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>₹{totalAmount}</Text>
          </View>
        </View>

        {/* PAY BUTTON */}
        <TouchableOpacity style={styles.payButton} onPress={handlePay}>
          <Text style={styles.payButtonText}>Pay ₹{totalAmount}</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F8F1',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 20,
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

  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 16,
    marginBottom: 25,
  },

  addressText: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    marginLeft: 6,
    lineHeight: 16,
  },

  /* BOOKING SUMMARY */

  bookingCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D8E5E1',
    overflow: 'hidden',
  },

  bookingHeader: {
    height: 34,
    backgroundColor: '#E4F7EE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  bookingTitle: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
    marginBottom: 3,
  },

  bookingEdit: {
    fontFamily: 'InterBold',
    fontSize: 13,
    color: '#017B21',
  },

  bookingRow: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#C8C8C8',
  },

  bookingRowLast: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  bookingLabel: {
    fontFamily: 'InterMedium',
    fontSize: 13,
    color: '#444444',
    marginBottom: 9,
  },

  bookingValue: {
    fontFamily: 'InterBold',
    fontSize: 11,
    color: '#222222',
    lineHeight: 12,
  },

  testRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  testIconWrap: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#FFE7E7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },

  testIconImage: {
    width: 46,
    height: 46,
  },

  testName: {
    flex: 1,
    fontFamily: 'InterBold',
    fontSize: 12,
    color: '#222222',
    lineHeight: 16,
  },

  /* SELECTED CENTER */

  sectionTitle: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
    marginHorizontal: 16,
    marginBottom: 10,
  },

  centerCard: {
    flexDirection: 'row',
    borderRadius: 14,
    marginHorizontal: 16,
    padding: 12,
    marginBottom: 16,
  },

  centerImage: {
    width: 100,
    height: 78,
    borderRadius: 10,
    marginRight: 30,
  },

  centerName: {
    fontFamily: 'InterBold',
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 4,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  ratingText: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    color: '#333',
    marginLeft: 4,
  },

  centerAddressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  centerAddressText: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    marginLeft: 4,
    lineHeight: 13,
  },

  /* PRICE DETAILS */

  card: {
    borderRadius: 14,
    marginHorizontal: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#D1D1D1',
  },

  cardTitle: {
    fontFamily: 'InterBold',
    fontSize: 17,
    color: '#1A1A1A',
    marginBottom: 10,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  priceLabel: {
    fontFamily: 'InterRegular',
    fontSize: 15,
  },

  priceValue: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#1A1A1A',
  },

  divider: {
    borderTopWidth: 1,
    borderColor: '#A9A9A9',
    marginVertical: 14,
  },

  totalLabel: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
  },

  totalValue: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#016546',
  },

  /* PAY BUTTON */

  payButton: {
    backgroundColor: '#317070',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 6,
    width: 269,
    height: 55,
    marginLeft: 50,
  },

  payButtonText: {
    fontFamily: 'InterBold',
    color: '#FFFFFF',
    fontSize: 15,
  },
});
