import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

type ConsultationType = 'In-Clinic' | 'Video Consultation';

type UpcomingAppointment = {
  id: string;
  patient: string;
  doctor: string;
  date: string;
  time: string;
  type: ConsultationType;
  photo: any;
};

type PendingAppointment = {
  id: string;
  patient: string;
  doctor: string;
  department: string;
  date: string;
  time: string;
  type: ConsultationType;
  photo: any;
};

const TABS = ['Upcoming', 'Pending', 'Completed', 'Cancelled'] as const;
type Tab = (typeof TABS)[number];

const upcomingData: UpcomingAppointment[] = [
  {
    id: 'u1',
    patient: 'Lakshmi T',
    doctor: 'Dr. Anjali Kumar',
    date: '12 Aug 2026',
    time: '10:AM',
    type: 'In-Clinic',
    photo: require('../assets/images/lakshmi.png'),
  },
  {
    id: 'u2',
    patient: 'Ravi Kumar',
    doctor: 'Dr. Rahul Kumar',
    date: '12 Aug 2026',
    time: '10:AM',
    type: 'Video Consultation',
    photo: require('../assets/images/ravi.png'),
  },
  {
    id: 'u3',
    patient: 'Lakshmi T',
    doctor: 'Dr. Anjali Kumar',
    date: '12 Aug 2026',
    time: '10:AM',
    type: 'In-Clinic',
    photo: require('../assets/images/lakshmi.png'),
  },
  {
    id: 'u4',
    patient: 'Ravi Kumar',
    doctor: 'Dr. Rahul Kumar',
    date: '12 Aug 2026',
    time: '10:AM',
    type: 'Video Consultation',
    photo: require('../assets/images/ravi.png'),
  },
  {
    id: 'u5',
    patient: 'Ravi Kumar',
    doctor: 'Dr. Rahul Kumar',
    date: '12 Aug 2026',
    time: '10:AM',
    type: 'Video Consultation',
    photo: require('../assets/images/ravi.png'),
  },
];

const pendingData: PendingAppointment[] = [
  {
    id: 'p1',
    patient: 'Ravi Kumar',
    doctor: 'Dr. Rahul Kumar',
    department: 'Dermatology',
    date: '12 Aug 2026',
    time: '10AM',
    type: 'In-Clinic',
    photo: require('../assets/images/ravi.png'),
  },
  {
    id: 'p2',
    patient: 'Lakshmi T',
    doctor: 'Dr. Srilekha',
    department: 'Pediatrics',
    date: '12 Aug 2026',
    time: '11:30AM',
    type: 'Video Consultation',
    photo: require('../assets/images/srilekha.png'),
  },
  {
    id: 'p3',
    patient: 'Shruthika',
    doctor: 'Dr. Suraksha Sharma',
    department: 'Dermatology',
    date: '12 Aug 2026',
    time: '12:AM',
    type: 'In-Clinic',
    photo: require('../assets/images/suraksha.png'),
  },
];

