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
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

type Department = {
  id: string;
  name: string;
  doctorCount: number;
  image: any;
  bgColor: string;
};

const departments: Department[] = [
  {
    id: 'general-physician',
    name: 'General Physician',
    doctorCount: 45,
    image: require('../assets/images/stethoscope.png'),
    bgColor: '#E6F6F5',
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    doctorCount: 45,
    image: require('../assets/images/heart.png'),
    bgColor: '#FBE9F0',
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    doctorCount: 45,
    image: require('../assets/images/skin.png'),
    bgColor: '#FBEAF6',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    doctorCount: 45,
    image: require('../assets/images/pediatrics.png'),
    bgColor: '#E7F0FD',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    doctorCount: 45,
    image: require('../assets/images/x-ray.png'),
    bgColor: '#EDEDED',
  },
  {
    id: 'ent',
    name: 'ENT',
    doctorCount: 45,
    image: require('../assets/images/ent.png'),
    bgColor: '#E7F0FD',
  },
  {
    id: 'gynecology',
    name: 'Gynecology',
    doctorCount: 45,
    image: require('../assets/images/gynocology.png'),
    bgColor: '#FBEAE6',
  },
];

export default function Departments() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
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
      Departments
    </Text>
  </View>

  <TouchableOpacity style={styles.moreButton}>
    <Ionicons
      name="ellipsis-vertical"
      size={16}
      color="#222"
    />
  </TouchableOpacity>
</View>

        {/* Search */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={14} color="#9AA5A5" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search department"
            placeholderTextColor="#9AA5A5"
          />
        </View>

        {/* Add Department */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push('/add-department')}
        >
          <Ionicons name="add" size={16} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add Department</Text>
        </TouchableOpacity>

        {/* Department list */}
        {departments.map((dept) => (
          <TouchableOpacity
            key={dept.id}
            style={styles.deptCard}
            activeOpacity={0.8}
            onPress={() => {
              if (dept.id === 'cardiology') {
                router.push({
                  pathname: '/department-detail',
                  params: {
                    id: dept.id,
                    name: dept.name,
                    doctorCount: String(dept.doctorCount),
                  },
                });
              }
            }}
          >
            <View
              style={[styles.deptIconBox, { backgroundColor: dept.bgColor }]}
            >
              <Image
                source={dept.image}
                style={styles.deptImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.deptInfo}>
              <Text style={styles.deptName}>{dept.name}</Text>
              <Text style={styles.deptCount}>{dept.doctorCount} Doctors</Text>
            </View>

            <Ionicons name="chevron-forward" size={16} color="#9AA5A5" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 30,
  },

  header: {
  height: 25,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 30,
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
  fontSize: 16,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 4,
},

moreButton: {
  width: 22,
  height: 22,
  alignItems: 'center',
  justifyContent: 'center',
},

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CECECE',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 46,
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'InterMedium',
    color: '#222',
  },

  addButton: {
    height: 129,
    width:194,
    borderRadius: 14,
    backgroundColor: '#5AA7A5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 22,
    marginLeft:60
  },

  addButtonText: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

  deptCard: {
    minHeight: 85,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  deptIconBox: {
    width: 55,
    height: 61,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  deptImage: {
    width: 26,
    height: 26,
  },

  deptInfo: {
    flex: 1,
  },

  deptName: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  deptCount: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    // color: '#9AA5A5',
    marginTop: 2,
  },
});