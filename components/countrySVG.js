import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useSelector } from "react-redux";

function CountrySVG(props) {
	//Get answer country
	const country = useSelector((state) => state.answer.value);

	return (
		<div className={props.className}>
			{console.log(country)}
			<Image
				src={`/all/${country.Alpha2Code}/vector.svg`}
				alt={"Hidden country image"}
				layout={"responsive"}
				height={100}
				width={100}
				priority
			/>
		</div>
	);
}

CountrySVG.propTypes = {};

export default CountrySVG;
