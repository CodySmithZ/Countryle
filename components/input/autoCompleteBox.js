import React, { useEffect, useState, useRef, createRef } from "react";
import PropTypes from "prop-types";
import Suggestion from "./suggestion";

function AutoCompleteBox(props) {
	const [show, setShow] = useState(false);
	const [suggestionsLength, setSuggestionsLength] = useState(0);
	const [focusIndex, setFocusIndex] = useState(0);
	const [index, setIndex] = useState(0);

	//Check if any suggestions are passed
	useEffect(() => {
		if (props.suggestions.length > 0 && props.show) {
			setShow(true);
		} else {
			setShow(false);
			setFocusIndex(0);
			// window.removeEventListener("keydown", preventDefault, false);
		}
	}, [props.suggestions, props.show]);

	useEffect(() => {
		setSuggestionsLength(props.suggestions.length);
		setIndex(0);
		setFocusIndex(0);
	}, [props.suggestions]);
	useEffect(() => {}, [suggestionsLength]);

	useEffect(() => {
		const preventDefault = (e) => {
			let add = 0;
			if (e.code === "ArrowDown") {
				e.preventDefault();
				add = 1;
			} else if (e.code === "ArrowUp") {
				e.preventDefault();
				add = -1;
			} else if (e.code === "Enter") {
				if (index > 0 && index < props.suggestions.length) {
					e.preventDefault();
					props.onItemPress(props.suggestions[index - 1]);
				}
			}

			setIndex((index += add));
		};

		window.addEventListener("keydown", preventDefault, false);
		return () => {
			window.removeEventListener("keydown", preventDefault, false);
		};
	}, [index]);
	// useEffect(() => {
	// 	console.log("F", focusIndex, props.suggestions.length);
	// }, [focusIndex]);

	useEffect(() => {
		setFocusIndex(index);
	}, [index]);

	useEffect(() => {
		if (index > suggestionsLength) {
			setIndex(1);
		} else if (index < 0) {
			setIndex(suggestionsLength);
		}
	}, [suggestionsLength, index]);

	return (
		<div className="w-full relative ">
			<div className={`${show ? "absolute w-full z-10 " : "hidden"}`}>
				{props.suggestions.map((item, index) => {
					return (
						<Suggestion
							key={index}
							onItemPress={(item) => props.onItemPress(item)}
							item={item}
							roundedBottom={
								props.suggestions.length - 1 === index
							}
							focus={focusIndex - 1 === index}
						></Suggestion>
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
