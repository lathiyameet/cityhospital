
import { applyMiddleware, createStore } from "redux"
import { rootreducer } from "./reducer"
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['mediciness','cart']
}

const persistedReducer = persistReducer(persistConfig, rootreducer)

export const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }

}