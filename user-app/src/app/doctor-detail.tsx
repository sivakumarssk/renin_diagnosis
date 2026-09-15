import React, { useMemo, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

/* -------------------------------------------------------
   GENERATE UPCOMING DATES
------------------------------------------------------- */

const generateDates = (numberOfDays = 60) => {
  const dates = [];

  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const dayName = date.toLocaleDateString('en-US', {
      weekday: 'short',
    });

    const fullDayName = date.toLocaleDateString('en-US', {
      weekday: 'long',
    });

    const dayNumber = String(date.getDate()).padStart(2, '0');

    const month = date.toLocaleDateString('en-US', {
      month: 'short',
    });

    dates.push({
      id: i,
      day: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : dayName,
      fullDay: fullDayName,
      date: dayNumber,
      month,
    });
  }

  return dates;
};

/* -------------------------------------------------------
   TIME SLOTS
------------------------------------------------------- */

const TIME_SLOTS = [
  '7:00 AM - 9:00 AM',
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '1:00 PM - 3:00 PM',
  '3:00 PM - 6:00 PM',
  '6:00 PM - 9:00 PM',
];

export default function DoctorDetail() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);

  const dates = useMemo(() => generateDates(20), []);

  return (
    <View style={styles.container}>

     
             
      

      {/* ================= MAIN SCROLL ================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
         {/* ================= HEADER ================= */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={21}
            color="#222"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Choose Doctors
        </Text>
      </View>

 {/* Search Department */}
<View style={styles.searchBar}>
  <Ionicons name="search" size={15} color="#777" />

  <TextInput
    style={styles.searchInput}
    placeholder="Search Department"
    placeholderTextColor="#777"
  />
</View>

        {/* ================= DOCTOR CARD ================= */}

        <View style={styles.doctorCard}>

  {/* TOP SECTION */}
  <View style={styles.doctorTop}>

    {/* Doctor Image */}
    <Image
      source={require('../assets/images/doctorPriya.png')}
      style={styles.doctorImage}
      resizeMode="cover"
    />

    {/* Doctor Details */}
    <View style={styles.doctorInfo}>

      <View style={styles.availableRow}>
        <View style={styles.availableDot} />
        <Text style={styles.availableText}>Available</Text>
      </View>

      <Text style={styles.doctorName}>
        Dr. Priya Sharma
      </Text>

      <View style={styles.ratingRow}>
        <Ionicons
          name="star"
          size={9}
          color="#F5A623"
        />
        <Text style={styles.ratingText}>
          4.5 (120 Reviews)
        </Text>
      </View>

      <Text style={styles.specialty}>
        General Physician
      </Text>

      <Text style={styles.experience}>
        10 Years Experience
      </Text>

      {/* Fee */}
      <View style={styles.feeBox}>
        <Text style={styles.fee}>
          ₹500
        </Text>

        <Text style={styles.feeLabel}>
          Consultation Fee
        </Text>
      </View>

    </View>
  </View>

  {/* BOTTOM SECTION */}
  <View style={styles.bottomInfo}>

    {/* Languages */}
    <View style={styles.bottomItem}>
      <Ionicons
        name="globe-outline"
        size={12}
        color="#555"
      />

      <View style={styles.bottomText}>
        <Text style={styles.bottomTitle}>
          Languages
        </Text>

        <Text style={styles.bottomValue}>
          English, Hindi, Telugu
        </Text>
      </View>
    </View>

    {/* Divider */}
    <View style={styles.verticalDivider} />

    {/* Consultation */}
    <View style={styles.bottomItem}>
      <Ionicons
        name="videocam-outline"
        size={12}
        color="#555"
      />

      <View style={styles.bottomText}>
        <Text style={styles.bottomTitle}>
          Consultation
        </Text>

        <Text style={styles.bottomValue}>
          Video
        </Text>
      </View>
    </View>

  </View>

</View>

        {/* ================= ABOUT DOCTOR ================= */}

        <Text style={styles.sectionTitle}>
          About Doctor
        </Text>

        <Text style={styles.aboutText}>
         Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti socios.... 
          <Text style={styles.moreText}> More</Text>
        </Text>

        {/* ================= SELECT DATE ================= */}

        <Text style={styles.sectionTitle}>
          Select Date
        </Text>

        {/* 
          HORIZONTAL SCROLL
          Shows 60 upcoming dates
        */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateScroll}
        >
        {dates.slice(0, 20).map((item, index) => {
            const active = selectedDate === index;

            return (
            
              <TouchableOpacity
  key={item.id}
  onPress={() => setSelectedDate(index)}
  style={[
    styles.dateCard,
    index === 1 && styles.dateCardActive,
  ]}
>
  <Text
    style={[
      styles.dateDay,
      index === 1 && styles.activeDateText,
    ]}
  >
    {item.day}
  </Text>

  <Text
    style={[
      styles.dateNumber,
      index === 1 && styles.activeDateText,
    ]}
  >
    {item.date}
  </Text>

  <Text
    style={[
      styles.dateMonth,
      index === 1 && styles.activeDateText,
    ]}
  >
    {item.month}
  </Text>
</TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ================= SELECT TIME ================= */}

        <Text style={styles.sectionTitle}>
          Select Time
        </Text>

        <View style={styles.timeGrid}>

          {TIME_SLOTS.map((slot, index) => {
            const active = selectedTime === index;

            return (
              
              <TouchableOpacity
  key={index}
  onPress={() => setSelectedTime(index)}
  style={[
    styles.timeSlot,
    index === 0 && styles.timeSlotActive,
  ]}
>
  <Text
    style={[
      styles.timeText,
      index === 0 && styles.activeTimeText,
    ]}
  >
    {slot}
  </Text>
</TouchableOpacity>
            );
          })}

        </View>

        {/* ================= PATIENT REVIEWS ================= */}

        <View style={styles.reviewHeader}>

          <Text style={styles.reviewTitle}>
            Patient Reviews
          </Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>
              See All
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.reviewCard}>

          <Image
            source={require('../assets/images/reviewUser.png')}
            style={styles.reviewImage}
          />

          <View style={styles.reviewContent}>

<View style={styles.reviewTopRow}>

  <View style={styles.nameStarsRow}>
    <Text style={styles.reviewerName}>
      Ritika Sharma
    </Text>

    <View style={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Ionicons
          key={star}
          name="star"
          size={10}
          color="#F5A623"
        />
      ))}
    </View>
  </View>

  <Text style={styles.reviewDate}>
    2 Weeks ago
  </Text>

</View>
            

            <Text style={styles.reviewText}>
              She is a very good doctor.
              She listens carefully and explains the
              problem in detail.
            </Text>

          </View>
        </View>
        <View style={styles.bottomBar}>

        <TouchableOpacity
          style={styles.bookButton}
          onPress={() =>
            router.push({
              pathname: './select-patient',
              params: {
                flow: 'appointment',
              },
            })
          }
        >
          <Text style={styles.bookButtonText}>
            Book Appointment
          </Text>
        </TouchableOpacity>

      </View>

      </ScrollView>

    </View>

  );
}

