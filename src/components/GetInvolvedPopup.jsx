import Popup from 'reactjs-popup';
import {Button, Input, Container, FormControl, TextField} from '@mui/material';
const buttoncss = {
	margin: 1,
	padding: 0,
	backgroundColor: 'primary.main',
	color: 'primary.dark',
};
export function DonatePopup() {
	return (
		<Popup trigger=
			{<Button sx={{
				margin: 3,
				padding: 1,
				backgroundColor: 'primary.main',
				color: 'primary.dark',
				}} 
				variant='contained'> 
				Donate Here 
			</Button>}
			modal nested>
			{
				close => (
					<div className='modal'>
						<Container sx = {{
								backgroundColor: 'primary.light',
								buffer: 2,
								border: 3,
							}}>
							<div className='content'>
								<p>
									Donate Here: 
								</p>
								<Button sx = {buttoncss}> $10 </Button>
								<Button sx = {buttoncss}> $25 </Button>
								<Button sx = {buttoncss}> $50 </Button>
								<Button sx = {buttoncss}> $100 </Button>
								<Button sx = {buttoncss}> $250 </Button>
								<Button sx = {buttoncss}> $1000 </Button>
								<FormControl>
									<TextField id="DonationAmount" label="Other: " variant="outlined" />
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
						</Container>
					</div>
				)
			}
		</Popup>
	)
};
