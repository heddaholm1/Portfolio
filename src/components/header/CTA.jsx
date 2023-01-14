import React from "react"
import CV from "../../assets/cv.pdf"

const CTA = () => {
	return (
		<div className="cta">
			<a href={CV} download className="btn">
				Last ned CV
			</a>
			<a href="#contact" className="btn btn-primary">
				La oss snakke
			</a>
		</div>
	)
}

export default CTA
