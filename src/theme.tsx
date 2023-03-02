import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: [
			"Segoe UI",
			"Helvetica",
			"Arial",
			"sans-serif",
		].join(','),
	},
	palette: {
		primary: {
			main: "#002C73ff",
			// main: "#267bc9",
			light: "#ffffff",
			dark: "#000000",
		}
	}
});

export default theme;


// $royal-blue-traditional: #002C73ff;
// $antiflash-white: #F1F3F7ff;
// $royal-blue-traditional-2: #002B72ff;
// $yale-blue: #073277ff;
// $yale-blue-2: #153C73ff;
