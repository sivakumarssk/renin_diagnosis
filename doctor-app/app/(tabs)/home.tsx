import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  Image,
  ScrollView,
   FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';


const COLORS = {
  bg: '#F4F8F8',
  card: '#FFFFFF',
  primary: '#1E5A54',
  primaryLight: '#0EA5A0',
  emergencyBg: '#FDEBEC',
  emergencyRed: '#D32F3C',
  textDark: '#1B1F23',
  textMuted: '#6B7280',
  iconBlue: '#2F6FED',
  border: '#EEF1F1',
};

type StatItem = {
  id: string;
  label: string;
  value: number;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  danger?: boolean;
};

const todayStats: StatItem[] = [
  { id: '1', label: "Today's appointments", value: 12, icon: 'calendar-outline', color: COLORS.iconBlue },
  { id: '2', label: 'Pending Requests', value: 5, icon: 'time-outline', color: COLORS.iconBlue },
  { id: '3', label: 'Completed appointments', value: 8, icon: 'checkmark-circle-outline', color: COLORS.iconBlue },
  { id: '4', label: 'Emergency Request', value: 1, icon: 'alert-circle', color: COLORS.emergencyRed, danger: true },
];

type Appointment = {
  id: string;
  patient: string;
  type: string;
  time: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const upcomingAppointments: Appointment[] = [
  { id: '1', patient: 'Ravi Kumar', type: 'Video Consultation', time: '10:00 AM', icon: 'videocam' },
  { id: '2', patient: 'Priya S.', type: 'Follow-up', time: '11:00 AM', icon: 'person' },
];


export default function HomeScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex =
        (currentIndex + 1) % upcomingAppointments.length;

      setCurrentIndex(nextIndex);

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bg} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
           <TouchableOpacity onPress={() => router.push('/doctor-profile')} activeOpacity={0.8}>
              <Image
                source={require('../../assets/images/doctor-profile.png')}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.greetingText}>Good Morning,</Text>
              <Text style={styles.doctorName}>Dr. Rahul</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bellButton}>
            <Ionicons name="notifications-outline" size={22} color={COLORS.textDark} />
          </TouchableOpacity>
        </View>

        {/* Emergency Banner */}
        <View style={styles.emergencyCard}>
          <View style={styles.emergencyRow}>
            <View style={styles.emergencyIconWrap}>
              <MaterialIcons name="warning" size={20} color={COLORS.emergencyRed} />
            </View>
            <Text style={styles.emergencyText}>Emergency Request notification</Text>
          </View>
        <TouchableOpacity
  style={styles.emergencyButton}
  activeOpacity={0.85}
  onPress={() => router.push('/appointment-details')}
>
  <Text style={styles.emergencyButtonText}>Accept Emergency</Text>
</TouchableOpacity>
        </View>

       
{/* Today's Data */}
<Text style={styles.sectionTitle}>Today's Data</Text>

<View style={styles.statsGrid}>
  {todayStats.map((stat) => (
    <View key={stat.id} style={styles.statCard}>

      {/* Icon at Top */}
      <View
        style={[
          styles.statIconWrap,
          stat.danger && { backgroundColor: '#FDEBEC' },
        ]}
      >
        <Ionicons name={stat.icon} size={28} color={stat.color} />
      </View>

      {/* Label Left + Number Right */}
      <View style={styles.statBottomRow}>
        <Text style={styles.statLabel}>{stat.label}</Text>

        <Text style={styles.statValue}>{stat.value}</Text>
      </View>

    </View>
  ))}
</View>
       
{/* Upcoming Appointments */}
{/* <Text style={styles.sectionTitle}>Upcoming Appointments</Text> */}

<FlatList
  ref={flatListRef}
  data={upcomingAppointments}
  horizontal
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item) => item.id}
  renderItem={({ item: appt }) => (
    <View style={styles.apptSlide}>
      <View style={styles.apptCard}>

        {/* Heading */}
        <Text style={styles.apptHeading}>
          Upcoming Appointments
        </Text>

        {/* Appointment Details + Icon */}
        <View style={styles.apptMiddleRow}>
          <View style={styles.apptDetails}>
            <Text style={styles.apptPatient}>
              • {appt.patient}
            </Text>

            <Text style={styles.apptType}>
              • {appt.type}
            </Text>
          </View>

          {/* Appointment Icon */}
          <View style={styles.apptIconWrap}>
            <Ionicons
              name={appt.icon}
              size={32}
              color='#004A92'
            />
          </View>
        </View>

        {/* Time */}
        <View style={styles.apptTimeWrap}>
          <Feather
            name="clock"
            size={14}
            color={COLORS.textMuted}
          />

          <Text style={styles.apptTimeText}>
            {appt.time}
          </Text>
        </View>

      </View>
    </View>
  )}
/>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E5EAEA',
  },
  greetingText: {
    fontFamily: 'InterRegular',
    fontSize: 13,
    color: COLORS.textMuted,
  },
  doctorName: {
    fontFamily: 'InterBold',
    fontSize: 17,
    color: COLORS.primary,
  },
  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyCard: {
    backgroundColor: COLORS.emergencyBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    height:134
  },
  emergencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  emergencyIconWrap: {
    width: 43,
    height: 43,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  emergencyText: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: COLORS.textDark,
    flex: 1,
  },
  emergencyButton: {
    backgroundColor: COLORS.emergencyRed,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  emergencyButtonText: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontFamily: 'InterSemiBold',
    fontSize: 15,
    color: COLORS.textDark,
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
statCard: {
  width: '48%',
  height: 134,
  backgroundColor: COLORS.card,
  borderRadius: 16,
  padding: 16,
  marginBottom: 12,
  justifyContent: 'space-between',
  shadowColor: '#000',
  shadowOpacity: 0.04,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  elevation: 1,
  borderColor:'#D9EEEC',
  borderWidth:1
},

statIconWrap: {
  width: 40,
  height: 40,
  borderRadius: 10,
  backgroundColor: '#EAF1FE',
  alignItems: 'center',
  justifyContent: 'center',
},

statBottomRow: {
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
},

statValue: {
  fontFamily: 'InterBold',
  fontSize: 22,
  color: COLORS.textDark,
},

statLabel: {
  fontFamily: 'InterRegular',
  fontSize: 12,
  // color: COLORS.textMuted,
  flex: 1,
  paddingRight: 6,
},
apptSlide: {
  width: 280,
  marginRight: 12,
},

apptCard: {
  width: '100%',
  backgroundColor: COLORS.card,
  borderRadius: 16,
  padding: 16,
  borderLeftWidth: 3,
  borderLeftColor: '#1264A3',

  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
},

apptHeading: {
  fontFamily: 'InterSemiBold',
  fontSize: 15,
  color: COLORS.textDark,
  marginBottom: 8,
},

apptMiddleRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
},

apptDetails: {
  flex: 1,
},

apptPatient: {
  fontFamily: 'InterRegular',
  fontSize: 13,
  color: COLORS.textDark,
  marginBottom: 8,
},

apptType: {
  fontFamily: 'InterRegular',
  fontSize: 13,
  color: COLORS.textDark,
},

apptIconWrap: {
  width: 45,
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 10,
},

apptTimeWrap: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F5F5F5',
  borderWidth: 1,
  borderColor: '#DADADA',
  borderRadius: 9,
  paddingVertical: 7,
  paddingHorizontal: 10,
  marginTop: 2,
},

apptTimeText: {
  fontFamily: 'InterMedium',
  fontSize: 12,
  color: COLORS.textMuted,
  marginLeft: 6,
},
});