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
	},
});

export const { addGuess } = guessesSlice.actions;

export default guessesSlice.reducer;
