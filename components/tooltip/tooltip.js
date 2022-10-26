import React from "react";
import PropTypes from "prop-types";

function ToolTip(props) {
	return (
		<div className="flex flex-col justify-center items-center absolute">
			<div className="bg-red-500 text-gray-200 px-2 pb-.5 pt-.5 rounded-md border-[1px] border-red-800 text-sm">
				Type country first
			</div>
			<div className="w-0 bg-transparent h-0 border-t-4 border-x-4 border-t-red-800 border-x-transparent "></div>
		</div>
	);
}

ToolTip.propTypes = {};

export default ToolTip;
