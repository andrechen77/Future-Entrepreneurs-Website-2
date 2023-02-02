/** @jsxImportSource @emotion/react */

import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type LinkData = {label: string, addr: string};

function NavBar({logoSrc, links}: {logoSrc: string, links: LinkData[]}) {
	const paddingAmount = 10;
	const wrapperStyle = {
		padding: `${paddingAmount}px ${paddingAmount}px`,
	};
	const gridStyle = {
		height: 50,
		paddingRight: 50,
	};

	return (
		<div css={wrapperStyle}>
			<Grid
				container
				css={gridStyle}
				justifyContent="space-between"
				alignContent="center"
			>
				<Grid item xs="auto">
					<NavBarLogo imagesrc={logoSrc}/>
				</Grid>
				<Grid item xs="auto" container alignContent="center" justifyContent="flex-end" spacing={5}>
					<NavBarLinks links={links}/>
				</Grid>
			</Grid>
		</div>
	);
}

function NavBarLogo({imagesrc}: {imagesrc: string}) {
	const style = {
		maxWidth: 300,
		maxHeight: 45,
		"&:hover": {
			maxWidth: 400,
			maxHeight: 50,
		},
	};

	return (
		<a href="https://wikipedia.com" onClick={() => console.log("I've been clicked")}>
			<img css={style} src={imagesrc} alt="logo"/>
		</a>
	);
}

function NavBarLinks({links}: {links: LinkData[]}) {
	const theme = useTheme();

	const linkStyle = {
		textDecoration: "none",
		color: theme.palette.info.light,
		"&:hover": {
			color: theme.palette.info.dark,
		},
	};

	return (
		<>{links.map(link => {
			return (
				<Grid item key={link.label}>
					<a href={link.addr} css={linkStyle}><Typography variant="button">{link.label}</Typography></a>
				</Grid>
			);
		})}</>
	);
}

export default NavBar;
