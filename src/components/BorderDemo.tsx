/** @jsxImportSource @emotion/react */

import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function BorderDemo({size, color, children}: {size: number, color: string, children: any}) {
	const theme = useTheme();

	const style = {
		border: `${size}px solid ${color}`,
		fontFamily: theme.typography.body1.fontFamily,
	}

	return (
		<div css={style}>
			<Typography variant="body2">Hi I'm BorderDemo. Your text here:<br/>{children}</Typography>
		</div>
	);
}

export default BorderDemo;
