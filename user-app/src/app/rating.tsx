import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Rating() {
  // const [comment, setComment] = useState('');
  const [comment, setComment] = useState('Good consultation with the doctor.');

  return (
    <View style={styles.container}>
<View style={styles.doctorImageCard}>
      <Image
        source={require('../assets/images/doctorPriya.png')}
        style={styles.doctorImage}
      />
</View>
      <View style={styles.checkCircle}>
        <Ionicons name="checkmark" size={22} color="#317070" />
      </View>

      <Text style={styles.completedText}>Consultation Completed</Text>

      <Text style={styles.question}>How Was Your Consultation</Text>

<View style={styles.starsRow}>
  <Ionicons name="star" size={30} color="#F5A623" />
  <Ionicons name="star-outline" size={30} color="#CCCCCC" />
  <Ionicons name="star-outline" size={30} color="#CCCCCC" />
  <Ionicons name="star-outline" size={30} color="#CCCCCC" />
  <Ionicons name="star-outline" size={30} color="#CCCCCC" />
</View>
      <Text style={styles.tapToRate}>Tap To Rate</Text>

      <Text style={styles.commentLabel}>Give Comment</Text>
      {/* <TextInput
        style={styles.commentInput}
        placeholder=""
        value={comment}
        onChangeText={setComment}
        multiline
      /> */}
      <TextInput
  style={styles.commentInput}
  value="|"
  multiline
  editable={false}
/>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => router.push('./home')}
      >
        <Text style={styles.submitText}>Submit Rating</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('./home')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF9',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 80,
  },

  doctorImageCard: {
    width: 156,
    height: 162,
    borderRadius: 16,
    backgroundColor: '#E2E3E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 17,
    overflow: 'hidden',
    borderColor: '#B2DDD9',
    borderWidth: 1,
  },

  doctorImage: {
    width: 109,
    height: 134,
    borderRadius: 16,
  },

  checkCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#018410',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  completedText: {
    fontSize: 20,
    fontFamily: 'InterRegular',
    marginBottom: 40,
  },

  question: {
    fontSize: 18,
    fontFamily: 'InterBold',
    color: '#1A1A1A',
    marginBottom: 16,
  },

  starsRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  tapToRate: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    marginBottom: 40,
  },

  commentLabel: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    color: '#1A1A1A',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },

  commentInput: {
    width: '100%',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9EFEC',
    padding: 12,
    fontSize: 13,
    fontFamily: 'InterRegular',
    textAlignVertical: 'top',
    marginBottom: 24,
  },

  submitButton: {
    width: '55%',
    backgroundColor: '#317070',
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 17,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'InterBold',
  },

  skipText: {
    fontSize: 13,
    fontFamily: 'InterSemiBold',
  },
});
