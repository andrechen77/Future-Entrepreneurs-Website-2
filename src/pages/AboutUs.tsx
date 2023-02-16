import { Box, Paper, Stack } from '@mui/material/';
import AboutSection from '../components/AboutSection';
import Banner from '../components/Banner';
import Lipsum from '../components/Lipsum';

function AboutUs() {
	return (
		<Box>
			<Banner imgsrc="/images/chicago_skyline.jpg">MEET THE TEAM</Banner>
			<Paper elevation={0} square sx={{typography: "body1", padding: 3}}>
			</Paper>
			<Box sx={{padding: 3, bgcolor: "secondary.light"}}>
				<Stack direction="column" spacing={10}>
					<AboutSection name="Mario Feijoo" left={true} profile='images/mario1.jpeg'>
						<Lipsum p={1} s={8}/>
					</AboutSection>
					<AboutSection name="Mario Feijoo" left={false} profile='images/mario1.jpeg'>
						<Lipsum p={1} s={8}/>
					</AboutSection>
					<AboutSection name="Mario Feijoo" left={true} profile='images/mario1.jpeg'>
						<Lipsum p={1} s={8}/>
					</AboutSection>
				</Stack>
			</Box>
		</Box>
	);
}

export default AboutUs;
