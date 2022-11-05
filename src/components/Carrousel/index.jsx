import React, { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";
import "../../style/components/Carrousel/Carrousel.scss";

export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
	const length = slides.length; // longueur du tableau de slides

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
	};

	return (
		<section id="carrousel-container">
			{length > 1 && (
				<img
					src={left}
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}
			{slides.map((slide, index) => (
				<div
					key={index}
					className={current === index ? "slider bl-msk wh-msk active-anim" : "slider bl-msk wh-msk"}
				>
					{index === current && <img src={slide} alt="appartement à louer" />}
					{index === current && (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}