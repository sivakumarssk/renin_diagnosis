import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ReportScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={17}
            />
          </TouchableOpacity>

          <Text style={styles.title}>
            Sample Details
          </Text>

          <View style={{ width: 17 }} />
        </View>

        <View style={styles.report}>
          <Ionicons
            name="document"
            size={90}
            color="#D90000"
          />

          <Text style={styles.pdf}>
            PDF
          </Text>

          <Text style={styles.fileName}>
            CBC_Report_Success
          </Text>

          <Text style={styles.fileName}>
            full.pdf
          </Text>
        </View>

        <TouchableOpacity
          style={styles.upload}
        >
          <Text style={styles.uploadText}>
            Upload Report
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() =>
            router.replace('/(tabs)/home')
          }
        >
          <Text style={styles.homeText}>
            Go to Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2FAF9',
  },

  content: {
    padding: 12,
    flex: 1,
  },

  header: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 15,
    fontFamily: 'InterMedium',
  },

  report: {
    alignItems: 'center',
    marginTop: 45,
  },

  pdf: {
    position: 'absolute',
    top: 65,
    marginLeft:15,
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'InterBold',
  },

  fileName: {
    fontSize: 15,
    fontFamily: 'InterBold',
    marginTop: 3,
  },

  upload: {
    height: 50,
    width:312,
    borderRadius: 15,
    backgroundColor: '#502DC5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom:20,
    marginLeft:15
  },

  uploadText: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'InterBold',
  },

  homeButton: {
    height: 50,
    width:312,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#39AEE8',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft:15
  },

  homeText: {
    color: '#004A92',
    fontSize: 15,
    fontFamily: 'InterBold',
  },
});