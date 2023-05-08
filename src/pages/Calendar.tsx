import { ThemeProvider } from '@mui/material/';
import theme from './../theme';

const Calendar = () =>{
	return (
		<ThemeProvider theme={theme}>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&src=ZnV0dXJlZW50cmVwcmVuZXVydXNhQGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043" width ={800} height = {600} > </iframe>
		</ThemeProvider>
	);
}

export default Calendar;