import BlogLanding from "./BlogLanding";
import { Box } from "@mui/material";

const Blog = () => {
    return (
        <BlogLanding/>
	);
}

function BlogPage(postId: string) {
    return (
        <Box>{postId}</Box>
    )
}

export default Blog;