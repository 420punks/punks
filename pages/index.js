// import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import NFTSlider from "../components/NFTSlider";
import Roadmap from "../components/Roadmap/Roadmap";
import Accordian from "../components/prebuilt/Accordian";
import Hero from "../components/Hero";
import About from "../components/About";
import Merchandise from "../components/Merchandise";

export default function Home() {
	return (
		<>
			{/* <Meta title='Title' desc='Descrition' /> */}
			<Hero title='420 Punks' tagline='Tagline' opensea='#' />

			<NFTSlider />

			<Wrapper>
				<About title='About 420 Punks'>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
						repudiandae expedita quod. Asperiores expedita facilis eligendi,
						aperiam, optio dolore dolorem veritatis nisi enim aliquid deleniti?
					</p>
				</About>
			</Wrapper>

			<Wrapper green>
				<Roadmap title='Roadmap' />
			</Wrapper>

			<Wrapper>
				<Merchandise title='Merchandise' />
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
