import React from "react"
import "./testimonials.css"

// import Swiper core and required modules
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import Avatar1 from "../../assets/avatar1.jpeg"
import Avatar2 from "../../assets/avatar1.jpeg"
import Avatar3 from "../../assets/avatar1.jpeg"
import Avatar4 from "../../assets/avatar1.jpeg"

const data = [
	{
		avatar: Avatar1,
		name: "Navn Navnesen",
		review:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat adipisci culpa officiis consectetur, iure, soluta dolores eius animi provident, reiciendis facere itaque laborum est! Eos magnam saepe beatae minima corporis!"
	},
	{
		avatar: Avatar2,
		name: "Ola Nordmann",
		review:
			"Repellat adipisci culpa officiis consectetur, iure, soluta dolores eius animi provident, reiciendis facere itaque laborum est! Eos magnam saepe beatae minima corporis!"
	},
	{
		avatar: Avatar3,
		name: "Kari Nordmann",
		review:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat adipisci culpa officiis consectetur!"
	},
	{
		avatar: Avatar4,
		name: "Per Persen",
		review:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magnam saepe beatae minima corporis!"
	}
]

const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>En kul funksjon</h5>
			<h2>Snurr snurr</h2>

			<Swiper
				className="container testimonial__container" // install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt="Avatar" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials
