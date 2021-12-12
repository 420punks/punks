import React from "react";
import {
	FaTwitter,
	FaInstagram,
	FaDiscord,
	FaTelegramPlane,
} from "react-icons/fa";

export default function Social() {
	const socials = [
		{
			name: "Twitter",
			icon: <FaTwitter />,
			url: "",
		},
		{
			name: "Instagram",
			icon: <FaInstagram />,
			url: "",
		},
		{
			name: "FaDiscord",
			icon: <FaDiscord />,
			url: "",
		},
		{
			name: "Instagram",
			icon: <FaTelegramPlane />,
			url: "",
		},
	];

	return (
		<>
			<div className='flex flex-row items-center justify-center gap-4 text-3xl text-black'>
				{socials.map((social) => (
					<>
						{social.url && (
							<a
								href={social.url}
								rel='noreferrer'
								target='_blank'
								className='transition-all duration-300 hover:text-red-500'
								key={social.name}
							>
								{social.icon}
							</a>
						)}
					</>
				))}
			</div>
		</>
	);
}
