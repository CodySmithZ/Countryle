import React from "react";
import PropTypes from "prop-types";

function Title(props) {
	return (
		<h1
			className={
				"text-center text-6xl font-semibold flex flex-row uppercase"
			}
		>
			<div className={"text-red-700"}>c</div>
			<div className={"text-orange-700"}>o</div>
			<div className={"text-yellow-700"}>u</div>
			<div className={"text-lime-700"}>n</div>

			<div className={"text-green-700"}>t</div>
			<div className={"text-cyan-700"}>r</div>

			<div className={"text-blue-700"}>y</div>
			<div className={"text-indigo-700"}>l</div>
			<div className={"text-violet-700"}>e</div>
		</h1>
	);
}

Title.propTypes = {};

export default Title;
