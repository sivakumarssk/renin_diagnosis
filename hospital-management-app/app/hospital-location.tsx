import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const mapImage = require('../assets/images/location.png');

const selectedLocation = {
  name: 'ABC Hospital',
  address: 'Jubilee Hills, Road no. 36,\nHyderabad, Telangana - 500032, India',
};

export default function HospitalLocation() {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
  <View style={styles.leftHeader}>
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => router.back()}
    >
      <Ionicons name="arrow-back" size={20} color="#222" />
    </TouchableOpacity>

    <Text style={styles.headerTitle}>
      Hospital Location
    </Text>
  </View>

  <View style={styles.headerRight} />
</View>

      {/* Select label */}
      <View style={styles.selectLabelRow}>
        <Ionicons name="location-outline" size={13} color="#264849" />
        <Text style={styles.selectLabel}>Select Hospital Location</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={16} color="#9AA5A5" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search address or area"
          placeholderTextColor="#9AA5A5"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Map */}
      <View style={styles.mapWrap}>
        <Image source={mapImage} style={styles.map} resizeMode="cover" />
        <View style={styles.pinWrap} pointerEvents="none">
          <Ionicons name="location" size={32} color="#2F6364" />
        </View>
      </View>

      {/* Selected location card */}
      <View style={styles.bottomSheet}>
        <View style={styles.locationCard}>
          <Text style={styles.locationName}>{selectedLocation.name}</Text>
          <Text style={styles.locationAddress}>
            {selectedLocation.address}
          </Text>
        </View>

        <View style={styles.noteRow}>
          <Ionicons
            name="information-circle-outline"
            size={13}
            color="#2F6364"
          />
          <Text style={styles.noteText}>
            This location will be visible to patients in the Find Hospital
            Section
          </Text>
        </View>

        <TouchableOpacity
          style={styles.confirmButton}
        //   onPress={() => router.back()}
        >
          <Text style={styles.confirmButtonText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  header: {
  height: 25,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  marginTop: 8,
  marginBottom: 40,
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
  fontSize: 18,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 4,
},

headerRight: {
  width: 22,
},

  selectLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  selectLabel: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    // color: '#264849',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E4E3',
    borderRadius: 14,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    height: 54,
    marginBottom: 18,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'InterMedium',
    color: '#222',
  },

  mapWrap: {
    flex: 1,
    // overflow: 'hidden',
  },

  map: {
    width: 380,
    height: 418,
  },

  pinWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  bottomSheet: {
    backgroundColor: '#F3FAF9',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 20,
  },

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D6E4E3',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    // marginTop:-25
  },

  locationName: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#222',
    marginBottom: 4,
  },

  locationAddress: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    // color: '#666',
    lineHeight: 17,
  },

  noteRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginBottom: 40,
  },

  noteText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'InterRegular',
    color: '#0071B7',
    lineHeight: 15,
  },

  confirmButton: {
    height: 46,
    width:296,
    borderRadius: 12,
    backgroundColor: '#2F6364',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:25
  },

  confirmButtonText: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },
});