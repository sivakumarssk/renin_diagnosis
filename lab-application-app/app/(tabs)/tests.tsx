
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

type Test = {
  id: string;
  name: string;
  price: string;
  image: any;
  bgColor: string;
  sampleType: string;
  reportTime: string;
  preparation: string;
  description: string;
};

const tests: Test[] = [
  {
    id: 'cbc',
    name: 'CBC ( Complete Blood Count )',
    price: '₹199',
    image: require('../../assets/images/test-cbc.png'),
    bgColor: '#FBE7E7',
    sampleType: 'Blood',
    reportTime: '24 Hours',
    preparation: '12 Hours Fasting is preferred',
    description: 'CBC test gives information about your overall health.',
  },
  {
    id: 'blood-sugar',
    name: 'Blood Sugar (Fasting)',
    price: '₹199',
    image: require('../../assets/images/sugar.png'),
    bgColor: '#E7F0FD',
    sampleType: 'Blood',
    reportTime: '12 Hours',
    preparation: '8 Hours Fasting is preferred',
    description: 'Measures the glucose level in your blood after fasting.',
  },
  {
    id: 'thyroid-profile-1',
    name: 'Thyroid Profile (T1, T2, T3)',
    price: '₹599',
    image: require('../../assets/images/thyroid.png'),
    bgColor: '#FBEAE6',
    sampleType: 'Blood',
    reportTime: '24 Hours',
    preparation: 'No special preparation required',
    description: 'Evaluates thyroid gland function and hormone levels.',
  },
  {
    id: 'urine-examination',
    name: 'Urine Examination',
    price: '₹99',
    image: require('../../assets/images/urine.png'),
    bgColor: '#F0E7FD',
    sampleType: 'Urine',
    reportTime: '6 Hours',
    preparation: 'No special preparation required',
    description: 'Analyzes urine composition to detect abnormalities.',
  },
  {
    id: 'liver-functional-test',
    name: 'Liver Functional Test',
    price: '₹399',
    image: require('../../assets/images/liver.png'),
    bgColor: '#E6F6E9',
    sampleType: 'Blood',
    reportTime: '24 Hours',
    preparation: '8 Hours Fasting is preferred',
    description: 'Assesses liver health and detects liver damage.',
  },
  {
    id: 'thyroid-profile-2',
    name: 'Thyroid Profile (T1, T2, T3)',
    price: '₹599',
    image: require('../../assets/images/thyroid.png'),
    bgColor: '#FBEAE6',
    sampleType: 'Blood',
    reportTime: '24 Hours',
    preparation: 'No special preparation required',
    description: 'Evaluates thyroid gland function and hormone levels.',
  },
];

export default function Tests() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
       <View style={styles.header}>
  <TouchableOpacity onPress={() => router.replace('/home')}>
    <Ionicons name="arrow-back" size={20} color="#222" />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>Tests</Text>
</View>

        {/* Test list */}
        {tests.map((test, index) => (
           <TouchableOpacity
    key={`${test.id}-${index}`}
    style={styles.testCard}
    activeOpacity={0.8}
    disabled={test.id !== 'cbc'}
    onPress={() => {
      if (test.id === 'cbc') {
        router.push({
          pathname: '/(tabs)/test-details',
          params: { id: test.id },
        });
      }
    }}
  >
            <View
              style={[styles.testIconBox, { backgroundColor: test.bgColor }]}
            >
              <Image
                source={test.image}
                style={styles.testImage}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.testName}>{test.name}</Text>

            <Text style={styles.testPrice}>{test.price}</Text>
          </TouchableOpacity>
        ))}

        {/* Add Test */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push('/(tabs)/add-test')}
        >
          <Text style={styles.addButtonText}>+ Add Test</Text>
        </TouchableOpacity>
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
  marginBottom: 30,
},

headerTitle: {
  fontSize: 17,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 8,
},

  testCard: {
    minHeight: 84,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 17,
    paddingHorizontal: 12,
    marginBottom: 18,
  },

  testIconBox: {
    width: 62,
    height: 62,
    borderRadius: 28.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  testImage: {
    width: 46,
    height: 36,
  },

  testName: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    // color: '#264849',
    paddingRight: 8,
  },

  testPrice: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  addButton: {
    height: 50,
    width:296,
    borderRadius: 14,
    backgroundColor: '#2F6364',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft:20
  },

  addButtonText: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },
});