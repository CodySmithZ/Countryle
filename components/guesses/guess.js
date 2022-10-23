import React from "react";
import PropTypes from "prop-types";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function Guess(props) {
	return (
		<div className="flex flex-row items-stretch justify-between">
			<div className="bg-blue-900 text-white px-2 ">
				{props.guess.item.Country}
			</div>{" "}
			<div className="bg-blue-900 text-white px-2 ">
				{" "}
				{Math.round(props.guess.distance)} KM
			</div>
			<div className="bg-blue-900 text-white px-2 pt-1">
				<BsFillArrowUpCircleFill
					style={{ transform: `rotate(${props.guess.bearing}deg)` }}
				/>
			</div>
		</div>
	);
}

Guess.propTypes = { guess: PropTypes.object.isRequired };

export default Guess;
