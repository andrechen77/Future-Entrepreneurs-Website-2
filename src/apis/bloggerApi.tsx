import { useEffect, useState } from "react";

// const blogId = "2770090416290081688";
// const blogId = "5737509104983149853";
const blogId = "4795805533032311892";
// const apiKey = "AIzaSyCddmIa64GdGVmtCWEjQT2RMzB6jExm30E";

const apiKey = "AIzaSyDFl7JvVkPjTrEyJ74iooGkSHfYprbqU7Q";
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

export function usePosts(): { loading: boolean, posts: BlogPost[] } {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);

	const getPosts = async () => {
		setLoading(true);
		try {
			const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`);
			const json = await response.json();
			const retrievedPosts: BlogPost[] = json.items.map(transformPostObj).filter((x: any) => x !== null);
			setPosts(retrievedPosts);
		} catch (error) {
			console.error(error);
			// leave posts empty
		}
		setLoading(false);
	}

	useEffect(() => {
		getPosts();
	}, []);

	return { loading, posts };
}

export function usePost(postId: string) : { loading: boolean, post: BlogPost | null } {
	const [post, setPost] = useState<BlogPost | null>(null);
	const [loading, setLoading] = useState(true);

	const getPost = async (postId: string) => {
		setLoading(true);
		try {
			const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}`);
			const json = await response.json();
			setPost(transformPostObj(json));
		} catch (error) {
			console.error(error);
			// leave post null
		}
		setLoading(false);
	};

	useEffect(() => {
		getPost(postId);
	}, [postId]);

	return { loading, post };
}

// null means the object wasn't actually a post, it was an error
function transformPostObj(obj: any): BlogPost | null {
	// Should be made more robust, ensuring that the post has the specified properties and
	// converting them to the right type.
	if (obj.hasOwnProperty("error")) {
		return null;
	} else {
		return {
			...obj,
			published: new Date(obj.published),
			updated: new Date(obj.updated),
			coverImage: getFirstImg(obj.content)?.src ?? defaultImageSrc,
		};
	}
}

function getFirstImg(html: string) {
	const auxDiv = document.createElement("div");
	auxDiv.innerHTML = html;
	return auxDiv.querySelector("img");
}
