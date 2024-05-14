import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    favorites: [],
    count: 0,
};

const watchListSlice = createSlice({
    name: "watchList",
    initialState: INITIAL_STATE,
    reducers: {
        addToWatchList: (state, action) => {
            const existMovie = state.favorites.find(movie => movie.id === action.payload.id);
            if (!existMovie) {
                state.favorites.push(action.payload);
                state.count++;
            }
        },
        removeFromWatchList: (state, action) => {
            state.favorites = state.favorites.filter(movie => movie.id !== action.payload.id);
            state.count--; 
        },
    },
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
