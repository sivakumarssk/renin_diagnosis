import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function MoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>More</Text>

        <View style={{ width: 20 }} />
      </View>

      <View style={styles.content}>
      <View style={styles.card}>
  <MoreRow
    icon="flask-outline"
    label="Test Catalog"
  />

  <MoreRow
    icon="albums-outline"
    label="Packages / Profile"
    onPress={() => router.push('/packages')}
  />

  <MoreRow
    icon="person-outline"
    label="Users & Staff"
  />

  <MoreRow
    icon="folder-outline"
    label="Sample Managemnet"
  />

  <MoreRow
    icon="bar-chart-outline"
    label="Reports and analytics"
    onPress={() => router.push('/reports-analytics')}
    isLast
  />
</View>
      </View>
    </SafeAreaView>
  );
}

function MoreRow({
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
      style={[styles.row, !isLast && styles.rowMargin]}
      onPress={onPress}
      disabled={!onPress}
    >
      <Ionicons
        name={icon}
        size={18}
        color="#222"
        style={styles.rowIcon}
      />

      <Text style={styles.rowLabel}>{label}</Text>

      <Ionicons
        name="chevron-forward"
        size={16}
        color="#999"
      />
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
    paddingVertical: 16,
    marginBottom:30
  },

  headerTitle: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  content: {
    padding: 14,
  },

 card: {
  backgroundColor: '#FFF',
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#FFF0F0',
  paddingHorizontal: 14,
  paddingVertical: 4,
  height:410.65
},
  row: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 30,
  paddingHorizontal: 4,
},
  rowMargin: {
  borderBottomWidth: 1,
  borderBottomColor: '#B0B0B0',
},

  rowIcon: {
    width: 24,
    // height:24
  },

  rowLabel: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'InterMedium',
    color: '#222',
    marginLeft: 6,
  },
});