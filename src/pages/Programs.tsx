import { ThemeProvider } from '@mui/material/';
import theme from './../theme';

const Programs = () =>{
	return (
		<ThemeProvider theme={theme}>
            <div>
                <h1>
                    Programs Page!!!
                </h1>
            </div>
		</ThemeProvider>
	);
}

export default Programs;