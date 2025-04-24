import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ContainerProps} from '@/interfaces/common';

export default function Container({children}: ContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
});
