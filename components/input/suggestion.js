import React from "react";
import PropTypes from "prop-types";

function Suggestion(props) {
	return (
		<div
			className={`hover:bg-swamp-700 hover:cursor-pointer border-t-[1px] py-2 px-2 bg-swamp-800 text-gray-300 border-x-2 border-swamp-700 border-rounded-lg ${
				props.roundedBottom ? "rounded-b-lg border-b-2" : " "
			} ${props.focus ? "bg-swamp-700" : " "}`}
			onClick={() => props.onItemPress(props.item)}
			// ref={suggestionsRefs.current[index]}
		>
			{props.item.item.Alpha2Code} - {props.item.item.Country}
		</div>
	);
}

Suggestion.propTypes = {};

export default Suggestion;
