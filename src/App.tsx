import React from 'react';
import { ThemeProvider } from '@mui/material/';
import theme from './theme';
import NavBar from './components/NavBar';
import BorderDemo from './components/BorderDemo';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<NavBar logoSrc="logo512.png" labels={["one", "two", "three"]}/>
			</div>
			<div>
				<BorderDemo size={100} color="green">
					ABDCEDFG
				</BorderDemo>
			</div>
		</ThemeProvider>
	);
}

export default App;
