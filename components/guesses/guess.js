import React from "react";
import PropTypes from "prop-types";

function Guess(props) {
	return <div>{props.guess.item.name}</div>;
}

Guess.propTypes = { guess: PropTypes.object.isRequired };

export default Guess;
