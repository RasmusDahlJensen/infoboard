import React, { useEffect } from "react";
import "./BusSchedule.scss";
import bus from "../assets/Bus.svg";
import busLogo from "../assets/BusLogo.svg";
import { useFetch } from "../hook/useFetch";

const url =
	"https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1";

export const BusSchedule = () => {
	const { data, loading, error } = useFetch(url);

	if (error) {
		console.log(error);
	}

	return (
		<>
			{loading && <div>Loading...</div>}
			{data && (
				<article>
					<header>
						<figure>
							<img src={busLogo} alt="Bus Logo" />
						</figure>
						<div className="headerProps">
							<figure>
								<img src={bus} className="headerPropImg" alt="Bus" />
							</figure>
						</div>
					</header>
					<section className="busSectionColor">
						<section className="busTable">
							{data.MultiDepartureBoard.Departure.slice(0, 5).map(
								(data, index) => {
									return (
										<div key={data.key || index} className="busTimes">
											<h3>{data.line}</h3>
											<p>{data.stop}</p>
											<h4>Kl. {data.time}</h4>
										</div>
									);
								}
							)}
						</section>
					</section>
				</article>
			)}
		</>
	);
};
