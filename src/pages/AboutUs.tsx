import { Box, Paper, Stack } from '@mui/material/';
import AboutSection from '../components/AboutSection';

const AboutUs = () =>{
	return (
        <Box>
            <Paper sx={{typography: "h1"}}>
                MEET THE TEAM
            </Paper>
            <Box sx={{padding: 3, bgcolor: "secondary.light"}}>
                <Stack direction="column" spacing={10}>
                    <AboutSection/>
                    <AboutSection/>
                    <AboutSection/>
                </Stack>
            </Box>
        </Box>
	);
}

export default AboutUs;