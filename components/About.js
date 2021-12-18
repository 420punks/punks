import Image from "next/image";
import punks from "../public/punks.png";

export default function About({ title, children }) {
	return (
		<>
			<div className='md:grid-cols-2 auto-rows-auto grid grid-cols-1 gap-12'>
				<div className='flex flex-col items-center justify-center'>
					<div>
						<h2>{title}</h2>
						{children}
					</div>
				</div>
				<div>
					<Image src={punks} alt='Punks' />
				</div>
			</div>
		</>
	);
}
