import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./modal";
import CountrySVG from "../countrySVG";
import { useSelector, useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { showModal } from "../../store/settingsSlice";

function CorrectModal(props) {
	const answer = useSelector((state) => state.answer.value);
	const guesses = useSelector((state) => state.guesses.value);
	const showModalState = useSelector(
		(state) => state.settings.value.showModal
	);

	const dispatch = useDispatch();

	return (
		<Modal show={showModalState}>
			<div className="bg-slate-800 rounded-xl border-slate-900 border-2 shadow-lg shadow-slate-900  text-white flex flex-row-reverse">
				<IoCloseOutline
					className="absolute mx-2 my-2 hover:cursor-pointer"
					onClick={() => dispatch(showModal(false))}
				/>

				<div className="flex flex-col justify-center items-center  px-5 py-5 ">
					<h1 className="text-[35px] pb-1">Congratulations!</h1>
					<p className="text-lg pb-5">
						You guessed the country correctly!
					</p>
					<p className="text-lg pb-3">{answer.Country}</p>
					<CountrySVG className={"w-1/2"} />
					<p className="text-lg pt-10">Attemps: {guesses.length}</p>

					<button
						className="bg-green-700 rounded-md text-lg py-2 px-2 mt-10 animate-shake border-green-800 border-2"
						onClick={() => props.playAgainPress()}
					>
						Play Again
					</button>
				</div>
			</div>
		</Modal>
	);
}

CorrectModal.propTypes = {};

export default CorrectModal;
