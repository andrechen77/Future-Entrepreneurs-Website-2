import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: [
			"Arial",
			"Times New Roman",
		].join(','),
	},
});

export default theme;
