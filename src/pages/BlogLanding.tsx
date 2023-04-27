import { Box, Container, ImageList, ImageListItem, ImageListItemBar, Stack } from '@mui/material/';
import BlogPostCard from '../components/BlogPostCard';
import Banner from '../components/Banner';
import ImageSlider from '../components/ImageSlider';
import usePosts from '../hooks/usePosts';

export default function BlogLanding() {
	const posts = usePosts();
    const images = posts.map(post => ({ url: post.coverImage }));

	return (
        <Box>
            <Banner imgsrc="/images/chicago_skyline.jpg">FE BLOG</Banner>
            <Container>
                <Stack sx={{ p: 3 }}>
                    <ImageSlider
                        height={500}
                        images={images}
                        showBullets
                        showNavs
                    />
                    <ImageList cols={3}>
                        {posts.map(post => (
                            <ImageListItem
								key={post.id}
								style={{ cursor: "pointer" }}
								onClick={() => document.location.assign(`Blog/${post.id}`)}
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
                </Stack>
            </Container>
        </Box>
	);
}