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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus justo efficitur, gravida lorem eget, semper magna. Maecenas pulvinar felis at eros semper maximus. Pellentesque tincidunt lorem a iaculis faucibus. Ut pellentesque ex in lectus porta pharetra. Quisque pellentesque justo eu lorem vestibulum, id egestas nulla ultrices. Vivamus pulvinar rutrum tristique. Vivamus vel tristique mauris, ut pharetra justo. Duis at felis tortor.
						Aliquam ut libero eu neque malesuada cursus. Suspendisse elementum, odio quis scelerisque commodo, lacus quam vulputate justo, vitae fermentum eros dui sit amet ante. Nullam dictum ligula libero, eget imperdiet enim hendrerit id. Duis congue elit eget auctor pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan metus ligula, a accumsan tellus fermentum sit amet. Cras id tincidunt mi.
						Nullam auctor vel nulla sit amet vehicula. Ut nec libero et erat ornare faucibus. Sed suscipit massa id nibh ornare hendrerit. Etiam quis gravida nunc, at pellentesque augue. Suspendisse ornare nisl risus, vitae suscipit eros gravida sit amet. Fusce eleifend enim faucibus, tempor nulla ac, imperdiet magna. Integer iaculis augue ac lacus tristique tincidunt. Proin interdum, nisi vitae bibendum rhoncus, leo massa tristique lorem, ac scelerisque urna dolor id ex. Nulla ut nunc sit amet libero porttitor cursus.
						Morbi feugiat odio non sapien dictum, quis posuere dui maximus. Nunc vestibulum sapien tortor, et tincidunt lacus blandit eget. Praesent lacus lectus, bibendum eu pharetra id, interdum sollicitudin magna. Cras mattis et arcu in tincidunt. Sed id nibh varius, tempor justo in, vehicula magna. Ut tempus varius dui, ac vehicula dolor elementum ut. Fusce dapibus tortor sed dui efficitur pretium.
						Vivamus sollicitudin dolor at dui cursus faucibus. Phasellus eleifend ex turpis, vitae convallis mauris facilisis in. Nullam vehicula, neque sed commodo fermentum, tortor lectus vulputate nunc, vitae fringilla lectus velit et eros. Ut suscipit eleifend tortor pharetra fringilla. Aenean vel eleifend massa. Nunc nec tincidunt augue. Proin leo metus, malesuada in dolor at, condimentum facilisis odio. Donec in tellus rutrum, eleifend ipsum id, tempor felis. Curabitur vulputate urna et ex hendrerit molestie.
					</AboutSection>
                    <AboutSection name="Mario Feijoo2" left={true} profile='images/mario1.jpeg'>The greatest man of All Time</AboutSection>
                    <AboutSection name="Mario Feijoo3" left={true} profile='images/mario.jpeg'>The greatest man of All Time</AboutSection>
                </Stack>
            </Box>
        </Box>
	);
}

export default AboutUs;
