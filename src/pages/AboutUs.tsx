import { Box, Paper, Stack } from '@mui/material/';
import AboutSection from '../components/AboutSection';

const AboutUs = () =>{
    const bgImage = {
        backgroundImage: `url("/images/chicago_skyline.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 400,
    };
    const centeredText = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const bannerStyle = {
        ...bgImage,
        ...centeredText,
        typography: "h1",
        color: "common.white",
        fontWeight: 600,
    }

	return (
        <Box>
            <Paper sx={bannerStyle}>
                MEET THE TEAM
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