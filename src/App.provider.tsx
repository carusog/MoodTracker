import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
} from 'react';
import { MoodOptionType, MoodOptionWithTimestamp } from './types';

type HandleSelectMood = (selectedMood: MoodOptionType) => void;

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: HandleSelectMood;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback<(selectedMood: MoodOptionType) => void>(
    selectedMood => {
      setMoodList(current => {
        return [...current, { mood: selectedMood, timestamp: Date.now() }];
      });
    },
    [],
  );

  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
