import React, { useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

const METHODS = [
 {
  key: 'phonepe',
  label: 'Phonepe',
  subtitle: 'Pay by any UPI App',
  icon: require('../assets/images/phonepe.png'),
},
  {
    key: 'card',
    label: 'Credit Card',
    subtitle: 'Mastercard, Rupay',
    icon: <Feather name="credit-card" size={19} color="#317070" />,
  },
  {
    key: 'netbanking',
    label: 'Net Banking',
    subtitle: 'All major banks',
    icon: <MaterialCommunityIcons name="bank-outline" size={22} color="#317070" />,
  },
  {
    key: 'wallets',
    label: 'Wallets',
    subtitle: '',
    icon: <Feather name="credit-card" size={19} color="#317070" />,
  },
];

export default function PaymentOptions() {
  const { totalAmount = '500' } = useLocalSearchParams<{ totalAmount?: string }>();
  const [selected, setSelected] = useState('phonepe');

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment OPtions</Text>
      </View>

      {/* AMOUNT BADGE */}
      <View style={styles.amountBadge}>
        <Text style={styles.amountText}>₹{totalAmount}</Text>
      </View>

      <Text style={styles.sectionTitle}>Select Payment Method</Text>

      {/* METHODS LIST */}
      <View style={{ paddingHorizontal: 16 }}>
        {METHODS.map((m) => (
          <TouchableOpacity key={m.key}
           style={styles.methodRow}
            onPress={() => setSelected(m.key)}>
            {/* <View style={styles.methodIconWrap}>{m.icon}</View> */}
            <View style={styles.methodIconWrap}>
  {m.key === 'phonepe' ? (
    <Image
      source={m.icon}
      style={styles.paymentIcon}
      resizeMode="contain"
    />
  ) : (
    m.icon
  )}
</View>
            <View style={{ flex: 1 }}>
              <Text style={styles.methodLabel}>{m.label}</Text>
              {!!m.subtitle && <Text style={styles.methodSubtitle}>{m.subtitle}</Text>}
            </View>
            <Ionicons name="chevron-forward" size={18} color="#BBB" />
          </TouchableOpacity>
        ))}
      </View>

      {/* PAY BUTTON */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => router.push({ pathname: './payment-success', params: { totalAmount } })}
        >
          <Text style={styles.payButtonText}>Pay ₹{totalAmount}</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 20,
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontSize: 20,
    fontFamily: 'InterBold',
    color: '#1A1A1A',
  },

  amountBadge: {
    backgroundColor: '#E9F8F1',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 27,
  },

  amountText: {
    fontSize: 25,
    fontFamily: 'InterBold',
    color: '#1A1A1A',
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: 'InterBold',
    color: '#1A1A1A',
    marginHorizontal: 16,
    marginBottom: 17,
  },

  methodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    marginBottom: 15,
  },

  methodIconWrap: {
    width: 30,
    alignItems: 'center',
    marginRight: 14,
  },

  methodLabel: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#1A1A1A',
  },

  methodSubtitle: {
    fontSize: 14,
    fontFamily: 'InterRegular',
    marginTop: 2,
    color: '#666666',
  },

  bottomBar: {
    padding: 16,
    marginTop: 'auto',
  },

  payButton: {
    backgroundColor: '#317070',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 269,
    marginLeft: 20,
  },

  payButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'InterBold',
  },

  paymentIcon: {
    width: 30,
    height: 30,
  },
});