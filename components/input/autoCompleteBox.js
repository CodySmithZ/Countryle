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
		<div className="">
			<div className={`${show ? "absolute" : "hidden"}`}>
				{props.suggestions.map((item, index) => {
					return (
						<div
							key={index}
							className="hover:bg-gray-400 hover:cursor-pointer border-t-[1px] py-2 px-2"
							onClick={() => props.onItemPress(item)}
							ref={suggestionsRefs.current[index]}
						>
							{item.item.code} - {item.item.name}
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
