import React, { useState } from 'react';
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

type ReportType = 'lab' | 'prescription';

type Report = {
  key: string;
  title: string;
  provider: string;
  date: string;
  type: ReportType;
  icon: any;
  bg: string;
};

const REPORTS: Report[] = [
  {
    key: 'r1',
    title: 'CBC ( Complete Blood Count )',
    provider: 'Apollo Diagnostics',
    date: '12 Aug 2026',
    type: 'lab',
    icon: require('../assets/images/testCBC.png'),
    bg: '#FDEDEE',
  },
  {
    key: 'r2',
    title: 'Thyroid Profile (T3, T4,)',
    provider: 'Apollo Diagnostics',
    date: '5 Aug 2026',
    type: 'lab',
    icon: require('../assets/images/testThyroid.png'),
    bg: '#FDEDEE',
  },
  {
    key: 'r3',
    title: 'ECG Report',
    provider: 'Apollo Hospitals',
    date: '28 Jul 2026',
    type: 'prescription',
    icon: require('../assets/images/ecgIcon.png'),
    bg: '#EAF6EC',
  },
  {
    key: 'r4',
    title: 'CBC ( Complete Blood Count )',
    provider: 'Apollo Diagnostics',
    date: '12 Aug 2026',
    type: 'lab',
    icon: require('../assets/images/testCBC.png'),
    bg: '#FDEDEE',
  },
  {
    key: 'r5',
    title: 'Thyroid Profile (T3, T4,)',
    provider: 'Apollo Diagnostics',
    date: '5 Aug 2026',
    type: 'lab',
    icon: require('../assets/images/testThyroid.png'),
    bg: '#FDEDEE',
  },
];

const TABS: { key: 'all' | ReportType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'lab', label: 'Lab Tests' },
  { key: 'prescription', label: 'Prescriptions' },
];

export default function Reports() {
  const [activeTab, setActiveTab] = useState<'all' | ReportType>('all');
       
  const reportsToShow = REPORTS;

  return (
    <View style={styles.container}>
      {/* =========================
          REPORT LIST
      ========================== */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
         {/* =========================
          HEADER
      ========================== */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reports</Text>
      </View>

      {/* =========================
          TABS
      ========================== */}
      <View style={styles.tabsWrap}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabButton}
            // onPress={() => setActiveTab(tab.key)}
            onPress={() => {
  if (tab.key === 'all') {
    setActiveTab('all');
  }
}}
          >
            <Text
              style={[styles.tabText, activeTab === tab.key && styles.tabTextActive]}
            >
              {tab.label}
            </Text>
            {activeTab === tab.key && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

        {reportsToShow.map((report) => (
          <View key={report.key} style={styles.reportCard}>
            <View style={styles.reportTopRow}>
              <View style={[styles.iconWrap, { backgroundColor: report.bg }]}>
                <Image source={report.icon} style={styles.iconImage} resizeMode="contain" />
              </View>

              <View style={styles.reportInfo}>
                <Text style={styles.reportTitle}>{report.title}</Text>
                <Text style={styles.reportProvider}>{report.provider}</Text>
                <View style={styles.dateRow}>
                  <Feather name="calendar" size={12} color="#777" />
                  <Text style={styles.reportDate}>{report.date}</Text>
                </View>
              </View>
            </View>

            <View style={styles.reportBottomRow}>
              <TouchableOpacity style={styles.downloadButton}>
                <Feather name="download" size={14} color="#FFFFFF" />
                <Text style={styles.downloadText}>View & Download</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.shareButton}>
                <Feather name="share-2" size={18} color="#1A1A1A" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* =========================
          BOTTOM TAB BAR
      ========================== */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/home')}>
          <Ionicons name="home-outline" size={20} color="#999" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={20} color="#999" />
          <Text style={styles.navLabel}>My Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Feather name="file-text" size={20} color="#287D7D" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
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

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 25,
    marginTop:20
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterBold',
    fontSize: 18,
    color: '#1A1A1A',
  },

  /* TABS */
  tabsWrap: {
    flexDirection: 'row',
    backgroundColor: '#0B4F4A',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 4,
    marginBottom: 16,
    
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },

  tabText: {
    fontFamily: 'InterSemiBold',
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
  },

  tabTextActive: {
    color: '#FFFFFF',
  },

  tabUnderline: {
    marginTop: 4,
    height: 2,
    width: 16,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
  },

  /* LIST */
  list: {
    paddingHorizontal: 16,
  },

  /* REPORT CARD */
  reportCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DADADA',
    overflow: 'hidden',
  },

  reportTopRow: {
    flexDirection: 'row',
    padding: 16,
  },

  iconWrap: {
    width: 62,
    height: 62,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 35,
  },

  iconImage: {
    width: 46,
    height: 36,
  },

  reportInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  reportTitle: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#1A1A1A',
    marginBottom: 3,
    lineHeight: 18,
  },

  reportProvider: {
    fontFamily: 'InterRegular',
    fontSize: 13,
    marginBottom: 4,
  },

  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  reportDate: {
    fontFamily: 'InterRegular',
    fontSize: 13,
    marginLeft: 5,
  },

  reportBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#B2DDD9',
    backgroundColor: '#B2DDD9',
  },

  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#317070',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 22,
    height:42,
    width:153
  },

  downloadText: {
    fontFamily: 'InterSemiBold',
    color: '#FFFFFF',
    fontSize: 10,
    marginLeft: 8,
  },

  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* BOTTOM TAB BAR */
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 8,
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
  },

  navLabel: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    color: '#999',
    marginTop: 4,
  },

  navLabelActive: {
    fontFamily: 'InterSemiBold',
    color: '#287D7D',
  },
});