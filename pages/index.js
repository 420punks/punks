// import Meta from "../components/Meta";
import Image from "next/image";
import Wrapper from "../components/prebuilt/Wrapper";
import Button from "../components/Button";
import logo from "../public/logo.png";
import NFTSlider from "../components/NFTSlider";
import punks from "../public/punks.png";
import Roadmap from "../components/Roadmap/Roadmap";
import Accordian from "../components/prebuilt/Accordian";

export default function Home() {
	return (
		<>
			{/* <Meta title='Title' desc='Descrition' /> */}
			<div className='hero h-screen'>
				<div className='flex flex-col items-center justify-center h-full'>
					<div className='max-w-[15rem] animate-hover filter drop-shadow-md'>
						<Image src={logo} alt='420 Punks' />
					</div>
					<h1>420 Punks</h1>
					<h2 className='relative mb-4 text-4xl'>Tagline</h2>
					<Button url='#' text='View on Opensea' />
				</div>
			</div>

			<NFTSlider />

			<div className='container mx-auto my-32'>
				<div className='md:grid-cols-2 auto-rows-auto grid grid-cols-1 gap-12'>
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
					<div className='gird-cols-2 md:grid-cols-4 auto-rows-auto grid gap-12 mt-8'>
						<div className='aspect-square flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid'>
							<h2 className='text-white'>ITEM</h2>
						</div>

						<div className='aspect-square flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid'>
							<h2 className='text-white'>ITEM</h2>
						</div>

						<div className='aspect-square flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid'>
							<h2 className='text-white'>ITEM</h2>
						</div>

						<div className='aspect-square flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid'>
							<h2 className='text-white'>ITEM</h2>
						</div>

						<div className='aspect-square flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid'>
							<h2 className='text-white'>ITEM</h2>
						</div>

						<div className='aspect-square flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid'>
							<h2 className='text-white'>ITEM</h2>
						</div>

						<div className='aspect-square flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid'>
							<h2 className='text-white'>ITEM</h2>
						</div>

						<div className='aspect-square flex flex-col items-center justify-center p-12 border-4 border-green-500 border-solid'>
							<h2 className='text-white'>ITEM</h2>
						</div>
					</div>
				</div>
			</Wrapper>

			<Wrapper className='bg-green-500'>
				<div className='flex flex-col items-center justify-center'>
					<h2 className='text-primary mb-8'>Other Projects</h2>
					<div className='lg:grid-cols-3 auto-rows-auto grid grid-cols-2 gap-12'>
						<div className='bg-primary hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center px-8 py-32 text-center transition-all duration-500 ease-in-out transform shadow-lg'>
							<h2 className='text-white'>PROJECT PREVIEW</h2>
						</div>

						<div className='bg-primary hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center px-8 py-32 text-center transition-all duration-500 ease-in-out transform shadow-lg'>
							<h2 className='text-white'>PROJECT PREVIEW</h2>
						</div>

						<div className='bg-primary hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center px-8 py-32 text-center transition-all duration-500 ease-in-out transform shadow-lg'>
							<h2 className='text-white'>PROJECT PREVIEW</h2>
						</div>
					</div>
				</div>
			</Wrapper>

			<Wrapper>
				<div className='text-center'>
					<h2 className='mb-12'>Mint Details</h2>
					<Accordian title='Question 1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem
							ab, aut unde nobis ad et nemo blanditiis nihil error odio, qui
							facilis dolores tempora?
						</p>
					</Accordian>

					<Accordian title='Question 1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem
							ab, aut unde nobis ad et nemo blanditiis nihil error odio, qui
							facilis dolores tempora?
						</p>
					</Accordian>

					<Accordian title='Question 1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem
							ab, aut unde nobis ad et nemo blanditiis nihil error odio, qui
							facilis dolores tempora?
						</p>
					</Accordian>

					<Accordian title='Question 1'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem
							ab, aut unde nobis ad et nemo blanditiis nihil error odio, qui
							facilis dolores tempora?
						</p>
					</Accordian>
				</div>
			</Wrapper>

			<Wrapper className='h-screen bg-green-500'>
				<div className='flex flex-col items-center justify-center h-full'>
					<h2 className='text-primary'>420Verse</h2>
					<h3 className='text-white'>Coming Soon...</h3>
				</div>
			</Wrapper>

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
