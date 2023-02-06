import { ThemeProvider } from '@mui/material/';
import theme from './../theme';

const Blog = () =>{
	return (
		<ThemeProvider theme={theme}>
            <div>
                <h1>
                    Blog!!!
                </h1>
            </div>
		</ThemeProvider>
	);
}

export default Blog;