import CountrySVG from "../components/countrySVG";
import GuessInput from "../components/input/guessInput";
import Guesses from "../components/guesses/guesses";
import Modal from "../components/modal/modal";``
import {
	NewCountry,
	checkGuess,
	getDistanceAndBearing,
} from "../components/util";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGuess } from "../store/guessesSlice";

export default function Home() {
	const guesses = useSelector((state) => state.guesses.value);
	const answer = useSelector((state) => state.answer.value);

	const guessSelection = useSelector((state) => state.guessSelection.value);

	const dispatch = useDispatch();

	useEffect(() => {
		NewCountry();
	}, []);

	useEffect(() => {
		if (guesses.length > 0) {
			// checkGuess(guesses[guesses.length - 1], answer);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [guesses]);

	//Clear input and add guess to redux store
	const onSubmit = () => {
		if (guessSelection !== null) {
			let result = checkGuess(guessSelection, answer);

			//Answer correct
			if (result) {
				dispatch(
					addGuess({
						...guessSelection,
						distance: 0,
						bearing: 0,
						correct: result,
					})
				);
			} else {
				const { distance, bearing } = getDistanceAndBearing(
					guessSelection,
					answer
				);
				dispatch(
					addGuess({
						...guessSelection,
						distance: distance,
						bearing: bearing,
						correct: result,
					})
				);
			}
		}
	};

	return (
		<div className={"flex flex-col justify-center items-center"}>
			<header className={"text-center text-5xl font-thin"}>
				Countryle
			</header>
			<CountrySVG />

			<div className={"flex justify-center flex-col items-center w-1/2 "}>
				<GuessInput />
				<button className="bg-blue-700" onClick={() => onSubmit()}>
					Check
				</button>
				<Guesses />
			</div>
		</div>
	);
}
export async function getServerSideProps(context) {
	return { props: {} };
}
