import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodItemRow } from '../../components/MoodItemRow';
import { useAppContext } from '../App.provider';

export const History: FC = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.screen}>
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
  },
});
