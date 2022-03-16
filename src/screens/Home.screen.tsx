import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodPicker } from '../../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';

export const Home: FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);
  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => {
      return [...current, { mood: selectedMood, timestamp: Date.now() }];
    });
  }, []);

  return (
    <View style={styles.screen}>
      <MoodPicker handleSelectMood={handleSelectMood} />
      <View>
        {moodList.map(item => (
          <Text key={item.timestamp}>
            {item.mood.emoji} - {new Date(item.timestamp).toLocaleString()}
          </Text>
        ))}
      </View>
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
