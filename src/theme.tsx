import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface TypographyVariants {
		imgOverlay: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		imgOverlay?: React.CSSProperties;
	}
}
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		imgOverlay: true;
	}
}

const theme = createTheme({
	typography: {
		fontFamily: [
			"Segoe UI",
			"Roboto",
			"Helvetica",
			"Times New Roman",
			"Arial",
			"sans-serif",
		].join(","),
		h2: {
			fontFamily: "Commissioner",
			fontSize: 75,
			letterSpacing: 2.5,
			fontWeight: "bold",
			gridArea: "right",
			paddingBottom: 5,
		},
		h3: {
			fontFamily: "Commissioner",
			fontSize: 50,
			letterSpacing: 2.5,
			fontWeight: "bold",
			gridArea: "right",
			paddingBottom: 5,
		},
		body1: {
			fontFamily: "Commissioner",
			fontSize: 24,
		},
		body2 :{
			fontFamily: 'Commissioner',
			fontSize: 18,
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
			main: "#022e74",
		},
		secondary: {
			main: "#ffcc04"
		},
	},
});

export default theme;
