import React from "react";
import { Navigation, Autoplay, Lazy, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
	const slides = [1, 2, 3, 4, 5, 6];
	return (
		<>
			<Swiper
				modules={[Navigation, Autoplay, Lazy, Pagination]}
				spaceBetween={0}
				slidesPerView={3}
				centeredSlides={true}
				loop={true}
				lazy
				autoplay={{
					delay: 10000,
				}}
				navigation
				pagination
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				className='slider max-w-max'
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide} className='slide'>
						{slide}
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
