import React from "react";

export default function RoadmapTile({
	children,
	title,
	number,
	done,
	current,
}) {
	return (
		<>
			<div
				className={`relative roadmap transform hover:translate-x-6 transition-all duration-300 ease-in-out flex flex-col lg:flex-row justify-start group w-full items-center bg-primary md:px-12 p-8 md:py-8 shadow-md mb-8 last:mb-0`}
			>
				<h4
					className={`group group-hover:text-green-300 -mt-2 lg:mb-0 mb-6 text-5xl md:text-6xl font-bold text-green-400 transition-all duration-300 ${
						done && "!text-green-900"
					}`}
				>
					{number}
				</h4>
				<div
					className={`group ml-6 ${
						done && "line-through decoration-green-400 decoration-2"
					}`}
				>
					{title && <h3 className='text-green-500'>{title}</h3>}
					{children}
				</div>

				<div
					className={`-left-3 w-6 aspect-square absolute bg-white shadow-md ${
						done && "bg-green-900"
					}`}
				>
					<div
						className={
							current
								? "w-full h-full absolute done animate-ping bg-green-100"
								: "hidden"
						}
					></div>
				</div>
			</div>
		</>
	);
}
