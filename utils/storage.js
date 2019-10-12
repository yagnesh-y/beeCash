import { AsyncStorage } from 'react-native';

async function set(key, value) {
  if (typeof value === 'undefined' || value === null) {
    return;
  }

  return await AsyncStorage.setItem(key, JSON.stringify(value));
}

async function get(key) {
  const stringifiedData = await AsyncStorage.getItem(key);
  return typeof stringifiedData === 'undefined'
    ? undefined
    : JSON.parse(stringifiedData);
}

/**
 * Add key if not exists.
 */
async function getF(key, value) {
  const stringifiedData = await AsyncStorage.getItem(key);
  if (!stringifiedData) return await set(key, value);
  return typeof stringifiedData === 'undefined'
    ? undefined
    : JSON.parse(stringifiedData);
}

async function remove(key) {
  return await AsyncStorage.removeItem(key);
}

export default {
  set,
  get,
  remove,
  getF
};
