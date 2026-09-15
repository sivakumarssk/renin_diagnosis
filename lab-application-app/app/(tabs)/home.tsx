import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>
              Good Morning!
            </Text>

            <View style={styles.locationRow}>
              <Ionicons
                name="location-outline"
                size={11}
                color="#1761A0"
              />

              <Text style={styles.location}>
                Hyderabad, Telangana
              </Text>
            </View>
          </View>

         <View style={styles.headerIcons}>
  <TouchableOpacity onPress={() => router.push('/profile')}>
    <Ionicons
      name="person-circle-outline"
      size={24}
      color="#222"
    />
  </TouchableOpacity>

            <Ionicons
              name="notifications-outline"
              size={24}
              color="#F49A20"
            />
          </View>
        </View>

        {/* Stats */}
        <View style={styles.row}>
          <StatCard
            icon="bandage-outline"
            value="12"
            label="Samples"
            sub="Awaiting Recept"
            color="#E64646"
      
          />

          <TouchableOpacity
            style={styles.statCard}
          >
            <View style={styles.iconBox}>
              <Ionicons
                name="flask-outline"
                size={33}
                color="#286F6F"
              />
            </View>

            <View style={styles.statInfo}>
              <Text style={styles.value}>8</Text>
              <Text style={styles.label}>Tests</Text>
              <Text style={styles.sub}>
                Inprocessing
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={16}
              color="#222"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.largeCard}>
          <View style={styles.iconBox}>
            <Ionicons
              name="document-text-outline"
              size={27}
              color="#FF7800"
            />
          </View>

          <View style={styles.statInfo}>
            <Text style={styles.value}>5</Text>
            <Text style={styles.label}>Reports</Text>
            <Text style={styles.sub}>
              Ready to upload
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={16}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.largeCard}
        >
          <View style={styles.iconBox}>
            <Ionicons
              name="calendar-outline"
              size={27}
              color="#3D70FF"
            />
          </View>

          <View style={styles.statInfo}>
            <Text style={styles.value}>18</Text>
            <Text style={styles.label}>Bookings</Text>
            <Text style={styles.sub}>
              Ready to upload
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={16}
          />
        </TouchableOpacity>

        {/* Sample Tracking */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Sample Tracking
          </Text>

          <Text style={styles.viewAll}>
            View All
          </Text>
        </View>

        <View style={styles.tracking}>

  <TrackingItem
    icon="link-outline"
    count="8"
    color="#8064D8"
  />

  <View style={styles.dashedLine} />

  <TrackingItem
    icon="briefcase-outline"
    count="5"
    color="#4384C6"
  />

  <View style={styles.dashedLine} />

  <TrackingItem
    icon="flask-outline"
    count="8"
    color="#F4A13A"
  />

  <View style={styles.dashedLine} />

  <TrackingItem
    icon="checkmark-circle-outline"
    count="12"
    color="#25A45A"
  />

</View>

        {/* Recent Bookings */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Recent Bookings
          </Text>

         
            <Text style={styles.viewAll}>
              View All
            </Text>
        </View>

       <BookingPreview
  name="Teja sri"
  status="Confirmed"
  statusColor="#149329"
/>

<BookingPreview
  name="Ravi Kumar"
  status="Confirmed"
  statusColor="#F49A20"
/>

<BookingPreview
  name="Ravi Kumar"
  status="Confirmed"
  statusColor="#149329"
/>
        
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({
  icon,
  value,
  label,
  sub,
  color,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  value: string;
  label: string;
  sub: string;
  color: string;
}) {
  return (
    <TouchableOpacity style={styles.statCard}>
      <View style={styles.iconBox}>
        <Ionicons
          name={icon}
          size={25}
          color={color}
        />
      </View>

      <View style={styles.statInfo}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.sub}>{sub}</Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={16}
      />
    </TouchableOpacity>
  );
}

function TrackingItem({
  icon,
  count,
  color,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  count: string;
  color: string;
}) {
  return (
    <View style={styles.trackItem}>
      <View style={styles.trackCircle}>
        <Ionicons
          name={icon}
          size={24}
          color={color}
        />
      </View>

      <Text style={styles.trackCount}>
        {count}
      </Text>
    </View>
  );
}

function BookingPreview({
  name,
  status,
  statusColor,
}: {
  name: string;
  status: string;
  statusColor: string;
}) {
  return (
    <View style={styles.booking}>
      <View style={styles.avatar}>
        <Ionicons
          name="person"
          size={27}
          color="#1761A0"
        />
      </View>

      <View style={styles.bookingInfo}>
        <Text style={styles.bookingName}>
          {name}
        </Text>

        <Text style={styles.bookingTest}>
          CBC Test
        </Text>

        <Text style={styles.bookingSub}>
          ⌂ Home Collection  |  10:00 Am
        </Text>
      </View>

      <View style={styles.confirmed}>
        <Text
          style={[
            styles.confirmedText,
            { color: statusColor },
          ]}
        >
          {status}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FAF9',
  },

  content: {
    padding: 12,
    paddingBottom: 85,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  greeting: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  location: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    color: '#2F6364',
    marginLeft: 2,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 14,
    paddingTop: 2,
  },

  row: {
    flexDirection: 'row',
    gap: 6,
  },

  statCard: {
    flex: 1,
    height: 96,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A7D8D6',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
  },

  largeCard: {
    height: 80,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A7D8D6',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    marginBottom:10
  },

  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight:15
  },

  statInfo: {
    flex: 1,
    marginLeft: 6,
  },

  value: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  label: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    color: '#222',
  },

  sub: {
    fontSize: 9,
    fontFamily: 'InterRegular',
    // color: '#777',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 17,
    fontFamily: 'InterSemiBold',
    color: '#333',
  },

  viewAll: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    color: '#2F6B6B',
    textDecorationLine: 'underline',
    //  marginTop: 30,
    marginBottom: 20,
  },

  tracking: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  trackItem: {
    alignItems: 'center',
  },

  trackCircle: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#C9DFDD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  trackCount: {
    marginTop: 3,
    fontSize: 15,
    fontFamily: 'InterSemiBold',
  },
dashedLine: {
  flex: 1,
  borderTopWidth: 1,
  borderStyle: 'dashed',
  borderColor: '#AFCAC8',
  marginHorizontal: 5,
  marginTop: 20,
},

  booking: {
  minHeight: 55,
  borderBottomWidth: 1,
  borderBottomColor: '#D9E5E3',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: 17,
  paddingBottom: 18,
},

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#E8E7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10
  },

  bookingInfo: {
    flex: 1,
    marginLeft: 8,
  },

  bookingName: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
  },

  bookingTest: {
    fontSize: 14,
    fontFamily: 'InterMedium',
  },

  bookingSub: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    // color: '#444',
  },

  confirmed: {
    backgroundColor: '#D5FFD9',
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 3,
  },

  confirmedText: {
  fontSize: 10,
  fontFamily: 'InterMedium',
},
});