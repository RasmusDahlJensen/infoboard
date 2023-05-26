import { useFetch } from "../hook/useFetch";

export const Canteen = () => {
	const weekday = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const d = new Date();
	let day = weekday[d.getDay()];

	let url =
		"https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json";

	const { data, loading, error } = useFetch(url);

	if (error) {
		console.log(error);
	}

	return (
		<>
			{loading && <div>Loading...</div>} {data && console.log()}
		</>
	);
};
