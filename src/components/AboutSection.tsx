/** @jsxImportSource @emotion/react */

import { Box, Paper, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled, makeStyles, useTheme } from '@mui/material/styles'
import React from "react";
import { Children, cloneElement }  from "react";
import "./style.css";

// put this into theme.tsx instead
// const profileHeader = {
//     fontFamily: 'Commissioner',
// 	fontSize: 50,
// 	letterSpacing: 2.5,
// 	fontWeight: "bold",
// 	gridArea: "right"
// };

interface AboutSection {
	name: string;
	children: React.ReactNode;
	left: boolean;
	profile: string;
}

function AboutSection({name, children, left, profile}: AboutSection) {
	const theme = useTheme();

	return (
		<Paper elevation={1} sx={{ p: 2 }}>
			<Box sx={{ [theme.breakpoints.up("sm")]: { float: "right", maxWidth: 400 }, maxWidth: "100%"}}>
				<img css={{width: "100%"}} src={profile}/>
			</Box>
			<Typography variant="h3">{name}</Typography>
			<Typography variant="body1">{children}</Typography>
		</Paper>
	);
}

export default AboutSection;
