import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import Hero from "../components/Hero";
import NFTSlider from "../components/NFTSlider";
import About from "../components/About";
import Roadmap from "../components/Roadmap/Roadmap";
import Merchandise from "../components/Merchandise";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import MerchSlider from "../components/MerchSlider";

export default function Home() {
	return (
		<>
			<Meta title='420 Punks' desc='Descrition' />

			<Hero title='420 Punks' tagline='Tagline' opensea='#' />

			<NFTSlider />

			<Wrapper>
				<About title='About 420 Punks'>
					<p>
						A total of 420 punks living on the polygon blockchain, they were
						created with the psychedelic elixir by the 420 god himself. Owning
						one of the 420 punks not only gives you ownership over the coolest
						jpegs but a lot of perks and benefits.
					</p>
				</About>
			</Wrapper>

			<Wrapper green>
				<Roadmap title='Roadmap' />
			</Wrapper>

			<Wrapper>
				<Merchandise title='Merch' />
			</Wrapper>

			{/* Projects */}
			<Wrapper green>
				<Projects />
			</Wrapper>

			<Wrapper>
				<Details />
			</Wrapper>

			{/* 420Verse */}
			<Wrapper className='md:h-screen h-[50vh]' green>
				<div className='flex flex-col items-center justify-center h-full'>
					<h2 className='text-primary'>420Verse</h2>
					<h3 className='text-white'>Coming Soon...</h3>
				</div>
			</Wrapper>

			<Footer />
		</>
	);
}
