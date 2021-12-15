import React from "react";
import Accordian from "./prebuilt/Accordian";

export default function Details() {
	return (
		<>
			<div className='text-center'>
				<h2 className='mb-12'>Mint Details</h2>
				<Accordian title='How Much?'>
					<p>0.03 ETH for Whitelisted / 0.045 ETH for public sale</p>
				</Accordian>

				<Accordian title='Where to mint?'>
					<p>
						Mint cards will be available on opensea , these will be announced in
						discord/instagram/twitter/website
					</p>
				</Accordian>

				<Accordian title='How to buy?'>
					<p>
						Tutorial video:{" "}
						<a
							href='#'
							target='_blank'
							rel='noreferrer'
							className='hover:text-white'
						>
							Link
						</a>
					</p>
				</Accordian>
			</div>
		</>
	);
}
