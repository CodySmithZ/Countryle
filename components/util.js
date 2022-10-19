import CountriesData from "./data/countries";
import { useDispatch } from "react-redux";
import { setAnswer } from "../store/answerSlice";
export const NewCountry = () => {
	const dispatch = useDispatch();

	//Get random country
	let country =
		CountriesData[Math.floor(Math.random() * CountriesData.length)];

	dispatch(setAnswer(country));
};
