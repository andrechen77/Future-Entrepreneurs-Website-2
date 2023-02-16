/** @jsxImportSource @emotion/react */

import { Box, Paper, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled, makeStyles, useTheme } from '@mui/material/styles'
import React from "react";
import { Children, cloneElement }  from "react";
import "./style.css";



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
			<Box sx={{ p: 2, [theme.breakpoints.up("sm")]: { float: (left ? "left" : "right"), maxWidth: 400 }, maxWidth: "100%"}}>
				<img css={{width: "100%"}} src={profile}/>
			</Box>
			<Typography variant="h3">{name}</Typography>
			<Typography variant="body1">{children}</Typography>
		</Paper>
	);
}

export default AboutSection;
