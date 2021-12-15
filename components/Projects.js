import React from "react";
import Image from "next/image";
import punks from "../public/69punks.png";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Projects() {
	const projects = [
		{
			name: "The69Punks",
			preview: punks,
			socials: [
				{ url: "", icon: <FaTwitter /> },
				{ url: "", icon: <FaInstagram /> },
				{ url: "", icon: <FaDiscord /> },
			],
		},
		{
			name: "Coming Soon...",
			preview: "",
			socials: [
				{ url: "", icon: <FaTwitter /> },
				{ url: "", icon: <FaInstagram /> },
				{ url: "", icon: <FaDiscord /> },
			],
		},
	];

	return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<h2 className='text-primary mb-8'>Other Projects</h2>
				<div className='lg:grid-cols-2 auto-rows-auto grid grid-cols-1 gap-12'>
					{projects.map((project, index) => (
						<div key={index} className='group aspect-square relative w-full'>
							<div
								className={`group group-hover:opacity-100 bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-300 bg-opacity-75 ${
									project.preview ? "opacity-0" : "opacity-100"
								}`}
							>
								<h3 className='md:text-4xl text-xl text-center text-white'>
									{project.name}
								</h3>
								<div className='flex flex-row items-center justify-center gap-3 mt-4'>
									{project.socials.map((social, index) => (
										<>
											{social.url && (
												<a
													key={index}
													href={social.url}
													className='hover:text-green-500 text-2xl text-white transition-all duration-300 ease-out'
												>
													{social.icon}
												</a>
											)}
										</>
									))}
								</div>
							</div>
							{project.preview ? (
								<Image src={project.preview} alt={project.name} />
							) : (
								<div className='bg-primary w-full h-full'></div>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
