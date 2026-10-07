import React, { useState } from 'react';
import {
  Dimensions,
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

const { width } = Dimensions.get('window');

type LabTest = {
  key: string;
  name: string;
  description: string;
  price: string;
  image: any;
  bg: string;
};

const POPULAR_TESTS: LabTest[] = [
  {
    key: 'cbc',
    name: 'CBC ( Complete Blood Count )',
    description: 'Measures different components of your blood',
    price: '₹199',
    image: require('../assets/images/testCBC.png'),
    bg: '#FDEDEE',
  },
  {
    key: 'sugar',
    name: 'Blood Sugar (Fasitng)',
    description: 'Checks your Fasting blood glucose level',
    price: '₹199',
    image: require('../assets/images/testBloodSugar.png'),
    bg: '#EAF1FF',
  },
  {
    key: 'thyroid',
    name: 'Thyroid Profile (T1, T2, T3)',
    description: 'Evaluates thyroid functional levels',
    price: '₹599',
    image: require('../assets/images/testThyroid.png'),
    bg: '#FDEDEE',
  },
  {
    key: 'urine',
    name: 'Urine Examination',
    description: 'Anylitcs Your Urine for infections & More',
    price: '₹99',
    image: require('../assets/images/testUrine.png'),
    bg: '#EFEBFF',
  },
  {
    key: 'liver',
    name: 'Liver Functonal Test',
    description: 'Assesses the Health of your liver',
    price: '₹399',
    image: require('../assets/images/testLiver.png'),
    bg: '#E7F7EA',
  },
  {
    key: 'liver2',
    name: 'Lipid Profile',
    description: 'Measures Cholestral & Levels',
    price: '₹499',
    image: require('../assets/images/testLiver.png'),
    bg: '#FDEDEE',
  },
];

const ALL_TESTS: LabTest[] = [
  ...POPULAR_TESTS,
  // add more tests here for the "All Tests" tab
];

export default function BookLabTest() {
  // const { flow } = useLocalSearchParams<{ flow?: string }>();
   const {
    flow,
    centerKey,
    centerName,
  } = useLocalSearchParams<{
    flow?: string;
    centerKey?: string;
    centerName?: string;
  }>();
  const [activeTab, setActiveTab] = useState<'popular' | 'all'>('popular');

  const testsToShow = activeTab === 'popular' ? POPULAR_TESTS : ALL_TESTS;

  return (
    <View style={styles.container}>

      {/* =========================
          HEADER
      ========================== */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Lab Test</Text>
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
            style={[styles.tabButton, activeTab === 'popular' && styles.tabButtonActive]}
            onPress={() => setActiveTab('popular')}
          >
            <Text
              style={[styles.tabText, activeTab === 'popular' && styles.tabTextActive]}
            >
              Popular Tests
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'all' && styles.tabButtonActive]}
            onPress={() => setActiveTab('all')}
          >
            <Text
              style={[styles.tabText, activeTab === 'all' && styles.tabTextActive]}
            >
              All Tests
            </Text>
          </TouchableOpacity>
        </View>
               {flow === 'findCenter' && (
  <View style={styles.offerCard}>
    <View style={styles.offerLeft}>
      <Text style={styles.offerTitle}>LIMITED TIME OFFER</Text>

      <Text style={styles.offerSmall}>Up to</Text>

      <Text style={styles.offerDiscount}>20% OFF</Text>

      <Text style={styles.offerSmall}>On All Tests</Text>
    </View>

    <Image
      source={require('../assets/images/labOffer.png')}
      style={styles.offerImage}
      resizeMode="contain"
    />

    <View style={styles.offerBottom}>
      <Text style={styles.offerEnds}>Offer ends in</Text>

      <View style={styles.timerBox}>
        <Text style={styles.timerText}>05 : 12 : 20</Text>
        <Text style={styles.timerLabels}>Hrs   Min   Sec</Text>
      </View>
    </View>
  </View>
)}


        {/* =========================
            TEST LIST
        ========================== */}
       <View style={styles.listWrap}>
  {testsToShow.map((test) => (
    <TouchableOpacity
      key={test.key}
      style={styles.testRow}
     onPress={() => {
      if(test.key==='cbc'){
  if (flow === 'findCenter') {
    // FIND CENTER FLOW:
    // Find Center → Book Lab Test → Sample Collection
    router.push({
  pathname: '/sample-collection',
  params: {
    flow: 'findCenter',
    centerKey: centerKey || '',
    centerName: centerName || '',
    testKey: test.key,
    testName: test.name,
    testPrice: test.price,
  },
});
  } else {
    // BOOK LAB TEST FLOW:
    // Book Lab Test → Find Center → Sample Collection

    router.push({
      pathname: '/find-center',
      params: {
        flow: 'bookLabTest',
        testKey: test.key,
        testName: test.name,
        testPrice: test.price,
      },
    });
  }
}
}}
 
    >
      <View style={[styles.testIconWrap, { backgroundColor: test.bg }]}>
        <Image
          source={test.image}
          style={styles.testIconImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.testInfo}>
        <Text style={styles.testName}>{test.name}</Text>
        <Text style={styles.testDescription}>{test.description}</Text>
        <Text style={styles.testPrice}>{test.price}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#1A1A1A" />
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 20,
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

  /* SEARCH */
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 49,
    width:335,
    borderColor:'#B0B0B0',
    borderWidth:1
  },
searchInput: {
  flex: 1,
  marginLeft: 8,
  fontFamily: 'InterRegular',
  fontSize: 13,
},

  /* TABS */
  tabsRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 4,
  },
  tabButton: {
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  tabButtonActive: {
    backgroundColor: '#317070',
  },
tabText: {
  fontFamily: 'InterMedium',
  fontSize: 13,
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
  testRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderColor:'#DADADA',
    borderWidth:1
  },
  testIconWrap: {
    width: 62,
    height: 62,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  testIconImage: {
    width: 46,
    height: 36,
  },
  testInfo: {
    flex: 1,
     marginLeft: 25,
  },
 testName: {
  fontFamily: 'InterBold',
  fontSize: 13,
  color: '#1A1A1A',
  marginBottom: 3,
},
 testDescription: {
  fontFamily: 'InterRegular',
  fontSize: 14,
  // color: '#888',
  marginBottom: 6,
  lineHeight: 15,
},
 testPrice: {
  fontFamily: 'InterBold',
  fontSize: 13,
  color: '#1A1A1A',
},
  offerCard: {
  width: '88%',
  height: 130,
  alignSelf: 'center',
  marginTop: 12,
  marginBottom: 8,
  borderRadius: 8,
  backgroundColor: '#DCEFF8',
  position: 'relative',
  overflow: 'hidden',
},

offerLeft: {
  position: 'absolute',
  left: 8,
  top: 7,
},

offerTitle: {
  fontFamily: 'InterBold',
  fontSize: 17,
  color: '#018410',
  marginBottom: 8,
},

offerSmall: {
  fontFamily: 'InterRegular',
  fontSize: 10,
  color: '#018410',
},

offerDiscount: {
  fontFamily: 'InterBold',
  fontSize: 20,
  color: '#018410',
  marginVertical: 1,
},

offerImage: {
  position: 'absolute',
  width: 126,
  height: 126,
  right: 7,
  top: 5,
},
offerBottom: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
},
offerEnds: {
  fontFamily: 'InterRegular',
  fontSize: 10,
  color: '#018410',
  marginBottom: 3,
},

timerBox: {
  backgroundColor: '#FFFFFF',
  borderRadius: 3,
  paddingHorizontal: 6,
  paddingVertical: 3,
  width: 90,
  height: 30,
  marginLeft: 0,
  marginBottom: 0,
},

timerText: {
  fontFamily: 'InterBold',
  fontSize: 15,
  color: '#333',
  textAlign: 'center',
},

timerLabels: {
  fontFamily: 'InterRegular',
  fontSize: 12,
  color: '#777',
  textAlign: 'center',
  marginTop: 1,
},
});