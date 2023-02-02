/** @jsxImportSource @emotion/react */

import { Button, Grid } from '@mui/material';

function NavBar({logoSrc, labels}: {logoSrc: string, labels: string[]}) {
	const gridStyle = {
		height: 100,
	};
	const wrapperStyle = {
		padding: [100, 200],
		border: "10px solid yellow",
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
				<Grid item xs="auto" container alignContent="center" justifyContent="flex-end" spacing={10}>
					<NavBarLinks labels={labels}/>
				</Grid>
			</Grid>
		</div>
	);
}

function NavBarLogo({imagesrc}: {imagesrc: string}) {
	const style = {
		maxWidth: 300,
		maxHeight: 80,
		"&:hover": {
			maxWidth: 400,
			maxHeight: 100,
		},
	};

	return (
		<a href="https://wikipedia.com" onClick={() => console.log("I've been clicked")}>
			<img css={style} src={imagesrc} alt="logo"/>
		</a>
	);
}

function NavBarLinks({labels}: {labels: string[]}) {
	return (
		<>
			{labels.map(label => {
				return (
					<Grid item>
						<Button variant="contained">{label}</Button>
					</Grid>
				);
			})}
		</>
	);
}

export default NavBar;
