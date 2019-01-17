import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducer'

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
}

const logger = createLogger() // disable when production

const enhancer = compose(
  applyMiddleware(
    thunk,
    logger // disable when production
  ),
  devTools() // disable when production
)

const reducer = persistReducer(persistConfig, rootReducer)
const store = createStore(reducer, enhancer)
const persistor = persistStore(store, null, () => {
  store.getState()
})

export { store, persistor }
