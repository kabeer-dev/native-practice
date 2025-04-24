import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '@/constants/Colors';
import Container from '@/components/common/Container';

export default function Notification() {
  return (
    <ScrollView style={styles.notificationContainer}>
      <Container>
        <Text style={styles.notificationHeading}>Notification Page</Text>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: Colors.light.background,
  },
  notificationHeading: {
    color: Colors.light.text,
    fontSize: 28,
    fontFamily: 'poppins-semiBold',
    paddingTop: 50,
  },
});
