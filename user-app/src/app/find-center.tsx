import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

type Center = {
  key: string;
  name: string;
  rating: string;
  distance: string;
  address: string;
  offer: string;
  image: any;
};

const CENTERS: Center[] = [
  {
    key: 'c1',
    name: 'Apollo Diagnostics',
    rating: '4.5/5',
    distance: '2.1 Km, Banjara hills Hyderabad',
    address: 'Telangana',
    offer: '20% OFF on all Tests',
    image: require('../assets/images/centerApollo1.png'),
  },
  {
    key: 'c2',
    name: 'Apollo Diagnostics',
    rating: '4.5/5',
    distance: '2.1 Km, Banjara hills Hyderabad',
    address: 'Telangana',
    offer: '20% OFF on all Tests',
    image: require('../assets/images/centerApollo2.png'),
  },
  {
    key: 'c3',
    name: 'Apollo Diagnostics',
    rating: '4.5/5',
    distance: '2.1 Km, Banjara hills Hyderabad',
    address: 'Telangana',
    offer: 'Free home collection above ₹999',
    image: require('../assets/images/centerApollo3.png'),
  },
  {
    key: 'c4',
    name: 'Apollo Diagnostics',
    rating: '4.5/5',
    distance: '2.1 Km, Banjara hills Hyderabad',
    address: 'Telangana',
    offer: '20% OFF on all Tests',
    image: require('../assets/images/centerApollo4.png'),
  },
  {
    key: 'c5',
    name: 'Apollo Diagnostics',
    rating: '4.5/5',
    distance: '2.1 Km, Banjara hills Hyderabad',
    address: 'Telangana',
    offer: '20% OFF on all Tests',
    image: require('../assets/images/centerApollo5.png'),
  },
   {
    key: 'c6',
    name: 'Apollo Diagnostics',
    rating: '4.5/5',
    distance: '2.1 Km, Banjara hills Hyderabad',
    address: 'Telangana',
    offer: '20% OFF on all Tests',
    image: require('../assets/images/centerApollo6.png'),
  },
];

export default function FindCenter() {
  const {
  flow,
  testKey,
  testName,
  testPrice,
} = useLocalSearchParams<{
  flow?: string;
  testKey?: string;
  testName?: string;
  testPrice?: string;
}>();
  const [activeTab, setActiveTab] = useState<'nearest' | 'top'>('nearest');

  return (
    <View style={styles.container}>

      {/* =========================
          HEADER
      ========================== */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Find Center</Text>
        </View>
        <Text style={styles.headerSubtitle}>Search a diagnostic center near you</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* =========================
            SEARCH BAR
        ========================== */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for tests, centers...."
            placeholderTextColor="#999"
          />
        </View>

        {/* =========================
            TABS
        ========================== */}
        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'nearest' && styles.tabButtonActive]}
            onPress={() => setActiveTab('nearest')}
          >
            <Text
              style={[styles.tabText, activeTab === 'nearest' && styles.tabTextActive]}
            >
              Nearest
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'top' && styles.tabButtonActive]}
            onPress={() => setActiveTab('top')}
          >
            <Text
              style={[styles.tabText, activeTab === 'top' && styles.tabTextActive]}
            >
              Top Rated
            </Text>
          </TouchableOpacity>
        </View>

        {/* =========================
            CENTER LIST
        ========================== */}
        <View style={styles.listWrap}>
          {CENTERS.map((center) => (
  <TouchableOpacity
    key={center.key}
    style={styles.centerCard}
onPress={() => {
  if(center.key==='c1'){
  if (flow === 'bookLabTest') {
    // BOOK LAB TEST FLOW
    // Book Lab Test → Find Center → Sample Collection

    // router.push({
    //   pathname: '/sample-collection',
    //   params: {
    //     centerKey: center.key,
    //     centerName: center.name,
    //     testKey: testKey || '',
    //     testName: testName || '',
    //     testPrice: testPrice || '',
    //   },
    // });
    router.push({
  pathname: '/sample-collection',
  params: {
    flow: 'bookLabTest',
    centerKey: center.key,
    centerName: center.name,
    testKey: testKey || '',
    testName: testName || '',
    testPrice: testPrice || '',
  },
});
  } else {
    // FIND CENTER FLOW
    // Find Center → Book Lab Test

    router.push({
      pathname: '/book-lab-test',
      params: {
        flow: 'findCenter',
        centerKey: center.key,
        centerName: center.name,
      },
    });
  }
}
}}
  >
    <Image
      source={center.image}
      style={styles.centerImage}
      resizeMode="contain"
    />

    <View style={styles.centerInfo}>
      <Text style={styles.centerName}>{center.name}</Text>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={13} color="#F5A623" />
        <Text style={styles.ratingText}>{center.rating}</Text>
      </View>

      <View style={styles.addressRow}>
        <Ionicons name="location-outline" size={13} color="#666" />
        <Text style={styles.addressText}>
          {center.distance}
          {'\n'}
          {center.address}
        </Text>
      </View>

      <Text style={styles.offerText}>{center.offer}</Text>
    </View>
  </TouchableOpacity>
))}
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8F7',
  },

  /* HEADER */
  header: {
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 12,
    marginTop:20
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  backButton: {
    marginRight: 14,
  },
headerTitle: {
  fontFamily: 'InterBold',
  fontSize: 18,
  color: '#1A1A1A',
},
headerSubtitle: {
  fontFamily: 'InterRegular',
  fontSize: 15,
  marginLeft: 34,
  marginBottom:5
},

  /* SEARCH */
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 46,
    borderColor:'#B0B0B0',
    borderWidth:1
  },
searchInput: {
  flex: 1,
  marginLeft: 8,
  fontFamily: 'InterRegular',
  fontSize: 14,
},

  /* TABS */
  tabsRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 4,
    borderColor:'#D0D0D0',
    borderWidth:1,
    height:35,
    width:211,
    borderRadius:16
  },
  tabButton: {
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  tabButtonActive: {
    backgroundColor: '#0B4F4A',
  },
tabText: {
  fontFamily: 'InterMedium',
  fontSize: 11,
  // color: '#666',
},
  tabTextActive: {
    color: '#FFFFFF',
  },

  /* LIST */
  listWrap: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
centerCard: {
  flexDirection: 'row',
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  borderWidth: 1.5,
  borderColor: '#83C5C0',
  padding: 10,
  marginBottom: 12,
  height: 128,  
  alignItems:'center'
},
  centerImage: {
    width: 140,
    height: 109,
    borderRadius: 10,
    marginRight: 30,
  },
  centerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
 centerName: {
  fontFamily: 'InterBold',
  fontSize: 13,
  color: '#1A1A1A',
  marginBottom: 4,
},
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
ratingText: {
  fontFamily: 'InterRegular',
  fontSize: 11,
  color: '#333',
  marginLeft: 4,
},
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
addressText: {
  fontFamily: 'InterRegular',
  fontSize: 10,
  // color: '#666',
  marginLeft: 4,
  lineHeight: 14,
},
offerText: {
  fontFamily: 'InterMedium',
  fontSize: 10,
  color: '#004A92',
},
});