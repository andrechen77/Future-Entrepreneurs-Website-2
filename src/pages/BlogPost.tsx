import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { usePost } from "../apis/bloggerApi";
import { useParams } from "react-router-dom";

export default function BlogPost() {
	const postId = useParams().postId ?? "";
	const { loading, post } = usePost(postId);

	return (
		loading ? (
			<Box>
				LOADING
				<CircularProgress/>
			</Box>
		) : post === null ? (
			<Box>
				POST NOT FOUND :(
			</Box>
		) : (
			<Paper elevation={1} sx={{ p: 2, boxShadow: 3, borderRadius: '16px' }}>
				<Typography variant="h3">{post.title}</Typography>
				<Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
			</Paper>
		)
	);
}
