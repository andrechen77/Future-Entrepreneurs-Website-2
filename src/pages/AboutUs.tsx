import { Box, Paper, Stack } from '@mui/material/';
import { alignProperty } from '@mui/material/styles/cssUtils';
import AboutSection from '../components/AboutSection';
import Banner from '../components/Banner';

function AboutUs() {
	return (
        <Box>
				<Banner imgsrc="/images/chicago_skyline.jpg">MEET THE TEAM</Banner>
				<Paper elevation={0} square sx={{typography: "body1", padding: 3}}>
                </Paper> 
            <Box sx={{padding: 3, bgcolor: "secondary.light"}}>
                <Stack direction="column" spacing={10}>
                    <AboutSection name="Mario Feijoo" left={true}>The Greatest Man of All Time</AboutSection>
                    <AboutSection name="Mario Feijoo2" left={false}>The greatest man of All Time</AboutSection>
                    <AboutSection name="Mario Feijoo3" left={true}>The greatest man of All Time</AboutSection>
                </Stack>
            </Box>
        </Box>
	);
}

export default AboutUs;
