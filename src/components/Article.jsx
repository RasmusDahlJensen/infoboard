/* eslint-disable react/prop-types */

import "./Article.scss";

export const Article = (props) => {
	return (
		<article>
			<header>
				<figure>
					<img src={props.logo} alt="Article Logo" />
				</figure>
				<div className="headerProps">
					<h3>{props.titleProp}</h3>
					<h3>{props.titleProp2}</h3>
					<figure>
						<img src={props.titleImage} alt="titleImage" />
					</figure>
				</div>
			</header>
			<section className="sectionFlex">
				<section>
					<h2> {props.sectionTitle1}</h2>
					<h5>{props.sectionAuthor1}</h5>
					<p> {props.sectionContent1}</p>
					<p> {props.sectionContent1a}</p>
				</section>
				<section className="sectionTwo">
					<h2> {props.sectionTitle2}</h2>
					<h5>{props.sectionAuthor2}</h5>
					<p> {props.sectionContent2}</p>
					<p> {props.sectionContent2a}</p>
				</section>
			</section>
		</article>
	);
};
