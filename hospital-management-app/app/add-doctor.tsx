import React from 'react';
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
import { router } from 'expo-router';

export default function AddDoctor() {
 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
  <TouchableOpacity onPress={() => router.back()}>
    <Ionicons name="arrow-back" size={20} color="#222" />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>Add Doctor</Text>
</View>

        {/* Avatar + intro */}
        <View style={styles.avatarWrap}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={26} color="#2F6364" />
          </View>
          <Text style={styles.avatarTitle}>Add New Doctor</Text>
          <Text style={styles.avatarSubtitle}>Enter Doctor Details</Text>
        </View>

     <Field label="Doctor Name">
  <TextInput
    style={styles.input}
    value="Dr. Renuka Sharma"
    editable={false}
  />
</Field>

<Field label="Email Address">
  <TextInput
    style={styles.input}
    value="renuka@gmail.com"
    editable={false}
  />
</Field>

<Field label="Phone Number">
  <TextInput
    style={styles.input}
    value="+91 9874451230"
    editable={false}
  />
</Field>

<Field label="Department">
  <Dropdown value="General Medicine" placeholder="Select Department" />
</Field>

<Field label="Specialization">
  <Dropdown value="General Physician" placeholder="Select" />
</Field>

<Field label="Experience">
  <TextInput
    style={styles.input}
    value="8 Years"
    editable={false}
  />
</Field>

<Field label="Qualification">
  <TextInput
    style={styles.input}
    value="MBBS, MD"
    editable={false}
  />
</Field>

<Field label="Consultation Fee (₹)">
  <TextInput
    style={styles.input}
    value="₹500"
    editable={false}
  />
</Field>

<Field label="Status">
  <Dropdown value="Available" placeholder="Available" />
</Field>

        {/* Actions */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.back()}
        >
          <Text style={styles.addButtonText}>Add Doctor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
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
      <Text
        style={[
          styles.dropdownText,
          !value && { color: '#9AA5A5' },
        ]}
      >
        {value || placeholder}
      </Text>
      <Ionicons name="chevron-down" size={14} color="#333" />
    </TouchableOpacity>
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
    paddingBottom: 40,
  },

 header: {
  height: 25,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 18,
},

headerTitle: {
  fontSize: 16,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 8,
},

  avatarWrap: {
    alignItems: 'center',
    marginBottom: 22,
  },

  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#D9F0EF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  avatarTitle: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  avatarSubtitle: {
    fontSize: 11,
    fontFamily: 'InterMedium',
    color: '#9AA5A5',
    marginTop: 2,
  },

  field: {
    marginBottom: 14,
  },

  fieldLabel: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    color: '#264849',
    marginBottom: 6,
  },

  input: {
    height: 46,
    borderWidth: 1,
    borderColor: '#D6E4E3',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    fontSize: 13,
    fontFamily: 'InterMedium',
    color: '#222',
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
    color: '#222',
  },

  addButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: '#2F6364',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 12,
  },

  addButtonText: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

  cancelButton: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D6E4E3',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButtonText: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#264849',
  },
});