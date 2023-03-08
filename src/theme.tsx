import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: [
			"Segoe UI",
			"Helvetica",
			"Arial",
			"sans-serif",
		].join(','),
		h2: {
			fontFamily: 'Commissioner',
			fontSize: 75,
			letterSpacing: 2.5,
			fontWeight: "bold",
			gridArea: "right",
			paddingBottom: 5
		},
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
			main: "#002C73ff",
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


// $royal-blue-traditional: #002C73ff;
// $antiflash-white: #F1F3F7ff;
// $royal-blue-traditional-2: #002B72ff;
// $yale-blue: #073277ff;
// $yale-blue-2: #153C73ff;
