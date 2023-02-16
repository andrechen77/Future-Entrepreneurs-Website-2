import {DonatePopup} from './../components/GetInvolvedPopup';
import {Box, Typography} from '@mui/material';
import {Button, Input, Container, FormControl, TextField} from '@mui/material';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.secondary.main,
  }));

const GetInvolved = () =>{
	return (
        <Box sx={{backgroundColor: 'secondary.main'}}>
            <div>
            <Typography align="center" variant="h2">
                Get Involved
            </Typography>

            <Typography align="center" variant="h3">
                Become a part of the team. Change a life
            </Typography>

            <Typography align="center" variant="body1">
                
                Lorem ipsum dolor sit amet. consectetur adipiscing elit. 
                Sed dictum orci ut augue vestibulum vestibulum sed bibendum quam.
                Maecenas ultricies nulla blandit ex satitis elementum. 

            </Typography>

            <Container sx={{ flexGrow: 0.1}}>
                <Grid container spacing={2} justifyContent = 'center'>
                    <Grid item xs={5}>
                        <Item>
                            <img src='/images/icon.png' alt="Logo" />
                        </Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item>
                            <img src='/images/icon.png' alt="Logo" />
                        </Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography align="left" variant="h3">
                            Donate
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography align="left" variant="h3">
                            Volunteer
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography align="left" variant="body1">
                            Lorem ipsum dolor sit amet. consectetur adipiscing elit. 
                            Sed dictum orci ut augue vestibulum vestibulum sed bibendum quam.
                            Maecenas ultricies nulla blandit ex satitis elementum. 
                            <DonatePopup/>
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography align="left" variant="body1">
                            Lorem ipsum dolor sit amet. consectetur adipiscing elit. 
                            Sed dictum orci ut augue vestibulum vestibulum sed bibendum quam.
                            Maecenas ultricies nulla blandit ex satitis elementum. 
                            
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            
            
        </div>
        </Box>
	);
}

export default GetInvolved;