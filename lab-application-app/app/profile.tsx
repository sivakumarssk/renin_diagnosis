import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Profile</Text>

        {/* Spacer to keep title centered */}
        <View style={{ width: 20 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.card}>
          <ProfileRow
            icon="settings-outline"
            label="Settings"
          />

          <ProfileRow
            icon="notifications-outline"
            label="Notifications"
          />

          <ProfileRow
            icon="document-text-outline"
            label="Lab Profile"
            onPress={() => router.push('/lab-profile')}
          />

          <ProfileRow
            icon="shield-checkmark-outline"
            label="Security"
          />

          <ProfileRow
            icon="log-out-outline"
            label="Logout"
            // onPress={() => {
            //   // TODO: hook up real logout logic (clear auth token/session)
            //   router.replace('/login');
            // }}
          />

          <ProfileRow
            icon="help-circle-outline"
            label="Help"
          />

          <ProfileRow
            icon="information-circle-outline"
            label="About App"
            isLast
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ProfileRow({
  icon,
  label,
  onPress,
  isLast,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
  isLast?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.row, !isLast && styles.rowBorder]}
      onPress={onPress}
      disabled={!onPress}
    >
      <Ionicons name={icon} size={18} color="#222" style={styles.rowIcon} />

      <Text style={styles.rowLabel}>{label}</Text>

      <Ionicons name="chevron-forward" size={16} color="#999" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FAF9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom:30
  },

  headerTitle: {
    fontSize: 18,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  content: {
    padding: 14,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00000040',
    paddingHorizontal: 12,
    height:524
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    marginTop:14
  },

  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
  },

  rowIcon: {
    width: 24,
    // marginTop:10
  },

  rowLabel: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'InterMedium',
    color: '#222',
    marginLeft: 6,
    // marginTop:10
  },
});