export default function AppointmentsScreen() {
  
  const [pending, setPending] = useState(pendingData);

  const handleApprove = (id: string) => {
    setPending((prev) => prev.filter((a) => a.id !== id));
  };

  const handleReject = (id: string) => {
    setPending((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
  <View style={styles.leftHeader}>
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={20} color="#222" />
    </TouchableOpacity>

    <Text style={styles.headerTitle}>
      Appointments
    </Text>
  </View>
</View>

      {/* Tabs */}
     <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.tabsRow}
>
  {TABS.map((tab) => {
    const isActive = tab === 'Upcoming';

    return (
      <TouchableOpacity
        key={tab}
        style={[
          styles.tabPill,
          isActive && styles.tabPillActive,
        ]}
      >
        <Text
          style={[
            styles.tabPillText,
            isActive && styles.tabPillTextActive,
          ]}
        >
          {tab}
        </Text>
      </TouchableOpacity>
    );
  })}
</ScrollView>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
       {upcomingData.map((a, index) => (
  <TouchableOpacity
    key={a.id}
    style={styles.upcomingCard}
    activeOpacity={0.7}
    onPress={
      index === 0
        ? () => router.push('/appointment-details')
        : undefined
    }
            >
              <Image source={a.photo} style={styles.avatar} />

              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{a.patient}</Text>
                <Text style={styles.cardSub}>{a.doctor}</Text>
                <Text style={styles.cardMeta}>
                  {a.date} {a.time}
                </Text>

                <View
                  style={[
                    styles.badge,
                    a.type === 'In-Clinic'
                      ? styles.badgeClinic
                      : styles.badgeVideo,
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      a.type === 'In-Clinic'
                        ? styles.badgeTextClinic
                        : styles.badgeTextVideo,
                    ]}
                  >
                    {a.type}
                  </Text>
                </View>
              </View>

              <Ionicons name="chevron-forward" size={16} color="#9AA5A5" />
            </TouchableOpacity>
          ))}

       

        

        
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <NavItem icon="home-outline" label="Home" />
        <NavItem icon="medkit-outline" label="Doctor" />
        <NavItem icon="calendar-outline" label="Appointments" active />
        <NavItem icon="ellipsis-horizontal" label="More" />
      </View>
    </SafeAreaView>
  );
}

function NavItem({
  icon,
  label,
  active,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Ionicons
        name={icon}
        size={20}
        color={active ? '#2F6364' : '#9AA5A5'}
      />
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  header: {
  height: 25,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
  marginTop: 8,
  marginBottom: 20,
},

leftHeader: {
  flexDirection: 'row',
  alignItems: 'center',
},

headerTitle: {
  fontSize: 15,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginLeft: 8,
},
  tabsRow: {
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 16,
  },

  tabPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D6E4E3',
    backgroundColor: '#FFFFFF',
    height:35
  },

  tabPillActive: {
    backgroundColor: '#2F6364',
    borderColor: '#2F6364',
  },

  tabPillText: {
    fontSize: 11,
    fontFamily: 'InterMedium',
    color: '#555',
  },

  tabPillTextActive: {
    color: '#FFFFFF',
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },

  /* Upcoming card */
  upcomingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    height:126
  },

  /* Pending card */
  pendingCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    height:174
  },

  cardTop: {
    flexDirection: 'row',
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 21,
    marginRight: 18,
  },

  cardInfo: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  cardSub: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    marginTop: 1,
  },

  cardMeta: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    marginTop: 2,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 3,
  },

  badge: {
    alignSelf: 'flex-start',
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginTop: 5,
  },

  badgeClinic: {
    backgroundColor: '#E4F1F9',
  },

  badgeVideo: {
    backgroundColor: '#F1E9FB',
  },

  badgeText: {
    fontSize: 11,
    fontFamily: 'InterMedium',
  },

  badgeTextClinic: {
    color: '#1F7FB2',
  },

  badgeTextVideo: {
    color: '#7B3FE4',
  },

  typeText: {
    fontSize: 10,
    fontFamily: 'InterMedium',
    marginTop: 3,
  },

  typeClinic: {
    color: '#1F7FB2',
  },

  typeVideo: {
    color: '#7B3FE4',
  },

  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },

  rejectButton: {
    flex: 1,
    height: 40,
    width:101,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F3B9C0',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:110
  },

  rejectButtonText: {
    fontSize: 11.5,
    fontFamily: 'InterSemiBold',
    color: '#E24C63',
  },

  approveButton: {
    flex: 1,
    height: 40,
    width:101,
    borderRadius: 12,
    backgroundColor: '#058536',
    borderColor:'#5AA7A5',
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  approveButtonText: {
    fontSize: 11.5,
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
  },

  emptyText: {
    fontSize: 11.5,
    fontFamily: 'InterMedium',
    color: '#9AA5A5',
    textAlign: 'center',
    marginTop: 32,
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EDF1F1',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 14,
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },

  navLabel: {
    fontSize: 9.5,
    fontFamily: 'InterMedium',
    color: '#9AA5A5',
  },

  navLabelActive: {
    color: '#2F6364',
    fontFamily: 'InterSemiBold',
  },
});