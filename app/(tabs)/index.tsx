import {ScrollView, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '@/constants/Colors';
import Container from '@/components/common/Container';
import SearchInput from '@/components/inputs/SearchInput';
import TopBar from '@/components/common/TopBar';
import {flatList} from '@/constants/Data';
import {ThemedText} from '@/components/ThemedText';

export default function index() {
  return (
    <ScrollView style={styles.homeContainer}>
      <Container>
        <TopBar />
        <ThemedText type="title" style={styles.headingText}>
          Find the best coffee for you
        </ThemedText>
        <SearchInput />

        <FlatList
          data={flatList}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <ThemedText
                  type="defaultSemiBold"
                  style={{color: Colors.light.lightGrayText}}
                >
                  {item}
                </ThemedText>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{gap: 10}}
          style={{marginVertical: 30}}
        />
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: Colors.light.background,
  },
  headingText: {
    paddingTop: 20,
  },
});
