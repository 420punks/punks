import React from "react";

export default function Wrapper(props) {
	return (
		<>
			<div
				className={`w-screen py-32 ${props.className} ${
					props.green && "bg-green-500"
				}`}
			>
				<div className='container w-full h-full mx-auto'>{props.children}</div>
			</div>
		</>
	);
}
