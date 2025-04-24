import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '@/constants/Colors';
import Container from '@/components/common/Container';

export default function Cart() {
  return (
    <ScrollView style={{backgroundColor: Colors.light.background}}>
      <Container>
        <Text style={styles.cartHeading}>Cart Page</Text>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cartHeading: {
    color: Colors.light.text,
    fontSize: 28,
    fontFamily: 'poppins-semiBold',
    paddingTop: 50,
  },
});
