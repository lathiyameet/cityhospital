
import { applyMiddleware, createStore } from "redux"
import { rootreducer } from "./reducer"
import thunk from "redux-thunk";


export const configureStore = () => {
    let store =createStore(rootreducer,applyMiddleware(thunk))

    return store;
}