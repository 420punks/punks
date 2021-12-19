import React from "react";

export default function Roadmap({ title, children }) {
	return (
		<div className='max-w-max mx-auto'>
			<div className='max-w-max mx-auto mb-8 text-center'>
				<h2 className='text-primary text-center'>{title}</h2>
			</div>

			<div className='auto-rows-auto grid grid-cols-1'>{children}</div>
		</div>
	);
}
