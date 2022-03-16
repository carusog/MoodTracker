import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '../App.provider';

export const History: FC = () => {
  const appContext = useAppContext();

  return (
    <View>
      <Text>🏛 {appContext.greeting}</Text>
    </View>
  );
};
