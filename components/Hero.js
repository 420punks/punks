import React from "react";
import Image from "next/image";
import Button from "./Button";
import logo from "../public/logo.png";

export default function Hero(props) {
	return (
		<>
			<div className='hero lg:px-0 h-screen px-12 text-center'>
				<div className='flex flex-col items-center justify-center h-full'>
					<div className='max-w-[15rem] animate-hover filter drop-shadow-md'>
						<Image src={logo} alt='420 Punks' />
					</div>
					<h1 className='mb-6'>{props.title}</h1>
					{/* <h2 className='relative mb-4 text-4xl'>{props.tagline}</h2> */}
					<Button url={props.opensea} text='Mint Here' />
				</div>
			</div>
		</>
	);
}
