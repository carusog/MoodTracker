import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { MoodOptionType } from '../src/types';

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

  return (
    <View style={styles.moods}>
      {moodOptions.map(mood => (
        <View>
          <Pressable
            key={mood.emoji}
            onPress={() => setSelectedMood(mood)}
            style={[
              styles.moodButton,
              mood === selectedMood ? styles.moodButtonSelected : null,
            ]}>
            <Text style={styles.moodEmoji}>{mood.emoji}</Text>
          </Pressable>
          <Text style={styles.moodText}>
            {mood === selectedMood && mood.description}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodEmoji: {
    fontSize: 21,
  },
  moodText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#454C73',
    fontWeight: 'bold',
  },
  moodButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  moodButtonSelected: {
    backgroundColor: '#454C73',
    borderColor: 'white',
    borderWidth: 2,
  },
});

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];
