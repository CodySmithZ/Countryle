import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const guessesSlice = createSlice({
	name: "guesses",
	initialState,
	reducers: {
		addGuess: (state, action) => {
			state.value.push(action.payload);
		},
		clearGuesses: (state) => {
			state.value = [];
		},
	},
});

export const { addGuess, clearGuesses } = guessesSlice.actions;

export default guessesSlice.reducer;
