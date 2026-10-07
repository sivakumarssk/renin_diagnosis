import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

type PaymentMethod = {
  key: string;
  label: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBg: string;
};

const METHODS: PaymentMethod[] = [
  {
    key: 'phonepe',
    label: 'Phonepe',
    subtitle: 'Pay by any UPI App',
    icon: 'logo-google', // swap for a PhonePe icon/image if you have one
    iconColor: '#FFFFFF',
    iconBg: '#5F259F',
  },
  {
    key: 'card',
    label: 'Credit Card',
    subtitle: 'Mastercard, Rupay',
    icon: 'card-outline',
    iconColor: '#333',
    iconBg: 'transparent',
  },
  {
    key: 'netbanking',
    label: 'Net Banking',
    subtitle: 'All major banks',
    icon: 'card-outline',
    iconColor: '#333',
    iconBg: 'transparent',
  },
  {
    key: 'wallets',
    label: 'Wallets',
    subtitle: '',
    icon: 'card-outline',
    iconColor: '#333',
    iconBg: 'transparent',
  },
];

export default function Payment() {
  const { totalAmount = '249' } = useLocalSearchParams<{ totalAmount?: string }>();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handlePay = () => {
    if (!selectedMethod) return;
    router.push({
      pathname: '/payment-success', // update to your actual confirmation route
      params: { totalAmount },
    });
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment OPtions</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>

        {/* AMOUNT BANNER */}
        <View style={styles.amountBanner}>
          <Text style={styles.amountText}>₹109</Text>
        </View>

        <Text style={styles.sectionTitle}>Select Payment Method</Text>

        {METHODS.map((method) => (
          <TouchableOpacity
            key={method.key}
            style={styles.methodRow}
            activeOpacity={0.7}
            onPress={() => setSelectedMethod(method.key)}
          >
            <View
              style={[
                styles.methodIconWrap,
                { backgroundColor: method.iconBg },
              ]}
            >
              <Ionicons name={method.icon} size={18} color={method.iconColor} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.methodLabel}>{method.label}</Text>
              {!!method.subtitle && (
                <Text style={styles.methodSubtitle}>{method.subtitle}</Text>
              )}
            </View>

            <Ionicons name="chevron-forward" size={18} color="#999" />
          </TouchableOpacity>
        ))}

      </ScrollView>

      {/* PAY BUTTON (fixed at bottom) */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.payButton, !selectedMethod && styles.payButtonDisabled]}
          onPress={handlePay}
          disabled={!selectedMethod}
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
    paddingBottom: 15,
    marginTop:20
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
  },

  amountBanner: {
    backgroundColor: '#E9F8F1',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  amountText: {
    fontFamily: 'InterBold',
    fontSize: 22,
    color: '#1A1A1A',
  },

  sectionTitle: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
    marginHorizontal: 16,
    marginBottom: 17,
  },

  methodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E8F0EE',
    marginBottom: 18,
  },

  methodIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  methodLabel: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: '#1A1A1A',
  },

  methodSubtitle: {
    fontFamily: 'InterRegular',
    fontSize: 11,
    color: '#888',
    marginTop: 5,
  },

  footer: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#F3FAF9',
  },

  payButton: {
    backgroundColor: '#2F6364',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
  },

  payButtonDisabled: {
    opacity: 0.5,
  },

  payButtonText: {
    fontFamily: 'InterBold',
    color: '#FFFFFF',
    fontSize: 15,
  },
});