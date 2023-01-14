import React from "react"
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/hedda.PNG"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hei, jeg er</h5>
				<h1>Hedda Nikolaisen Holmen</h1>
				<h5 className="text-light">Utvikler</h5>
				<CTA />
				<HeaderSocials />

				<div className="me">
					<img src={ME} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	)
}

export default Header
