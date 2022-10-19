import { configureStore } from "@reduxjs/toolkit";
import guessesReducer from "./guessesSlice.js";
import answerReducer from "./answerSlice.js";

export const store = configureStore({
	reducer: {
		guesses: guessesReducer,
		answer: answerReducer,
	},
});
