import { CountryCoords } from "./data/countryCoords";
import { setAnswer } from "../store/answerSlice";
import { store } from "../store/store";

//Setup new answer
export const NewCountry = () => {
	//Get random country
	let country =
		CountryCoords[Math.floor(Math.random() * CountryCoords.length)];

	//Save country to store
	store.dispatch(setAnswer(country));
};

//Check if guess is correct
export const checkGuess = (guessCounty, answerCountry) => {
	//Compare country codes
	if (guessCounty.item.Alpha2Code === answerCountry.Alpha2Code) {
		return true;
	} else {
		return false;
	}
};

//Check distance from guess to country
export const getDistanceAndBearing = (guessCounty, answerCountry) => {
	//Calculate distance between both points
	const distance = getDistanceFromLatLonInKm(
		answerCountry.Latitude,
		answerCountry.Longitude,
		guessCounty.item.Latitude,
		guessCounty.item.Longitude
	);

	console.log(
		"dd",
		answerCountry.Latitude,
		answerCountry.Longitude,
		guessCounty.item.Latitude,
		guessCounty.item.Longitude
	);

	//Calculate bearing between both points
	const bearing = getBearing(
		answerCountry.Latitude,
		answerCountry.Longitude,
		guessCounty.item.Latitude,
		guessCounty.item.Longitude
	);

	return { distance: distance, bearing: bearing };
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

//Degrees to radians
const deg2rad = (deg) => {
	return deg * (Math.PI / 180);
};

//Radians to degrees
const rad2deg = (radians) => {
	return (radians * 180) / Math.PI;
};

//Calculate bearing of two cordinates, (Retrieved from stack overflow https://stackoverflow.com/questions/46590154/calculate-bearing-between-2-points-with-javascript)
const getBearing = (startLatTmp, startLngTmp, destLatTmp, destLngTmp) => {
	let destLat = deg2rad(startLatTmp);
	let destLng = deg2rad(startLngTmp);
	let startLat = deg2rad(destLatTmp);
	let startLng = deg2rad(destLngTmp);

	let y = Math.sin(destLng - startLng) * Math.cos(destLat);
	let x =
		Math.cos(startLat) * Math.sin(destLat) -
		Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
	let brng = Math.atan2(y, x);
	console.log("b", brng, y, x);

	brng = rad2deg(brng);
	console.log("b", brng);
	return (brng + 360) % 360;
};

// const getArrowEmojiFromBearing = (bearing) => {
