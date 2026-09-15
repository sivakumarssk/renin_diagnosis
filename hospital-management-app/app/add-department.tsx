// import React, { useState } from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// export default function AddDepartment() {
//   const [name, setName] = useState('');
//   const [specialization, setSpecialization] = useState('');
//   const [description, setDescription] = useState('');
//   const [departmentHead, setDepartmentHead] = useState('');
//   const [status, setStatus] = useState('Active');

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => router.back()}>
//             <Ionicons name="arrow-back" size={16} color="#222" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Add Department</Text>
//           <View style={{ width: 16 }} />
//         </View>

//         <Field label="Department Name">
//           <TextInput
//             style={styles.input}
//             placeholder="Department Name"
//             placeholderTextColor="#9AA5A5"
//             value={name}
//             onChangeText={setName}
//           />
//         </Field>

//         <Field label="Specialization">
//           <Dropdown value={specialization} placeholder="Select Specialization" />
//         </Field>

//         <Field label="Description">
//           <TextInput
//             style={[styles.input, styles.textArea]}
//             placeholder="Enter department description"
//             placeholderTextColor="#9AA5A5"
//             multiline
//             numberOfLines={4}
//             value={description}
//             onChangeText={setDescription}
//           />
//         </Field>

//         <Field label="Department Head">
//           <Dropdown value={departmentHead} placeholder="Select doctor" />
//         </Field>

//         <Field label="Status">
//           <Dropdown value={status} placeholder="Active" />
//         </Field>

//         <TouchableOpacity style={styles.addButton} onPress={() => router.back()}>
//           <Text style={styles.addButtonText}>Add Department</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
//           <Text style={styles.cancelButtonText}>Cancel</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// function Field({ label, children }: { label: string; children: React.ReactNode }) {
//   return (
//     <View style={styles.field}>
//       <Text style={styles.fieldLabel}>{label}</Text>
//       {children}
//     </View>
//   );
// }

// function Dropdown({ value, placeholder }: { value: string; placeholder: string }) {
//   return (
//     <TouchableOpacity style={styles.dropdown}>
//       <Text style={[styles.dropdownText, !value && { color: '#9AA5A5' }]}>
//         {value || placeholder}
//       </Text>
//       <Ionicons name="chevron-down" size={14} color="#333" />
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//      flex: 1,
//       backgroundColor: '#F3FAF9'
//      },
//   scrollContent: { 
//     paddingHorizontal: 16,
//      paddingTop: 8, 
//      paddingBottom: 40 
//     },
//   header: {
//      height: 25,
//       flexDirection: 'row',
//        alignItems: 'center',
//         justifyContent: 'space-between',
//          marginBottom: 35 
//         },
//   headerTitle: {
//      fontSize: 18,
//       fontFamily: 'InterSemiBold',
//        color: '#222' 
//       },
//   field: { marginBottom: 14 },
//   fieldLabel: { 
//     fontSize: 14, 
//     fontFamily: 'InterSemiBold',
//      color: '#264849', 
//      marginBottom: 6 
//     },
//   input: {
//      height: 52,
//       borderWidth: 1, 
//       borderColor: '#83C5C0', 
//       borderRadius: 10, 
//       backgroundColor: '#FFFFFF',
//        paddingHorizontal: 12, 
//        fontSize: 13,
//         fontFamily: 'InterMedium',
//          color: '#222' 
//         },
//   textArea: { 
//     height: 90,
//      paddingTop: 12,
//       textAlignVertical: 'top'
//      },
//   dropdown: {
//      height: 46,
//       borderWidth: 1,
//        borderColor: '#83C5C0',
//         borderRadius: 10, 
//         backgroundColor: '#FFFFFF',
//          paddingHorizontal: 12,
//           flexDirection: 'row',
//            alignItems: 'center', 
//            justifyContent: 'space-between'
//            },
//   dropdownText: { 
//     fontSize: 13,
//      fontFamily: 'InterMedium',
//       color: '#222' 
//     },
//   addButton: {
//      height: 48,
//       borderRadius: 12,
//        backgroundColor: '#2F6364',
//         alignItems: 'center',
//          justifyContent: 'center',
//           marginTop: 30,
//            marginBottom: 12
//            },
//   addButtonText: {
//      fontSize: 14,
//       fontFamily: 'InterSemiBold',
//        color: '#FFFFFF' 
//       },
//   cancelButton: { 
//     height: 48,
//      borderRadius: 12,
//       borderWidth: 1,
//        borderColor: '#D6E4E3',
//         backgroundColor: '#FFFFFF',
//          alignItems: 'center', 
//          justifyContent: 'center'
//          },
//   cancelButtonText: { 
//     fontSize: 14, 
//     fontFamily: 'InterSemiBold', 
//     color: '#264849' 
//   },
// });

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
import { router } from 'expo-router';

export default function AddDepartment() {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [description, setDescription] = useState('');
  const [departmentHead, setDepartmentHead] = useState('');
  const [status, setStatus] = useState('Active');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={16} color="#222" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Add Department</Text>

          <View style={{ width: 16 }} />
        </View>

        {/* Department Name */}
        <Field label="Department Name">
          <TextInput
            style={styles.input}
            placeholder="Department Name"
            placeholderTextColor="#9AA5A5"
            value={name}
            onChangeText={setName}
          />
        </Field>

        {/* Specialization */}
        <Field label="Specialization">
          <Dropdown value={specialization} placeholder="Select Specialization" />
        </Field>

        {/* Description */}
        <Field label="Description">
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter department description"
            placeholderTextColor="#9AA5A5"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </Field>

        {/* Department Head */}
        <Field label="Department Head">
          <Dropdown value={departmentHead} placeholder="Select doctor" />
        </Field>

        {/* Status */}
        <Field label="Status" style={styles.statusField}>
          <Dropdown value={status} placeholder="Active" />
        </Field>

        {/* Actions */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.back()}
        >
          <Text style={styles.addButtonText}>Add Department</Text>
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
  style,
}: {
  label: string;
  children: React.ReactNode;
  style?: object;
}) {
  return (
    <View style={[styles.field, style]}>
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
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  headerTitle: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  field: {
    marginBottom: 14,
  },

  statusField: {
    width: '50%',
  },

  fieldLabel: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#264849',
    marginBottom: 6,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    fontSize: 14,
    fontFamily: 'InterMedium',
    color: '#222',
  },

  textArea: {
    height: 90,
    paddingTop: 12,
    textAlignVertical: 'top',
  },

  dropdown: {
    height: 46,
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dropdownText: {
    fontSize: 14,
    fontFamily: 'InterMedium',
    color: '#222',
  },

  addButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: '#2F6364',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 12,
  },

  addButtonText: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

  cancelButton: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2F6364',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButtonText: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#2F6364',
  },
});