/* =======================================================
   STYLES
======================================================= */

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#F3FAF9',
//   },

//   /* HEADER */

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 8,
//     paddingTop: 15,
//     paddingBottom: 30,
//   },

//   backButton: {
//     marginRight: 14,
//   },

//   headerTitle: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#222',
//   },
//   searchBar: {
//   height: 40,
//   backgroundColor: '#FFFFFF',
//   borderRadius: 10,
//   flexDirection: 'row',
//   alignItems: 'center',
//   paddingHorizontal: 8,
//   marginBottom: 20,
//   borderWidth: 1,
//   borderColor: '#B0B0B0',
//   // width:330,
//   marginLeft:13
// },

// searchInput: {
//   flex: 1,
//   marginLeft: 6,
//   fontSize: 15,
//   color: '#333',
// },

//   scrollContent: {
//     paddingHorizontal: 16,
//     paddingBottom: 120,
//   },

//   /* =====================================================
//      DOCTOR CARD
//   ===================================================== */

//  doctorCard: {
//   backgroundColor: '#FFFFFF',
//   borderRadius: 14,
//   overflow: 'hidden',
//   borderWidth: 1,
//   borderColor: '#E1E8E7',
//   marginBottom:8
// },

// doctorTop: {
//   flexDirection: 'row',
//   padding: 10,
//   paddingBottom: 9,
// },

// doctorImage: {
//   width: 150,
//   height: 160,
//   borderRadius: 9,
//   backgroundColor:'#E2E3E6',
//   marginRight:15
// },

// doctorInfo: {
//   flex: 1,
//   marginLeft: 10,
//   paddingTop: 2,
// },

// availableRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginBottom: 3,
// },

// availableDot: {
//   width: 4,
//   height: 4,
//   borderRadius: 2,
//   backgroundColor: '#159447',
//   marginRight: 3,
// },

// availableText: {
//   fontSize: 12,
//   color: '#159447',
//   fontWeight: '600',
// },

// doctorName: {
//   fontSize: 15,
//   fontWeight: '700',
//   color: '#222',
//   marginBottom: 6,
// },

// ratingRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginBottom: 3,
// },

// ratingText: {
//   fontSize: 12,
//   // color: '#555',
//   marginLeft: 3,
// },

// specialty: {
//   fontSize: 15,
//   // color: '#444',
//   marginBottom: 7,
// },

// experience: {
//   fontSize: 13,
//   // color: '#777',
//   marginBottom:10
// },

