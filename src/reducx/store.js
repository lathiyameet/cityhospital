
import { applyMiddleware, createStore } from "redux"
import { rootreducer } from "./reducer"
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import Rootsaga from "./saga/Rootsaga";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['mediciness','cart','department','auth','datalike']    
}

const persistedReducer = persistReducer(persistConfig, rootreducer)

const sagaMiddleware = createSagaMiddleware();

const allMiddleware = [thunk , sagaMiddleware]

const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...allMiddleware))
  

    sagaMiddleware.run(Rootsaga)

    return store;

}
export let store = configureStore();
export let persistor = persistStore(store)