import { Paper } from "@mui/material";
import { centeredColumn } from "../common_styles";

const bgFull = {
	backgroundPosition: "center",
	backgroundSize: "cover",
};
const bannerTextStyle = {
	typography: "h1",
	color: "common.white",
	fontWeight: 600,
};

function Banner({ imgsrc, children, ht }: {imgsrc: string, children: any, ht: number}) {
	const specific_prop = {
		backgroundImage: `url("${imgsrc}")`,
		minHeight: ht,
	};
	return (
		<Paper elevation={0} square sx={[bannerTextStyle, bgFull, specific_prop, centeredColumn]}>
			{children}
		</Paper>
	);
}

export default Banner;
