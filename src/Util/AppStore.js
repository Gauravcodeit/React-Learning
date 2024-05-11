import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig ={
    key:"root",
    version: 1,
    storage
}
const reducer = combineReducers({
    cart : cartReducer,
})
const persitedReducer = persistReducer(persistConfig, reducer)
const appStore = configureStore({
    reducer:persitedReducer
});

export default appStore;