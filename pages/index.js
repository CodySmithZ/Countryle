import CountrySVG from "../components/countrySVG";
import GuessInput from "../components/input/guessInput";
import Guesses from "../components/guesses/guesses";
import CorrectModal from "../components/modal/correctModal";
import {
	NewCountry,
	checkGuess,
	getDistanceAndBearing,
} from "../components/util";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGuess, clearGuesses } from "../store/guessesSlice";
import { showModal, setComplete } from "../store/settingsSlice";

export default function Home() {
	const guesses = useSelector((state) => state.guesses.value);
	const answer = useSelector((state) => state.answer.value);

	const guessSelection = useSelector((state) => state.guessSelection.value);
	const isComplete = useSelector((state) => state.settings.value.complete);

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

	//Start new game, cleans up guesses and answer
	const newGame = () => {
		dispatch(setComplete(false));
		dispatch(showModal(false));
		dispatch(clearGuesses());
		NewCountry();
	};

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
				dispatch(setComplete(true));
				dispatch(showModal(true));
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
			<CorrectModal playAgainPress={() => newGame()} />
			<header className={"text-center text-5xl font-thin"}>
				Countryle
			</header>
			<CountrySVG className={"w-1/4"} />

			<div className={"flex justify-center flex-col items-center w-1/2 "}>
				<GuessInput />
				<button className="bg-blue-700" onClick={() => onSubmit()}>
					Check
				</button>
				<Guesses />
				{isComplete ? (
					<button
						className="bg-green-700 rounded-md text-lg py-2 px-2 mt-10 animate-shake border-green-800 border-2"
						onClick={() => newGame()}
					>
						Play Again
					</button>
				) : null}
			</div>
		</div>
	);
}
export async function getServerSideProps(context) {
	return { props: {} };
}
