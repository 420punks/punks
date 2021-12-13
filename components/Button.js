import React from "react";

export default function Button(props) {
	return (
		<>
			{props.onClick && (
				<button className='button' onClick={props.onClick}>
					{props.text}
				</button>
			)}
			{props.url && (
				<a className='button' href={props.url} target='_blank' rel='noreferrer'>
					{props.text}
				</a>
			)}
		</>
	);
}
