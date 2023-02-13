/** @jsxImportSource @emotion/react */

import { Box, Paper, Grid } from "@mui/material";
import { createTheme, ThemeProvider, styled, makeStyles } from '@mui/material/styles'
import React from "react";
import { Children, cloneElement }  from "react"; 

interface AboutSection { 
	name: string;
	children: React.ReactNode;
	left: boolean;
}

function AboutSection({name, children, left}: AboutSection) {

	return (
		<Paper elevation={8} sx={{padding: 2, typography: "body1"}}>
			<Grid container direction={left? "column": "row-reverse"}>
				<Grid item ><h2 style={{padding: 2}}>{name}</h2></Grid>
				<Grid item><div>{children}</div></Grid>
			</Grid>
			</Paper>
	);
}


export default AboutSection;