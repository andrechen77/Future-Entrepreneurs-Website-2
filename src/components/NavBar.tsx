import { Box, Button, Grid } from '@mui/material';
import { LinkData } from "../types/LinkData";
import BigLogo from './BigLogo';

function NavBar({links}: {links: LinkData[]}) {
	return (
		<Box sx={{ padding: 1, paddingRight: 3, bgcolor: "primary.main"}}>
			<Grid
				container
				// css={{ height: navBarHeight }}
				justifyContent="space-between"
				alignContent="center"
			>
				<Grid item xs="auto">
					<BigLogo/>
				</Grid>
				<Grid item xs="auto" container alignContent="center" justifyContent="flex-end" spacing={3}>
					<NavBarLinks links={links}/>
				</Grid>
			</Grid>
		</Box>
	);
}

function NavBarLinks({links}: {links: LinkData[]}) {
	return (
		<>{links.map(link => {
			return (
				<Grid item key={link.label} xs={12} lg="auto">
					<Button
						href={link.addr}
						variant="text"
						sx={{color: "common.white"}}
						size="large"
					>{link.label}</Button>
				</Grid>
			);
		})}</>
	);
}

export default NavBar;
