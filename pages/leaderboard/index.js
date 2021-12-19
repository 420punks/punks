import Image from "next/image";
import logo from "../../public/logo.png";
import Wrapper from "../../components/prebuilt/Wrapper";
import Leaderboard from "../../components/Leaderboard";

import { createClient } from "contentful";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const leaderboard = await client.getEntries({ content_type: "leaderboard" });

	return {
		props: {
			leaderboard: leaderboard.items,
		},
	};
}

export default function index({ leaderboard }) {
	console.log(leaderboard);
	return (
		<>
			<Wrapper className='bg-blend-luminosity bg-primary relative flex flex-col items-center justify-start h-full min-h-screen text-center'>
				<div className='l-hero bg-blend-luminosity blur-sm opacity-40 absolute inset-0 z-0 w-full h-full'></div>
				<div className='max-w-[8rem] animate-hover filter drop-shadow-md mx-auto'>
					<Image src={logo} alt='420 Punks Leaderboard' />
				</div>
				<h1 className='md:text-5xl mb-8 text-2xl'>
					420Punks
					<br />
					Leaderboard
				</h1>
				<div className='max-w-max mx-auto'>
					<Leaderboard leaderboard={leaderboard} />
				</div>
			</Wrapper>
		</>
	);
}
