import { ThemeProvider } from '@mui/material/';
import theme from './../theme';
import { Box, Paper, Stack, Container} from '@mui/material/';
import Banner from '../components/Banner';
import MultiList from '../components/MultiList'

const HomePage = () => {
	return (
        <>
            <Box>
                <Banner imgsrc="/images/chicago_skyline.jpg" ht='600px'>Strive for the best.</Banner>
            </Box>

            <Container maxWidth = "sm">
			<Box style = {{backgroundImage: `url("${"/images/icon.png"}")`,
		width: 800,
		height: 400,
        marginTop: 50,
        marginBottom: 20,
        display: 'flex'}}>
			<div style = {{fontSize: 75,
			textAlign: 'right',
			marginLeft: 1000,
			fontWeight: 'bold'}}>
				Mission
				<p style = {{
					fontSize: 30,
					fontWeight: 'normal',
					textAlign: 'center'
				}}> Our mission </p>
			</div>

			</Box>

        <Box style = {{backgroundImage: `url("${"/images/icon.png"}")`,
		width: 800,
		height: 400}}>
			<div style = {{fontSize: 75,
			textAlign: 'left',
			marginLeft: -600,
			fontWeight: 'bold'}}>
				More Info
				<p style = {{
					fontSize: 30,
					fontWeight: 'normal',
					textAlign: 'center'
				}}>  </p>
			</div>

			</Box>
            </Container>
            
            {/* <Box>
                <MultiList></MultiList>
                <Box sx={{ 
                        position: 'relative',
                        left: '900px',
                        display: "inline-flex",
                        padding: '10px',
                        width: '400px',
                        height: '400px',
                        backgroundColor: 'primary.dark',
                        backgroundImage: `url("${"/images/chicago_skyline.jpg"}")`
                        }}>

                </Box>
            </Box> */}
        </>
	);
}

export default HomePage;




// Our mission is to create an educational environment that provides opportunities and empowers 
// young adults to learn business skills through both hands-on experience and training lessons. 
// We plan to provide youth with resources that will increase their chances of achieving success 
// in their business.   
 
// Our  vision  is  to  build  an  organization  that  has  the  right  programs,  information,  insights, 
// experience, and services that help youth adults build successful and profitable businesses.  
 
// We intend to promote mentorship, intelligence skill-building support, assistance with access to 
// other professionals at the top corporate level and opportunities for our clients to launch their 
// businesses. We are committed to helping the youths in our community thrive and become the 
// best in their industry.  
 
// We  understand  that  embarking  on  such  a  journey  takes  a  huge  amount  of  time,  effort,  and 
// investment.  Knowing  where  and  how  to  begin  can  be  equally  daunting;  this  is  why  Future 
// Entrepreneurs USA was created. 