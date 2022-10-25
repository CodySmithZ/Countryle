import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useSelector } from "react-redux";

function CountrySVG(props) {
	//Get answer country
	const country = useSelector((state) => state.answer.value);

	return (
		<div
			className={props.className}
			style={{
				filter: "invert(90%)",
			}}
		>
			<Image
				src={`/all/${country.Alpha2Code}/vector.svg`}
				alt={"Hidden country image"}
				className={"grayscale"}
				layout={"responsive"}
				height={100}
				width={100}
				priority
				fill="red"
				stroke="green"
				style={{
					filter: "drop-shadow(16px 16px 20px red), invert(75%)",
				}}
			/>
		</div>
	);
}

CountrySVG.propTypes = {};

export default CountrySVG;
