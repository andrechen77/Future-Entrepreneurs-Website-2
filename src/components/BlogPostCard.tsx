import { Box, Paper, Typography } from "@mui/material";

interface BlogPostCardProps {
	postJson: {
		title: string,
		content: string,
	},
}

function BlogPostCard({ postJson }: BlogPostCardProps) {

	return (
		<Paper elevation={1} sx={{ p: 2, boxShadow: 3, borderRadius: '16px' }}>
			<Typography variant="h3">{postJson.title}</Typography>
			<Box dangerouslySetInnerHTML={{ __html: postJson.content }}></Box>
		</Paper>
	);
}

export default BlogPostCard;
