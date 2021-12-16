import React from "react";
import RoadmapTile from "./RoadmapTile";

export default function Roadmap({ title }) {
	return (
		<div className='max-w-max mx-auto'>
			<div className='max-w-max mx-auto mb-8 text-center'>
				<h2 className='text-primary'>{title}</h2>
				<p className='text-primary'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ut
					ullam, ipsa possimus atque ab perspiciatis reprehenderit aut
					voluptatibus beatae tempore officiis, ratione delectus fugit.
				</p>
			</div>

			<div className='auto-rows-auto grid grid-cols-1'>
				<RoadmapTile number='10%' done>
					<p>
						Drop 210 punks | Building a discord community | Regular giveaways
						and poker games for exclusive punk holders
					</p>
				</RoadmapTile>

				<RoadmapTile number='20%' current>
					<p>Mint 210 punks | Pre-sale 0.03 ETH | Public sale - 0.045 ETH</p>
				</RoadmapTile>

				<RoadmapTile number='30%'>
					<p>Merchandise Launch (Punk holders get profit share)</p>
				</RoadmapTile>

				<RoadmapTile number='40%'>
					<p>7 days long poker league with a total prize pool of 1 ETH</p>
				</RoadmapTile>

				<RoadmapTile number='50%'>
					<p>White paper for future projects stake holding patterns.</p>
				</RoadmapTile>

				<RoadmapTile number='70%'>
					<p>
						Launch of next project The69Punks backed by The420Punks community.
					</p>
				</RoadmapTile>

				<RoadmapTile number='99%'>
					<p>
						Vegas 2022 Meet, there's never a 100% because the community intends
						to grow forever!
					</p>
				</RoadmapTile>
			</div>
		</div>
	);
}
