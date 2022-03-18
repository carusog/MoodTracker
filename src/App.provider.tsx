import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { MoodOptionType, MoodOptionWithTimestamp } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppData = {
  moodList: MoodOptionWithTimestamp[];
};

const dataKey = 'my-app-data';

const setAppData = async (appData: AppData): Promise<void> => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
  } catch (error: any) {
    throw new Error(`Something went wrong setting appData: ${error.message}`);
  }
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const result = await AsyncStorage.getItem(dataKey);
    if (result) {
      return JSON.parse(result);
    }
  } catch (error: any) {
    throw new Error(`Something went wrong getting appData: ${error.message}`);
  }
  return null;
};

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
        const newMoodList = [
          ...current,
          { mood: selectedMood, timestamp: Date.now() },
        ];
        setAppData({ moodList: newMoodList });
        return newMoodList;
      });
    },
    [],
  );

  useEffect(() => {
    getAppData().then(data => {
      if (data?.moodList) {
        setMoodList(data.moodList);
      }
    });
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
