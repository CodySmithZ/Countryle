import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: { showModal: true, complete: true },
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		showModal: (state, action) => {
			state.value = { ...state.value, showModal: action.payload };
		},
		setComplete: (state, action) => {
			state.value = { ...state.value, complete: action.payload };
		},
	},
});

export const { showModal, setComplete } = settingsSlice.actions;

export default settingsSlice.reducer;
