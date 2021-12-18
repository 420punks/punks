import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function NFTSlider() {
	const images = [
		{ name: "nftOne", url: "/slider-imgs/punk1.png" },
		{ name: "nftTwo", url: "/slider-imgs/punk2.png" },
		{ name: "nftThree", url: "/slider-imgs/punk3.png" },
		{ name: "nftFour", url: "/slider-imgs/punk4.png" },
		{ name: "nftFive", url: "/slider-imgs/punk5.png" },
		{ name: "nftSix", url: "/slider-imgs/punk6.png" },
	];

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
					speed: 2500,
					autoplaySpeed: 1,
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
						<img
							loading='lazy'
							key={img.name}
							src={img.url}
							alt='NFT Preview'
						/>
					))}
				</Slider>
			</div>
		</>
	);
}
