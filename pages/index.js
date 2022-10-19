import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CountrySVG from "../components/countrySVG";
import GuessInput from "../components/input/guessInput";
import Guesses from "../components/guesses/guesses";
import { NewCountry } from "../components/util";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {});
	return (
		<div className={"flex flex-col"}>
			<header className={"text-center text-5xl font-thin"}>
				Countryle
			</header>
			<div className={"flex justify-center flex-col items-center"}>
				<CountrySVG />
				<GuessInput />
				<Guesses />
			</div>
		</div>
	);
}
