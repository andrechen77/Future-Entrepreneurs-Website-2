import { ThemeProvider } from '@mui/material/';
import theme from './../theme';

const HomePage = () =>{
	return (
		<ThemeProvider theme={theme}>
            <div>
                <h1>
                    Home Page. Mario #1
                </h1>
            </div>
		</ThemeProvider>
	);
}

export default HomePage;