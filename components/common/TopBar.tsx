import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Colors} from '@/constants/Colors';

export default function TopBar() {
  return (
    <View style={styles.topBarContainer}>
      <TouchableOpacity onPress={() => {}} style={styles.touchable}>
        <MaterialIcons
          name="dashboard"
          size={20}
          color={Colors.light.lightGrayText}
        />
      </TouchableOpacity>

      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: Colors.light.lightGrayText,
        }}
      >
        <Image
          source={require('../../assets/images/profile-photo.png')}
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  touchable: {
    backgroundColor: Colors.light.inputColor,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.light.lightGrayText,
  },
});
