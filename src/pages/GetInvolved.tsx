import {PopupPrompt } from './../components/GetInvolvedPopup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

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

            <img src='/images/icon.png' alt="Logo" />
            <img src='/images/icon.png' alt="Logo" />
            
            <PopupPrompt/>
        </div>
        </Box>
	);
}

export default GetInvolved;