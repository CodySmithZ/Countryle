import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Guess from "./guess";
function Guesses(props) {
	const guesses = useSelector((state) => state.guesses.value);
	return (
		<div>
			{guesses.length > 0 ? (
				<div className=" flex flex-col-reverse   dark:bg-swamp-800 px-2 py-2 w-full rounded-lg  ">
					{guesses.map((guess, index) => (
						<Guess
							guess={guess}
							key={index}
							topMargin={guesses.length - 1 !== index}
						/>
					))}
				</div>
			) : null}
		</div>
	);
}

Guesses.propTypes = {};

export default Guesses;
