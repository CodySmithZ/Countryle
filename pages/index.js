import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CountrySVG from "../components/countrySVG";
import GuessInput from "../components/input/guessInput";
import Guesses from "../components/guesses/guesses";
import { NewCountry, checkGuess } from "../components/util";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
	const guesses = useSelector((state) => state.guesses.value);
	const answer = useSelector((state) => state.answer.value);

	useEffect(() => {
		NewCountry();
	}, []);

	useEffect(() => {
		if (guesses.length > 0) {
			console.log(answer);

			// checkGuess(guesses[guesses.length - 1], answer);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [guesses]);
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
export async function getServerSideProps(context) {
	return { props: {} };
}
