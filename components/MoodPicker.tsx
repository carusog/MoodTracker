import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { MoodOptionType } from '../src/types';
import { theme } from '../src/theme';

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you right now?</Text>
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
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colorPurple,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    padding: 8,
  },
  title: {
    marginVertical: 8,
    fontWeight: 'bold',
  },
  moods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  moodEmoji: {
    fontSize: 21,
  },
  moodText: {
    fontSize: 10,
    textAlign: 'center',
    color: theme.colorPurple,
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
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
    borderWidth: 2,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginVertical: 16,
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];
