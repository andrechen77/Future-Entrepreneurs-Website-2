import { Button, Box, Container, Grid, TextField, Typography, Stack } from "@mui/material";
import Banner from "../components/Banner";
import { useState } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmission = () => {
		console.log(`${name} sent a message with email ${email}:\n${message}`)
		// TODO
	};

	const emailForm = (
		<Box>
			<Typography variant="h3" sx={{ my: 1 }}>Send us an email</Typography>
			<Stack spacing={1} alignItems="center">
				<TextField label="Name" fullWidth value={name} onChange={e => setName(e.target.value)}/>
				<TextField label="Email Address" fullWidth value={email} onChange={e => setEmail(e.target.value)}/>
				<TextField label="Message" fullWidth multiline rows={7} value={message} onChange={e => setMessage(e.target.value)}/>
				<Button variant="contained" onClick={handleSubmission}>Submit</Button>
			</Stack>
		</Box>
	);

	const sidebar = (
		<Box sx={{ typography: "body1", width: 300 }}>
			<Typography variant="h3">Info</Typography>
			<Box>1966 W. Hawley St. #2 Mundelein, IL 60060</Box>
			<Box>Email: info@reusanfp.com</Box>
			<Box>Phone: 847-833-8822</Box>
		</Box>
	);

	return (
		<Box>
			<Banner imgsrc="/images/chicago_skyline.jpg" ht={200}>CONTACT US</Banner>
			<Container>
				<Grid container spacing={3} sx={{ p: 3 }}>
					<Grid item xs={12} md>
						{emailForm}
					</Grid>
					<Grid item xs={12} md="auto">
						{sidebar}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Contact;