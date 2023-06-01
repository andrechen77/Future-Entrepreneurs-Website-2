import { Route, Routes } from "react-router-dom";
import BlogLanding from "./BlogLanding";
import BlogPost from "./BlogPost";
import { usePosts } from "../apis/bloggerApi";

const Blog = () => {
	const { loading, posts } = usePosts();

	return (
		<Routes>
			<Route index element={<BlogLanding loading={loading} posts={posts}/>}/>
			<Route path=":postId" element={<BlogPost/>}/>
		</Routes>
	);
}

export default Blog;