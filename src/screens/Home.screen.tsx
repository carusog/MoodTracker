import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodPicker } from '../../components/MoodPicker';

export const Home: FC = () => {
  return (
    <View style={styles.screen}>
      <MoodPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});
