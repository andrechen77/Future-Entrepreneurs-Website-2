import { ThemeProvider } from '@mui/material/';
import theme from './theme';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Calendar from './pages/Calendar';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import GetInvolved from './pages/GetInvolved';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const NavBarLinks = [
		{label: "About Us", addr: "/AboutUs"},
		{label: "Programs", addr: "/Programs"},
		{label: "Calendar", addr: "/Calendar"},
		{label: "Blog", addr: "/Blog"},
		{label: "Contact", addr: "/Contact"},
		{label: "Get Involved", addr: "/GetInvolved"},
	];

	return (
		<ThemeProvider theme={theme}>
			<div>
				<Router>
					<NavBar logoSrc="images/logo.png" links={NavBarLinks}/>
					<Routes>
						<Route path='/'  element={<HomePage />} />
						<Route path='/AboutUs'  element={<AboutUs />} />
						<Route path='/Programs'  element={<Programs />} />
						<Route path='/Calendar'  element={<Calendar />} />
						<Route path='/Blog'  element={<Blog />} />
						<Route path='/Contact'  element={<Contact />} />
						<Route path='/GetInvolved'  element={<GetInvolved />} />
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
