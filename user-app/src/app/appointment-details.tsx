import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function AppointmentDetails() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointment Details</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 16 }}>

        {/* DOCTOR ROW */}
        <View style={styles.doctorRow}>
          <View style={styles.doctorImageCard}>
          <Image
            source={require('../assets/images/doctorPriya.png')}
            style={styles.doctorImage}
          />
          </View>
          <View>
            <Text style={styles.doctorName}>Dr. Priya sharma</Text>
            <Text style={styles.doctorSubtitle}>General Physician{'\n'}10 Years Exp.</Text>
            <View style={styles.locationRow}>
              <Ionicons name="business-outline" size={12} color="#666" />
              <Text style={styles.locationText}>Apollo Hospital, Hyderabad</Text>
            </View>
          </View>
        </View>

        <View style={styles.modeChip}>
          <Feather name="video" size={12} color="#FFFFFF" />
          <Text style={styles.modeChipText}>Video Consultation</Text>
        </View>

        {/* DETAILS CARD */}
        <View style={styles.detailsCard}>
          {/* <DetailRow icon="finger-print-outline" label="Appointment ID" value="APT127678542" />
          <DetailRow icon="calendar-outline" label="Schedule" value={'10 Aug 2026, Monday\n10:00 AM'} />
          <DetailRow icon="person-outline" label="Patient" value="Revathi Raj" />
          <DetailRow icon="card-outline" label="Consultation Fee" value="₹500" /> */}
          <DetailRow
  icon="finger-print-outline"
  label="Appointment ID"
  value="APT127678542"
/>

<DetailRow
  icon="calendar-outline"
  label="Schedule"
  value={'10 Aug 2026, Monday\n10:00 AM'}
/>

<DetailRow
  icon="person-outline"
  label="Patient"
  value="Revathi Raj"
/>

<DetailRow
  icon="card-outline"
  label="Consultation Fee"
  value="₹500"
/>
  <View style={styles.paymentRow}>
  <Ionicons
    name="checkmark-done-outline"
    size={16}
    color="#666"
  />

  <Text style={styles.paymentLabel}>Payment Status</Text>

  <View style={styles.paidContainer}>
    <View style={styles.paidBadge}>
      <Text style={styles.paidBadgeText}>Paid</Text>
    </View>
  </View>

  <Text style={styles.paymentAmount}>₹500</Text>
</View>
        </View>
{/* CONSULTATION CARD */}
<View style={styles.consultationCard}>

  <View style={styles.noteBox}>
    <Ionicons
      name="information-circle-outline"
      size={16}
      color="#317070"
    />

    <Text style={styles.noteText}>
      Join the consultation 5 minutes before your appointment time
    </Text>
  </View>

  <TouchableOpacity
    style={styles.joinButton}
    onPress={() => router.push('./video-call')}
  >
    <Feather name="video" size={16} color="#FFFFFF" />
    <Text style={styles.joinButtonText}>Join Video Call</Text>
  </TouchableOpacity>

</View>
        <View style={{ height: 30 }} />

        {/* BOTTOM ACTIONS */}
        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.rescheduleButton}>
            <Text style={styles.rescheduleText}>Reschedule</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel Appointment</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

function DetailRow({ icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <View style={styles.detailRow}>
      <Ionicons name={icon} size={16} color="#666" style={{ marginTop: 2 }} />
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 30,
    marginTop:30
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontSize: 15,
    fontFamily: 'InterBold',
    color: '#1A1A1A',
  },

  doctorRow: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },

  doctorImageCard: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#E2E3E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    overflow: 'hidden',
    borderColor:'#B2DDD9',
    borderWidth:1
  },

  doctorImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },

  doctorName: {
    fontSize: 13,
    fontFamily: 'InterBold',
    color: '#1A1A1A',
    marginBottom: 2,
  },

  doctorSubtitle: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    marginBottom: 4,
    lineHeight: 14,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationText: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    marginLeft: 4,
  },

  modeChip: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#5AA7A5',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 16,
    marginTop: -18,
    marginLeft: 15,
  },

  modeChipText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    marginLeft: 2,
  },

  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderColor: '#B2DDD9',
    borderWidth: 1,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  detailLabel: {
    fontSize: 13,
    fontFamily: 'InterRegular',
    width: 105,
    marginLeft: 8,
  },

  detailValue: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    textAlign: 'left',
    flex: 1,
    paddingLeft: 55,
  },

  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  paymentLabel: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    marginLeft: 8,
    width: 105,
  },

  paidContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },

  paidBadge: {
    backgroundColor: '#BCFFC3',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  paidBadgeText: {
    fontSize: 12,
    fontFamily: 'InterBold',
  },

  paymentAmount: {
    fontSize: 14,
    fontFamily: 'InterRegular',
    marginLeft: 10,
  },

  consultationCard: {
    backgroundColor: '#F2F0FD',
    borderRadius: 16,
    padding: 12,
    marginBottom: 65,
    borderWidth: 1,
    borderColor: '#B2DDD9',
  },

  noteBox: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'flex-start',
  },

  noteText: {
    fontSize: 13,
    fontFamily: 'InterRegular',
    marginLeft: 8,
    flex: 1,
    lineHeight: 15,
  },

  joinButton: {
    flexDirection: 'row',
    backgroundColor: '#317070',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'InterBold',
    marginLeft: 8,
  },

  bottomActions: {
    flexDirection: 'row',
  },

  rescheduleButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 24,
    paddingVertical: 13,
    alignItems: 'center',
    marginRight: 10,
  },

  rescheduleText: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
  },

  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E56461',
    borderRadius: 24,
    paddingVertical: 13,
    alignItems: 'center',
  },

  cancelText: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
  },
});