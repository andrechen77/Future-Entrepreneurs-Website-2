import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface TypographyVariants {
		imgOverlay: React.CSSProperties;
		body3: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		imgOverlay?: React.CSSProperties;
		body3: React.CSSProperties;
	}
}
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		imgOverlay: true;
		body3: true;
	}
}

const theme = responsiveFontSizes(createTheme({
	typography: {
		fontFamily: [
			"Segoe UI",
			"Roboto",
			"Helvetica",
			"Times New Roman",
			"Arial",
			"sans-serif",
			"Commissioner"
		].join(","),
		h2: {
			fontFamily: "Commissioner",
			fontSize: 75,
			letterSpacing: 1,
			fontWeight: "bold",
			gridArea: "right",
			paddingBottom: 5,
		},
		h3: {
			fontFamily: "Commissioner",
			fontSize: 50,
			letterSpacing: 1,
			fontWeight: "bold",
			gridArea: "right",
			paddingBottom: 5,
		},
		h4: {
			fontFamily: "Commissioner",
			fontSize: 45,
			fontWeight: 'bold',
		},
		body1: {
			fontFamily: "Commissioner",
			fontSize: 24,
		},
		body2: {
			fontFamily: 'Commissioner',
			fontSize: 18,
		},
		body3: {
			fontFamily: "Commissioner",
			fontSize: 12,
		},
		imgOverlay: {
			fontFamily: "Commissioner",
			fontSize: 75,
			letterSpacing: 2.5,
			fontWeight: "bold",
			gridArea: "right",
			paddingBottom: 0,
			color: "white",
			textShadow: "0px 0px 10px black"
		},
	},
	palette: {
		primary: {
			// oldmain: "#022e74",
			main: "#062E78",
			light: '#ffffff',
		},
		secondary: {
			main: "#ffcc04"
		},
	},
}));

export default theme;
