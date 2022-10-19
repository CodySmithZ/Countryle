import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CountrySVG from "../components/countrySVG";
import GuessInput from "../components/input/guessInput";

export default function Home() {
	return (
		<div className={"flex flex-col justify-center"}>
			<header className={"text-center text-5xl font-thin"}>
				Countryle
			</header>
			<div className={"flex justify-center"}>
				<CountrySVG />
				<GuessInput />
			</div>
		</div>
	);
}