// feeBox: {
//   borderWidth: 1,
//   borderColor: '#E2E2E2',
//   borderRadius: 6,
//   paddingHorizontal: 7,
//   paddingVertical: 4,
//   alignSelf: 'flex-start',
//   marginTop: 10,
//   width:130,
//   height:40
// },

// fee: {
//   fontSize: 15,
//   fontWeight: '700',
//   color: '#222',
// },

// feeLabel: {
//   fontSize: 16,
//   // color: '#777',
//   marginTop: 1,
// },

// bottomInfo: {
//   height: 48,
//   borderTopWidth: 1,
//   borderTopColor: '#E8EEEE',
//   flexDirection: 'row',
//   alignItems: 'center',
//   backgroundColor:'#FFFAFA',
// },

// bottomItem: {
//   flex: 1,
//   flexDirection: 'row',
//   alignItems: 'center',
//   paddingHorizontal: 10,
// },

// bottomText: {
//   marginLeft: 5,
// },

// bottomTitle: {
//   fontSize: 15,
//   color: '#444',
//   marginBottom: 4,
// },

// bottomValue: {
//   fontSize: 13,
//   // color: '#666',
// },

// verticalDivider: {
//   width: 1,
//   height: 35,
//   backgroundColor: '#D9E2E1',
// },
//   /* =====================================================
//      ABOUT
//   ===================================================== */

//   sectionTitle: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: '#222',
//     marginTop: 15,
//     marginBottom: 8,
//     paddingHorizontal: 0,
//   },

//   aboutText: {
//     fontSize: 12,
//     lineHeight: 12,
//     paddingHorizontal: 0,
//   },

//   moreText: {
//     color: '#168B55',
//     fontWeight: '700',
//   },

//   /* =====================================================
//      DATE
//   ===================================================== */

//   dateScroll: {
//     paddingRight: 10,
//   },

//   dateCard: {
//     width: 71,
//     height: 82,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#DDE8E6',
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 7,
//   },

//   dateCardActive: {
//     backgroundColor: '#1F90FF',
//     borderColor: '#168FE8',
//     elevation: 3,
//     shadowColor: '#168FE8',
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//   },

//   dateDay: {
//     fontSize: 12,
//     // color: '#777',
//   },

//   dateNumber: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#333',
//     marginVertical: 2,
//   },

//   dateMonth: {
//     fontSize: 12,
//     // color: '#777',
//   },

//   activeDateText: {
//     color: '#FFFFFF',
//   },

//   /* =====================================================
//      TIME
//   ===================================================== */

//   timeGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom:10
//   },

//   timeSlot: {
//     width: '48.5%',
//     height: 37,
//     borderWidth: 1,
//     borderColor: '#B9DEDA',
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 7,
//     backgroundColor: '#F8FCFB',
//   },

//   timeSlotActive: {
//     backgroundColor: '#317070',
//     borderColor: '#317070',
//   },

//   timeText: {
//     fontSize: 13,
//     color: '#222',
//     fontWeight: '500',
//   },

//   activeTimeText: {
//     color: '#FFFFFF',
//   },

//   /* =====================================================
//      REVIEWS
//   ===================================================== */

//   reviewHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 12,
//     marginBottom: 7,
//   },

//   reviewTitle: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: '#222',
//     marginBottom:10
//   },

//   seeAll: {
//     fontSize: 12,
//     color: '#0066CC',
//     fontWeight: '600',
//     marginBottom:10
//   },

//   reviewCard: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#CDE5E2',
//     borderRadius: 10,
//     padding: 8,
//   },

//   reviewImage: {
//     width: 58,
//     height: 59,
//     borderRadius: 17,
//     marginRight: 15,
//   },

//   reviewContent: {
//     flex: 1,
//   },

//  reviewTopRow: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// },

// nameStarsRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
// },

// reviewerName: {
//   fontSize: 14,
//   fontWeight: '700',
//   color: '#222',
//   marginBottom:5
// },

// stars: {
//   flexDirection: 'row',
//   marginLeft: 6,
// },

// reviewDate: {
//   fontSize: 10,
// },

//   reviewText: {
//     fontSize: 15,
//     // color: '#555',
//     lineHeight: 9,
//   },

//   /* =====================================================
//      BOTTOM BUTTON
//   ===================================================== */

//   bottomBar: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 12,
//     paddingVertical: 9,
//     borderTopLeftRadius: 14,
//     borderTopRightRadius: 14,
//     elevation: 10,
//   },

//   bookButton: {
//     height: 52,
//     backgroundColor: '#317070',
//     borderRadius: 9,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width:340
//   },

