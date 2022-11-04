import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import Collapse from "../../components/Collapse";
import Host from "../../components/Host";
import Rate from "../../components/Rate";
import Tag from "../../components/Tag";
import data from "../../datas/logements.json";

export default function FicheLogement() {
	const params = useParams();
	const pickedAppart = data.find(({ id }) => id === params.id);
	const slidePics = pickedAppart.pictures;
	const tags = pickedAppart.tags;
	const equipments = pickedAppart.equipments;
	const equip = equipments.map((item, index) => (
		<li key={index} className="equipList">
			{item}
		</li>
	));
	console.log(pickedAppart);
	if(pickedAppart !== undefined) {
	return (
		<div key={params.id} className="fiche-container">
			<Carrousel slides={slidePics} />
			<section className="hostInfo-container">
				<div className="title-tags-container">
					<div className="title-container redFont">
						<h1>{pickedAppart.title}</h1>
						<h3>{pickedAppart.location}</h3>
					</div>
					<div className="tags-container">
						{tags.map((tag) => (
							<Tag key={tag} tag={tag} />
						))}
					</div>
				</div>
				<div className="rate-host-container">
					<div className="host-container redFont">
						<Host
							hostName={pickedAppart.host.name}
							hostPic={pickedAppart.host.picture}
						/>
					</div>
					<div className="rate-container">
						<Rate score={pickedAppart.rating} />
					</div>
				</div>
			</section>
			<div className="collapse-fiche-container">
				<Collapse
					aboutTitle="Description"
					aboutText={pickedAppart.description}
				/>
				<Collapse aboutTitle="Équipements" aboutText={equip} />
			</div>
		</div>
	);
						} else {
							window.location.href ="/404";
						}
}


