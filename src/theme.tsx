import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: [
			"Segoe UI",
			"Roboto",
			"Helvetica",
			"Times New Roman",
			"Arial",
			"sans-serif",
		].join(','),
		h3: {
			fontFamily: 'Commissioner',
			fontSize: 50,
			letterSpacing: 2.5,
			fontWeight: "bold",
			gridArea: "right",
			paddingBottom: 5
		},
		body1 :{
			fontFamily: 'Commissioner',
			fontSize: 24,
		},
	},
	palette: {
		primary: {
			main: "#022e74",
		},
		secondary: {
			main: "#ffcf09",
		},
	}
});

export default theme;
