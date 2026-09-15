import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const COLORS = {
  background: '#082423',
  card: '#FFFFFF',
  primary: '#2F7C78',
  text: '#FFFFFF',
  muted: '#A7B8B7',
  red: '#E53935',
};

export default function VideoConsultation() {
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="arrow-back"
              size={22}
              color={COLORS.text}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.endCallButton}
            onPress={() => router.push('./create-prescription')}
          >
            <Text style={styles.endCallText}>End Call</Text>
          </TouchableOpacity>
        </View>

        {/* Doctor Information */}
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Dr. Rahul Sharma</Text>
          <Text style={styles.specialization}>Cardiologist</Text>
        </View>

        {/* Main Video Screen */}
        <View style={styles.videoContainer}>

          {cameraOn ? (
            <Image
              source={require('../assets/images/video call.png')}
              style={styles.patientVideo}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.cameraOffContainer}>
              <Ionicons
                name="videocam-off"
                size={45}
                color="#FFFFFF"
              />
              <Text style={styles.cameraOffText}>
                Camera is off
              </Text>
            </View>
          )}

          {/* Patient Name */}
          <View style={styles.patientNameOverlay}>
            {/* <Text style={styles.patientName}>Priya Kumar</Text> */}
          </View>

          {/* Small Doctor Video */}
          <View style={styles.smallVideo}>
            <Image
              source={require('../assets/images/doctor2.png')}
              style={styles.smallDoctorImage}
              resizeMode="cover"
            />

            <View style={styles.smallVideoControls}>
              <Ionicons
                name={micOn ? 'mic' : 'mic-off'}
                size={12}
                color="#FFFFFF"
              />
            </View>
          </View>

          {/* Video Controls Overlay */}
          <View style={styles.videoControlsOverlay}>
            <TouchableOpacity
              style={styles.videoControl}
              onPress={() => setMicOn(!micOn)}
            >
              <Ionicons
                name={micOn ? 'mic' : 'mic-off'}
                size={18}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.videoControl}
              onPress={() => setCameraOn(!cameraOn)}
            >
              <Ionicons
                name={cameraOn ? 'videocam' : 'videocam-off'}
                size={18}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>

        </View>

        {/* Consultation Details Dropdown */}
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsText}>
            Consultation Details
          </Text>

          <Ionicons
            name="chevron-down"
            size={18}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        {/* Bottom Controls */}
        <View style={styles.bottomControls}>

          <TouchableOpacity style={styles.bottomControl}>
            <Ionicons name="videocam" size={18} color="#FFFFFF" />
            <Text style={styles.bottomText}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomControl}>
            <Ionicons name="mic" size={18} color="#FFFFFF" />
            <Text style={styles.bottomText}>Mic</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomControl}>
            <Ionicons name="chatbubble" size={18} color="#FFFFFF" />
            <Text style={styles.bottomText}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomControl}>
            <Ionicons name="flag" size={18} color="#FFFFFF" />
            <Text style={styles.bottomText}>Flag</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomControl}>
            <Ionicons name="ellipsis-horizontal" size={18} color="#FFFFFF" />
            <Text style={styles.bottomText}>More</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 12,
    paddingTop: 8,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  endCallButton: {
    backgroundColor: COLORS.red,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  endCallText: {
    fontFamily: 'InterSemiBold',
    fontSize: 10,
    color: '#FFFFFF',
  },

  doctorInfo: {
    marginBottom: 12,
  },

  doctorName: {
    fontFamily: 'InterSemiBold',
    fontSize: 15,
    color: '#FFFFFF',
  },

  specialization: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    color: '#A7B8B7',
    marginTop: 3,
  },

  videoContainer: {
    width: '100%',
    height: 327,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1B3534',
    position: 'relative',
  },

  patientVideo: {
    width: '100%',
    height: '100%',
  },

  cameraOffContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B3534',
  },

  cameraOffText: {
    fontFamily: 'InterRegular',
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 10,
  },

  patientNameOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 12,
  },

  patientName: {
    fontFamily: 'InterMedium',
    fontSize: 18,
    color: '#FFFFFF',
  },

  smallVideo: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 85,
    height: 110,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#DDE5E5',
  },

  smallDoctorImage: {
    width: '100%',
    height: '100%',
  },

  smallVideoControls: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    padding: 3,
  },

  videoControlsOverlay: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    flexDirection: 'row',
    gap: 8,
  },

  videoControl: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  detailsButton: {
    height: 42,
    backgroundColor: '#888888',
    borderRadius: 16,
    marginTop: 38,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsText: {
    fontFamily: 'InterRegular',
    fontSize: 10,
    color: '#FFFFFF',
  },

  bottomControls: {
    position: 'absolute',
    bottom: 25,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  bottomControl: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomText: {
    fontFamily: 'InterRegular',
    fontSize: 8,
    color: '#FFFFFF',
    marginTop: 5,
  },
});