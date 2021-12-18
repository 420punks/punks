import React from "react";

export default function Details({ children }) {
	return (
		<>
			<div className='text-center'>
				<h2 className='mb-12'>Mint Details</h2>
				{children}
			</div>
		</>
	);
}
