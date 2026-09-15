
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { router, useLocalSearchParams } from 'expo-router';

const DEPARTMENTS = [
  {
    key: 'general',
    label: 'General Physician',
    count: '46 Doctors',
    image: require('../../src/assets/images/general-physician.png'),
    bg: '#E7F3F1',
  },
  {
    key: 'cardiology',
    label: 'Cardiology',
    count: '38 Doctors',
    image: require('../../src/assets/images/cardiology.png'),
    bg: '#FDEDEE',
  },
  {
    key: 'dermatology',
    label: 'Dermatology',
    count: '48 Doctors',
    image: require('../../src/assets/images/dermatology.png'),
    bg: '#EFEBFF',
  },
  {
    key: 'pediatrics',
    label: 'Pediatrics',
    count: '56 Doctors',
    image: require('../../src/assets/images/pediatrics.png'),
    bg: '#EAF1FF',
  },
  {
    key: 'orthopedics',
    label: 'Orthopedics',
    count: '45 Doctors',
    image: require('../../src/assets/images/orthopedics.png'),
    bg: '#FFF3E0',
  },
  {
    key: 'ent',
    label: 'ENT',
    count: '48 Doctors',
    image: require('../../src/assets/images/ent.png'),
    bg: '#E6F4FB',
  },
  {
    key: 'gynecology',
    label: 'Gynecology',
    count: '45 Doctors',
    image: require('../../src/assets/images/gynecology.png'),
    bg: '#FDEDEE',
  },
];


export default function ChooseDepartment() {
  const { flow } = useLocalSearchParams<{ flow?: string }>();

  return (
    <View style={styles.container}>

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

        <Text style={styles.headerTitle}>
          Book Appointment
        </Text>
      </View>

      {/* Search */}
      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          size={18}
          color="#999"
        />

        <TextInput
          style={styles.searchInput}
          placeholder="Search Department"
          placeholderTextColor="#999"
        />
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>
        Choose Department
      </Text>

      {/* Departments */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 30,
        }}
      >
        {DEPARTMENTS.map((dept) => (
          <TouchableOpacity
            key={dept.key}
            style={styles.row}

onPress={() => {
  if(dept.key==='general'){
  if (flow === 'findHospital') {
    router.push({
      pathname: '/choose-doctors',
      params: {
        flow: 'findHospital',
      },
    });
  } else {
    router.push({
      pathname: '/find-hospitals-appointment',
      params: {
        flow: 'bookAppointment',
      },
    });
  }
}
}}
          >

            {/* Department Image */}
            <View
              style={[
                styles.iconWrap,
                { backgroundColor: dept.bg },
              ]}
            >
              <Image
                source={dept.image}
                style={styles.departmentImage}
                resizeMode="contain"
              />
            </View>

            {/* Department Name */}
            <View style={styles.rowText}>
              <Text style={styles.rowLabel}>
                {dept.label}
              </Text>

              <Text style={styles.rowCount}>
                {dept.count}
              </Text>
            </View>

            {/* Arrow */}
            <Ionicons
              name="chevron-forward"
              size={18}
              color="#BBB"
            />
          </TouchableOpacity>
        ))}
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
    paddingTop: 35,
    paddingBottom: 16,
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 16,
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
    marginBottom: 18,
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

  sectionTitle: {
    fontFamily: 'InterBold',
    fontSize: 17,
    marginHorizontal: 16,
    marginBottom: 14,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D9EFEC',
    height:85
  },

  iconWrap: {
    width: 55,
    height: 61,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  departmentImage: {
    width: 23,
    height: 29,
  },

  rowText: {
    flex: 1,
  },

  rowLabel: {
    fontFamily: 'InterBold',
    fontSize: 14,
    color: '#1A1A1A',
  },

  rowCount: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    marginTop: 2,
  },
});