import { Box, Container, Skeleton, Typography } from "@mui/material";
import { usePost } from "../apis/bloggerApi";
import { Link, useParams } from "react-router-dom";
import { centeredColumn } from "../common_styles";
import { useEffect } from "react";

export default function BlogPost() {
	const postId = useParams().postId ?? "";
	const { loading, post } = usePost(postId);

	useEffect(() => window.scrollTo(0, 0), []);

	return (
		<Container>
			{!loading && post === null ? (
				<Box sx={centeredColumn}>
					<Typography variant="h1">Post not found :(</Typography>
					<Link to="../"><Typography variant="h6">return to blog instead?</Typography></Link>
				</Box>
			) : (
				<>
					<Typography variant="h3" sx={{ py: 3 }}>
						{loading ? <Skeleton variant="text"/> : post!.title}
					</Typography>
					<Box sx={{ typography: "body1" }}>
						{loading ? (
							<>
								<Skeleton variant="rectangular" height={500}/>
								<Skeleton variant="text"/>
								<Skeleton variant="text"/>
								<Skeleton variant="text"/>
								<Skeleton variant="text"/>
								<Skeleton variant="text"/>
							</>
						) : (
							<div dangerouslySetInnerHTML={{ __html: post!.content }}/>
						)}
					</Box>
				</>
			)}
		</Container>
	);
}
