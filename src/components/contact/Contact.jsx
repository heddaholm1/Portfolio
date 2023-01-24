import React from "react"
import "./contact.css"
import { MdOutlineMail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsPhone } from "react-icons/bs"

const Contact = () => {
	return (
		<section id="contact">
			<h5>Si hei</h5>
			<h2>Kontakt meg</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineMail className="contact__option-icon" />
						<h4>Epost</h4>
						<h5>hedda.holmen@hotmail.no</h5>
						<a
							href="mailto:hedda.holmen@hotmail.no"
							target="_blank"
							rel="noopener noreferrer"
						>
							Send en melding
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>heddaholmen</h5>
						<a href="https://m.me/hedda.holmen" target="_blank" rel="noopener noreferrer">
							Send en melding
						</a>
					</article>
					<article className="contact__option">
						<BsPhone className="contact__option-icon" />
						<h4>Telefon</h4>
						<h5>94896937</h5>
						<a href="tel:94896937" target="_blank" rel="noopener noreferrer">
							Send en melding
						</a>
					</article>
				</div>

				<form action="">
					<input type="text" name="name" placeholder="Fult navn" required />
					<input type="email" name="email" placeholder="Epost" required />
					<textarea name="message" rows="7" placeholder="Melding" required></textarea>
					<button type="submit" className="btn btn-primary">
						Send melding
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