//   bookButtonText: {
//     color: '#FFFFFF',
//     fontSize: 15,
//     fontWeight: '700',
//   },
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 15,
    paddingBottom: 30,
  },

  backButton: {
    marginRight: 14,
  },

  headerTitle: {
    fontFamily: 'InterSemiBold',
    fontSize: 15,
    color: '#222',
  },

  searchBar: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    marginLeft: 13,
  },

  searchInput: {
    flex: 1,
    marginLeft: 6,
    fontFamily: 'InterRegular',
    fontSize: 13,
    color: '#333',
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },

  /* DOCTOR CARD */

  doctorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E1E8E7',
    marginBottom: 8,
    height:288
  },

  doctorTop: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 9,
    marginBottom:15
  },

  doctorImage: {
    width: 178,
    height: 199,
    borderRadius: 18,
    backgroundColor: '#E2E3E6',
    marginRight: 15,
  },

  doctorInfo: {
    flex: 1,
    marginLeft: 10,
    paddingTop: 2,
  },

  availableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },

  availableDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#159447',
    marginRight: 3,
  },

  availableText: {
    fontFamily: 'InterSemiBold',
    fontSize: 10,
    color: '#159447',
  },

  doctorName: {
    fontFamily: 'InterBold',
    fontSize: 12,
    color: '#222',
    marginBottom: 6,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },

  ratingText: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    marginLeft: 3,
  },

  specialty: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    marginBottom: 5,
  },

  experience: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    marginBottom: 10,
  },

  feeBox: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 10,
    width: 130,
    height: 55,
  },

  fee: {
    fontFamily: 'InterBold',
    fontSize: 10,
    color: '#222',
  },

  feeLabel: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    marginTop: 1,
  },

  bottomInfo: {
    height: 48,
    borderTopWidth: 1,
    borderTopColor: '#E8EEEE',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
  },

  bottomItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  bottomText: {
    marginLeft: 5,
  },

  bottomTitle: {
    fontFamily: 'InterBold',
    fontSize: 12,
    color: '#444',
    marginBottom: 4,
  },

  bottomValue: {
    fontFamily: 'InterRegular',
    fontSize: 12,
  },

  verticalDivider: {
    width: 1,
    height: 35,
    backgroundColor: '#D9E2E1',
  },

  /* ABOUT */

  sectionTitle: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#222',
    marginTop: 15,
    marginBottom: 8,
    paddingHorizontal: 0,
  },

  aboutText: {
    fontFamily: 'InterRegular',
    fontSize: 9,
    lineHeight: 12,
    paddingHorizontal: 0,
  },

  moreText: {
    fontFamily: 'InterBold',
    color: '#168B55',
  },

  /* DATE */

  dateScroll: {
    paddingRight: 10,
  },

  dateCard: {
    width: 71,
    height: 82,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE8E6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  dateCardActive: {
    backgroundColor: '#1F90FF',
    borderColor: '#168FE8',
    elevation: 3,
    shadowColor: '#168FE8',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  dateDay: {
    fontFamily: 'InterRegular',
    fontSize: 12,
  },

  dateNumber: {
    fontFamily: 'InterBold',
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },

  dateMonth: {
    fontFamily: 'InterRegular',
    fontSize: 12,
  },

  activeDateText: {
    color: '#FFFFFF',
  },

  /* TIME */

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  timeSlot: {
    width: '48.5%',
    height: 37,
    borderWidth: 1,
    borderColor: '#B9DEDA',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
    backgroundColor: '#F8FCFB',
  },

  timeSlotActive: {
    backgroundColor: '#317070',
    borderColor: '#317070',
  },

  timeText: {
    fontFamily: 'InterMedium',
    fontSize: 11,
    color: '#222',
  },

  activeTimeText: {
    color: '#FFFFFF',
  },

  /* REVIEWS */

  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 7,
  },

  reviewTitle: {
    fontFamily: 'InterBold',
    fontSize: 15,
    color: '#222',
    marginBottom: 10,
  },

  seeAll: {
    fontFamily: 'InterSemiBold',
    fontSize: 12,
    color: '#0066CC',
    marginBottom: 10,
  },

  reviewCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CDE5E2',
    borderRadius: 10,
    padding: 8,
    height:91
  },

  reviewImage: {
    width: 58,
    height: 59,
    borderRadius: 17,
    marginRight: 15,
  },

  reviewContent: {
    flex: 1,
  },

  reviewTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:5
  },

  nameStarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  reviewerName: {
    fontFamily: 'InterBold',
    fontSize: 12,
    color: '#222',
    marginBottom: 5,
  },

  stars: {
    flexDirection: 'row',
    marginLeft: 6,
  },

  reviewDate: {
    fontFamily: 'InterRegular',
    fontSize: 9,
  },

  reviewText: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    lineHeight: 9,
  },

  /* BOTTOM BUTTON */

  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    elevation: 10,
  },

  bookButton: {
    height: 52,
    backgroundColor: '#317070',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
  },

  bookButtonText: {
    fontFamily: 'InterBold',
    color: '#FFFFFF',
    fontSize: 15,
  },
});