import { Article } from "./article";
import { useFetch } from "../hook/useFetch";
import TechcollegeLogo from "../assets/TechcollegeLogo.svg";
import { Time } from "./time";

const url =
	"https://api.openweathermap.org/data/2.5/weather?q=Aalborg&appid=4d58d6f0a435bf7c5a52e2030f17682d&units=metric";

export const Hero = () => {
	const { data, loading, error } = useFetch(url);

	if (error) {
		console.log(error);
	}

	return (
		<>
			{loading && <div>Loading...</div>}
			{data && (
				<Article
					logo={TechcollegeLogo}
					titleProp={<Time />}
					titleProp2={[Math.round(data.main.temp), "°"]}
					sectionTitle1={"ST. BEDEDAG PÅ TECHCOLLEGE FRA 2024"}
					sectionAuthor1={"Af Ledelsessekretariatet d. 15-3-2023"}
					sectionContent1={
						"Som I ved vedtog Folketinget 28. februar 2023 L 13 om konsekvenser ved afskaffelsen af store bededag som helligdag. Med lovforslaget bliver store bededag til en almindelig ekstra arbejdsdag fra og med 2024. https://www.regeringen.dk/nyheder/2023/lovforslag-om-afskaffelse-store-bededag-er-vedtaget-i-folketinget/ "
					}
					sectionContent1a={
						"Dette betyder, at her på TECHCOLLEGE bliver St. Bededag fra 2024 en normal undervisningsdag for alle vores elever og en almindelig ekstra arbejdsdag for alle medarbejdere. "
					}
					sectionTitle2={"KOM TIL TEMADAG OM GRØN OMSTILLING D. 30. MARTS "}
					sectionAuthor2={"Af Kim Mikael Jensen d. 13-3-2023"}
					sectionContent2={
						"Er du nysgerrig på grøn omstilling inden for dit fagområde, så kom til temadag på TECHCOLLEGE d. 30. marts."
					}
					sectionContent2a={
						"Du kan blandt andet møde Aalborg Portland, Brøndums Autoservice, Frandsen & Søndergaard, Lundsby Renewable Solutions."
					}
				/>
			)}
		</>
	);
};
