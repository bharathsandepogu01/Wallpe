import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch {
    throw new Error('Failed to store data in async storage');
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    throw new Error('Failed to get data from async storage');
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    throw new Error('Failed to remove data from async storage');
  }
};

export const getMultiple = async (keysArr: string[]) => {
  try {
    let values = await AsyncStorage.multiGet(keysArr);
    return values;
  } catch (e) {
    throw new Error('Failed to get data of multiple from async storage');
  }
};
