import React from "react";
import AboutBanner from "../../components/AboutBanner";
import Collapse from "../../components/Collapse"
import aboutArray from "../../datas/aboutArray.json"  // on a créé un fichier JSON avec les données des collapses


export default function About() {
	return (
		<div>
			<AboutBanner />
			{aboutArray.map((rule, id) => (
				<Collapse key={id} aboutTitle={rule.aboutTitle} aboutText={rule.aboutText} aboutStyle="about-style" />
			))}
		</div>
	);
}
