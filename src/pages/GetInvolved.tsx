import {DonatePopup, VolunteerPopup} from './../components/GetInvolvedPopup';
import {Box, Typography, Grid, Paper, styled, Container} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.secondary.main,
  }));

const GetInvolved = () =>{
	return (
        <Box sx={{backgroundColor: 'secondary.main', padding:5}}>
            <div>
            <Typography align="center" variant="h2" >
                Get Involved
            </Typography>

            <Typography align="center" variant="h3">
                Become a part of the team. Change a life
            </Typography>

            <Typography align="center" variant="body1" sx={{padding:3}}>
                
                Lorem ipsum dolor sit amet. consectetur adipiscing elit. 
                Sed dictum orci ut augue vestibulum vestibulum sed bibendum quam.
                Maecenas ultricies nulla blandit ex satitis elementum. 

            </Typography>

            <Container sx={{ flexGrow: 0.1}}>
                <Grid container spacing={2} justifyContent = 'center'>
                    <Grid item xs={5} sx={{padding:2}}>
                        <Item>
                            <img src='/images/icon.png' alt="Logo" />
                        </Item>
                    </Grid>
                    <Grid item xs={5} >
                        <Item>
                            <img src='/images/icon.png' alt="Logo" />
                        </Item>
                    </Grid>
                    <Grid item xs={5} >
                        <Typography align="left" variant="h3">
                            Donate
                        </Typography>
                    </Grid>
                    <Grid item xs={5} >
                        <Typography align="left" variant="h3">
                            Volunteer
                        </Typography>
                    </Grid>
                    <Grid item xs={5} >
                        <Typography align="left" variant="body1">
                            Lorem ipsum dolor sit amet. consectetur adipiscing elit. 
                            Sed dictum orci ut augue vestibulum vestibulum sed bibendum quam.
                            Maecenas ultricies nulla blandit ex satitis elementum. 
                            <br />
                            <br />
                            <DonatePopup/>
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography align="left" variant="body1">
                            Lorem ipsum dolor sit amet. consectetur adipiscing elit. 
                            Sed dictum orci ut augue vestibulum vestibulum sed bibendum quam.
                            Maecenas ultricies nulla blandit ex satitis elementum.
                            <br />
                            <br />
                            <VolunteerPopup/>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </Box>
	);
}

export default GetInvolved;