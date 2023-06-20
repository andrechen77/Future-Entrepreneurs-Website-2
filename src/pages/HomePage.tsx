// Aiya someone fix this code please. I'd rather not touch it with a ten foot pole ngl

//import { ThemeProvider } from '@mui/material/';
import { Box, Paper, Container, Grid, Typography, TextField, Button, Divider, MenuItem} from '@mui/material/';
import Slider from '../components/Slider'
import { styled } from '@mui/system';
import { Link } from "react-router-dom";

const AboutSection = styled('section')({
    padding: '30px 0',
  });
  
  const AboutGrid = styled(Grid)({
    marginTop: '0px',
    
  });
  
  const AboutImage = styled('img')({
    width: '100%',
    height: "90%",
    objectFit: 'cover',
    maxWidth: '100%',
    maxHeight: '100%',
    
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
                
          <Typography variant="body1" sx={{ pb: 5 }}>
            Future Entrepreneurs USA is a Chicago-based non-profit organization whose mission is to create an educational environment 
            that provides opportunities and empowers young adults to
            learn business skills through both hands-on experience and training lessons. We plan to provide youth with
            resources that will increase their chances of achieving success in their business.
            <br />
            <br />
            Our vision is to build an organization that has the right programs, information, insights, experience, and
            services that help young adults build successful and profitable businesses.
          </Typography>


                
                <div style = {{ display: 'flex'}}>
                  <hr></hr>
                </div>
                  <iframe width="680" height="400" 
                    src="https://www.youtube.com/embed/92ZmzD70sOU" 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"> 
                  </iframe>
                  </p>                
                </Container>
                 
                {/* <div style = {{width: "80%", display: 'flex', alignItems: 'center'}}>
                <hr></hr>
                </div> */}

                <AboutSection>
      <Container sx= {{padding: 3}}>
        <Typography variant="h4" sx = {{ fontWeight: 'bold', marginBottom: '5px' }} align="center">
          Interested in getting involved?
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Follow our links below and become a future leader of tomorrow. 
        </Typography>
        <AboutGrid container spacing={4} justifyContent="center" color= " #002C73ff">
          <Grid item xs={12} sm={4}>
            <Box height={400} display="flex" justifyContent="center" alignItems="center" >
              <AboutImage src="/images/calendar.jpg" alt="About 1" />
            </Box>
            <ButtonWrapper>
              <Button variant="contained" color="primary">
                <MenuItem  onClick={() => window.scrollTo(0, 0)} component={ Link } to="/Calendar"  style={{ fontFamily: "Commissioner", fontSize: '18px', fontWeight: 'bold'}}>Calendar
                  </MenuItem>
              </Button>
            </ButtonWrapper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box height={400} display="flex" justifyContent="center" alignItems="center">
              <AboutImage src="/images/blog.jpg" alt="About 2" />
            </Box>
            <ButtonWrapper>
              <Button variant="contained" color="primary">
                <MenuItem onClick={() => window.scrollTo(0, 0)}  component={ Link } to="/Blog" style={{ fontFamily: "Commissioner", fontSize: '18px', fontWeight: 'bold'}}>Blog
                  </MenuItem>
              </Button>
            </ButtonWrapper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box height={400} display="flex" justifyContent="center" alignItems="center">
              <AboutImage src="/images/get-involved-home.jpg" alt="About 3" />
            </Box>
            <ButtonWrapper>
              <Button variant="contained" color="primary">
                <MenuItem onClick={() => window.scrollTo(0, 0)} component={ Link } to="/GetInvolved" style={{ fontFamily: "Commissioner", fontSize: '18px', fontWeight: 'bold'}} >Get Involved
                  </MenuItem>
              </Button>
            </ButtonWrapper>
          </Grid>
        </AboutGrid>
      </Container>
    </AboutSection>

                    <div style = {{width: "80%", 
            display: 'flex'}}>
                <hr></hr>
                </div>

                            
        </>
	);
}

export default HomePage;




