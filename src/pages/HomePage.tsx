// Aiya someone fix this code please. I'd rather not touch it with a ten foot pole ngl

//import { ThemeProvider } from '@mui/material/';
import { Box, Container, Grid, Typography, TextField, Button, Divider} from '@mui/material/';
import Slider from '../components/Slider'
import { styled } from '@mui/system';


const AboutSection = styled('section')({
    padding: '30px 0',
  });
  
  const AboutGrid = styled(Grid)({
    marginTop: '0px',
    
  });
  
  const AboutImage = styled('img')({
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    
  });
  
  const ButtonWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  });

const HomePage = () => {
	return (
        <>
        <Slider></Slider>

            <Container maxWidth = "sm">
                <Typography variant = "h4" sx = {{textAlign: 'center', fontWeight: 'bold', marginTop: 5}} > Our Mission</Typography>
            </Container>

            <Container sx={{ maxWidth:'60%', position: 'center'}} maxWidth={false} >
            <p style = {{
					fontSize: 20,
					fontWeight: 'normal',
					textAlign: 'center',
				}}> 
                
                    <Typography variant="body1" sx={{ fontSize: { xs: 13, sm: 20 }, px: 2, pb: 4 }}>
          Our mission is to create an educational environment that provides opportunities and empowers young adults to
           learn business skills through both hands-on experience and training lessons. We plan to provide youth with
           resources that will increase their chances of achieving success in their business.
           <br />
           <br />
           Our vision is to build an organization that has the right programs, information, insights, experience, and
           services that help young adults build successful and profitable businesses.
                  </Typography>
                  </p>
                </Container>
                
                  <div style = {{ display: 'flex'}}>
                <hr></hr>
                </div>

                <Container style = {{ display: "flex", alignItems: "center"}}>
                <Box height={10} paddingTop = {30} paddingBottom = {30} display="flex" justifyContent="center" alignItems="center">
                    <iframe width="680" height="400" 
                    src="https://www.youtube.com/embed/92ZmzD70sOU" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    >  </iframe>
                </Box>
              
                </Container>

                <Divider style = {{display: 'flex'}}/>
                
                {/* <div style = {{width: "80%", display: 'flex', alignItems: 'center'}}>
                <hr></hr>
                </div> */}

                <AboutSection>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          The Future of Business
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Typography>
        <AboutGrid container spacing={4} justifyContent="center" color= " #002C73ff">
          <Grid item xs={12} sm={4}>
            <Box height={400} display="flex" justifyContent="center" alignItems="center">
              <AboutImage src="/images/icon.png" alt="About 1" />
            </Box>
            <ButtonWrapper>
              <Button variant="contained" color="primary" href = "/Calendar">Upcoming Events</Button>
            </ButtonWrapper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box height={400} display="flex" justifyContent="center" alignItems="center">
              <AboutImage src="/images/icon.png" alt="About 2" />
            </Box>
            <ButtonWrapper>
              <Button variant="contained" color="primary" href = "/Programs">Programs</Button>
            </ButtonWrapper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box height={400} display="flex" justifyContent="center" alignItems="center">
              <AboutImage src="/images/icon.png" alt="About 3" />
            </Box>
            <ButtonWrapper>
              <Button variant="contained" color="primary" href = "/GetInvolved">Get Involved</Button>
            </ButtonWrapper>
          </Grid>
        </AboutGrid>
      </Container>
    </AboutSection>

                    <div style = {{width: "80%", 
            display: 'flex'}}>
                <hr></hr>
                </div>

                <Container style={{ alignContent: 'center', display: 'flex', alignItems: 'center' }}>
  <Box
    sx={{
      mt: 8,
      alignContent: 'center',
      marginLeft: 10,
      marginBottom: 8,
      color: 'white',
      width: '100%',
      maxWidth: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py: 5,
      backgroundColor: '#002C73ff',
    }}
  >
    <Typography color="white" fontWeight="bold" fontSize={{ xs: 30, sm: 40 }}>
      Join the FE-USA Community
    </Typography>

    <Typography color="white" fontWeight="bold" fontSize={{ xs: 16, sm: 20 }} mb={3}>
      Sign up with your name and email to receive updates!
    </Typography>

    <Box sx={{ display: 'flex', gap: '10px', mb: 3, width: 1 }}>
      <TextField
        id="first-name"
        label="First Name"
        variant="outlined"
        size="small"
        InputLabelProps={{
          style: { color: 'white' },
        }}
        inputProps={{ style: { color: 'white' } }}
      />
      <TextField
        id="last-name"
        label="Last Name"
        variant="outlined"
        size="small"
        InputLabelProps={{
          style: { color: 'white' },
        }}
        inputProps={{ style: { color: 'white' } }}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        size="small"
        InputLabelProps={{
          style: { color: 'white' },
        }}
        inputProps={{ style: { color: 'white' } }}
      />
    </Box>
  </Box>
</Container>

                            
        </>
	);
}

export default HomePage;




