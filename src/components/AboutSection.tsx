/** @jsxImportSource @emotion/react */

import { Box, Paper, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled, makeStyles } from '@mui/material/styles'
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
	return (
		<Paper elevation={1} sx={{ p: 2 }}>
			<img style={{ float: "right", padding: 20}} src={profile}/>
			<Typography variant="h3">{name}</Typography>
			<Typography variant="body1">{children}</Typography>
		</Paper>
	);
}

export default AboutSection;
