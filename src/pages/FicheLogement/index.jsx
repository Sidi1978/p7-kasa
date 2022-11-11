import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Carrousel from "../../components/Carrousel";
import Host from "../../components/Host";
import Tag from "../../components/Tag";
import Rate from "../../components/Rate";
import data from "../../datas/logements.json";
import "../../style/main.scss";

export default function FicheLogement() {
	//on utiliser try pour verifier si une valeur n'existe pas
	try {
	    const params = useParams();
	    const getAppart = data.find(({ id }) => id === params.id);
	    const slidePicts = getAppart.pictures;
	    const equipments = getAppart.equipments;
		const tags = getAppart.tags;
	    const equip = equipments.map((item, index) => (
		    <li key={index} className="equipList">
			    {item}
		    </li>
	    ));
	     	    
	    return (
		   <div key={params.id} className="fiche-container">
			   <Carrousel slides={slidePicts} />
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
				  <Collapse aboutTitle="Description" aboutText={getAppart.description} />
				  <Collapse aboutTitle="Équipements" aboutText={equip} />
			   </div>
		    </div>
	    );
	    		   
	}

	catch (err) {
		console.log(err)
		window.location.href ="/404";
		 }

  } 



