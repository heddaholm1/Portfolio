import React from "react"
import "./about.css"
import ME from "../../assets/hedda_profil.JPG"
import { FaAward, FaStar } from "react-icons/fa"
import { HiFolderOpen } from "react-icons/hi"

const About = () => {
	return (
		<section id="about">
			<h5>Bli kjent</h5>
			<h2>Om meg</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="Et bilde av meg" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Erfaring</h5>
							<small>0+ år arbeid</small>
						</article>

						<article className="about__card">
							<FaStar className="about__icon" />
							<h5>Favoritt</h5>
							<small>React, frontend</small>
						</article>

						<article className="about__card">
							<HiFolderOpen className="about__icon" />
							<h5>Prosjekter</h5>
							<small>3+ hobbybasis </small>
						</article>
					</div>

					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi saepe
						corrupti a esse sapiente nihil, fugit fuga quasi. Voluptatum adipisci animi
						minus laudantium quae nostrum dolor similique repellendus eligendi labore.
					</p>

					<a href="#contact" className="btn btn-primary">
						La oss snakke
					</a>
				</div>
			</div>
		</section>
	)
}

export default About
