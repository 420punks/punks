import React from "react";

export default function Merchandise(props) {
	return (
		<>
			<h2 className='text-center'>{props.title}</h2>
			{props.children}
		</>
	);
}
