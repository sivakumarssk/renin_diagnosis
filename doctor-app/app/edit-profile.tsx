import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  bg: '#F4F8F8',
  card: '#FFFFFF',
  primary: '#1E5A54',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  border: '#DCE3E2',
};

export default function EditProfileScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState('Dr. Rahul Sharma');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('8+ Years');
  const [fee, setFee] = useState('500');
  const [phone, setPhone] = useState('+91 7896541220');

  const handleSave = () => {
    // TODO: persist changes (API call / local state / context) here.

    // Save Changes returns to the previous screen (Profile),
    // same behavior as the back arrow.
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />

      {/* Header */}
      <View style={styles.header}>
        {/* Back arrow returns to the previous screen (Profile) */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color={COLORS.textDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={styles.backButton} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.formContent}
          showsVerticalScrollIndicator={false}
        >
          <Field label="Full Name">
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter full name"
              placeholderTextColor={COLORS.textMuted}
            />
          </Field>

          <Field label="Specialization">
            <TouchableOpacity style={styles.dropdown} activeOpacity={0.7}>
              <Text
                style={[
                  styles.dropdownText,
                  !specialization && { color: COLORS.textMuted },
                ]}
              >
                {specialization || 'Select Specialization'}
              </Text>
              <Ionicons name="chevron-down" size={18} color={COLORS.textMuted} />
            </TouchableOpacity>
            {/*
              For a real dropdown, install @react-native-picker/picker
              or a bottom-sheet select component and wire it to
              setSpecialization(value).
            */}
          </Field>

          <Field label="Experience">
            <TextInput
              style={styles.input}
              value={experience}
              onChangeText={setExperience}
              placeholder="e.g. 8+ Years"
              placeholderTextColor={COLORS.textMuted}
            />
          </Field>

          <Field label="Consultation Fee (₹)">
            <TextInput
              style={styles.input}
              value={fee}
              onChangeText={setFee}
              placeholder="e.g. 500"
              placeholderTextColor={COLORS.textMuted}
              keyboardType="numeric"
            />
          </Field>

          <Field label="Phone Number">
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="+91 XXXXXXXXXX"
              placeholderTextColor={COLORS.textMuted}
              keyboardType="phone-pad"
            />
          </Field>

          <TouchableOpacity style={styles.saveButton} activeOpacity={0.85} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.fieldLabel}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: COLORS.textDark,
  },
  formContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
  },
  fieldWrap: {
    marginBottom: 18,
  },
  fieldLabel: {
    fontFamily: 'InterMedium',
    fontSize: 13,
    color: COLORS.textDark,
    marginBottom: 8,
  },
  input: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    color: COLORS.textDark,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  dropdownText: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    color: COLORS.textDark,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  saveButtonText: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});