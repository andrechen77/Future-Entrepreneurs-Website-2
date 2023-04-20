import { Box, ThemeProvider } from '@mui/material/';
import theme from './../theme';
import { useEffect, useState } from 'react';

const blogId = "2770090416290081688";
const apiKey = "AIzaSyCddmIa64GdGVmtCWEjQT2RMzB6jExm30E";


const Blog = () =>{
    const [posts, setPosts] = useState({});

    const getPosts = async () => {
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`);
        const json = await response.json();
        setPosts(json);
    }

    useEffect(() => {
        getPosts();
    }, []);

	return (
		<Box>
           {JSON.stringify(posts)}
        </Box>
	);
}

export default Blog;