import React from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";
import Link from "next/link";

export default function Nav({ position }) {
	return (
		<>
			<div
				className={`${position} shadow-lg !text-white z-50 top-0 left-0 flex flex-row items-center justify-between w-auto p-4 bg-primary m-4`}
			>
				<div className='md:hidden block text-4xl'>
					<Modal
						btnTextOpen={<AiOutlineClose />}
						btnTextClose={<BiMenu />}
						btnClass='hover:text-red-500 fixed'
					>
						<div className='flex flex-col'>
							<Link href={`/`} key='home' passHref>
								Home
							</Link>
							<Link href={`/leaderboard`} key='leaderboard' passHref>
								Leaderboard
							</Link>
						</div>
					</Modal>
				</div>
				<div className='md:flex flex-row hidden gap-4'>
					<Link href={`/`} key='home' passHref>
						Home
					</Link>
					<Link href={`/leaderboard`} key='leaderboard' passHref>
						Leaderboard
					</Link>
				</div>
			</div>
		</>
	);
}
