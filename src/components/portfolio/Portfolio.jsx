import React from "react"
import "./portfolio.css"
import IMG1 from "../../assets/VisitSkreia.png"
import IMG2 from "../../assets/VisitSkreia.png"
import IMG3 from "../../assets/VisitSkreia.png"
import IMG4 from "../../assets/VisitSkreia.png"
import IMG5 from "../../assets/VisitSkreia.png"
import IMG6 from "../../assets/VisitSkreia.png"

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Visit Skreia",
		github: "https://github.com/heddaholm1/Hometown",
		demo: "https://effortless-pegasus-1f0270.netlify.app/"
	},
	{
		id: 2,
		image: IMG2,
		title: "Tombow Tracker",
		github: "https://github.com/heddaholm1/Hometown",
		demo: "https://effortless-pegasus-1f0270.netlify.app/"
	},
	{
		id: 3,
		image: IMG3,
		title: "Leksesjekken",
		github: "https://github.com/heddaholm1/Hometown",
		demo: "https://effortless-pegasus-1f0270.netlify.app/"
	},
	{
		id: 4,
		image: IMG4,
		title: "Portfolio",
		github: "https://github.com/heddaholm1/Hometown",
		demo: "https://effortless-pegasus-1f0270.netlify.app/"
	},
	{
		id: 5,
		image: IMG5,
		title: "Fotball Count",
		github: "",
		demo: ""
	},
	{
		id: 6,
		image: IMG6,
		title: "Udemy Mini-prosjekter",
		github: "",
		demo: ""
	}
]

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>Mine prosjekter</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a
									href={github}
									target="_blank"
									rel="noopener noreferrer"
									className="btn"
								>
									Github
								</a>
								<a
									href={demo}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary"
								>
									Demo
								</a>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Portfolio
