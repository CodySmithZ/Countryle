import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: null,
};

export const guessSelection = createSlice({
	name: "guessSelection",
	initialState,
	reducers: {
		addSelection: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { addSelection } = guessSelection.actions;

export default guessSelection.reducer;
