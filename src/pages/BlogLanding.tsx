import { Box, Container, ImageList, ImageListItem, ImageListItemBar, Stack } from '@mui/material/';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import { BlogPost } from '../apis/bloggerApi';
import { useNavigate } from 'react-router-dom';

export default function BlogLanding({ posts }: { posts: BlogPost[]}) {
	const images = posts.map(post => ({ url: post.coverImage }));

	const imageSlider = (
		<ImageSlider
			height={500}
			images={images}
			showBullets
			showNavs
		/>
	);

	const navigate = useNavigate();
	const postGrid = (
		<ImageList cols={3}>
			{posts.map(post => (
				<ImageListItem
					key={post.id}
					style={{ cursor: "pointer" }}
					onClick={() => navigate(post.id)}
				>
					<img
						src={post.coverImage}
						alt={post.title}
					/>
					<ImageListItemBar
						title={post.title}
						subtitle={post.updated.toLocaleDateString()}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);

	return (
		<Box>
			<Banner imgsrc="/images/chicago_skyline.jpg">FE BLOG</Banner>
			<Container>
				<Stack sx={{ p: 3 }}>
					{imageSlider}
					{postGrid}
				</Stack>
			</Container>
		</Box>
	);
}