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
	const getAppart = data.find(({ id }) => id === params.id);
	const slidePics = getAppart.pictures;
	const tags = getAppart.tags;
	const equipments = getAppart.equipments;
	const equip = equipments.map((item, index) => (
		<li key={index} className="equipList">
			{item}
		</li>
	));
	console.log(getAppart);
	if(getAppart !== undefined) {
	return (
		<div key={params.id} className="fiche-container">
			<Carrousel slides={slidePics} />
			<section className="hostInfo-container">
				<div className="title-tags-container">
					<div className="title-container redFont">
						<h1>{getAppart.title}</h1>
						<h3>{getAppart.location}</h3>
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
							hostName={getAppart.host.name}
							hostPic={getAppart.host.picture}
						/>
					</div>
					<div className="rate-container">
						<Rate score={getAppart.rating} />
					</div>
				</div>
			</section>
			<div className="collapse-fiche-container">
				<Collapse
					aboutTitle="Description"
					aboutText={getAppart.description}
				/>
				<Collapse aboutTitle="Équipements" aboutText={equip} />
			</div>
		</div>
	);
	} else {
		console.log("appart introuvable")
		window.location.href ="/404";
	}
}


