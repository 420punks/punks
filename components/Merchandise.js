import React from "react";
import MerchSlider from "./MerchSlider";

export default function Merchandise(props) {
	return (
		<>
			<h2 className='text-center'>{props.title}</h2>
			<MerchSlider />
		</>
	);
}
