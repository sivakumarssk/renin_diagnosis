import React, { useState } from 'react';
import {Image,ScrollView,StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

type BookingStatus = 'upcoming' | 'completed' | 'cancelled';

type Booking = {
  key: string;
  type: 'doctor' | 'lab';
  title: string;
  subtitle: string;
  location: string;
  mode?: string;
  date: string;
  time: string;
  status: BookingStatus;
  image: any;
};

const BOOKINGS: Booking[] = [
  {
    key: 'b1',
    type: 'doctor',
    title: 'Dr. Priya sharma',
    subtitle: 'General Physician\n10 Years Exp.',
    location: 'Apollo Hospital, Hyderabad',
    mode: 'Video Cunsultation',
    date: '10 Aug 2026, Monday',
    time: '10:00 AM',
    status: 'upcoming',
    image: require('../assets/images/doctorPriya.png'),
  },
  {
    key: 'b2',
    type: 'lab',
    title: 'Apollo Diagnostics',
    subtitle: 'Lab test',
    location: '2.1 Km, Banjara hills Hyderabad\nTelangana',
    date: 'Today, 10 Aug 2025',
    time: '7:00 PM - 9:00 AM',
    status: 'upcoming',
    image: require('../assets/images/centerApollo1.png'),
  },
  {
    key: 'b3',
    type: 'doctor',
    title: 'Dr. Priya sharma',
    subtitle: 'General Physician\n10 Years Exp.',
    location: 'Apollo Hospital, Hyderabad',
    mode: 'Video Cunsultation',
    date: '10 Aug 2026, Monday',
    time: '10:00 AM',
    status: 'upcoming',
    image: require('../assets/images/doctorPriya.png'),
  },
  {
    key: 'b4',
    type: 'lab',
    title: 'Apollo Diagnostics',
    subtitle: 'Lab test',
    location: '2.1 Km, Banjara hills Hyderabad\nTelangana',
    date: 'Today, 10 Aug 2025',
    time: '7:00 PM - 9:00 AM',
    status: 'upcoming',
    image: require('../assets/images/centerApollo1.png'),
  },
];

const TABS: { key: BookingStatus; label: string }[] = [
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'completed', label: 'Completed' },
  { key: 'cancelled', label: 'Cancelled' },
];

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState<BookingStatus>('upcoming');

  const bookingsToShow = BOOKINGS.filter((b) => b.status === activeTab);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>

      {/* TABS */}
      <View style={styles.tabsRow}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tabButton, activeTab === tab.key && styles.tabButtonActive]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text
              style={[styles.tabText, activeTab === tab.key && styles.tabTextActive]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
        {bookingsToShow.map((booking) => (
          <View key={booking.key} style={styles.card}>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Confirmed</Text>
            </View>

            <View style={styles.cardTopRow}>
              <View style={styles.imageCard}>
              <Image source={booking.image} style={styles.cardImage} />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{booking.title}</Text>
                <Text style={styles.cardSubtitle}>{booking.subtitle}</Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location-outline" size={12} color="#666" />
                  <Text style={styles.locationText}>{booking.location}</Text>
                </View>
                {!!booking.mode && (
                  <View style={styles.modeRow}>
                    <Feather name="video" size={11} color="#317070" />
                    <Text style={styles.modeText}>{booking.mode}</Text>
                  </View>
                )}
              </View>
            </View>

           
<View style={styles.scheduleRow}>
  <View style={styles.scheduleLeft}>
    <Ionicons name="calendar-outline" size={14} color="#666" />
    <Text style={styles.scheduleLabel}>Schedule</Text>
  </View>

  <View style={styles.scheduleRight}>
    <Text style={styles.scheduleDate}>{booking.date}</Text>
    <Text style={styles.scheduleTime}>{booking.time}</Text>
  </View>
</View>

{/* LINE AFTER SCHEDULE */}
<View style={styles.bottomDivider} />
            <View style={styles.actionRow}>
              <TouchableOpacity
                style={styles.viewDetailsButton}
                onPress={() => {
                  if (booking.type === 'doctor') {
                    router.push('./appointment-details');
                  }
                }}
              >
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rescheduleButton}>
                <Text style={styles.rescheduleText}>Reschedule</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* BOTTOM TAB BAR */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('./home')}>
          <Ionicons name="home-outline" size={20} color="#999" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar" size={20} color="#287D7D" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>My Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('./reports')}>
          <Feather name="file-text" size={20} color="#999" />
          <Text style={styles.navLabel}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('./profile')}>
          <Feather name="user" size={20} color="#999" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 20,
    paddingBottom: 20,
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontSize: 18,
    fontFamily: 'InterBold',
    color: '#1A1A1A',
  },

  tabsRow: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 28,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 20,
    marginRight: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9EFEC',
  },

  tabButtonActive: {
    backgroundColor: '#0B4F4A',
    borderColor: '#0B4F4A',
  },

  tabText: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
    color: '#666666',
  },

  tabTextActive: {
    color: '#FFFFFF',
    fontFamily: 'InterSemiBold',
  },

  list: {
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#B0B0B0',
  },

  statusBadge: {
    alignSelf: 'flex-end',
    backgroundColor: '#E7F7EA',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 3,
  },

  statusText: {
    fontSize: 8,
    fontFamily: 'InterBold',
    color: '#2E9E4F',
  },

  cardTopRow: {
    flexDirection: 'row',
  },

  imageCard: {
    width: 114,
    height: 116,
    borderRadius: 10,
    backgroundColor: '#E8F5F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    overflow: 'hidden',
  },

  cardImage: {
    width: 112,
    height: 116,
    borderRadius: 10,
    resizeMode: 'contain',
  },

  cardInfo: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 13,
    fontFamily: 'InterBold',
    color: '#1A1A1A',
    marginBottom: 2,
  },

  cardSubtitle: {
    fontSize: 10,
    fontFamily: 'InterRegular',
    marginBottom: 10,
    lineHeight: 14,
    color: '#555555',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },

  locationText: {
    fontSize: 11,
    fontFamily: 'InterRegular',
    marginLeft: 3,
    flex: 1,
    color: '#555555',
  },

  modeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  modeText: {
    fontSize: 11,
    fontFamily: 'InterSemiBold',
    marginLeft: 4,
    color: '#317070',
  },

  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  scheduleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  scheduleLabel: {
    fontSize: 13,
    fontFamily: 'InterRegular',
    marginLeft: 6,
    color: '#555555',
  },

  scheduleRight: {
    alignItems: 'flex-end',
  },

  scheduleDate: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    color: '#333333',
  },

  scheduleTime: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    color: '#666666',
  },

  bottomDivider: {
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
    borderStyle: 'dashed',
    marginBottom: 12,
    width: '100%',
  },

  actionRow: {
    flexDirection: 'row',
  },

  viewDetailsButton: {
    flex: 1,
    backgroundColor: '#317070',
    borderRadius: 22,
    paddingVertical: 11,
    alignItems: 'center',
    marginRight: 10,
  },

  viewDetailsText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'InterSemiBold',
  },

  rescheduleButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#317070',
    borderRadius: 22,
    paddingVertical: 11,
    alignItems: 'center',
  },

  rescheduleText: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    color: '#317070',
  },

  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 8,
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
  },

  navLabel: {
    fontSize: 10,
    fontFamily: 'InterRegular',
    color: '#999999',
    marginTop: 4,
  },

  navLabelActive: {
    color: '#287D7D',
    fontFamily: 'InterSemiBold',
  },
});