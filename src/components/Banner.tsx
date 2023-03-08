import { Paper } from "@mui/material";

// const bgImage = {
// 	backgroundPosition: "center",
// 	backgroundSize: "cover",
// 	height: 300,
// };
const bgFull = {
	backgroundPosition: "center",
	backgroundSize: "cover",
	height: 600,
};
const centeredText = {
	textAlign: "center",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};
const bannerTextStyle = {
	typography: "h1",
	color: "common.white",
	fontWeight: 600,
};

function Banner({imgsrc, children, ht }: {imgsrc: string, children: any, ht: string}) {
	const specific_prop = {
		backgroundImage: `url("${imgsrc}")`,
		height: ht
	};
	return (
		<Paper elevation={0} square sx={[bannerTextStyle, bgFull, specific_prop, centeredText]}>
			{children}
		</Paper>
	);
}

export default Banner;