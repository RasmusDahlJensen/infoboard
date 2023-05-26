import { useFetch } from "../hook/useFetch";
import canteen from "../assets/Canteen.svg";
import canteenLogo from "../assets/CanteenLogo.svg";

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
			{data && console.log(data.Days)}
			{loading && <div>Loading...</div>}
			{data && (
				<article>
					<header>
						<figure>
							<img src={canteenLogo} alt="Bus Logo" />
						</figure>
						<div className="headerProps">
							<figure>
								<img src={canteen} className="headerPropImg" alt="Bus" />
							</figure>
						</div>
					</header>
					<section className="busSectionColor">
						<section className="busTable">
							{data.Days.map((data, index) => {
								return (
									<div key={index}>
										<h3>
											{data.DayName.charAt(0).toUpperCase() +
												data.DayName.slice(1)}
										</h3>
										<p>{data.Dish}</p>
									</div>
								);
							})}
						</section>
					</section>
				</article>
			)}
		</>
	);
};
