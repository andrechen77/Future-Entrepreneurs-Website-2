import { ThemeProvider } from '@mui/material/';
import theme from './../theme';

const Contact = () =>{
	return (
		<ThemeProvider theme={theme}>
            <div>
                <h1>
                    Contact Page!!!
                </h1>
            </div>
		</ThemeProvider>
	);
}

export default Contact;