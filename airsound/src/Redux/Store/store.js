import { configureStore } from "@reduxjs/toolkit";
import mainProfile from "../Reducers/Utente";

const store= configureStore({
    reducer: mainProfile
})


export default store