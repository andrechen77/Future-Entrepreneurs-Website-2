import { Box, Paper, Stack } from '@mui/material/';
import AboutSection from '../components/AboutSection';
import Banner from '../components/Banner';

function AboutUs() {
	return (
		<Box>
			<Banner imgsrc="/images/chicago_skyline.jpg" ht= "300px">MEET THE TEAM</Banner>
			<Paper elevation={0} square sx={{typography: "body1", padding: 3}}>
				This is the team or smth. Just copy charlie's code from "Get Involved" lmao
			</Paper>
			<Box sx={{padding: 3, bgcolor: "secondary.light"}}>
				<Stack direction="column" spacing={3}>
					<AboutSection/>
					<AboutSection/>
					<AboutSection/>
				</Stack>
			</Box>
		</Box>
	);
}

export default AboutUs;