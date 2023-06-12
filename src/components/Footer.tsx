import { Grid, Link as MuiLink, Paper, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { LinkData } from "../types/LinkData";
import BigLogo from "./BigLogo";

export function Footer({ children }: { children: JSX.Element[]}) {
	const footerMain = (
		<Stack direction="column" spacing={3}>
			<BigLogo/>
			<Stack direction="column" spacing={3}>
				<Typography variant="body2">1966 W. Hawley St. #2 Mundelein, IL 60060</Typography>
				<SocialIcon
					img="/images/socials/instagram.svg"
					handle="futureentrepreneur_"
					href="https://www.instagram.com/futureentrepreneur_/"
				/>
				<SocialIcon
					img="/images/socials/linkedin.png"
					handle="LinkedIn"
					href="https://www.linkedin.com/company/future-entrepreneurs-usa/?viewAsMember=true"
				/>
				<SocialIcon
					img="/images/socials/tiktok.png"
					handle="@futureentrepreneruship"
					href="https://www.tiktok.com/@futureentrepreneruship"
				/>
				<SocialIcon
					img={<EmailIcon/>}
					handle="info@reusanfp.com"
					href="mailto:info@reusanfp.com"
				/>
				<SocialIcon
					img={<PhoneIcon/>}
					handle="847-833-8822"
					href={null}
				/>
			</Stack>
		</Stack>
	)

	return (
		<Paper square elevation={0} sx={{ bgcolor: "primary.main", typography: "body1", p: 3, color: "common.white" }}>
			<Grid container direction="row" justifyContent="space-between" spacing={3}>
				<Grid item xs={12} md="auto">
					{footerMain}
				</Grid>
				<Grid xs={12} md="auto" item container direction="row" wrap="wrap" spacing={3}>
					{children.map((column, index) => <Grid item key={index}>{column}</Grid>)}
				</Grid>
			</Grid>
		</Paper>
	);
}

function SocialIcon({ img, handle, href }: { img: string | JSX.Element, handle: string, href: string | null }) {
	const clickable = href !== null;

	return (
		<Stack
			direction="row"
			spacing={1}
			alignItems="center"
			onClick={clickable ? () => window.open(href, "_blank") : undefined}
			sx={clickable ? { cursor: "pointer" } : {}}
		>
			{typeof img === "string" ? <img src={img} alt={handle} height={30}/> : img}
			<Typography variant="body2">{handle}</Typography>
		</Stack>
	);
}

export function FooterColumn({ header, links }: { header: string, links: LinkData[] }) {
	return (
		<Stack direction="column">
			<Typography variant="h6">{header}</Typography>
			<>{links.map(link => {
				return (
					<MuiLink
						key={link.addr}
						component={RouterLink}
						to={link.addr ?? ""}
						sx={{ typography: "body2", color: "common.white" }}
					>{link.label}</MuiLink>
				);
			})}</>
		</Stack>
	);
}
