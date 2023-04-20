import { Box, ThemeProvider } from '@mui/material/';
import theme from './../theme';
import { useEffect, useState } from 'react';

const blogId = "2770090416290081688";
const apiKey = "AIzaSyCddmIa64GdGVmtCWEjQT2RMzB6jExm30E";

interface BlogPost { // matches the API's response, with noted exceptions
    id: string,
    published: Date, // returns as string
    updated: Date, // returns as string
    url: string,
    title: string,
    content: string,
    author: {
        displayName: string,
        url: string,
        image: {
            url: string,
        },
    },
}

const Blog = () =>{
    const [posts, setPosts] = useState<BlogPost[]>([]);

    const getPosts = async () => {
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`);
        const json = await response.json();
        for (const post of json.items) {
            // make sure to update all mismatched types in the BlogPost interface
            post.published = new Date(post.published);
            post.updated = new Date(post.updated);
        }
        setPosts(json.items);
    }

    useEffect(() => {
        getPosts();
    }, []);

	return (
		<Box>
            {posts.map(post => {
                return (
                    <Box key={post.id} sx={{ border: "10px solid red"}}>
                        Title: {post.title}
                        <Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
                    </Box>
                );
            })}
        </Box>
	);
}

export default Blog;