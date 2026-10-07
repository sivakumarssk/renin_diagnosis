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
    <Ionicons name="arrow-back" size={20} color="#222" />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>
    {isEditing ? 'Edit Test' : 'Add New Test'}
  </Text>
</View>

        {/* Test Name */}
<Field label="Test Name">
  <TextInput
    style={styles.input}
    value="CBC ( Complete Blood Count )"
    editable={false}
  />
</Field>

{/* Category */}
<Field label="Category">
  <TextInput
    style={styles.input}
    value="Blood Test"
    editable={false}
  />
</Field>

{/* Sample Type */}
<Field label="Sample Type">
  <TextInput
    style={styles.input}
    value="Blood"
    editable={false}
  />
</Field>

{/* Price */}
<Field label="Price (₹)">
  <TextInput
    style={styles.input}
    value="199"
    editable={false}
  />
</Field>

{/* Report Time */}
<Field label="Report Time">
  <TextInput
    style={styles.input}
    value="24 Hours"
    editable={false}
  />
</Field>

{/* Description */}
<Field label="Description">
  <TextInput
    style={[styles.input, styles.textArea]}
    value="CBC test gives information about your overall health."
    editable={false}
    multiline
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
  marginBottom: 30,
},

headerTitle: {
  fontSize: 17,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 8,
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