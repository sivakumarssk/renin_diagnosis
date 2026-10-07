import React, {  useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useLab } from '../src/context/LabContext';
export default function BookingDetailsScreen() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
 const {
  collectorAssigned,
  assignCollector,
  selectedCollectors,
} = useLab();


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
  <TouchableOpacity
    onPress={() => {
      if (dropdownOpen) {
        setDropdownOpen(false);
      } else {
        router.back();
      }
    }}
  >
    <Ionicons
      name="arrow-back"
      size={20}
    />
  </TouchableOpacity>

  <Text style={styles.headerTitle}>
    Bookings
  </Text>
</View>

        {/* Patient */}
        <View style={styles.patientCard}>
          <View style={styles.avatar}>
            <Ionicons
              name="person"
              size={18}
              color="#1761A0"
            />
          </View>

          <View style={styles.patientInfo}>
            <Text style={styles.name}>
              Ravi Kumar
            </Text>

            <Text style={styles.test}>
              CBC Test
            </Text>

            <Text style={styles.sample}>
              Sample id
            </Text>

            <Text style={styles.sampleId}>
              SMP10234
            </Text>
          </View>

          <View style={styles.confirmed}>
            <Text style={styles.confirmedText}>
              Confirmed
            </Text>
          </View>
        </View>

        {/* Details */}
        <View style={styles.detailsCard}>
          <Detail
            icon="flask-outline"
            label="Test"
            value="CBC Test"
          />

          <Detail
            icon="calendar-outline"
            label="Schedule"
            value={'10 Aug 2026, Monday\n10:00 AM'}
          />

          <Detail
            icon="briefcase-outline"
            label="Collection Type"
            value="Home Collection"
          />
           
           <View style={styles.paymentRow}>
  <View style={styles.detailLabel}>
    <Ionicons name="card-outline" size={12} />
    <Text style={styles.label}>
      Payment Status
    </Text>
  </View>

  <Text style={styles.paidText}>
    Paid
  </Text>

  <Text style={styles.priceText}>
    ₹500
  </Text>
</View>
  
          <Detail
            icon="call-outline"
            label="Phone"
            value="+91 9874563210"
          />

          <Detail
            icon="mail-outline"
            label="Mail"
            value="renuka.sharma@gmail.com"
          />
        </View>

        <Text style={styles.sectionTitle}>
  Sample Collection
</Text>

<TouchableOpacity
  style={styles.dropdown}
  onPress={() => {
    assignCollector();
    setDropdownOpen(true);
  }}
>
  <View style={styles.dropdownContent}>

    <View style={styles.dropdownHeader}>
      <Text style={styles.dropdownTitle}>
        Assign Collector
      </Text>

      <Ionicons
        name={dropdownOpen ? 'chevron-up' : 'chevron-down'}
        size={17}
        color="#222"
      />
    </View>

    {dropdownOpen &&
      selectedCollectors.map((collector, index) => (
        <View
          key={`${collector}-${index}`}
          style={[
            styles.collectorRow,
            index === 0 && styles.firstCollectorRow,
          ]}
        >
          <Text style={styles.collectorName}>
            {collector}
          </Text>

          <Ionicons
            name="checkbox"
            size={20}
            color="#169646"
          />
        </View>
      ))}
  </View>
</TouchableOpacity>

{/* Mark Sample Collected */}
{collectorAssigned && (
  <TouchableOpacity
    style={styles.collectButton}
    onPress={() => router.push('/sample-details')}
  >
    <Text style={styles.collectButtonText}>
      Mark Sample Collected
    </Text>
  </TouchableOpacity>
)}

      </ScrollView>
    </SafeAreaView>
  );
}

function Detail({
  icon,
  label,
  value,
  green,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  green?: boolean;
}) {
  return (
    <View style={styles.detailRow}>
      <View style={styles.detailLabel}>
        <Ionicons name={icon} size={12} />
        <Text style={styles.label}>{label}</Text>
      </View>

      <Text
        style={[
          styles.value,
          green && styles.green,
        ]}
      >
        {value}
      </Text>
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
    paddingBottom: 30,
  },

header: {
  height: 40,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 25,
},

headerTitle: {
  fontSize: 15,
  fontFamily: 'InterMedium',
  marginLeft: 8,
},

  patientCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#DDE5E4',
    height:95
  },

  avatar: {
    width: 57,
    height: 57,
    borderRadius: 22,
    backgroundColor: '#E8E7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:15
  },

  patientInfo: {
    flex: 1,
    marginLeft: 8,
  },

  name: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
  },

  test: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
  },

  sample: {
    fontSize: 10,
    marginTop: 3,
    fontFamily:'InterRegular',
  },

  sampleId: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
  },

  confirmed: {
    backgroundColor: '#D5FFD9',
    padding: 5,
    borderRadius: 3,
  },

  confirmedText: {
    color: '#149329',
    fontSize: 10,
    fontFamily: 'InterMedium',
  },

  detailsCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#A8DAD8',
    padding: 10,
    height:400,
    marginBottom:15
  },

  detailRow: {
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:18
  },

  detailLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  label: {
    fontSize: 14,
    fontFamily: 'InterMedium',
  },

  value: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    textAlign: 'right',
  },

  green: {
    backgroundColor: '#CFFFD4',
    color: '#168A32',
    paddingHorizontal: 4,
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    marginTop: 28,
    marginBottom: 20,
  },

dropdown: {
  minHeight: 70,
  backgroundColor: '#FFF',
  borderRadius: 16,
  borderWidth: 1,
  borderColor: '#DDE5E4',
  paddingHorizontal: 12,
  paddingVertical: 12,
},


dropdownContent: {
  flex: 1,
},

dropdownHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

dropdownTitle: {
  fontSize: 13,
  fontFamily: 'InterMedium',
},

collectorRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 20,
},

firstCollectorRow: {
  borderBottomWidth: 1,
  borderBottomColor: '#DDE5E4',
},

collectorName: {
  fontSize: 13,
  fontFamily: 'InterSemiBold',
},

  collectorCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDE5E4',
    padding: 12,
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  collectorId: {
    fontSize: 7,
    marginTop: 3,
  },

collectButton: {
  height: 46,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: '#AAA',
  backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 15,
},

  collectButtonText: {
    fontSize: 13,
    fontFamily: 'InterMedium',
  },
 paymentRow: {
  minHeight: 40,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 18,
},

paidText: {
  position: 'absolute',
  left: '60%',
  transform: [{ translateX: -15 }],
  fontSize: 14,
  fontFamily: 'InterSemiBold',
  color: '#168A32',
  backgroundColor: '#CFFFD4',
  paddingHorizontal: 8,
  paddingVertical: 2,
  borderRadius: 5,
},

priceText: {
  marginLeft: 'auto',
  fontSize: 12,
  fontFamily: 'InterSemiBold',
  color: '#222',
},
});