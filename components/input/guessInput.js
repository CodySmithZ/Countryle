/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Fuse from "fuse.js";
import { CountriesData } from "../data/countries";
import AutoCompleteBox from "./autoCompleteBox";
import { useDispatch } from "react-redux";
import { addGuess } from "../../store/guessesSlice";

function GuessInput(props) {
	const [guess, setGuess] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [suggestions, setSuggestions] = useState([]);
	const [itemSelected, setItemSelected] = useState(null);
	const dispatch = useDispatch();

	//Search when guess state changes (as user types)
	const onType = (text) => {
		if (text.length > 0) {
			setGuess(text);
			//Set up fuse with countries data
			const fuse = new Fuse(CountriesData, {
				keys: ["name", "code"],
			});

			let result = fuse.search(text, { limit: 5 }); //Search for guess in countries data
			setSuggestions(result); //Set recomondations to search
			setShowSuggestions(true);
		} else {
			setShowSuggestions(false);
		}
	};

	//When item selected set it to current text and hide selection box
	useEffect(() => {
		if (itemSelected !== null) {
			setGuess(itemSelected.item.name);
			dispatch(addGuess(itemSelected.item));
			setShowSuggestions(false);
		}
	}, [itemSelected]);

	return (
		<div className="flex flex-col">
			<input
				onChange={(event) => onType(event.target.value)}
				value={guess}
			/>
			<AutoCompleteBox
				suggestions={suggestions}
				show={showSuggestions}
				onItemPress={(item) => setItemSelected(item)}
			/>
		</div>
	);
}

GuessInput.propTypes = {};

export default GuessInput;
