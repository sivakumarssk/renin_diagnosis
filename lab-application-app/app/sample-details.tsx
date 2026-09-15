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
import { useLab } from '../src/context/LabContext';

export default function SampleDetailsScreen() {
  const {
    sampleStatus,
    markProcessing,
    markCompleted,
  } = useLab();

  const isProcessing =
    sampleStatus === 'processing';

  const isCompleted =
    sampleStatus === 'completed';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
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

        {/* Patient */}
        <View style={styles.patientCard}>
          <View style={styles.avatar}>
            <Ionicons
              name="person"
              size={25}
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
          </View>

          <View>
            <Text style={styles.sampleLabel}>
              Sample id
            </Text>

            <Text style={styles.sampleId}>
              SMP10234
            </Text>
          </View>
        </View>

        {/* Sample information */}
        <View style={styles.infoCard}>
          <Info
            label="Sample Type"
            value="Blood"
          />

          <Info
            label="Collection Type"
            value="Home Collection"
          />

          <Info
            label="Collected on"
            value="10 Aug 2026, 10:15 AM"
          />

          <Info
            label="Collected By"
            value="Ramesh Rider"
          />

          <Info
            label="Received On"
            value="10 Aug 2026, 10:15 AM"
          />

          <Info
            label="Received By"
            value="Lab Tech 1"
            last
          />
        </View>

        {/* Tracking */}
        <View style={styles.trackingCard}>
          <Text style={styles.trackingTitle}>
            Sample Tracking
          </Text>

          <Step
            title="Sample Collected"
            active
          />

          <Step
            title="Received at Lab"
            active
          />

          <Step
            title="Processing"
            active={isProcessing || isCompleted}
          />

          <Step
            title="Completed"
            active={isCompleted}
            last
          />

          {isProcessing && !isCompleted && (
            <Text style={styles.processingText}>
              Test in processing. Results will be
              ready soon.
            </Text>
          )}
        </View>

        {!isProcessing && !isCompleted && (
          <TouchableOpacity
            style={styles.outlineButton}
            onPress={markProcessing}
          >
            <Text style={styles.outlineText}>
              Mark as Processing
            </Text>
          </TouchableOpacity>
        )}

        {isProcessing && !isCompleted && (
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={markCompleted}
          >
            <Text style={styles.primaryText}>
              Upload Results
            </Text>
          </TouchableOpacity>
        )}

        {isCompleted && (
          <>
            <View style={styles.resultsCard}>
              <Text style={styles.resultsTitle}>
                Test Results
              </Text>

              <TouchableOpacity
                style={styles.resultRow}
                onPress={() =>
                  router.push('/report')
                }
              >
                <View style={styles.pdfIcon}>
                  <Ionicons
                    name="document-text-outline"
                    size={28}
                    color="#E53935"
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.resultTitle}>
                    Result Completed
                  </Text>

                  <Text style={styles.resultSub}>
                    All Parameters Within normal range
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={16}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.viewButton}
              // onPress={() =>
              //   router.push('/report')
              // }
            >
              <Text style={styles.viewResults}>
                View Results
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={styles.downloadButton}
              onPress={() =>
                router.push('/report')
              }
            >
              <Text style={styles.primaryText}>
                View Download/Report
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
function Info({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <View
      style={[
        styles.infoRow,
        last && styles.lastInfoRow,
      ]}
    >
      <Text style={styles.infoLabel}>
        {label}
      </Text>

      <Text style={styles.infoValue}>
        {value}
      </Text>
    </View>
  );
}
function Step({
  title,
  active,
  last,
}: {
  title: string;
  active: boolean;
  last?: boolean;
}) {
  return (
    <View style={styles.stepRow}>
      <View style={styles.stepLeft}>
        <View
          style={[
            styles.stepCircle,
            active
              ? styles.activeCircle
              : styles.inactiveCircle,
          ]}
        >
          <Ionicons
            name={
              active
                ? 'checkmark'
                : 'checkmark'
            }
            size={10}
            color="#FFF"
          />
        </View>

        {!last && (
          <View
            style={[
              styles.verticalLine,
              active && styles.activeLine,
            ]}
          />
        )}
      </View>

      <View style={styles.stepInfo}>
        <Text style={styles.stepTitle}>
          {title}
        </Text>

        <Text style={styles.stepDate}>
          17 May 2026, 11:40 AM
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
    paddingBottom: 30,
  },

  header: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:25
  },

  title: {
    fontSize: 15,
    fontFamily: 'InterMedium',
  },

  patientCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDE5E4',
    marginBottom: 30,
    height:89
  },

  avatar: {
    width: 57,
    height: 57,
    borderRadius: 20,
    backgroundColor: '#E8E7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10
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
    fontSize: 13,
    fontFamily: 'InterMedium',
  },

  sampleLabel: {
    fontSize: 11,
    fontFamily:'InterRegular'
  },

  sampleId: {
    fontSize: 11,
    fontFamily: 'InterSemiBold',
  },

  infoCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DDE5E4',
    marginBottom: 30,
    height:470
  },

  infoRow: {
    height: 75,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
lastInfoRow: {
  borderBottomWidth: 0,
},
  infoLabel: {
    marginTop:20,
    fontSize: 14,
    fontFamily: 'InterSemiBold',
  },

  infoValue: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
  },

  trackingCard: {
    backgroundColor: '#F0FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    padding: 10,
    height:321,
    marginBottom:23
  },

  trackingTitle: {
    fontSize: 15,
    fontFamily: 'InterSemiBold',
    marginBottom: 20,
    marginTop:5
  },

  stepRow: {
    flexDirection: 'row',
    minHeight: 45,
  },

  stepLeft: {
    width: 24,
    alignItems: 'center',
  },

  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeCircle: {
    backgroundColor: '#149B4D',
  },

  inactiveCircle: {
    backgroundColor: '#A8ACAC',
  },

  verticalLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#A8ACAC',
  },

  activeLine: {
    backgroundColor: '#149B4D',
  },

  stepInfo: {
    marginLeft: 4,
  },

  stepTitle: {
    fontSize: 14,
    fontFamily: 'InterMedium',
  },

  stepDate: {
    fontSize: 10,
    // color: '#777',
    marginTop: 1,
    marginBottom:30,
    fontFamily:'InterRegular'
  },

  processingText: {
    fontSize: 10,
    fontFamily: 'InterRegular',
    color: '#285B5B',
    marginTop: 5,
  },

  outlineButton: {
    height: 46,
    width:296,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#FFF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    marginLeft:20

  },

  outlineText: {
    fontSize: 14,
    fontFamily: 'InterMedium',
  },

  primaryButton: {
    height: 46,
    borderRadius: 15,
    backgroundColor: '#2F6B6B',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    width:296,
    marginLeft:20

  },

  primaryText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'InterMedium',
  },

  resultsCard: {
    backgroundColor: '#F2FAF9',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 16,
    padding: 8,
    marginTop: 15,
    height:146
  },

  resultsTitle: {
    fontSize: 14,
    fontFamily: 'InterSemiBold',
    marginBottom: 12,
    marginTop:5
  },

  resultRow: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#83C5C0',
    borderRadius: 16,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    height:71
  },

  pdfIcon: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  resultTitle: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    // marginTop:5
  },

  resultSub: {
    fontSize: 10,
    // color: '#777',
    fontFamily:'InterRegular'
  },
    viewButton: {
    height: 46,
    width:296,
    borderWidth: 1,
    borderColor: '#2DA4C5',
    backgroundColor: '#FFF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    marginLeft:20

  },

  viewResults: {
    color: '#004A92',
    fontSize: 13,
    fontFamily: 'InterMedium',
  },
  downloadButton: {
  height: 50,
  borderRadius: 15,
  backgroundColor: '#502DC5',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 22,
  width: 296,
  marginLeft: 20,
},
});