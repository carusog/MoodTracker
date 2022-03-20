import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { MoodOptionType } from '../src/types';
import { theme } from '../src/theme';
const imagePath = require('../assets/butterflies.png');

type MoodPickerProps = {
  handleSelectMood: (moodOption: MoodOptionType) => void;
};

export const MoodPicker: React.FC<MoodPickerProps> = ({ handleSelectMood }) => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
  const [hasSelected, setHasSelected] = useState(false);
  const handleSelect = useCallback(() => {
    if (selectedMood) {
      handleSelectMood(selectedMood);
      setSelectedMood(undefined);
      setHasSelected(true);
    }
  }, [handleSelectMood, selectedMood]);

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image source={imagePath} />
        <Pressable style={styles.button} onPress={() => setHasSelected(false)}>
          <Text style={styles.buttonText}>Choose another!</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you right now?</Text>
      <View style={styles.moods}>
        {moodOptions.map(mood => (
          <View key={mood.emoji}>
            <Pressable
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
      <Pressable style={styles.button} onPress={handleSelect}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colorPurple,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    padding: 8,
    marginBottom: 8,
    shadowColor: theme.colorPurple,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
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
