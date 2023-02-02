/** @jsxImportSource @emotion/react */

import { Box, Button, Grid } from '@mui/material';

type LinkData = {label: string, addr?: string};

const navBarHeight = 80;

function NavBar({logoSrc, links}: {logoSrc: string, links: LinkData[]}) {
	return (
		<Box sx={{ padding: 1, paddingRight: 3, bgcolor: "primary.main"}}>
			<Grid
				container
				css={{ height: navBarHeight }}
				justifyContent="space-between"
				alignContent="center"
			>
				<Grid item xs="auto">
					<NavBarLogo imagesrc={logoSrc}/>
				</Grid>
				<Grid item xs="auto" container alignContent="center" justifyContent="flex-end" spacing={3}>
					<NavBarLinks links={links}/>
				</Grid>
			</Grid>
		</Box>
	);
}

function NavBarLogo({imagesrc}: {imagesrc: string}) {
	const style = {
		maxWidth: 300,
		maxHeight: navBarHeight,
		"&:hover": {
			maxWidth: 301,
			maxHeight: navBarHeight + 1,
		},
	};

	return (
		<a href="/" onClick={() => console.log("I've been clicked")}>
			<img css={style} src={imagesrc} alt="logo"/>
		</a>
	);
}

function NavBarLinks({links}: {links: LinkData[]}) {
	return (
		<>{links.map(link => {
			return (
				<Grid item key={link.label}>
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
