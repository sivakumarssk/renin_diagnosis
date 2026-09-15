import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

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

const tests: Record<string, Test> = {
  cbc: {
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

  'blood-sugar': {
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

  'thyroid-profile-1': {
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

  'urine-examination': {
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

  'liver-functional-test': {
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

  'thyroid-profile-2': {
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
};

export default function TestDetails() {
  const params = useLocalSearchParams<{ id?: string }>();
  const test = (params.id && tests[params.id]) || tests.cbc;

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/(tabs)/tests')}>
  <Ionicons name="arrow-back" size={20} color="#222" />
</TouchableOpacity>

        <Text style={styles.headerTitle}>Tests</Text>

        <View style={{ width: 20 }} />
      </View>

      {/* Image + name */}
      <View style={styles.summaryWrap}>

        <View
          style={[
            styles.summaryIcon,
            { backgroundColor: test.bgColor },
          ]}
        >
          <Image
            source={test.image}
            style={styles.testImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.summaryName}>
          {test.name}
        </Text>
      </View>

      {/* Details card */}
      <View style={styles.detailsCard}>
        <DetailRow label="Price" value={test.price} />
        <DetailRow label="Sample type" value={test.sampleType} />
        <DetailRow label="Report Time" value={test.reportTime} />
        <DetailRow label="Preparation" value={test.preparation} />
        <DetailRow
          label="Description"
          value={test.description}
          last
        />
      </View>

      {/* Edit test */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>
          Edit Test
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

function DetailRow({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <View
      style={[
        styles.detailRow,
        last && { borderBottomWidth: 0 },
      ]}
    >
      <Text style={styles.detailLabel}>
        {label}
      </Text>

      <Text style={styles.detailValue}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  header: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  headerTitle: {
    fontSize: 17,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  summaryWrap: {
    alignItems: 'center',
    marginBottom: 24,
  },

  summaryIcon: {
    width: 82,
    height: 82,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  testImage: {
    width: 50,
    height: 50,
  },

  summaryName: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#222',
    textAlign: 'center',
    paddingHorizontal: 24,
    marginBottom:15
  },

  detailsCard: {
    height:340.6,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 18,
    paddingHorizontal: 14,
    marginBottom: 40,
  },

  detailRow: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
    gap: 15,
  },

  detailLabel: {
    fontSize: 15,
    fontFamily: 'InterMedium',
    // color: '#264849',
  },

  detailValue: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    color: '#222',
    textAlign: 'right',
    flex: 1,
  },

  editButton: {
    height: 48,
    width:296,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2F6364',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:20
  },

  editButtonText: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#2F6364',
  },
});