import React from "react";
import Accordian from "./prebuilt/Accordian";

export default function Details() {
	return (
		<>
			<div className='text-center'>
				<h2 className='mb-12'>Mint Details</h2>
				<Accordian title='Question 1'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem ab,
						aut unde nobis ad et nemo blanditiis nihil error odio, qui facilis
						dolores tempora?
					</p>
				</Accordian>

				<Accordian title='Question 1'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem ab,
						aut unde nobis ad et nemo blanditiis nihil error odio, qui facilis
						dolores tempora?
					</p>
				</Accordian>

				<Accordian title='Question 1'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem ab,
						aut unde nobis ad et nemo blanditiis nihil error odio, qui facilis
						dolores tempora?
					</p>
				</Accordian>

				<Accordian title='Question 1'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem ab,
						aut unde nobis ad et nemo blanditiis nihil error odio, qui facilis
						dolores tempora?
					</p>
				</Accordian>
			</div>
		</>
	);
}
