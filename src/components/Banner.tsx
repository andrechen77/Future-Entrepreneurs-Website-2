import { Paper } from "@mui/material";
import { centeredColumn } from "../common_styles";

const bgImage = {
	backgroundPosition: "center",
	backgroundSize: "cover",
	height: 300,
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
		<Paper elevation={0} square sx={[bgImage, bgImageSrc, centeredColumn, bannerTextStyle]}>
			{children}
		</Paper>
	);
}

export default Banner;