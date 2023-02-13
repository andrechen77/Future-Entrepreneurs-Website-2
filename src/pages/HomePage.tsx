import { ThemeProvider } from '@mui/material/';
import theme from './../theme';
import { Box, Paper, Stack } from '@mui/material/';
import Banner from '../components/Banner';
import MultiList from '../components/MultiList'

const HomePage = () => {
	return (
        <>
            <Box>
                <Banner imgsrc="/images/chicago_skyline.jpg" ht='600px'>Strive for the best.</Banner>
            </Box>
            <Box sx={{
                width: '100%',
                height: '300px',
                backgroundColor: '#465093'}}>
                <MultiList></MultiList>
                <Box sx={{  position: 'absolute',
                        left: '900px',
                        top: '750px',
                        padding: '10px',
                        width: '200px',
                        height: '200px',
                        backgroundColor: 'primary.dark',
                        backgroundImage: `url("${"/images/chicago_skyline.jpg"}")`
                        }}></Box>
            </Box>
        </>
	);
}

export default HomePage;

//<MultiList></MultiList>