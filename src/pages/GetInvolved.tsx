import {DonatePopup} from './../components/GetInvolvedPopup';
import {Box, Typography} from '@mui/material';

const GetInvolved = () =>{
	return (
        <Box sx={{backgroundColor: 'secondary.main'}}>
            <div>
            <Typography variant="h2">
                Get Involved
            </Typography>

            <Typography variant="h3">
                Become a part of the team. Change a life
            </Typography>

            <Typography variant="body1">
                Lorem ipsum dolor sit amet. consectetur adipiscing elit. 
                Sed dictum orci ut augue vestibulum vestibulum sed bibendum quam.
                Maecenas ultricies nulla blandit ex satitis elementum. 
            </Typography>

            <img src='/images/icon.png' alt="Logo" />
            <img src='/images/icon.png' alt="Logo" />
            <br></br>
            <DonatePopup/>
        </div>
        </Box>
	);
}

export default GetInvolved;