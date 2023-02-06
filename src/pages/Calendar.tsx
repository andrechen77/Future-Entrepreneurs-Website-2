import { ThemeProvider } from '@mui/material/';
import theme from './../theme';

const Calendar = () =>{
	return (
		<ThemeProvider theme={theme}>
            <div>
                <h1>
                    Calendar Page!!!
                </h1>
            </div>
		</ThemeProvider>
	);
}

export default Calendar;