import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Replace with real data from your API / store
const STATS = [
  { label: 'Total Revenue', value: '₹4,65,000', change: '+12.5%' },
  { label: 'Total Bookings', value: '₹486', change: '+8.5%' },
  { label: 'Sample Processed', value: '₹4,65,000', change: '+15.5%' },
  { label: 'Reports Generated', value: '273', change: '+9.5%' },
];

export default function ReportsAnalyticsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
     <View style={styles.header}>
  <TouchableOpacity onPress={() => router.back()}>
    <Ionicons name="arrow-back" size={20} color="#222" />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>Revenue & Analytics</Text>
</View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.grid}>
          {STATS.map((stat) => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statChange}>{stat.change}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.detailButton}
        //   onPress={() => router.push('/detailed-reports')}
        >
          <Text style={styles.detailButtonText}>View Detailed Reports</Text>
        </TouchableOpacity>
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
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 14,
  paddingVertical: 12,
  marginBottom: 20,
},

headerTitle: {
  fontSize: 15,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 8,
},

  content: {
    padding: 14,
    paddingBottom: 40,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#B2DDD9',
    padding: 12,
     height:301,
     marginBottom:50
  },

  statCard: {
    width: '47%',
    height:96,
    borderWidth: 1,
    borderColor: '#20A7A3',
    borderRadius: 15,
    padding: 10,
    marginTop:22,
     alignItems: 'center',
  justifyContent: 'center',
  },

  statLabel: {
    fontSize: 13,
    fontFamily: 'InterRegular',
    // color: '#888',
    marginBottom: 5,
  },

  statValue: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 4,
  },

  statChange: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    color: '#25A45A',
  },

  detailButton: {
    borderWidth: 1,
    borderColor: '#408C8B',
    borderRadius: 15,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 50,
    height:77,
    width:296,
    marginLeft:20,
  justifyContent: 'center',
  },

  detailButtonText: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#233D3E',
  },
});