import { Box, Container, ImageList, ImageListItem, ImageListItemBar, Skeleton, Stack } from '@mui/material/';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import { BlogPost } from '../apis/bloggerApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { centeredColumn } from '../common_styles';

export default function BlogLanding({ loading, posts }: { loading: boolean, posts: BlogPost[]}) {
	const [imageIndex, setImageIndex] = useState(0);
	const images = posts.map(post => ({ url: post.coverImage }));
	const navigate = useNavigate();

	const imageSlider = !loading ? (
		<Box sx={{ position: "relative" }}>
			<ImageSlider
				height={500}
				images={images}
				showBullets
				showNavs
				style={{ cursor: "pointer" }}
				onClick={i => navigate(posts[i].id)}
				onClickNav={toRight => setImageIndex((imageIndex + (toRight ? 1 : -1) + posts.length) % posts.length)} // add an additional posts.length to make the modulus work correctly for negative numbers
				onClickBullets={i => setImageIndex(i)}
			/>
			<Box
				sx={[{
					position: "absolute",
					left: "15%",
					top: 0,
					width: "70%",
					height: "100%",
					zIndex: 1,
					typography: "imgOverlay",
					pointerEvents: "none",
				}, centeredColumn]}
			>
				{posts[imageIndex].title}
			</Box>
		</Box>
	) : (
		<Skeleton height={500} />
	);

	const postGrid = !loading ? (
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
	) : (
		<Skeleton height={500}/>
	);

	return (
		<Box>
			<Banner imgsrc="/images/chicago_skyline.jpg" ht={200}>FE Blog</Banner>
			{<Container>
				<Stack sx={{ p: 3 }}>
					{imageSlider}
					{postGrid}
				</Stack>
			</Container>}
		</Box>
	);
}
