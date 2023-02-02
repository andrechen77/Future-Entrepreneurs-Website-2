import { ThemeProvider } from '@mui/material/';
import theme from './theme';
import NavBar from './components/NavBar';

function App() {
	const NavBarLinks = [
		{label: "About Us", addr: "https://en.wikipedia.org/wiki/Entrepreneurship"},
		{label: "Programs", addr: "https://en.wikipedia.org/wiki/Computer_program"},
		{label: "Calendar", addr: "https://en.wikipedia.org/wiki/Calendar_Man"},
		{label: "Blog", addr: "https://en.wikipedia.org/wiki/Blarg"},
		{label: "Contact", addr: "https://en.wikipedia.org/wiki/Contact_lens"},
	];

	return (
		<ThemeProvider theme={theme}>
			<div>
				<NavBar logoSrc="images/logo.png" links={NavBarLinks}/>
			</div>
		</ThemeProvider>
	);
}

export default App;
