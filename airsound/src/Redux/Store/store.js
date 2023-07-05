import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import mainProfile from "../Reducers/Utente";
import Album from "../Reducers/Album";
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    user: mainProfile,
    Album: Album
});


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store= configureStore({
    reducer:persistedReducer
})

export const persistor= persistStore(store)