import Popup from 'reactjs-popup';
import {Button, Input, FormControl, TextField, Typography, Grid} from '@mui/material';
import {Link} from 'react-router-dom';

const buttoncss = {
	margin: 1,
	padding: 0,
	backgroundColor: 'primary.main',
	color: 'primary.light',
};

const overlayStyle = { background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' };

/* export function DonatePopup() {
	return (
		<Popup trigger=
			{<Button sx={{
				margin: 0,
				padding: 1,
				backgroundColor: 'primary.main',
				color: 'primary.light',
				}}
				variant='contained'>
				Donate Here
			</Button>}
			modal nested
			overlayStyle={overlayStyle}
			sx = {{
				backdropFilter: 'blur(8px)',
			}}>
			{
				close => (
					<Grid className = 'modal' sx = {{
							backgroundColor: 'primary.light',
							border: 3,
							borderColor: 'primary.main',
							borderRadius: '16px',
							padding: 1,
						}}>
						<div className='content'>
							<Typography variant='h4'>
								Donate Here:
							</Typography>
							<Button sx = {buttoncss}> $10 </Button>
							<Button sx = {buttoncss}> $25 </Button>
							<Button sx = {buttoncss}> $50 </Button>
							<Button sx = {buttoncss}> $100 </Button>
							<Button sx = {buttoncss}> $250 </Button>
							<Button sx = {buttoncss}> $1000 </Button>
							<br></br>
							<FormControl>
								<TextField id="DonationAmount" label="Other: " variant="outlined" size='small'/>
								<Input type="submit" value="Donate" sx = {buttoncss}/>
							</FormControl>
						</div>
						<div>
							<Button onClick=
								{() => close()}
								sx = {buttoncss}>
									Close
							</Button>
						</div>
					</Grid>
				)
			}
		</Popup>
	)
}; */

export function VolunteerPopup() {
	return (
        <Button
            component={Link}
            to={{ pathname: "https://docs.google.com/forms/d/e/1FAIpQLSfyQNNA1YQkGaBwlGf01WQEJCSRvr9K0zzJM9adFHN_yEtJEQ/viewform" }}
            target="_blank"
            sx={{
                margin: 0,
                padding: 1,
                color: 'primary',
            }}
            variant="contained"

        >
            Volunteer Here
        </Button>
    );
};

export function DonatePopup() {
    return (
        <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
            style={{ display: 'inline-block' }}
        >
            <input
                type="hidden"
                name="hosted_button_id"
                value="YESJLWCPP79NJ"
            />
            <Button
                type="submit"
                sx={{
                    margin: 0,
                    padding: 1,
                    color: 'primary',
                }}
                variant="contained"
            >
                Donate Here
            </Button>
            <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
            />
        </form>
    );
}