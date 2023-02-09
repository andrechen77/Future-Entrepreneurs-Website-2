import { Avatar, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import { LinkData } from "../types/LinkData";
import BigLogo from "./BigLogo";

export function Footer({ children }: { children: JSX.Element[]}) {
	const footerMain = (
		<Stack direction="column" spacing={3}>
			<BigLogo/>
			<Stack direction="row" spacing={3}>
				<Avatar variant="square">IG</Avatar>
				<Avatar variant="square">FB</Avatar>
				<Avatar variant="square">AB</Avatar>
			</Stack>
		</Stack>
	)

	const footerLinks = (
		<Stack direction="row" spacing={3}>
			{children}
		</Stack>
	);

	return (
		<Paper square elevation={0} sx={{ bgcolor: "primary.main", typography: "body1", p: 3, color: "common.white" }}>
			<Grid container justifyContent="space-between">
				<Grid item>
					{footerMain}
				</Grid>
				<Grid item>
					{footerLinks}
				</Grid>
			</Grid>
		</Paper>
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
