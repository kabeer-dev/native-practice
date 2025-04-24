import {StyleSheet, Text, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '@/constants/Colors';
import Container from '@/components/common/Container';

export default function Liked() {
  return (
    <ScrollView style={styles.likedContainer}>
      <Container>
        <Text style={styles.likedHeading}>Wish list Page</Text>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  likedContainer: {
    backgroundColor: Colors.light.background,
  },
  likedHeading: {
    color: Colors.light.text,
    fontSize: 28,
    fontFamily: 'poppins-semiBold',
    paddingTop: 50,
  },
});
