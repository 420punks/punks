import React from "react";
import Head from "next/head";
import banner from "../public/banner.png";

export default function Meta(props) {
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta name='description' content={props.desc} />
				<meta property='og:type' content='website' />
				<meta name='og:title' property='og:title' content={props.title} />
				<meta
					name='og:description'
					property='og:description'
					content={props.desc}
				/>
				<meta property='og:site_name' content={props.title} />
				<meta property='og:url' content='' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:title' content={props.title} />
				<meta name='twitter:description' content={props.desc} />
				<meta name='twitter:site' content='@420Punks' />
				<meta name='twitter:creator' content='@420Punks' />
				<link rel='icon' type='image/png' href='/logo.png' />
				<link rel='apple-touch-icon' href='/logo.png' />
				<meta property='og:image' content={banner} />
				<meta name='twitter:image' content={banner} />
				<link rel='canonical' href='' />
			</Head>
		</>
	);
}
