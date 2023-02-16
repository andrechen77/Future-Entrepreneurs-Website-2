/** @jsxImportSource @emotion/react */

import { Box, Paper, Grid } from "@mui/material";
import { createTheme, ThemeProvider, styled, makeStyles } from '@mui/material/styles'
import React from "react";
import { Children, cloneElement }  from "react"; 
import "./style.css";

const profilePic = { 
	justifyContent: "right",
	alignSelf: "right",
	width: '100%',
	height: '100%'
};

const profileHeader = { 
    fontFamily: 'Commissioner',
	fontSize: 50,
	letterSpacing: 2.5,
	fontWeight: "bold",
	gridArea: "right"
};

const profileDescription = { 
};
const halfSize = {
	width: '50%',
	align: "left",
	height: '100%'
};

const halfSizeRight = {
	width: '50%'	,
	align: "right",
	flex: 1,
	marginLeft: 'auto'
};
interface AboutSection {
	name: string;
	children: React.ReactNode;
	left: boolean;
	profile: string;
}

function AboutSection({name, children, left, profile}: AboutSection) {

	return (
		<Paper elevation={8} sx={{padding: 2, typography: "body1", width: '100%', height: 500}} >
			<Grid container direction={left? "column": "row-reverse"} >
				<Grid item lg={6} style={halfSize}>
					<div style={profileHeader}>{name}</div>
					<div style={profileDescription}>{children}</div>
				</Grid>
				<Grid item lg={6} style={halfSize} >
					<img style ={profilePic} src={profile} />
				</Grid>
			</Grid>
		</Paper>
	);
}


export default AboutSection;
