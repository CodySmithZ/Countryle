import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Title(props) {
	const [animationStage, setAnimationStage] = useState(0);
	const isComplete = useSelector((state) => state.settings.value.complete);
	let interval = useRef();
	useEffect(() => {
		if (isComplete) {
			interval.current = setInterval(() => {
				setAnimationStage(animationStage + 1);
			}, 100);
			return () => {
				clearInterval(interval.current);
			};
		} else {
			setAnimationStage(0);
		}
	}, [isComplete, animationStage]);

	useEffect(() => {
		if (animationStage > 9) {
			clearInterval(interval.current);
		}
	}, [animationStage]);

	return (
		<h1
			className={
				"text-center text-6xl font-semibold flex flex-row uppercase"
			}
		>
			<div
				className={`text-red-700 ${
					animationStage >= 1 && "animate-upDown"
				}`}
			>
				c
			</div>
			<div
				className={`text-orange-700 ${
					animationStage >= 2 && "animate-upDown"
				}`}
			>
				o
			</div>
			<div
				className={`text-yellow-700  ${
					animationStage >= 3 && "animate-upDown"
				}`}
			>
				u
			</div>
			<div
				className={`text-lime-700 ${
					animationStage >= 4 && "animate-upDown"
				}`}
			>
				n
			</div>
			<div
				className={`text-green-700 ${
					animationStage >= 5 && "animate-upDown"
				}`}
			>
				t
			</div>
			<div
				className={`text-cyan-700 ${
					animationStage >= 6 && "animate-upDown"
				}`}
			>
				r
			</div>
			<div
				className={`text-blue-700 ${
					animationStage >= 7 && "animate-upDown"
				}`}
			>
				y
			</div>
			<div
				className={`text-indigo-700 ${
					animationStage >= 8 && "animate-upDown"
				}`}
			>
				l
			</div>
			<div
				className={`text-violet-700 ${
					animationStage >= 9 && "animate-upDown"
				}`}
			>
				e
			</div>
		</h1>
	);
}

Title.propTypes = {};

export default Title;
