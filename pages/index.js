// import Meta from "../components/Meta";
import Image from "next/image";
import Wrapper from "../components/prebuilt/Wrapper";
import Button from "../components/Button";
import logo from "../public/logo.png";
import NFTSlider from "../components/NFTSlider";
import punks from "../public/punks.png";
import Roadmap from "../components/Roadmap/Roadmap";

export default function Home() {
	return (
		<>
			{/* <Meta title='Title' desc='Descrition' /> */}
			<div className='h-screen hero'>
				<div className='flex flex-col items-center justify-center h-full'>
					<div className='max-w-[15rem] animate-hover filter drop-shadow-md'>
						<Image src={logo} alt='420 Punks' />
					</div>
					<h1>420 Punks</h1>
					<h2 className='mb-4'>Tagline</h2>
					<Button url='#' text='View on Opensea' />
				</div>
			</div>

			<NFTSlider />

			<div className='container mx-auto my-32'>
				<div className='grid grid-cols-1 gap-12 md:grid-cols-2 auto-rows-auto'>
					<div className='flex flex-col items-center justify-center'>
						<div>
							<h2>About 420 Punks</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores voluptate eaque voluptatibus! Necessitatibus iusto
								corrupti eaque blanditiis iste deleniti, minus maxime eligendi,
								repellat, debitis non.
							</p>
						</div>
					</div>
					<div>
						<Image src={punks} alt='Punks' />
					</div>
				</div>
			</div>

			<Wrapper className='bg-green-500'>
				<Roadmap title='Roadmap' />
			</Wrapper>

			<Wrapper>
				<div className='flex flex-col items-center justify-center'>
					<h2>MERCHANDISE SECTION</h2>
					<div className='grid gap-12 mt-8 gird-cols-2 md:grid-cols-4 auto-rows-auto'>
						<div className='flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid aspect-square'>
							<h2>ITEM</h2>
						</div>

						<div className='flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid aspect-square'>
							<h2>ITEM</h2>
						</div>

						<div className='flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid aspect-square'>
							<h2>ITEM</h2>
						</div>

						<div className='flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid aspect-square'>
							<h2>ITEM</h2>
						</div>

						<div className='flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid aspect-square'>
							<h2>ITEM</h2>
						</div>

						<div className='flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid aspect-square'>
							<h2>ITEM</h2>
						</div>

						<div className='flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid aspect-square'>
							<h2>ITEM</h2>
						</div>

						<div className='flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid aspect-square'>
							<h2>ITEM</h2>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
