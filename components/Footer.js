import React from "react";

export default function Footer() {
	return (
		<>
			<footer className='flex flex-col items-center justify-center p-8'>
				<p>Socials Here</p>
				<p>Copyright Info</p>
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
