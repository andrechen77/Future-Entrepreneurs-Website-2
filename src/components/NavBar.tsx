import { Box, Button, Collapse, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
import { LinkData } from "../types/LinkData";
import BigLogo from './BigLogo';
import { useNavigate } from 'react-router-dom';

function NavBar({links}: {links: LinkData[]}) {
	const theme = useTheme();
	const collapse = useMediaQuery(theme.breakpoints.down("lg"));
	const [linksOpen, setLinksOpen] = useState(false);

	return (
		<Box sx={{ py: 1, px: 3, bgcolor: "primary.main", color: "common.white" }} justifyContent="center">
			<Grid
				container
				justifyContent="space-between"
				alignItems="center"
			>
				<Grid item xs="auto">
					<BigLogo/>
				</Grid>
				{collapse && <Grid item>
					<IconButton onClick={() => setLinksOpen(!linksOpen)} color="inherit">
						{linksOpen ? <MenuOpenIcon/> : <MenuIcon/>}
					</IconButton>
				</Grid>}
				{!collapse && <Grid item xs={12} md="auto">
					<NavBarLinks links={links}/>
				</Grid>}
			</Grid>
			<Collapse in={collapse && linksOpen}>
				<NavBarLinks links={links}/>
			</Collapse>
		</Box>
	);
}

function NavBarLinks({links}: {links: LinkData[]}) {
	const navigate = useNavigate();

	return (
		<Grid container spacing={3}>
			{links.map(link => {
				return (
					<Grid item key={link.label} xs="auto">
						<Button
							onClick={() => navigate(link.addr ?? "")}
							variant="text"
							size="large"
							color="inherit"
						>{link.label}</Button>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default NavBar;
