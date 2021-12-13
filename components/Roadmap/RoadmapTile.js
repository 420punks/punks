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
				className={`relative roadmap flex flex-row justify-start group w-full items-center bg-primary px-12 py-8 shadow-md mb-8 last:mb-0 ${
					done && "line-through !bg-green-400"
				}`}
			>
				<h4 className='-mt-2 text-6xl font-bold text-green-400 transition-all duration-300 group group-hover:text-green-300'>
					{number}
				</h4>
				<div className='ml-6 group '>
					{title && <h3 className='text-green-500'>{title}</h3>}
					{children}
				</div>

				<div
					className={`-left-3 w-6 aspect-square absolute bg-white shadow-md ${
						done && "!bg-green-200"
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
