import { configureStore, combineReducers } from "@reduxjs/toolkit";
import guessesReducer from "./guessesSlice.js";
import answerReducer from "./answerSlice.js";
import guessSelectionReducer from "./guessSelectionSlice.js";
import settingsReducer from "./settingsSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
	guesses: guessesReducer,
	answer: answerReducer,
	guessSelection: guessSelectionReducer,
	settings: settingsReducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export let persistor = persistStore(store);
