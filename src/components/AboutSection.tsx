/** @jsxImportSource @emotion/react */

import { Box, Paper, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import React from "react";

interface AboutSectionProps {
	name: string;
	children: React.ReactNode;
	left: boolean;
	profile: string;
}

function AboutSection({name, children, left, profile}: AboutSectionProps) {
	const theme = useTheme();

	return (
		<Paper elevation={1} sx={{ p: 2 }}>
			<Box sx={{ p: 2, [theme.breakpoints.up("sm")]: { float: (left ? "left" : "right"), maxWidth: 400 }, maxWidth: "100%"}}>
				<img css={{width: "100%"}} src={profile} alt={name}/>
			</Box>
			<Typography variant="h3">{name}</Typography>
			<Typography variant="body1">{children}</Typography>
		</Paper>
	);
}

export default AboutSection;
