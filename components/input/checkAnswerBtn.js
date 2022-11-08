import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { CgSpinner } from "react-icons/cg";
import { useSelector } from "react-redux";
import Tooltip from "../tooltip/tooltip";
function CheckAnswerBtn(props) {
	const [loading, setLoading] = useState(false);

	const guessSelection = useSelector((state) => state.guessSelection.value);

	//Wait for 1 second before submitting
	const onPress = useCallback(() => {
		if (guessSelection != null) {
			setLoading(true);
			const timer = setTimeout(() => {
				setLoading(false);
				props.onSubmit();
			}, 1000);
		}
	}, [props, guessSelection]);

	useEffect(() => {
		const preventDefault = (e) => {
			if (e.code === "Enter") {
				e.preventDefault();
				onPress();
			}
		};

		window.addEventListener("keydown", preventDefault, false);
		return () => {
			window.removeEventListener("keydown", preventDefault, false);
		};
	}, [onPress]);
	return (
		<div>
			{/* <Tooltip /> */}
			<button
				className="bg-swamp-600 border-2 border-swamp-800 hover:bg-swamp-700 hover:text-gray-200 text-white  text-2xl px-2 pb-2 pt-1 w-full rounded-md justify-center  flex"
				onClick={onPress}
				disabled={loading}
			>
				{loading ? (
					<div className="flex items-center space-x-2">
						<CgSpinner className="animate-spin mt-1" />
						<div className="">Checking...</div>
					</div>
				) : (
					<div>
						<div className="">Check Answer</div>
					</div>
				)}
			</button>
		</div>
	);
}

CheckAnswerBtn.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
CheckAnswerBtn.defaultProps = {
	onSubmit: () => {},
};

export default CheckAnswerBtn;
