import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function CreatePrescription() {
  const [medicine, setMedicine] = useState('1 Paracetamol 500 Mg');
  const [instructions, setInstructions] = useState(
    'Take plenty of water'
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.header}>
  <View style={styles.leftHeader}>
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => router.back()}
    >
      <Ionicons
        name="arrow-back"
        size={20}
        color="#1B1F23"
      />
    </TouchableOpacity>

    <Text style={styles.title}>Create Prescription</Text>
  </View>

  <View style={styles.headerRight} />
</View>

        <Text style={styles.label}>Patient</Text>
        <TextInput
          style={styles.input}
          value="Priya Kumar 32 Yrs, Female"
          editable={false}
        />

        <Text style={styles.label}>Diagnosis</Text>
        <TextInput
          style={styles.input}
          value="Viral fever"
          editable={false}
        />

        <Text style={styles.label}>Medicine</Text>
        <TextInput
          style={styles.input}
          value={medicine}
          onChangeText={setMedicine}
        />

        <View style={styles.row}>
          <View style={styles.smallInputContainer}>
            <Text style={styles.label}>Dose</Text>
            <TextInput
              style={styles.smallInput}
              value="1 Tablet"
              onChangeText={() => {}}
            />
          </View>

          <View style={styles.smallInputContainer}>
            <Text style={styles.label}>Frequency</Text>
            <TextInput
              style={styles.smallInput}
              value="Twice a Day"
              onChangeText={() => {}}
            />
          </View>

          <View style={styles.smallInputContainer}>
            <Text style={styles.label}>Duration</Text>
            <TextInput
              style={styles.smallInput}
              value="3 Days"
              onChangeText={() => {}}
            />
          </View>
        </View>

        <Text style={styles.label}>Instructions</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={instructions}
          onChangeText={setInstructions}
          multiline
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('./prescription-preview')}
        >
          <Text style={styles.buttonText}>Generate Prescription</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F8F8',
  },
  container: {
    padding: 20,
  },
  header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 25,
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

title: {
  fontFamily: 'InterSemiBold',
  fontSize: 15,
  marginLeft: 4,
},

headerRight: {
  width: 22,
},
  label: {
    fontFamily: 'InterMedium',
    fontSize: 13,
    // color: '#6B7280',
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 16,
    paddingHorizontal: 10,
    height: 52,
    fontFamily: 'InterRegular',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInputContainer: {
    width: '31%',
  },
  smallInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 16,
    paddingHorizontal: 6,
    height: 42,
    fontFamily: 'InterRegular',
    fontSize: 12,
  },
  textArea: {
    height: 60,
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#1E5A54',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
    fontSize: 14,
  },
});