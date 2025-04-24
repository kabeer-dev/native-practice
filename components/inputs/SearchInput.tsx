import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SearchInput() {
  return (
    <View style={styles.searchInputContainer}>
      <AntDesign name="search1" size={24} color={Colors.light.lightGrayText} />
      <TextInput
        placeholder="Type something"
        style={styles.input}
        placeholderTextColor={Colors.light.lightGrayText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.inputColor,
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 18,
    paddingVertical: 12,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: Colors.light.inputColor,
    borderRadius: 15,
    color: Colors.light.lightGrayText,
    paddingHorizontal: 20,
  },
});
