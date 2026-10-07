import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const DOCTORS = [
  { key: 'd1', name: 'Dr. Priya sharma', specialty: 'General Physician', exp: '10 Years Exp.', rating: '4.5/5', image: require('../assets/images/doctorPriya.png') },
  { key: 'd2', name: 'Dr. Priya sharma', specialty: 'General Physician', exp: '10 Years Exp.', rating: '4.5/5', image: require('../assets/images/doctorPriya.png') },
  { key: 'd3', name: 'Dr. Priya sharma', specialty: 'General Physician', exp: '10 Years Exp.', rating: '4.5/5', image: require('../assets/images/doctorPriya.png') },
  { key: 'd4', name: 'Dr. Priya sharma', specialty: 'General Physician', exp: '10 Years Exp.', rating: '4.5/5', image: require('../assets/images/doctorPriya.png') },
  { key: 'd5', name: 'Dr. Priya sharma', specialty: 'General Physician', exp: '10 Years Exp.', rating: '4.5/5', image: require('../assets/images/doctorPriya.png') },
  { key: 'd6', name: 'Dr. Priya sharma', specialty: 'General Physician', exp: '10 Years Exp.', rating: '4.5/5', image: require('../assets/images/doctorPriya.png') },
];

export default function ChooseDoctors() {
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
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Choose Doctors</Text>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#999" />

        <TextInput
          style={styles.searchInput}
          placeholder="Search Doctor"
          placeholderTextColor="#999"
        />
      </View>

      {/* Doctors */}
      <View style={styles.grid}>
        {DOCTORS.map((doc) => (
          <View key={doc.key} style={styles.card}>
            <Image
              source={doc.image}
              style={styles.doctorImage}
              resizeMode="cover"
            />

            <View style={styles.ratingBadge}>
              <Ionicons name="star" size={10} color="#F5A623" />
              <Text style={styles.ratingBadgeText}>
                {doc.rating}
              </Text>
            </View>

            <Text style={styles.doctorName}>
              {doc.name}
            </Text>

            <Text style={styles.doctorSpecialty}>
              {doc.specialty}
            </Text>

            <Text style={styles.doctorExp}>
              {doc.exp}
            </Text>

            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => {
                if (doc.key === 'd1') {
                  router.push('./doctor-detail');
                }
              }}
            >
              <Text style={styles.bookButtonText}>
                Book
              </Text>
            </TouchableOpacity>
          </View>
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
    paddingBottom: 30,
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

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 46,
    marginBottom: 35,
    borderColor: '#B0B0B0',
    borderWidth: 1,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'InterRegular',
    fontSize: 13,
    color: '#333',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  card: {
    width: (width - 32 - 12) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    padding: 12,
    marginBottom: 25,
    alignItems: 'center',
    height: 239,
  },

  doctorImage: {
    width: 111,
    height: 111,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'contain',
  },

  ratingBadge: {
    position: 'absolute',
    top: 102,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft:8,
    marginTop:36
  },

  ratingBadgeText: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    marginLeft: 4,
    color: '#1A1A1A',
  },

  doctorName: {
    fontFamily: 'InterBold',
    fontSize: 11,
    color: '#1A1A1A',
    alignSelf: 'flex-start',

  },

  doctorSpecialty: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    alignSelf: 'flex-start',
  },

  doctorExp: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    alignSelf: 'flex-start',
    marginBottom: 14,
  },

  bookButton: {
    backgroundColor: '#317070',
    borderRadius: 10,
    paddingVertical: 7,
    width: '100%',
    alignItems: 'center',
    height: 30,
  },

  bookButtonText: {
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
  },

  scrollContent: {
    paddingBottom: 30,
  },
});