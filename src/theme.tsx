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
	},
	palette: {
		primary: {
			main: "#3438b5",
			// main: "#267bc9",
			light: "#ffffff",
			dark: "#000000",
		},
		secondary: {
			main: "#C2E9FF",
			light: "#ffffff",
			dark: "#000000"
		}
	}
});

export default theme;
