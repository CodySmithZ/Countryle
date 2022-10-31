import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useSelector } from "react-redux";
// import Vector from "./all/AU/vector.svg";

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
			{/* <Vector /> */}
			<Image
				src={`https://raw.githubusercontent.com/CodySmithZ/mapsicon/master/all/${country.Alpha2Code.toLowerCase()}/vector.svg`}
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
