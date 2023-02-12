import { ThemeProvider } from '@mui/material/';
import theme from './../theme';
import Sky from './../images/chicago_skyline.jpg'
import Mission from './../images/icon.png'
import { Box, Paper, Stack } from '@mui/material/';
import { fontSize } from '@mui/system';


const HomePage = () =>{
	return (
		<ThemeProvider theme={theme}>
            <div style = {{backgroundImage: `url(${Sky})`,
		width: 1895,
		height: 800}}>
                <h1 style = {{
					textAlign: 'center',
					fontSize: 100,
					marginTop: 0,
					marginBottom: 5
				}}>
                    Future Entrepreneurs
                </h1>
				<p style = {{
					textAlign: 'center',
					fontSize: 75,
					marginTop: 0

				}}> The Future of Business</p>

				<p style = {{
					textAlign: 'center'
				}}> insert intro video here </p>
            </div>

			<Box style = {{backgroundImage: `url(${Mission})`,
		width: 400,
		height: 370,
		marginLeft: 300,
		marginTop: 200,
		marginBottom: 200}}>
			<div style = {{fontSize: 75,
			textAlign: 'right',
			marginLeft: 600,
			fontWeight: 'bold'}}>
				Mission
				<p style = {{
					fontSize: 50,
					fontWeight: 'normal',
					textAlign: 'center'
				}}> stuff</p>
			</div>

			</Box>
		</ThemeProvider>
	);
}

export default HomePage;



{/* <article
className={styles.article}
style={{ backgroundImage: `url(${background})` }}
>
<h1 className={styles.header}>React Is Awesome</h1>
</article> */}


    {/* <div style={{ 
      backgroundImage: './../images/chicago_skyline.jpg'
    }}>
      Future Entrepreneurs
    </div> */}



	// .bgSizeCover {
	// 	background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
	// 	background-size: cover;
	// 	width: 160px;
	// 	height: 160px;
	// 	border: 2px solid;
	// 	color: pink;
	// 	resize: both;
	// 	overflow: scroll;
	//   }