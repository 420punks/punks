import React from "react";

export default function Merchandise(props) {
	const merch = [
		{ name: "Merch Name", img: "" },
		{ name: "Merch Name", img: "" },
		{ name: "Merch Name", img: "" },
		{ name: "Merch Name", img: "" },
		{ name: "Merch Name", img: "" },
		{ name: "Merch Name", img: "" },
		{ name: "Merch Name", img: "" },
		{ name: "Merch Name", img: "" },
	];

	return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<h2>{props.title}</h2>
				<div className='gird-cols-2 md:grid-cols-4 auto-rows-auto grid gap-12 mt-8'>
					{merch.map((item, index) => (
						<div
							className='aspect-square group hover:bg-green-500 flex flex-col items-center justify-center w-full p-8 text-center border-4 border-green-500 border-solid'
							key={index}
						>
							<h2 className='group group-hover:scale-100 text-white transition-all duration-500 ease-out transform scale-0'>
								{item.name}
							</h2>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
