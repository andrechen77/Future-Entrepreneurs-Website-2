import { ThemeProvider } from '@mui/material/';
import theme from './../theme';

const AboutUs = () =>{
	return (
		<ThemeProvider theme={theme}>
            <div>
                <h1>
                    About Us Page!!!
                </h1>
            </div>
		</ThemeProvider>
	);
}

export default AboutUs;