import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import mainProfile from "../Reducers/Utente";
import Album from "../Reducers/Album";


const rootReducer=combineReducers({
    user:mainProfile,
    Album:Album
});

const store= configureStore({
    reducer:rootReducer
});


export default store