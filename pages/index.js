import CountrySVG from "../components/countrySVG";
import GuessInput from "../components/input/guessInput";
import Guesses from "../components/guesses/guesses";
import CorrectModal from "../components/modal/correctModal";
import CorrectAnswerBtn from "../components/input/checkAnswerBtn";
import Title from "../components/title";
import {
	NewCountry,
	checkGuess,
	getDistanceAndBearing,
} from "../components/util";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGuess, clearGuesses } from "../store/guessesSlice";
import { showModal, setComplete } from "../store/settingsSlice";
import { setSelection } from "../store/guessSelectionSlice";

export default function Home() {
	const guesses = useSelector((state) => state.guesses.value);
	const answer = useSelector((state) => state.answer.value);

	const guessSelection = useSelector((state) => state.guessSelection.value);
	const isComplete = useSelector((state) => state.settings.value.complete);

	const dispatch = useDispatch();

	useEffect(() => {
		if (
			answer &&
			Object.keys(answer).length === 0 &&
			Object.getPrototypeOf(answer) === Object.prototype
		) {
			NewCountry();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
			//Clear selection on submit
			dispatch(setSelection(null));
		}
	};

	return (
		<div className="h-screen flex flex-col justify-between">
			<div
				className={
					"flex flex-col justify-center items-center align-center w-full px-5 mt-5 sm:px-0 sm:w-3/5 lg:w-3/6 xl:w-1/3 2xl:w-1/3 m-auto "
				}
			>
				<CorrectModal playAgainPress={() => newGame()} />
				<header>
					<Title />
				</header>
				<CountrySVG className={"w-1/2 my-10"} />
				{isComplete ? (
					<button
						className="bg-green-700 rounded-md text-lg py-2 px-2 mt-10 animate-shake border-green-800 border-2 text-white "
						onClick={() => newGame()}
					>
						Play Again
					</button>
				) : null}
				{/* <div className={"flex justify-center flex-col items-center w-full"}> */}
				<GuessInput />
				<div className={"my-10 w-full "}>
					<CorrectAnswerBtn onSubmit={() => onSubmit()} />
				</div>
				<div className={"w-full sm:w-3/4"}>
					<Guesses />
				</div>
				{/* </div> */}
			</div>
			<div
				className={
					" flex w-full -scroll-mt-9 pt-10 md:pr-2 md:mb-2 justify-center lg:justify-end"
				}
			>
				<button
					className="text-swamp-800 rounded-md px-2 pb-0.5 pt-.5 font-bold border-2 border-swamp-800"
					onClick={() => newGame()}
				>
					Reset - New Country
				</button>
			</div>
		</div>
	);
}
export async function getServerSideProps(context) {
	return { props: {} };
}
