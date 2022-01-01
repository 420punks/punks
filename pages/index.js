import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import Hero from "../components/Hero";
import NFTSlider from "../components/NFTSlider";
import About from "../components/About";
import Roadmap from "../components/Roadmap/Roadmap";
import RoadmapTile from "../components/Roadmap/RoadmapTile";
import Merchandise from "../components/Merchandise";
import MerchSlider from "../components/MerchSlider";
import Details from "../components/Details";
import Accordian from "../components/prebuilt/Accordian";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const about = await client.getEntries({ content_type: "home" });
	const projects = await client.getEntries({ content_type: "projects" });
	const roadmap = await client.getEntries({ content_type: "roadmap" });
	const merch = await client.getEntries({ content_type: "merch" });
	const mint = await client.getEntries({ content_type: "mint" });

	return {
		props: {
			about: about.items,
			project: projects.items,
			roadmap: roadmap.items,
			merch: merch.items,
			mint: mint.items,
		},
		revalidate: 1,
	};
}
function updateTimer() {
	const future  = Date.parse("January 1, 2022 8:30:00 PST");
	const now     = new Date();
	const diff    = future - future;
	
	const days  = Math.floor( diff / (1000*60*60*24) );
	const hours = Math.floor( diff / (1000*60*60) );
	const minutes  = Math.floor( diff / (1000*60) );
	const seconds  = Math.floor( diff / 1000 );
	
	const d = days;
	const h = hours - days  * 24;
	const m = minutes  - hours * 60;
	const s = seconds  - minutes  * 60;

	document.getElementById("countdown").innerHTML = d + ' days, ' + h + ' hours, ' + m + ' minutes & ' + s + ' seconds'
}
setInterval(() => {updateTimer()}, 1000)

export default function Home({ about, roadmap, merch, project, mint }) {
	const roadmapSorted = roadmap.sort(
		(first, second) => first.fields.percentage - second.fields.percentage
	);

	return (
		<>
			<Meta
				title='420 Punks'
				desc='A total of 420 punks living on the polygon blockchain'
			/>

			<Hero
				title='420 Punks'
				tagline='Tagline'
				opensea='https://opensea.io/collection/420punksmint'
			/>

			<NFTSlider />

			<Wrapper>
				<About title={about[0].fields.title}>
					{documentToReactComponents(about[0].fields.about)}
				</About>
			</Wrapper>

			<Wrapper green>
				<Roadmap title='Roadmap'>
					{roadmapSorted.map((tile) => (
						<RoadmapTile
							key={tile.sys.id}
							number={tile.fields.percentage}
							current={tile.fields.current}
							done={tile.fields.done}
						>
							{documentToReactComponents(tile.fields.content)}
						</RoadmapTile>
					))}
				</Roadmap>
			</Wrapper>

			<Wrapper>
				<Merchandise title='Merch'>
					<MerchSlider merch={merch} />
				</Merchandise>
			</Wrapper>

			{/* Projects */}
			<Wrapper green>
				<Projects projects={project} />
			</Wrapper>

			<Wrapper>
				<Details>
					{mint.reverse().map((detail) => (
						<Accordian key={detail.sys.id} title={detail.fields.title}>
							{documentToReactComponents(detail.fields.content)}
						</Accordian>
					))}
				</Details>
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
