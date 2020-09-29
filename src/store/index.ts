import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'

import rootReducer from './ducks'
import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loggedUser']
}

const middlewares = []

const sagaMonitor = console.tron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const composer = compose(
  applyMiddleware(...middlewares),
  console.tron.createEnhancer()
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composer)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
