import { BusSchedule } from "../components/BusSchedule";
import { Canteen } from "../components/Canteen";
import { Hero } from "../components/hero";
import "./Main.scss";

export const Main = () => {
	return (
		<main>
			<section>
				<Hero />
				<BusSchedule />
				<Canteen />
			</section>
		</main>
	);
};
