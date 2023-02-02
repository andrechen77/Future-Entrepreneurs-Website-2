import React from 'react';
import { ThemeProvider } from '@mui/material/';
import theme from './theme';
import NavBar from './components/NavBar';
import BorderDemo from './components/BorderDemo';

function App() {
	const NavBarLinks = [
		{label: "Alice", addr: "https://en.wikipedia.org/wiki/Alice's_Adventures_in_Wonderland"},
		{label: "Bob", addr: "https://en.wikipedia.org/wiki/Bob_(dog)"},
		{label: "Charlie", addr: "https://en.wikipedia.org/wiki/Charlie_(skeleton)"},
	];

	return (
		<ThemeProvider theme={theme}>
			<div>
				<NavBar logoSrc="logo512.png" links={NavBarLinks}/>
			</div>
			<div>
				<BorderDemo size={10} color="green">
					ABDCEDFG
				</BorderDemo>
			</div>
		</ThemeProvider>
	);
}

export default App;
