import { ThemeProvider } from '@mui/material/';
import theme from './../theme';

const HomePage = () =>{
	return (


        <>
        <Slider></Slider>

            <Container maxWidth = "sm">
			<Box style = {{fontSize: 50,
			textAlign: 'center',
			fontWeight: 'bold',
            marginTop: 120,
            marginBottom: 70}}>
			Our Mission 
			</Box>
            </Container>

            <Container sx={{ maxWidth:'60%', position: 'center'}} maxWidth={false} >
            <p style = {{
					fontSize: 30,
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

                <div style = {{width: "120%", 
            position: 'relative', 
            marginLeft: -100}}>
                <hr></hr>
                </div>

                <iframe width="950" height="600" 
                    src="https://www.youtube.com/embed/92ZmzD70sOU" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    > 
                </iframe>
                <div style = {{width: "120%", 
            position: 'relative', 
            marginLeft: -100, 
            marginTop: 50}}>
                <hr></hr>
                </div>


                <Grid container direction="row" alignItems="center" marginBottom = {5}>
                    <Grid item style = {{backgroundImage: `url("${"/images/home.png"}")`,
		width: 650,
		height: 370,
		marginLeft: 380,
		marginTop: 10,
        }}>
                </Grid>
                <Grid item style = {{fontSize: 45,
			textAlign: 'left',
            position: 'relative',
			fontWeight: 'bold',
            flexWrap: 'wrap-reverse',
            marginTop: - 700,
            marginRight: 200,
            marginLeft: -100}} >
                     The Future of Business
                </Grid>
                <Grid item style = {{fontSize: 30,
                textAlign: 'left', 
                marginTop: -580,
                marginRight: 200,
                marginLeft: -580,
                flexWrap: 'wrap-reverse'
                }}>
                    text
                </Grid>
                    </Grid>


                    <div style = {{width: "120%", 
            position: 'relative', 
            marginLeft: -100}}>
                <hr></hr>
                </div>

                <Box sx={{
                width: '115%',
                marginLeft: -9,
                marginTop: 10,
                alignItems: 'center',
                height: '300px',
                backgroundColor: '#002C73ff'
                }}>
                    <Typography color = "white" fontWeight={'bold'} fontSize = {40}> 
                    Join the FE-USA Community
                    </Typography>

                    <Typography color = "white" fontWeight={'bold'} fontSize = {20} marginBottom  = {10}> 
                    Sign up with your name and email to receive updates!
                    </Typography>
                    <Box style = {{flexWrap: 'nowrap'}}>
                    <TextField  id="outlined-basic" label="First Name" variant="outlined"  margin = {'none'}/>
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />   
                    </Box> 
                        </Box>
                        
                        
                        </p>


                </Container>
            
        </>
	);
}

export default HomePage;