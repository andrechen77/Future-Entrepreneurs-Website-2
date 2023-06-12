import { Stack, ThemeProvider } from '@mui/material/';
import theme from './theme';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Calendar from './pages/Calendar';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import GetInvolved from './pages/GetInvolved';
import { Routes, Route } from "react-router-dom";
import { Footer, FooterColumn } from './components/Footer';
import FAQ from './pages/FAQ';

function App() {
	const NavBarLinks = [
		{label: "About Us", addr: "/AboutUs"},
		{label: "Calendar", addr: "/Calendar"},
		{label: "Blog", addr: "/Blog"},
		{label: "Contact", addr: "/Contact"},
		{label: "Get Involved", addr: "/GetInvolved"},
		{label: "FAQ", addr: "/faq"}

	];

	return (
		<ThemeProvider theme={theme}>
			<Stack sx={{ minHeight: "100vh" }} justifyContent="space-between">
				<NavBar links={NavBarLinks}/>
				<Routes>
					<Route index  element={<HomePage />} />
					<Route path='AboutUs' element={<AboutUs />} />
					<Route path='Calendar' element={<Calendar />} />
					<Route path='Blog/*' element={<Blog />} />
					<Route path='Contact' element={<Contact />} />
					<Route path='GetInvolved' element={<GetInvolved />} />
					<Route path='faq' element={<FAQ/>}/>
				</Routes>
				<Footer>{[
					<FooterColumn key="" header="Our Pages" links={NavBarLinks}/>
				]}</Footer>
			</Stack>
		</ThemeProvider>
	);
}

export default App;
