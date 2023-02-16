import { Box, Button, Grid, Stack } from '@mui/material';
import { LinkData } from "../types/LinkData";
import BigLogo from './BigLogo';

function NavBar({links}: {links: LinkData[]}) {
	return (
		<Box sx={{ py: 1, px: 3, bgcolor: "primary.main"}}>
			<Grid
				container
				justifyContent="space-between"
				alignContent="center"
			>
				<Grid item xs="auto">
					<BigLogo/>
				</Grid>
				<Grid item xs={12} md="auto" container alignContent="center">
					<NavBarLinks links={links}/>
				</Grid>
			</Grid>
		</Box>
	);
}

function NavBarLinks({links}: {links: LinkData[]}) {
	return (
		<Stack direction={{ xs: "column", md: "row" }} spacing={3}>
			{links.map(link => {
				return (
					<Grid item key={link.label} xs="auto">
						<Button
							href={link.addr}
							variant="text"
							sx={{color: "common.white"}}
							size="large"
						>{link.label}</Button>
					</Grid>
				);
			})}
		</Stack>
	);
}

export default NavBar;
