import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
const { width } = Dimensions.get('window');

const SLIDE_WIDTH = width - 60; // banner card width (leaves visible gap on both sides)
const SLIDE_SPACING = 12;       // space between slides
const SNAP_INTERVAL = SLIDE_WIDTH + SLIDE_SPACING;

/* =========================
   CAROUSEL SLIDES
========================== */
const BANNER_SLIDES = [
  {
    key: 'slide1',
    title: 'Accurate Reports.\nBetter Health.',
    image: require('../assets/images/bannerLab.png'),
  },
  {
    key: 'slide2',
    title: 'Full Body Checkup',
    subtitle: 'stay healthy, stay strong',
    image: require('../assets/images/reports.png'),
  },
  {
    key: 'slide3',
    title: 'Book Online Doctor\nConsultation',
    image: require('../assets/images/bannerdoctor.png'),
  },
];

/* =========================
   WHAT'S ON YOUR MIND — IMAGE ICONS
========================== */
const CATEGORY_ITEMS = [
  { key: 'labtest', label: 'Book\nLab Test', image: require('../assets/images/BookLabTest.png') },
  { key: 'appointment', label: 'Book\nAppointement', image: require('../assets/images/BookAppointment.png') },
  { key: 'reports', label: 'My\nReports', image: require('../assets/images/MyReports.png') },
  { key: 'packages', label: 'Health\nPackages', image: require('../assets/images/HealthPackages.png') },
  { key: 'hospitals', label: 'Find\nHospitals', image: require('../assets/images/FindHospitals.png') },
  { key: 'centers', label: 'Find lab\nCenters', image: require('../assets/images/FindlabCenters.png') },
];

/* =========================
   POPULAR TESTS — IMAGE ICONS
========================== */
const POPULAR_TESTS = [
  { key: 'cbc1', label: 'CBC(complete\nBlood Count)', price: '₹199', image: require('../assets/images/testCBC.png'), bg: '#FDEDEE' },
  { key: 'sugar', label: 'Blood Sugar\n(Fasitng)', price: '₹149', image: require('../assets/images/testBloodSugar.png'), bg: '#EAF1FF' },
  { key: 'liver', label: 'Liver function test', price: '₹399', image: require('../assets/images/testLiver.png'), bg: '#EAF6EC' },
  { key: 'thyroid', label: 'Thyroid', price: '₹149', image: require('../assets/images/testThyroid.png'), bg: '#FDEDEE' },
  { key: 'urine', label: 'Urine Examination', price: '₹149', image: require('../assets/images/testUrine.png'), bg: '#EFEBFF' },
  { key: 'cbc2', label: 'CBC(comp\nBlood Court', price: '₹199', image: require('../assets/images/testCBC2.png'), bg: '#FDEDEE' },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const bannerRef = useRef<FlatList>(null);
  const currentIndexRef = useRef(0);

  const onBannerScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / SNAP_INTERVAL);
        setActiveSlide(slideIndex);
        currentIndexRef.current = slideIndex;
      },
    }
  );

  // AUTO-PLAY: advance to next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % BANNER_SLIDES.length;
      bannerRef.current?.scrollToOffset({
        offset: nextIndex * SNAP_INTERVAL,
        animated: true,
      });
      currentIndexRef.current = nextIndex;
      setActiveSlide(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* =========================
            TOP BAR
        ========================== */}
        
<View style={styles.topBar}>
  <View style={styles.userColumn}>
    <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />
    <Text style={styles.greeting}>Good Morning</Text>
    <Text style={styles.userName}>Priyanka 👋</Text>
  </View>

  <TouchableOpacity style={styles.bellButton}>
    <Ionicons name="notifications-outline" size={20} color="#222" />
    <View style={styles.bellDot} />
  </TouchableOpacity>
