import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: [
			"Roboto",
			"Helvetica",
			"Times New Roman",
			"Arial",
			"sans-serif",
		].join(','),
	},
});

export default theme;
