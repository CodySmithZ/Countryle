import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: null,
};

export const guessSelection = createSlice({
	name: "guessSelection",
	initialState,
	reducers: {
		setSelection: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setSelection } = guessSelection.actions;

export default guessSelection.reducer;