</View>
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
          <Ionicons name="mic-outline" size={18} color="#999" />
        </View>

        {/* =========================
            PROMO BANNER CAROUSEL (spaced + autoplay)
        ========================== */}
        <FlatList
          ref={bannerRef}
          data={BANNER_SLIDES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          onScroll={onBannerScroll}
          scrollEventThrottle={16}
          style={styles.bannerList}
          snapToInterval={SNAP_INTERVAL}
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: 20 }}
         
          renderItem={({ item, index }) => (
  <View
    style={[
      styles.banner,
      { marginRight: index === BANNER_SLIDES.length - 1 ? 0 : SLIDE_SPACING },
    ]}
  >
    <View style={styles.bannerTextWrap}>
      <Text style={styles.bannerTitle}>{item.title}</Text>
      {!!item.subtitle && (
        <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
      )}
      <TouchableOpacity style={styles.bannerButton}>
        <Text style={styles.bannerButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
    <Image source={item.image} style={styles.bannerImage} resizeMode="contain" />
  </View>
)}
        />

        {/* dots */}
        <View style={styles.dotsRow}>
          {BANNER_SLIDES.map((_, index) => (
            <View key={index} style={[styles.dot, activeSlide === index && styles.dotActive]} />
          ))}
        </View>

        {/* =========================
            WHAT'S ON YOUR MIND — 2 rows x 3 columns
        ========================== */}
        <Text style={styles.sectionTitle}>What's on your mind ?</Text>

        <View style={styles.grid}>
          {CATEGORY_ITEMS.map((item) => (
           <TouchableOpacity
  key={item.key}
  style={[
    styles.gridCard,
    (item.key === 'labtest' || item.key === 'centers') &&
      styles.wideGridCard,
  ]}
              onPress={() => {
                if (item.key === 'centers') {
                  router.push('/find-center');
                }
                if (item.key === 'hospitals') {
  router.push('./find-hospitals-appointment');
}
                 if (item.key === 'labtest') {
      router.push('/book-lab-test');
    }
     if (item.key === 'reports') {
    router.push('/reports');
  }
  if (item.key === 'appointment') {
  router.push('./book-appointment');
}
              }}
            >
              {/* <Image source={item.image} style={styles.gridIconImage} resizeMode="contain" /> */}
              <Image
  source={item.image}
  style={[
    styles.gridIconImage,
    (item.key === 'labtest' || item.key === 'centers') &&
      styles.wideGridIconImage,
  ]}
  resizeMode="contain"
/>
              <Text style={styles.gridLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* =========================
            HOME SAMPLE COLLECTION
        ========================== */}
       
<LinearGradient
  colors={['#FFE8E8', '#C9FAFA']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={styles.sampleCard}
>
  <Image source={require('../assets/images/sampleCollection.png')} style={styles.sampleImage} />
  <View style={styles.sampleTextWrap}>
    <Text style={styles.sampleTitle}>Home Sample Collection</Text>
    <Text style={styles.sampleSubtitle}>Safe. Convenient. On time.</Text>
    <Text style={styles.sampleNote}>
      🧺 Trained professionals collect samples from the comfort of your home.
    </Text>
  </View>
</LinearGradient>
        {/* =========================
            POPULAR TESTS — centered images
        ========================== */}
        <View style={styles.popularHeader}>
          <Text style={styles.sectionTitle}>Popular Tests</Text>
          <TouchableOpacity onPress={() => router.push('/book-lab-test')}>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.testsRow}
        >
          {POPULAR_TESTS.map((test) => (
            <TouchableOpacity key={test.key} style={styles.testCard}>
              <View style={[styles.testIconWrap, { backgroundColor: test.bg }]}>
                <Image source={test.image} style={styles.testIconImageSmall} resizeMode="contain" />
              </View>
              <Text style={styles.testLabel}>{test.label}</Text>
              <View style={styles.testPriceRow}>
                <Text style={styles.testPrice}>{test.price}</Text>
                <Ionicons name="chevron-forward" size={14} color="#287D7D" />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* =========================
          BOTTOM TAB BAR
      ========================== */}
      {/* =========================
    BOTTOM TAB BAR
========================== */}
<View style={styles.tabBar}>
  <TouchableOpacity style={styles.tabItem}>
    <Ionicons name="home" size={20} color="#287D7D" />
    <Text style={[styles.tabLabel, styles.tabLabelActive]}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.tabItem} onPress={() => router.push('./my-bookings')}>
  <Feather name="calendar" size={20} color="#999" />
  <Text style={styles.tabLabel}>My Bookings</Text>
</TouchableOpacity>

  <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/reports')}>
    <Feather name="file-text" size={20} color="#999" />
    <Text style={styles.tabLabel}>Reports</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/profile')}>
    <Feather name="user" size={20} color="#999" />
    <Text style={styles.tabLabel}>Profile</Text>
  </TouchableOpacity>
  
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F3FAF9'
   },

  /* TOP BAR */
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 10,
  },
  userColumn: {
     alignItems: 'flex-start' 
    },
avatar: { 
  width: 40,
 height: 40,
  borderRadius: 20,
   marginBottom: 6 
  },
greeting: {
  fontFamily: 'InterRegular',
   fontSize: 13,
  },
userName: { 
  fontFamily: 'InterBold',
  fontSize: 13,
  color: '#1A1A1A'
},
  bellButton: {
    width: 42,
     height: 42, 
     borderRadius: 19,
    // backgroundColor: '#FFFFFF',
     justifyContent: 'center',
      alignItems: 'center',
  },
  bellDot: {
    position: 'absolute',
     top: 8,
    right: 9,
    width: 6, 
    height: 6,
     borderRadius: 3,
      backgroundColor: '#E14D5A',
  },

  /* SEARCH */
  searchBar: {
    flexDirection: 'row', 
    alignItems: 'center',
   backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
     marginTop: 8, 
     borderRadius: 12, 
     paddingHorizontal: 14,
      height: 50,
  },
searchInput: {
  flex: 1,
  marginLeft: 8,
  fontFamily: 'InterRegular',
  fontSize: 13,
},

  /* BANNER CAROUSEL */
  bannerList: { marginTop: 16 },
  banner: {
    flexDirection: 'row',
    backgroundColor: '#DCEFFB',
    width: SLIDE_WIDTH,
    borderRadius: 16,
    overflow: 'hidden',
    height: 130,
  },
  bannerTextWrap: { 
    flex: 1.1,
     padding: 16,
      justifyContent: 'center'
     },
  bannerTitle: { 
  fontFamily: 'InterSemiBold',
  fontSize: 15,
  color: '#1A1A1A',
  marginBottom: 10
},
bannerSubtitle: {
  fontFamily: 'InterRegular',
  fontSize: 12,
  marginBottom: 8 
},
  bannerButton: {
    backgroundColor: '#317070', 
    borderRadius: 8, 
    paddingVertical: 8,
    alignItems: 'center',
     width: 99,
  },
 bannerButtonText: {
  fontFamily: 'InterMedium',
  color: '#FFFFFF',
  fontSize: 11,
},
  bannerImage: { 
    flex: 1, 
    height: '100%',
  // margin:10,
  },

  dotsRow: { 
    flexDirection: 'row', 
    justifyContent: 'center',
     marginTop: 10,
      marginBottom: 20
     },
  dot: {
     width: 6,
      height: 6,
       borderRadius: 3, 
       backgroundColor: '#CFE0DD',
        marginHorizontal: 3
       },
  dotActive: { 
    width: 18,
     backgroundColor: '#0B4F4A'
     },

  /* SECTION TITLE */
 sectionTitle: {
  fontFamily: 'InterBold',
  fontSize: 15,
  color: '#1A1A1A',
  marginHorizontal: 20,
  marginBottom: 12
},

  /* GRID — 3 columns, wraps into 2 rows for 6 items */
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 9,
    justifyContent: 'space-between',
    rowGap: 12,
  },
  gridCard: {
    width: 90,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderColor:'#D1D1D1',
    borderWidth:1
  },
  gridIconImage: { 
    width: 45,
     height: 45,
     marginBottom: 8 },

  gridLabel: {
  fontFamily: 'InterRegular',
  fontSize: 13, 
  color: '#333',
  textAlign: 'center',
  lineHeight: 15,
},

  /* SAMPLE COLLECTION BANNER */
 sampleCard: {
  flexDirection: 'row', marginHorizontal: 20,
  marginTop: 20, marginBottom: 28, borderRadius: 16, padding: 14, alignItems: 'center',
},
  sampleImage: { width: 90, height: 90, marginRight: 12 },
  sampleTextWrap: { flex: 1 },
  sampleTitle: {
  fontFamily: 'InterBold',
  fontSize: 15,
  color: '#1A1A1A',
  marginBottom: 2
},
sampleSubtitle: {
  fontFamily: 'InterRegular',
  fontSize: 13,
  // color: '#555',
  marginBottom: 4
},
 sampleNote: {
  fontFamily: 'InterRegular',
  fontSize: 11,
  // color: '#777'
},

  /* POPULAR TESTS */
  popularHeader: {
    flexDirection: 'row',
     justifyContent: 'space-between',
      alignItems: 'center', 
      marginHorizontal: 20,
  },
 viewAll: { 
  fontFamily: 'InterMedium',
  fontSize: 13,
  color: '#3D3D3D',
  marginBottom: 12 
},
  testsRow: { paddingLeft: 20, paddingRight: 8 },
  testCard: {
    width: 120,
    height:150,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    marginRight: 12,
    alignItems: 'center', 
      justifyContent: 'space-between',
      borderWidth: 1,              // <-- added
  borderColor: '#408C8B',
  },
  testIconWrap: {
    width: 47,
    height: 47,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    alignSelf: 'center',
  },
  testIconImageSmall: { width: 30, height: 30 },
 testLabel: {
  fontFamily: 'InterRegular',
  fontSize: 13,
  color: '#1A1A1A',
  marginBottom: 8,
  minHeight: 30,
  textAlign: 'center',
},
  testPriceRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', width: '100%',
  },
  testPrice: {
  fontFamily: 'InterRegular',
  fontSize: 15,
  color: '#1A1A1A'
},

  /* BOTTOM TAB BAR */
  tabBar: {
    flexDirection: 'row', backgroundColor: '#FFFFFF', paddingVertical: 10, paddingBottom: 20,
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    shadowColor: '#000', shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06, shadowRadius: 6, elevation: 8,
  },
 tabItem: {
  flex: 1,
  alignItems: 'center',
},

tabLabel: {
  fontSize: 10,
  fontFamily: 'InterRegular',
  color: '#999',
  marginTop: 4,
},

tabLabelActive: {
  fontFamily: 'InterMedium',
  color: '#287D7D',
},
  wideGridCard: {
  width: 150,
  height:131
},
wideGridIconImage: {
  width: 77,
  height: 77,
  marginBottom: 8,
},
});