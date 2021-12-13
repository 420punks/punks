import React from "react";
import RoadmapTile from "./RoadmapTile";

export default function Roadmap({ title }) {
	return (
		<div className='mx-auto max-w-max'>
			<div className='mx-auto mb-8 text-center max-w-max'>
				<h2 className='text-primary'>{title}</h2>
				<p className='mb-6'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet ut
					ullam, ipsa possimus atque ab perspiciatis reprehenderit aut
					voluptatibus beatae tempore officiis, ratione delectus fugit.
				</p>
			</div>

			<div className='grid grid-cols-1 auto-rows-auto'>
				<div>
					<RoadmapTile number='0' current>
						<p>
							Preparing all the ingredients for the successful launch. For
							those, who don't know the meaning of "spicy hot". We warned you!
						</p>
					</RoadmapTile>

					<RoadmapTile number='1'>
						<p>
							Preparing all the ingredients for the successful launch. For
							those, who don't know the meaning of "spicy hot". We warned you!
						</p>
					</RoadmapTile>

					<RoadmapTile number='2'>
						<p>
							Preparing all the ingredients for the successful launch. For
							those, who don't know the meaning of "spicy hot". We warned you!
						</p>
					</RoadmapTile>

					<RoadmapTile number='3'>
						<p>
							Preparing all the ingredients for the successful launch. For
							those, who don't know the meaning of "spicy hot". We warned you!
						</p>
					</RoadmapTile>
				</div>
			</div>
		</div>
	);
}
