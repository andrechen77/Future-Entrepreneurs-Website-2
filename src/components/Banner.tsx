import { Paper } from "@mui/material";

const bgImage = {
	backgroundPosition: "center",
	backgroundSize: "cover",
	height: 300,
};
const centeredText = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
const bannerTextStyle = {
	typography: "h1",
	color: "common.white",
	fontWeight: 600,
};

function Banner({imgsrc, children}: {imgsrc: string, children: any}) {
	const bgImageSrc = {
		backgroundImage: `url("${imgsrc}")`,
	};
	return (
		<Paper elevation={0} square sx={[bgImage, bgImageSrc, centeredText, bannerTextStyle]}>
			{children}
		</Paper>
	);
}

export default Banner;