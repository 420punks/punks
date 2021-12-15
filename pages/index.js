import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import Hero from "../components/Hero";
import NFTSlider from "../components/NFTSlider";
import About from "../components/About";
import Roadmap from "../components/Roadmap/Roadmap";
import Merchandise from "../components/Merchandise";
import Details from "../components/Details";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Meta title='420 Punks' desc='Descrition' />

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

			{/* Projects */}
			<Wrapper green>
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
				<Details />
			</Wrapper>

			{/* 420Verse */}
			<Wrapper className='h-screen' green>
				<div className='flex flex-col items-center justify-center h-full'>
					<h2 className='text-primary'>420Verse</h2>
					<h3 className='text-white'>Coming Soon...</h3>
				</div>
			</Wrapper>

			<Footer />
		</>
	);
}
