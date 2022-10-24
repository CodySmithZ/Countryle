import { configureStore } from "@reduxjs/toolkit";
import guessesReducer from "./guessesSlice.js";
import answerReducer from "./answerSlice.js";
import guessSelectionReducer from "./guessSelectionSlice.js";
import settingsReducer from "./settingsSlice.js";

export const store = configureStore({
	reducer: {
		guesses: guessesReducer,
		answer: answerReducer,
		guessSelection: guessSelectionReducer,
		settings: settingsReducer,
	},
});
