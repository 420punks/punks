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
				<RoadmapTile number='0' current>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
						dicta repudiandae voluptas corrupti esse totam dolorum animi ducimus
						quae dolores consequatur aspernatur neque impedit recusandae!
					</p>
				</RoadmapTile>

				<RoadmapTile number='1'>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
						dicta repudiandae voluptas corrupti esse totam dolorum animi ducimus
						quae dolores consequatur aspernatur neque impedit recusandae!
					</p>
				</RoadmapTile>

				<RoadmapTile number='2'>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
						dicta repudiandae voluptas corrupti esse totam dolorum animi ducimus
						quae dolores consequatur aspernatur neque impedit recusandae!
					</p>
				</RoadmapTile>

				<RoadmapTile number='3'>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
						dicta repudiandae voluptas corrupti esse totam dolorum animi ducimus
						quae dolores consequatur aspernatur neque impedit recusandae!
					</p>
				</RoadmapTile>
			</div>
		</div>
	);
}
