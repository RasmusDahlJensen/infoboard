import { useState, useEffect } from "react";

export const Time = () => {
	let [date, setDate] = useState(new Date());

	useEffect(() => {
		let timer = setInterval(() => setDate(new Date()), 1000);
		return function cleanup() {
			clearInterval(timer);
		};
	});

	return (
		<>
			{new Date()
				.toLocaleTimeString()
				.match(/\d{2}:\d{2}|[AMP]+/g)
				.join(" ")}
		</>
	);
};
