import {PopupPrompt } from './../components/GetInvolvedPopup';
const GetInvolved = () =>{
	return (
        <div>
        <Box sx={{backgroundColor: 'secondary.main'}}>
            <h1>
                Get Involved
            </h1>
            <h2>
                Become a part of the team. Change a life
            </h2>
            <p>
                Lorem ipsum dolor sit amet. consectetur adipiscing elit. 
                Sed dictum orci ut augue vestibulum vestibulum sed bibendum quam.
                Maecenas ultricies nulla blandit ex satitis elementum. 
            </p>
            <img src='/images/icon.png' alt="Logo" />
            <img src='/images/icon.png' alt="Logo" />
            
            <PopupPrompt/>
        </div>
	);
}

export default GetInvolved;