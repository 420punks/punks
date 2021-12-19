import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function MerchSlider({ merch }) {
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
		speed: 700,
		autoplaySpeed: 5000,
		dots: true,
		arrows: true,
		slidesToShow: 3,
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
			<div className='flex flex-row w-full gap-2 mt-2'>
				<div className='bar w-8 h-2 bg-white bg-opacity-50'></div>
				<div className='hidden'>{i + 1}</div>
			</div>
		),
		beforeChange: (current, next) => setImageIndex(next),
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					focusOnSelect: true,
					swipeToSlide: true,
					lazyload: true,
					speed: 700,
					autoplaySpeed: 5000,
					infinite: true,
					autoplay: true,
					arrows: false,
				},
			},
		],
	};

	return (
		<>
			<div className='slider merch relative'>
				<Slider {...settings}>
					{merch.map((item, index) => (
						<a
							href={item.fields.url}
							target='_blank'
							rel='noreferrer'
							key={item.sys.id}
							className={`relative aspect-square h-full group text-white hover:bg-green-500 hover:bg-opacity-25 text-4xl !flex flex-col items-center justify-center w-full p-8 text-center border-4 border-green-500 border-solid ${
								index === imageIndex ? "merchSlide merchActive" : "merchSlide"
							}`}
						>
							<span className=' inset-0group group-hover:opacity-100 absolute z-10 transition-all duration-300 opacity-0'>
								{item.fields.title}
							</span>
							<Image
								src={"https:" + item.fields.preview.fields.file.url}
								alt={item.fields.title}
								layout='fill'
							/>
						</a>
						// <Image key={index} src={img} alt={img} layout='responsive' />
					))}
				</Slider>
			</div>
		</>
	);
}
