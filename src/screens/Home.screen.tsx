import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodPicker } from '../../components/MoodPicker';
import { useAppContext } from '../App.provider';

export const Home: FC = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.screen}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});
