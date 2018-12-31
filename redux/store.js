import {
  createStore,
  applyMiddleware,
} from 'redux'
import {
  persistStore,
  persistReducer,
  createTransform,
} from 'redux-persist'
import {
  composeWithDevTools,
} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import CryptoJS from 'crypto-js'
import RootReducers from './reducers'

const encrypt = createTransform(
  (inboundState) => {
    if (!inboundState) return inboundState
    const cryptedText = CryptoJS.AES.encrypt(JSON.stringify(inboundState), 'ACB12345!@#$')
    return cryptedText.toString()
  },
  (outboundState) => {
    if (!outboundState) return outboundState
    const bytes = CryptoJS.AES.decrypt(outboundState, 'ACB12345!@#$')
    const decrypted = bytes.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decrypted)
  },
)

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['passwordReducer'],
  transforms: [
    // createBlacklistFilter('session', ['root']),
    encrypt,
  ],
}


export const store = createStore(
  persistReducer(persistConfig, RootReducers),
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
)
export const persistor = persistStore(store)
