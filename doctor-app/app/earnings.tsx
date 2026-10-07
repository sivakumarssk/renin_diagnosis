import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  bg: '#F4F8F8',
  card: '#FFFFFF',
  totalCardBg: '#DFF3EE',
  primary: '#1E5A54',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  border: '#EEF1F1',
};

type StatCard = {
  id: string;
  label: string;
  value: string;
};

const statCards: StatCard[] = [
  { id: '1', label: 'Today', value: '₹2,500' },
  { id: '2', label: 'Today', value: '₹2,500' },
  { id: '3', label: 'This Month', value: '₹18,500' },
  { id: '4', label: 'Pending', value: '₹3,000' },
];

export default function EarningsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      {/* Header */}
      <View style={styles.header}>
  <View style={styles.leftHeader}>
    <TouchableOpacity
      onPress={() => router.back()}
      style={styles.backButton}
    >
      <Ionicons
        name="arrow-back"
        size={22}
        color={COLORS.textDark}
      />
    </TouchableOpacity>

    <Text style={styles.headerTitle}>Earnings</Text>
  </View>

  <View style={styles.headerRight} />
</View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Total earnings card */}
        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total Earnings</Text>
          <Text style={styles.totalValue}>₹45,000</Text>
        </View>

        {/* Stat grid */}
        <View style={styles.grid}>
          {statCards.map((stat) => (
            <View key={stat.id} style={styles.statCard}>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
            </View>
          ))}
        </View>

        {/* View Transactions button */}
        <TouchableOpacity
          style={styles.transactionsButton}
          activeOpacity={0.85}
          onPress={() => router.push('/profile')}
        >
          <Text style={styles.transactionsButtonText}>View Transactions</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
 header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 8,
  paddingVertical: 12,
},

leftHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},

backButton: {
  width: 22,
  height: 22,
  alignItems: 'center',
  justifyContent: 'center',
},

headerTitle: {
  fontFamily: 'InterSemiBold',
  fontSize: 16,
  color: COLORS.textDark,
  marginLeft: 4,
},

headerRight: {
  width: 22,
},
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },
  totalCard: {
    backgroundColor: COLORS.totalCardBg,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
  },
  totalLabel: {
    fontFamily: 'InterRegular',
    fontSize: 13,
    color: COLORS.textMuted,
    marginBottom: 6,
  },
  totalValue: {
    fontFamily: 'InterBold',
    fontSize: 22,
    color: COLORS.textDark,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    height:132,
    backgroundColor: '#F0F9FF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    borderColor:'#20A7A3',
    borderWidth:1
  },
  statLabel: {
    fontFamily: 'InterRegular',
    fontSize: 15,
    // color: COLORS.textMuted,
    marginBottom: 6,
    textAlign:'center',
    justifyContent:'center',
    marginTop:20
  },
  statValue: {
    fontFamily: 'InterBold',
    fontSize: 16,
    color: COLORS.textDark,
    textAlign:'center',
    justifyContent:'center'
  },
  transactionsButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    height:52,
    width:307,
    marginLeft:10
  },
  transactionsButtonText: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});