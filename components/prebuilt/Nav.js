import React from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Social from "./Social";
import Modal from "./Modal";

export default function Nav({ links, position }) {
	return (
		<>
			<div
				className={`${position} top-0 left-0 flex flex-row items-center justify-between w-screen p-6`}
			>
				<div className='block text-4xl md:hidden'>
					<Modal
						btnTextOpen={<AiOutlineClose />}
						btnTextClose={<BiMenu />}
						btnClass='hover:text-red-500 fixed'
					>
						<div className='flex flex-col'>
							{links.map((link) => (
								<a
									className='text-white transition-all duration-300 hover:text-red-500'
									href={`#${link.toLowerCase()}`}
									key={link}
								>
									{link}
								</a>
							))}
						</div>
					</Modal>
				</div>
				<div className='flex-row hidden gap-4 md:flex'>
					{links.map((link) => (
						<a
							className='text-black transition-all duration-300 hover:text-red-500'
							href={`#${link.toLowerCase()}`}
							key={link}
						>
							{link}
						</a>
					))}
				</div>
				<Social />
			</div>
		</>
	);
}
