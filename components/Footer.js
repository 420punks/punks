import React from "react";
import Social from "./prebuilt/Social";

export default function Footer() {
	return (
		<>
			<footer className='flex flex-col items-center justify-center p-8'>
				<Social />
				<p className='mt-4'>© All rights reservered 420Punks</p>
				<p className='text-xs opacity-50'>
					Designed by{" "}
					<a href='https://illusivemedia.co' target='_blank' rel='noreferrer'>
						Illusive Media
					</a>
				</p>
			</footer>
		</>
	);
}
