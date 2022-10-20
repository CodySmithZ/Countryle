import { CountriesData } from "./data/countries";
import { CountryCoords } from "./data/countryCoords";
import { setAnswer } from "../store/answerSlice";
import { store } from "../store/store";

//Setup new answer
export const NewCountry = () => {
	//Get random country
	let country =
		CountriesData[Math.floor(Math.random() * CountriesData.length)];

	let countryInfo = CountryCoords.filter(
		(itemCountry) => itemCountry.Alpha2Code === country.code
	);

	//Save country to store
	store.dispatch(setAnswer(countryInfo[0]));
};

//Check if guess is correct
export const checkGuess = (guess, answer) => {
	// const guesses = store.useSelector((state) => state.guess.value);

	// const currentGuess = guesses[guesses.length - 1];

	if (guess.code === answer.Alpha2Code) {
		return true;
	} else {
		return false;
	}
};

//Check distance from guess to country
export const checkDistance = () => {
	const answer = store.useSelector((state) => state.answer.value);

	const guesses = store.useSelector((state) => state.guess.value);

	//Get last submited guess
	const currentGuess = guesses[guesses.length - 1];

	//Get last submited guess cords
	const currentGuessCords = CountryCoords.filter(
		(country) => country.Alpha2Code === currentGuess.code
	);

	//Calculate distance between both points
	const distance = getDistanceFromLatLonInKm(
		answer.Latitude,
		answer.Longitude,
		currentGuessCords.Latitude,
		currentGuessCords.Longitude
	);

	return distance;
};

// Haversine formula to get distance between two points, (Retieved from stack overlow https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula)
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2 - lat1);
	var dLon = deg2rad(lon2 - lon1);
	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(deg2rad(lat1)) *
			Math.cos(deg2rad(lat2)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c; // Distance in km
	return d;
};
