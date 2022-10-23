import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Guess from "./guess";
function Guesses(props) {
	const guesses = useSelector((state) => state.guesses.value);
	return (
		<div className=" bg-gray-800 px-2 py-2 w-full">
			{guesses.map((guess, index) => (
				<Guess guess={guess} key={index} />
			))}
		</div>
	);
}

Guesses.propTypes = {};

export default Guesses;
