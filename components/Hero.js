import React from "react";
import Image from "next/image";
import Button from "./Button";
import logo from "../public/logo.png";

export default function Hero(props) {
	return (
		<>
			<div className='hero h-screen'>
				<div className='flex flex-col items-center justify-center h-full'>
					<div className='max-w-[15rem] animate-hover filter drop-shadow-md'>
						<Image src={logo} alt='420 Punks' />
					</div>
					<h1>{props.title}</h1>
					<h2 className='relative mb-4 text-4xl'>{props.tagline}</h2>
					<Button url={props.opensea} text='View on Opensea' />
				</div>
			</div>
		</>
	);
}
