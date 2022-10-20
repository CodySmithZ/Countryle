import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: {},
};

export const answerSlice = createSlice({
	name: "answer",
	initialState,
	reducers: {
		setAnswer: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setAnswer } = answerSlice.actions;

export default answerSlice.reducer;
