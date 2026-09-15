import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function VideoCall() {
 
  return (
    <View style={styles.container}>

      {/* TOP BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.endCallButton}
          onPress={() => router.replace('./rating')}
        >
          <Text style={styles.endCallText}>End Call</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.doctorName}>Dr.Priya Sharma</Text>
      <Text style={styles.doctorSpecialty}>General Physcian</Text>

      {/* MAIN VIDEO AREA */}
      <View style={styles.videoArea}>
        <Image
          source={require('../assets/images/priyasharma.png')}
          style={styles.doctorVideo}
          resizeMode="cover"
        />

        <View style={styles.selfVideo}>
          <Image
            source={require('../assets/images/patient.png')}
            style={styles.selfVideoImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.videoControlsRow}>
          <TouchableOpacity style={styles.smallControl}>
            <Ionicons name="mic-off-outline" size={16} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallControl}>
            <Ionicons name="volume-high-outline" size={16} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.timerText}>08:45</Text>
        </View>
      </View>

      {/* CONSULTATION DETAILS DROPDOWN */}
      <TouchableOpacity style={styles.detailsBar}>
        <Text style={styles.detailsBarText}>Consultation Detailes</Text>
        <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
      </TouchableOpacity>

      {/* BOTTOM CONTROLS */}
      <View style={styles.bottomControls}>
        <ControlButton icon="videocam-outline" label="Camera" />
        <ControlButton icon="mic-outline" label="Mic" />
        <ControlButton icon="chatbubble-outline" label="Chat" />
        <ControlButton icon="repeat-outline" label="Flip" />
        <ControlButton icon="ellipsis-horizontal" label="More" />
      </View>
    </View>
  );
}

function ControlButton({ icon, label }: { icon: any; label: string }) {
  return (
    <TouchableOpacity style={styles.controlItem}>
      <View style={styles.controlCircle}>
        <Ionicons name={icon} size={18} color="#FFFFFF" />
      </View>
      <Text style={styles.controlLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14201F',
    paddingHorizontal: 16,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: 55,
  },

  endCallButton: {
    backgroundColor: '#E14D5A',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  endCallText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'InterBold',
  },

  doctorName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'InterBold',
  },

  doctorSpecialty: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'InterRegular',
    marginBottom: 16,
  },

  videoArea: {
    height: 330,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#222',
    position: 'relative',
    marginBottom: 35,
  },

  doctorVideo: {
    width: '100%',
    height: '100%',
  },

  selfVideo: {
    position: 'absolute',
    top: 200,
    right: 3,
    width: 110,
    height: 130,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  selfVideoImage: {
    width: '100%',
    height: '100%',
  },

  videoControlsRow: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  smallControl: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },

  timerText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'InterSemiBold',
    marginLeft: 4,
  },

  detailsBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888888',
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 14,
    marginBottom: 70,
  },

  detailsBarText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'InterSemiBold',
    marginRight: 170,
  },

  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },

  controlItem: {
    alignItems: 'center',
  },

  controlCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2C3B3A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  controlLabel: {
    color: '#CCCCCC',
    fontSize: 8,
    fontFamily: 'InterRegular',
  },
});