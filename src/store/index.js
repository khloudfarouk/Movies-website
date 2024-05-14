import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./slices/counter";

const store = configureStore({
    reducer:{
        watchList: watchListSlice
    }   
})

export default store;