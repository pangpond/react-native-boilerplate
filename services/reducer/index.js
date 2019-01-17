import { combineReducers } from 'redux'
import { reducer as network } from 'react-native-offline'
import storage from '../storage/reducer'

const rootReducer = combineReducers({
  storage,
  network,
})

export default rootReducer
