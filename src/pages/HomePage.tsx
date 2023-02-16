// import { ThemeProvider } from '@mui/material/';
import theme from './../theme';
import { Box, Container} from '@mui/material/';
import Banner from '../components/Banner';

const HomePage = () => {
	return (
        <>
            <Box>
                <Banner imgsrc="/images/chicago_skyline.jpg" ht='600px'>Strive for the best.</Banner>
            </Box>

            <Container maxWidth = "sm">
			<Box style = {{fontSize: 100,
			textAlign: 'center',
			fontWeight: 'bold',
            marginTop: 120,
            marginBottom: 70}}>
			Our Mission 
			</Box>
            </Container>

            <Container sx={{ maxWidth:'60%'  }} maxWidth={false} >
            <p style = {{
					fontSize: 60,
					fontWeight: 'normal',
					textAlign: 'center',
				}}> Our mission is to create an educational environment that provides opportunities and empowers 
                young adults to learn business skills through both hands-on experience and training lessons. 
                We plan to provide youth with resources that will increase their chances of achieving success 
                in their business.   
                <br></br> 
                <br></br> 
                Our  vision  is  to  build  an  organization  that  has  the  right  programs,  information,  insights, 
                experience, and services that help youth adults build successful and profitable businesses.  
                <br></br> 
                <br></br> 
                We  understand  that  embarking  on  such  a  journey  takes  a  huge  amount  of  time,  effort,  and 
                investment.  Knowing  where  and  how  to  begin  can  be  equally  daunting;  this  is  why  Future 
                Entrepreneurs USA was created.
                <br></br> 
                <br></br> 
                <br></br> 
                <br></br> 
                {/* <Box style = {{backgroundImage: "/images/homepage.png"}}>

                "Future Entrepreneurs USA is a corporation that teaches hands-on skills to young adults looking to build 
                their business in a cafe/smoothie shop. Aside from this, we also offer an investment club program, and an 
                AV space/studio to create marketing pieces."
                </Box> */}
                {/* <img src = "/images/homepage.png" width = "100%"></img> */}
                <br></br> 
                <br></br> 


                <iframe width="2240" height="1260" 
                    src="https://www.youtube.com/embed/92ZmzD70sOU" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    > 
                </iframe>

                </p>

                



                {/* <Box sx={{ 
                        position: 'relative',
                        display: "inline-flex",
                        justify: 'center',
                        padding: '10px',
                        width: "100%",
                        height: 500,
                        flex: 1
                        }}>
                </Box> */}

                </Container>
            
        </>
	);
}

export default HomePage;





 




{/* <Box style = {{backgroundImage: `url("${"/images/icon.png"}")`,
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

			</Box> */}