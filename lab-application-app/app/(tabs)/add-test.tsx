import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function AddTest() {
  const params = useLocalSearchParams<{ id?: string }>();
  const isEditing = Boolean(params.id);

  const [testName, setTestName] = useState('');
  const [category, setCategory] = useState('');
  const [sampleType, setSampleType] = useState('');
  const [price, setPrice] = useState('');
  const [reportTime, setReportTime] = useState('');
  const [description, setDescription] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
         <TouchableOpacity onPress={() => router.replace('/(tabs)/tests')}>
            <Ionicons name="arrow-back" size={16} color="#222" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            {isEditing ? 'Edit Test' : 'Add New Test'}
          </Text>

          <View style={{ width: 16 }} />
        </View>

        {/* Test Name */}
        <Field label="Test Name">
          <TextInput
            style={styles.input}
            placeholder="Enter Test Name"
            placeholderTextColor="#9AA5A5"
            value={testName}
            onChangeText={setTestName}
          />
        </Field>

        {/* Category */}
        <Field label="Category">
          {/* <Dropdown value={category} placeholder="Select Category" /> */}
          <TextInput
            style={styles.input}
            placeholder="Select Category"
            placeholderTextColor="#9AA5A5"
            value={category}
            onChangeText={setCategory}
          />
        </Field>

        {/* Sample Type */}
        <Field label="Sample Type">
          {/* <Dropdown value={sampleType} placeholder="Select Sample Type" /> */}
          <TextInput
            style={styles.input}
            placeholder="Select Sample Type"
            placeholderTextColor="#9AA5A5"
            value={sampleType}
            onChangeText={setSampleType}
          />
        </Field>

        {/* Price */}
        <Field label="Price (₹)">
          <TextInput
            style={styles.input}
            placeholder="Enter Price"
            placeholderTextColor="#9AA5A5"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
        </Field>

        {/* Report Time */}
        <Field label="Report Time">
          {/* <Dropdown value={reportTime} placeholder="Select Report Time" /> */}
          <TextInput
            style={styles.input}
            placeholder="Select Report Time"
            placeholderTextColor="#9AA5A5"
            value={reportTime}
            onChangeText={setReportTime}
          />
        </Field>

        {/* Description */}
        <Field label="Description">
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter description"
            placeholderTextColor="#9AA5A5"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </Field>

        {/* Submit */}
        <TouchableOpacity
          style={styles.addButton}
         onPress={() => router.replace('/(tabs)/tests')}
        >
          <Text style={styles.addButtonText}>
            {isEditing ? 'Save Changes' : 'Add Test'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {children}
    </View>
  );
}

function Dropdown({
  value,
  placeholder,
}: {
  value: string;
  placeholder: string;
}) {
  return (
    <TouchableOpacity style={styles.dropdown}>
      <Text style={[styles.dropdownText, !value && { color: '#9AA5A5' }]}>
        {value || placeholder}
      </Text>
      <Ionicons name="chevron-down" size={14} color="#333" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
     backgroundColor: '#F3FAF9' 
    },
  scrollContent: { 
    paddingHorizontal: 16,
     paddingTop: 8,
      paddingBottom: 40 
    },
  header: { 
    height: 25,
     flexDirection: 'row',
      alignItems: 'center',
       justifyContent: 'space-between',
        marginBottom: 30
       },
  headerTitle: { 
    fontSize: 17,
     fontFamily: 'InterSemiBold',
      color: '#222' 
    },
  field: {
     marginBottom: 15
     },
  fieldLabel: { 
    fontSize: 14,
     fontFamily: 'InterSemiBold',
      color: '#264849', 
      marginBottom: 14
     },
  input: {
    height: 52,
     borderWidth: 1,
      borderColor: '#83C5C0',
       borderRadius: 15,
    backgroundColor: '#FFFFFF', 
    paddingHorizontal: 12,
     fontSize: 14,
    fontFamily: 'InterMedium',
     color: '#222',
  },
  textArea: {
     height: 52,
      paddingTop: 12,
       textAlignVertical: 'top' 
      },
  dropdown: {
    height: 46,
     borderWidth: 1,
      borderColor: '#D6E4E3',
       borderRadius: 10,
    backgroundColor: '#FFFFFF',
     paddingHorizontal: 12, 
     flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  dropdownText: { 
    fontSize: 13,
     fontFamily: 'InterMedium',
      color: '#222' 
    },
  addButton: {
    height: 48, 
    width:280,
    borderRadius: 15,
     backgroundColor: '#2F6364',
    alignItems: 'center',
     justifyContent: 'center',
      marginTop: 30,
      marginLeft:23
  },
  addButtonText: {
     fontSize: 16, 
     fontFamily: 'InterSemiBold',
      color: '#FFFFFF' 
    },
});