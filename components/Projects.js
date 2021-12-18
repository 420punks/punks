import React from "react";
import Image from "next/image";

export default function Projects({ projects }) {
	return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<h2 className='text-primary mb-8'>Other Projects</h2>
				<div className='lg:grid-cols-2 auto-rows-auto grid grid-cols-1 gap-12'>
					{projects.reverse().map((project) => (
						<div
							key={project.sys.id}
							className='group aspect-square relative w-full'
						>
							<div
								className={`group group-hover:opacity-100 bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-300 bg-opacity-75 opacity-0`}
							>
								<h3 className='md:text-4xl text-xl text-center text-white'>
									{project.fields.name}
								</h3>
							</div>
							<Image
								src={"https:" + project.fields.preview.fields.file.url}
								alt={project.fields.name}
								height={400}
								width={400}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
