import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

const departmentImages: Record<string, any> = {
  'general-physician': require('../assets/images/stethoscope.png'),
  cardiology: require('../assets/images/heart.png'),
  dermatology: require('../assets/images/skin.png'),
  pediatrics: require('../assets/images/pediatrics.png'),
  orthopedics: require('../assets/images/x-ray.png'),
  ent: require('../assets/images/ent.png'),
  gynecology: require('../assets/images/gynocology.png'),
};

export default function DepartmentDetail() {
  const params = useLocalSearchParams<{
    id?: string;
    name?: string;
    doctorCount?: string;
  }>();

  const name = params.name ?? 'Department';
  const doctorCount = params.doctorCount ?? '0';
  const image = params.id
    ? departmentImages[params.id]
    : departmentImages.cardiology;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={16} color="#222" />
        </TouchableOpacity>

        <Ionicons name="ellipsis-vertical" size={16} color="#222" />
      </View>

      {/* Department summary card */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryIcon}>
          <Image
            source={image}
            style={styles.summaryImage}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.summaryName}>{name}</Text>
          <Text style={styles.summarySub}>12 Doctors available</Text>
        </View>
      </View>

      {/* Stats grid */}
      <View style={styles.statsGrid}>
        <StatCard
          label="Total Doctors"
          icon="people-outline"
          cardBg="#F0F6FF"
          iconColor="#3E7FD9"
          value="12"
          borderColor="#698DC9"
          borderWidth={1}
        />
        <StatCard
          label="Total Appointment"
          icon="calendar-outline"
          cardBg="#FEF7ED"
          iconColor="#E0663D"
          value="24"
          borderColor="#FFCA80"
          borderWidth={1}
        />
        <StatCard
          label="Available Today"
          icon="people-outline"
          cardBg="#F0F8F2"
          iconColor="#2F6364"
          value="8"
          borderColor="#20A7A3"
          borderWidth={1}
        />
        <StatCard
          label="About Department"
          icon="information-circle-outline"
          cardBg="#F7F2FE"
          iconColor="#C24FA6"
          borderColor="#B078FF"
          borderWidth={1}
          chevron
        />
      </View>

      {/* Actions */}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() =>
          router.push({
            pathname: '/department-doctors',
            params: { name },
          })
        }
      >
        <Text style={styles.actionButtonText}>View Doctors</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() =>
          router.push({
            pathname: '/add-department',
            params: { id: params.id, name },
          })
        }
      >
        <Text style={styles.actionButtonText}>Edit Department</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function StatCard({
  label,
  icon,
  cardBg,
  iconColor,
  value,
  borderColor,
  borderWidth,
  chevron,
}: {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  cardBg: string;
  iconColor: string;
  value?: string;
  chevron?: boolean;
  borderColor: string;
  borderWidth: number;
}) {
  return (
    <View
      style={[
        styles.statCard,
        { backgroundColor: cardBg, borderColor, borderWidth },
      ]}
    >
      <Text style={styles.statLabel}>{label}</Text>

      <View style={styles.statRow}>
        <View style={styles.statIcon}>
          <Ionicons name={icon} size={50} color={iconColor} />
        </View>

        {value !== undefined && (
          <Text style={styles.statValue}>{value}</Text>
        )}

        {chevron && (
          <Ionicons name="chevron-forward" size={22} color="#9AA5A5" />
        )}
      </View>
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
    marginBottom: 20,
  },

  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#FFF2F8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    height: 149,
    borderColor: '#C56F97',
    borderWidth: 1,
  },

  summaryIcon: {
    width: 88,
    height: 88,
    borderRadius: 14,
    backgroundColor: '#FFB3D5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  summaryImage: {
    width: 56,
    height: 56,
  },

  summaryName: {
    fontSize: 17,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  summarySub: {
    fontSize: 14,
    fontFamily: 'InterMedium',
    marginTop: 2,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  statCard: {
    width: '48%',
    height: 149,
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
  },

  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  statIcon: {
    width: 84,
    height: 84,
    borderRadius: 14,
    // backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:-20
  },

  statLabel: {
    fontSize: 14,
    fontFamily: 'InterMedium',
    color: '#264849',
  },

  statValue: {
    fontSize: 25,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  actionButton: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3DB5FF',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  actionButtonText: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#2F6364',
  },
});