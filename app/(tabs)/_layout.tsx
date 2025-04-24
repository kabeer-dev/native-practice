import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemedText} from '@/components/ThemedText';
import {Tabs} from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Colors} from '@/constants/Colors';

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          height: 80,
          paddingTop: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? Colors.light.tint : Colors.light.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="shopping-bag"
              size={24}
              color={focused ? Colors.light.tint : Colors.light.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="liked"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Octicons
              name="heart-fill"
              size={24}
              color={focused ? Colors.light.tint : Colors.light.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="notifications"
              size={24}
              color={focused ? Colors.light.tint : Colors.light.icon}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
