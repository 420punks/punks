import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import nft1 from "../public/slider-imgs/punk1.png";
import nft2 from "../public/slider-imgs/punk2.png";
import nft3 from "../public/slider-imgs/punk3.png";
import nft4 from "../public/slider-imgs/punk4.png";
import nft5 from "../public/slider-imgs/punk5.png";
import nft6 from "../public/slider-imgs/punk6.png";

export default function NFTSlider() {
	const images = [nft1, nft2, nft3, nft4, nft5, nft6];

	const NextArrow = ({ onClick }) => {
		return (
			<div className='arrow next' onClick={onClick}>
				<IoMdArrowDropright />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className='arrow prev' onClick={onClick}>
				<IoMdArrowDropleft />
			</div>
		);
	};

	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		infinite: true,
		lazyload: true,
		focusOnSelect: true,
		speed: 2500,
		autoplaySpeed: 1,
		dots: false,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: 0,
		swipeToSlide: true,
		autoplay: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		appendDots: (dots) => (
			<div>
				<ul style={{ margin: "0px" }}> {dots} </ul>
			</div>
		),
		customPaging: (i) => (
			<div className='w-full mt-4'>
				<div className='bar w-8 h-2 bg-white bg-opacity-50'></div>
				<div className='hidden'>{i + 1}</div>
			</div>
		),
		beforeChange: (current, next) => setImageIndex(next),
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					focusOnSelect: true,
					swipeToSlide: true,
					lazyload: true,
					speed: 300,
					infinite: true,
					autoplay: true,
					arrows: false,
				},
			},
		],
	};

	return (
		<>
			<div className='slider relative'>
				<Slider {...settings}>
					{images.map((img, index) => (
						<Image key={index} src={img} alt={img} layout='responsive' />
					))}
				</Slider>
			</div>
		</>
	);
}
