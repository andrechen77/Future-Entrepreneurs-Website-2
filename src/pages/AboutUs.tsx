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
                    <AboutSection name="Mario Feijoo" left={true} profile='images/mario1.jpeg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo efficitur, gravida lorem eget, semper magna. 
                        Maecenas pulvinar felis at eros semper maximus. Pellentesque tincidunt lorem a iaculis faucibus. Ut pellentesque ex in lectus 
                        porta pharetra. Quisque pellentesque justo eu lorem vestibulum, id egestas nulla ultrices. Vivamus pulvinar rutrum tristique. 
                        Vivamus vel tristique mauris, ut pharetra justo. Duis at felis tortor.
						Aliquam ut libero eu neque malesuada cursus. Suspendisse elementum, odio quis scelerisque commodo, lacus quam vulputate justo, 
                        vitae fermentum eros dui sit amet ante. Nullam dictum ligula libero, eget imperdiet enim hendrerit id. Duis congue elit eget auctor 
                        pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan metus ligula, a accumsan tellus fermentum sit
                         amet. Cras id tincidunt mi.
					</AboutSection>
                    <AboutSection name="Mario Feijoo" left={true} profile='images/mario1.jpeg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo efficitur, gravida lorem eget, semper magna. 
                        Maecenas pulvinar felis at eros semper maximus. Pellentesque tincidunt lorem a iaculis faucibus. Ut pellentesque ex in lectus 
                        porta pharetra. Quisque pellentesque justo eu lorem vestibulum, id egestas nulla ultrices. Vivamus pulvinar rutrum tristique. 
                        Vivamus vel tristique mauris, ut pharetra justo. Duis at felis tortor.
						Aliquam ut libero eu neque malesuada cursus. Suspendisse elementum, odio quis scelerisque commodo, lacus quam vulputate justo, 
                        vitae fermentum eros dui sit amet ante. Nullam dictum ligula libero, eget imperdiet enim hendrerit id. Duis congue elit eget auctor 
                        pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan metus ligula, a accumsan tellus fermentum sit
                         amet. Cras id tincidunt mi.
					</AboutSection>
                    <AboutSection name="Mario Feijoo" left={true} profile='images/mario1.jpeg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo efficitur, gravida lorem eget, semper magna. 
                        Maecenas pulvinar felis at eros semper maximus. Pellentesque tincidunt lorem a iaculis faucibus. Ut pellentesque ex in lectus 
                        porta pharetra. Quisque pellentesque justo eu lorem vestibulum, id egestas nulla ultrices. Vivamus pulvinar rutrum tristique. 
                        Vivamus vel tristique mauris, ut pharetra justo. Duis at felis tortor.
						Aliquam ut libero eu neque malesuada cursus. Suspendisse elementum, odio quis scelerisque commodo, lacus quam vulputate justo, 
                        vitae fermentum eros dui sit amet ante. Nullam dictum ligula libero, eget imperdiet enim hendrerit id. Duis congue elit eget auctor 
                        pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan metus ligula, a accumsan tellus fermentum sit
                         amet. Cras id tincidunt mi.
					</AboutSection>
                </Stack>
            </Box>
        </Box>
	);
}

export default AboutUs;
