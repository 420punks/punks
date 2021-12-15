import React from "react";
import MerchSlider from "./MerchSlider";

export default function Merchandise(props) {
	const merch = [
		{ name: "Merch Name", img: "", url: "" },
		{ name: "Merch Name", img: "", url: "" },
		{ name: "Merch Name", img: "", url: "" },
		{ name: "Merch Name", img: "", url: "" },
		{ name: "Merch Name", img: "", url: "" },
		{ name: "Merch Name", img: "", url: "" },
	];

	return (
		<>
			<h2 className='text-center'>{props.title}</h2>
			<MerchSlider />
		</>
	);
}
