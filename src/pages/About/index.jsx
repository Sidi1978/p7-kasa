import React from "react";
import AboutBanner from "../../components/AboutBanner";
import Collapse from "../../components/Collapse"
import "../../style/main.scss";
import aboutArray from "../../datas/aboutArray.json"  // on a créé un fichier JSON avec les données des collapses


export default function About() {
	return (
		<div className="about-container">
			<AboutBanner />
			<div className="about-container-collapse">
			  {aboutArray.map((rule, id) => (
				<Collapse key={id} aboutTitle={rule.aboutTitle} aboutText={rule.aboutText} aboutStyle="about-style" />
			  ))}
			</div>
		</div>
	);
}
