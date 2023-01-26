import React from "react"
import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { IoLogoTwitter } from "react-icons/io"

const Footer = () => {
	return (
		<footer>
			<a href="#top" className="footer__logo">
				Hedda Holmen
			</a>

			<ul className="permalinks">
				<li>
					<a href="#top">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="#top">
					<FaFacebookF />
				</a>
				<a href="#top">
					<FiInstagram />
				</a>
				<a href="#top">
					<IoLogoTwitter />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; Hedda N. Holmen</small>
			</div>
		</footer>
	)
}

export default Footer
