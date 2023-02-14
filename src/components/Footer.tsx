import { Avatar, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LinkData } from "../types/LinkData";
import BigLogo from "./BigLogo";

export function Footer({ children }: { children: JSX.Element[]}) {
	const footerMain = (
		<Stack direction="column" spacing={3}>
			<BigLogo/>
			<Stack direction="column" spacing={3}>
				<SocialIcon imgsrc="/images/icon.png" handle="FOLLOW ME" href=""/>
				<SocialIcon imgsrc="/images/icon.png" handle="FOLLOW ME" href=""/>
				<SocialIcon imgsrc="/images/icon.png" handle="FOLLOW ME" href=""/>
			</Stack>
		</Stack>
	)

	return (
		<Paper square elevation={0} sx={{ bgcolor: "primary.main", typography: "body1", p: 3, color: "common.white" }}>
			<Grid container direction="row" justifyContent="space-between" spacing={3}>
				<Grid item xs="auto">
					{footerMain}
				</Grid>
				<Grid xs={12} md="auto" item container direction="row" wrap="wrap" spacing={3}>
					{children.map(column => <Grid item>{column}</Grid>)}
				</Grid>
			</Grid>
		</Paper>
	);
}

function SocialIcon({ imgsrc, handle, href }: { imgsrc: string, handle: string, href: string }) {
	const sideLength = 20;
	return (
		<Stack direction="row" spacing={1}>
			<img src={imgsrc} width={sideLength} height={sideLength}/>
			<span>{handle}</span>
		</Stack>
	);
}

export function FooterColumn({ header, links }: { header: string, links: LinkData[] }) {
	return (
		<Stack direction="column">
			<Typography variant="h6">{header}</Typography>
			<>{links.map(link => {
				return (
					<Link
						href={link.addr}
						sx={{ color: "common.white" }}
					>{link.label}</Link>
				)
			})}</>
		</Stack>
	);
}
