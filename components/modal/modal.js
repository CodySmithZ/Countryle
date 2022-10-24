import React from "react";
import PropTypes from "prop-types";

function Modal(props) {
	return (
		<>
			{props.show ? (
				<div
					className={
						"absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fadeInDown"
					}
				>
					{props.children}
				</div>
			) : (
				<div></div>
			)}
		</>
	);
}

Modal.propTypes = {};

export default Modal;
