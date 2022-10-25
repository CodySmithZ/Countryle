import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Guess from "./guess";
function Guesses(props) {
	const guesses = useSelector((state) => state.guesses.value);
	return (
		<div>
			{guesses.length > 0 ? (
				<div className=" dark:bg-swamp-800 px-2 py-2 w-full rounded-lg flex-1 flex-col-reverse space-y-2">
					{guesses.map((guess, index) => (
						<Guess guess={guess} key={index} />
					))}
				</div>
			) : null}
		</div>
	);
}

Guesses.propTypes = {};

export default Guesses;
