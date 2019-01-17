import { AsyncStorage } from 'react-native'

async function clear() {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    console.error('Error clearing peristed application state', e)
  }
}

export default async function clearStorage() {
  await clear()
}
