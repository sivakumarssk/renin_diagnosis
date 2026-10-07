import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

type Hospital = { key: string; name: string; rating: string; address: string; distance: string; image: any };

const HOSPITALS: Hospital[] = [
  { key: 'h1', name: 'Apollo Hospitals', rating: '4.5/500 Reviews', address: 'Jubliee Hills, Hyderabad', distance: '2.4 Km', image: require('../assets/images/hospitalApollo.png') },
  { key: 'h2', name: 'Kims Hospitals', rating: '4.5/500 Reviews', address: 'Jubliee Hills, Hyderabad', distance: '3.4 Km', image: require('../assets/images/hospitalKims.png') },
  { key: 'h3', name: 'Yashoda Hospitals', rating: '4.5/500 Reviews', address: 'Jubliee Hills, Hyderabad', distance: '3.4 Km', image: require('../assets/images/hospitalYashoda.png') },
  { key: 'h4', name: 'Care Hospitals', rating: '4.5/500 Reviews', address: 'Jubliee Hills, Hyderabad', distance: '2.4 Km', image: require('../assets/images/hospitalCare.png') },
  { key: 'h5', name: 'Yashoda Hospitals', rating: '4.5/500 Reviews', address: 'Jubliee Hills, Hyderabad', distance: '2.4 Km', image: require('../assets/images/hospitalYashoda.png') },
  { key: 'h6', name: 'Care Hospitals', rating: '4.5/500 Reviews', address: 'Jubliee Hills, Hyderabad', distance: '2.4 Km', image: require('../assets/images/hospitalCare.png') },
];

export default function FindHospitalsAppointment() {
   const { flow } = useLocalSearchParams<{
    flow?: string;
  }>();
  const [activeTab, setActiveTab] = useState<'nearest' | 'top'>('nearest');

return (
  <View style={styles.container}>
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
            size={22}
            color="#1A1A1A"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Find Hospitals</Text>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#999" />

        <TextInput
          style={styles.searchInput}
          placeholder="Search Hospitals"
          placeholderTextColor="#999"
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'nearest' && styles.tabButtonActive,
          ]}
          onPress={() => setActiveTab('nearest')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'nearest' && styles.tabTextActive,
            ]}
          >
            Nearest
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'top' && styles.tabButtonActive,
          ]}
          onPress={() => setActiveTab('top')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'top' && styles.tabTextActive,
            ]}
          >
            Top Rated
          </Text>
        </TouchableOpacity>
      </View>

      {/* Hospitals */}
      <View style={styles.hospitalList}>
        {HOSPITALS.map((h) => (
          <TouchableOpacity
            key={h.key}
            style={styles.card}
            onPress={() => {
              if (h.key === 'h1') {
                if (flow === 'bookAppointment') {
                  router.push('/choose-doctors');
                } else {
                  router.push({
                    pathname: '/book-appointment',
                    params: {
                      flow: 'findHospital',
                    },
                  });
                }
              }
            }}
          >
            <Image
              source={h.image}
              style={styles.cardImage}
              resizeMode="cover"
            />

            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>{h.name}</Text>

              <View style={styles.ratingRow}>
                <Ionicons
                  name="star"
                  size={13}
                  color="#F5A623"
                />
                <Text style={styles.ratingText}>
                  {h.rating}
                </Text>
              </View>

              <View style={styles.addressRow}>
                <Ionicons
                  name="location-outline"
                  size={13}
                  color="#666"
                />

                <Text style={styles.addressText}>
                  {h.address}{'\n'}{h.distance}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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
    paddingTop: 20,
    paddingBottom: 18,
    marginTop:20
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 18,
    color: '#1A1A1A',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 46,
    borderColor: '#B0B0B0',
    borderWidth: 1,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'InterRegular',
    fontSize: 13,
  },

  tabsRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },

  tabButton: {
    height: 28,
    width: 100,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  tabButtonActive: {
    backgroundColor: '#2E7773',
    borderRadius: 18,
  },

  tabText: {
    fontFamily: 'InterSemiBold',
    fontSize: 13,
    color: '#333333',
  },

  tabTextActive: {
    color: '#FFFFFF',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#83C5C0',
    padding: 10,
    marginTop: 12,
    height:128,
    // width:380
  },

  cardImage: {
    width: 140,
    height: 109,
    borderRadius: 10,
    marginRight: 18,
  },

  cardInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  cardName: {
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

  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  addressText: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    marginLeft: 4,
    lineHeight: 14,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  hospitalList: {
    paddingHorizontal: 16,
  },
});