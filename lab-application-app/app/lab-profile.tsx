import React from 'react';
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

// Replace this with real lab data from your API / store
const LAB = {
  name: 'ABC Diagnostics',
  email: 'abcdiagnostics@gmail.com',
  phone: '+91 9874451230',
  address: 'Jubilee Hills, Road No. 36, Hyderabad, Telangana - 500033',
  workingHours: '7:00 AM - 8:00 PM\nMon - Sun',
  labType: 'Diagnostic Laboratory',
  licenceNumber: 'DL/TS/2023/12345',
  rating: '4.5/5',
  status: 'Active',
  about:
    'ABC Diagnostics is a trusted diagnostic laboratory ABC Diagnostics is a trusted diagnostic laboratory ABC Diagnostics is a trusted diagnostic laboratory',
};

export default function LabProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Lab Profile</Text>

        <TouchableOpacity
          style={styles.editRow}
        //   onPress={() => router.push('/lab-profile/edit')}
        >
          <Ionicons name="pencil-outline" size={13} color="#1761A0" />
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Top summary card */}
        <View style={styles.summaryCard}>
        <View style={styles.summaryIconBox}>
  <Image
    source={require('../assets/images/lab.png')}
    style={styles.labImage}
  />
</View>

          <View style={styles.summaryInfo}>
            <Text style={styles.summaryName}>Diagnostics App</Text>

            <View style={styles.ratingRow}>
              <Ionicons name="star" size={11} color="#F4A13A" />
              <Text style={styles.ratingText}>{LAB.rating} Rating</Text>
            </View>
          </View>

          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{LAB.status}</Text>
          </View>
        </View>

        {/* Details card */}
        <View style={styles.detailsCard}>
          <DetailRow label="Lab Name" value={LAB.name} />
          <DetailRow label="Email Address" value={LAB.email} />
          <DetailRow label="Phone number" value={LAB.phone} />
          <DetailRow label="Address" value={LAB.address} />
          <DetailRow label="Working Hours" value={LAB.workingHours} />
          <DetailRow label="Lab Type" value={LAB.labType} />
          <DetailRow label="Licence Number" value={LAB.licenceNumber} isLast />
        </View>

        {/* Services Offered */}
        <Text style={styles.sectionTitle}>Services Offered</Text>

        <View style={styles.servicesRow}>
          <ServiceCard
            icon="water-outline"
            iconColor="#25A45A"
            title="Full Body Package"
            titleColor="#0E9542"
            sub="Includes 3 Tests"
          />

          <ServiceCard
            icon="flask-outline"
            iconColor="#3D70FF"
            title="Urine Tests"
             titleColor="#004A92"
            sub="Includes 45 Test"
          />
        </View>

        {/* About Lab */}
     <View style={styles.aboutCard}>

  {/* Image - LEFT */}
  <View style={styles.imageCard}>
    <Image
      source={require('../assets/images/lab.png')}
      style={styles.aboutImage}
    />
  </View>

  {/* Text - RIGHT */}
  <View style={styles.aboutInfo}>
    <Text style={styles.aboutTitle}>About Lab</Text>

    <Text style={styles.aboutText}>
      ABC Diagnostics is a trusted diagnostic laboratory.
    </Text>

   <Text style={styles.aboutText}>
      ABC Diagnostics is a trusted diagnostic laboratory.
    </Text>

     <Text style={styles.aboutText}>
      ABC Diagnostics is a trusted diagnostic laboratory.
    </Text>
  </View>

</View>
      </ScrollView>
    </SafeAreaView>
  );
}

function DetailRow({
  label,
  value,
  isLast,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) {
  return (
    <View style={[styles.detailRow, !isLast && styles.detailRowBorder]}>
      <Text style={styles.detailLabel}>{label}</Text>

      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

function ServiceCard({
  icon,
  iconColor,
  title,
  titleColor,
  sub,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  title: string;
  titleColor:string;
  sub: string;
}) {
  return (
    <View style={styles.serviceCard}>
      <View style={styles.serviceIconBox}>
        <Ionicons
          name={icon}
          size={36}
          color={iconColor}
        />
      </View>

      <View style={{ flex: 1 }}>
          <Text style={[styles.serviceTitle, { color: titleColor }]}>
          {title}
        </Text>
        <Text style={styles.serviceSub}>{sub}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FAF9',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom:20
  },

  headerTitle: {
    fontSize: 16,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  editText: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    color: '#1761A0',
  },

  content: {
    padding: 14,
    paddingBottom: 40,
  },

  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00000040',
    padding: 12,
    marginBottom: 30,
    height:90
  },

  summaryIconBox: {
    width: 60,
    height: 60,
    borderRadius: 24,
    backgroundColor: '#EAF3FB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:15
  },
labImage: {
  width: 41,
  height: 41,
  resizeMode: 'contain',
},
  summaryInfo: {
    flex: 1,
    marginLeft: 10,
  },

  summaryName: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },

  ratingText: {
    fontSize: 11,
    fontFamily: 'InterSemiBold',
  },

  statusBadge: {
    backgroundColor: '#D5FFD9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },

  statusText: {
    fontSize: 13,
    fontFamily: 'InterMedium',
    color: '#149329',
  },

  detailsCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00000040',
    paddingHorizontal: 12,
    marginBottom: 30,
    paddingVertical:5,
    height:541
  },

  detailRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#B0B0B0',
  },

 detailRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 25,
},

detailLabel: {
  width: 100,
  fontSize: 13,
  fontFamily: 'InterSemiBold',
},

detailValue: {
  flex: 1,
  fontSize: 11,
  fontFamily: 'InterMedium',
  color: '#222',
  textAlign: 'right',
},
  sectionTitle: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    color: '#333',
    marginBottom: 10,
  },

  servicesRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },

  serviceCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF7FD',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DADADA',
    padding: 8,
    height:78
  },

  serviceIconBox: {
    width: 52,
    height: 52,
    borderRadius: 28.5,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },

  serviceTitle: {
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    color: '#222',
  },

  serviceSub: {
    fontSize: 8,
    fontFamily: 'InterRegular',
    marginTop: 2,
  },
aboutCard: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 14,
},

imageCard: {
  width: 60,
  height: 60,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#D9E5E3',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 14,
},

aboutImage: {
  width: 50,
  height: 50,
  resizeMode: 'contain',
},

aboutInfo: {
  flex: 1,
},

aboutTitle: {
  fontSize: 15,
  fontFamily: 'InterSemiBold',
  color: '#222',
  marginBottom: 6,
},

aboutText: {
  fontSize: 9,
  fontFamily: 'InterRegular',
  lineHeight: 14
},
});