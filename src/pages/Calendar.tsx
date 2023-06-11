import { ThemeProvider, Box } from '@mui/material/';
import theme from './../theme';
import Banner from './../components/Banner'

const Calendar = () =>{
	return (
		<ThemeProvider theme={theme}>
			<Banner imgsrc="/images/chicago_skyline.jpg" ht={200}> Event Calendar </Banner>		
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height={800}
			>

				<iframe 
					src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&src=N2E4ZjliMWQxNzIyN2M1MDE0NDlhMmM0YmYwNWE3MzU0YjRmZTk3NDJiNmY4YmE3MWZmZmEzMDgyM2Y2ZmE4OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300&color=%230B8043"
					width={800}
					height={600} 
					title="Calendar"
				></iframe>
			</Box>
		</ThemeProvider>
	);
};

export default Calendar;