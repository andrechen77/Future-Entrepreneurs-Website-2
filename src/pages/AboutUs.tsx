import { Box, Paper, Stack } from '@mui/material/';
import { alignProperty } from '@mui/material/styles/cssUtils';
import AboutSection from '../components/AboutSection';

const AboutUs = () =>{
	return (
        <Box>
            <Paper sx={{padding: 15, typography: "h1", textAlign: "center"}}>
                MEET THE TEAM
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