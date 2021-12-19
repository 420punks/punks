import Nav from "../components/prebuilt/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav position='fixed' />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
