/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { CountryCoords } from "../data/countryCoords";
import AutoCompleteBox from "./autoCompleteBox";
import { useDispatch } from "react-redux";
import { addSelection } from "../../store/guessSelectionSlice";

function GuessInput(props) {
	const [guess, setGuess] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [suggestions, setSuggestions] = useState([]);
	const [itemSelectedState, setItemSelectedState] = useState(null);
	const dispatch = useDispatch();

	// //Get answer from the store
	// const answerCountry = useSelector((state) => state.answer.value);

	// //Get itemSelected from the store
	// const itemSelected = useSelector((state) => state.guessSelection.value);

	//Search when guess state changes (as user types)
	const onType = (text) => {
		if (text.length > 0) {
			setGuess(text);
			//Set up fuse with countries data
			const fuse = new Fuse(CountryCoords, {
				keys: ["Country", "Alpha2Code"],
			});

			let result = fuse.search(text, { limit: 5 }); //Search for guess in countries data
			setSuggestions(result); //Set recomondations to search
			setShowSuggestions(true);
		} else {
			setShowSuggestions(false);
		}
	};

	// //When item selected set it to current text, redux store and hide selection box
	useEffect(() => {
		dispatch(addSelection(itemSelectedState));
		if (itemSelectedState !== null) {
			setGuess(itemSelectedState.item.Country);
			setShowSuggestions(false);
		}
	}, [itemSelectedState]);

	return (
		<div className="flex flex-col w-full">
			<input
				className={"border-2 rounded-lg p-2"}
				placeholder="Type a country to start"
				onChange={(event) => onType(event.target.value)}
				value={guess}
			/>
			<AutoCompleteBox
				suggestions={suggestions}
				show={showSuggestions}
				onItemPress={(item) => setItemSelectedState(item)}
			/>
		</div>
	);
}

GuessInput.propTypes = {};

export default GuessInput;
