import {DonatePopup} from './../components/GetInvolvedPopup';
import {Box, Typography, Grid, Paper, styled} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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

            <Typography variant="body1">
                Lorem ipsum dolor sit amet. consectetur adipiscing elit. 
                Sed dictum orci ut augue vestibulum vestibulum sed bibendum quam.
                Maecenas ultricies nulla blandit ex satitis elementum. 
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>
                            <img src='/images/icon.png' alt="Logo" />
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <img src='/images/icon.png' alt="Logo" />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            
            <br></br>
            <DonatePopup/>
        </div>
        </Box>
	);
}

export default GetInvolved;