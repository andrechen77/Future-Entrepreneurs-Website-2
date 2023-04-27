import { useEffect, useState } from "react";

const blogId = "2770090416290081688";
const apiKey = "AIzaSyCddmIa64GdGVmtCWEjQT2RMzB6jExm30E";

export interface BlogPost { // matches the API's response, with noted exceptions
    id: string,
    published: Date, // returns as string
    updated: Date, // returns as string
    url: string,
    title: string,
	coverImage: string,
    content: string,
    author: {
        displayName: string,
        url: string,
        image: {
            url: string,
        },
    },
}

const defaultImageSrc = "/images/chicago_skyline.jpg";

export default function usePosts() {
	const [posts, setPosts] = useState<BlogPost[]>([]);

    const getPosts = async () => {
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`);
        const json = await response.json();
		// @ts-ignore just gotta trust that the api gives us the right object
        const retrievedPosts: BlogPost[] = json.items.map(post => ({
            ...post,
            published: new Date(post.published),
            updated: new Date(post.updated),
			coverImage: getFirstImg(post.content)?.src ?? defaultImageSrc,
        }));
        setPosts(retrievedPosts);
    }

    useEffect(() => {
        getPosts();
    }, []);

	return posts;
}

function getFirstImg(html: string) {
	const auxDiv = document.createElement("div");
	auxDiv.innerHTML = html;
	return auxDiv.querySelector("img");
}
