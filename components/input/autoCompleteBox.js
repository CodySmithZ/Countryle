import React, { useEffect, useState, useRef, createRef } from "react";
import PropTypes from "prop-types";

function AutoCompleteBox(props) {
	const [show, setShow] = useState(false);
	const suggestionsRefs = useRef(props.suggestions.map(() => createRef()));

	//Check if any suggestions are passed
	useEffect(() => {
		if (props.suggestions.length > 0 && props.show) {
			setShow(true);
		} else {
			setShow(false);
		}
	}, [props.suggestions, props.show]);

	return (
		<div className="w-full relative ">
			<div className={`${show ? "absolute w-full z-10 " : "hidden"}`}>
				{props.suggestions.map((item, index) => {
					return (
						<div
							key={index}
							className={`hover:bg-swamp-700 hover:cursor-pointer border-t-[1px] py-2 px-2 bg-swamp-800 text-gray-300 border-x-2 border-swamp-700 border-rounded-lg ${
								props.suggestions.length - 1 === index
									? "rounded-b-lg border-b-2"
									: " "
							} `}
							onClick={() => props.onItemPress(item)}
							ref={suggestionsRefs.current[index]}
						>
							{item.item.Alpha2Code} - {item.item.Country}
						</div>
					);
				})}
			</div>
		</div>
	);
}

AutoCompleteBox.propTypes = {
	suggestions: PropTypes.array.isRequired,
	onItemPress: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
};

AutoCompleteBox.defaultProps = {
	suggestions: [],
	onItemPress: () => {},
	show: false,
};

export default AutoCompleteBox;
