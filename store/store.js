import { configureStore } from "@reduxjs/toolkit";
import guessesReducer from "./guessesSlice.js";

export const store = configureStore({
	reducer: {
		guesses: guessesReducer,
	},
});
