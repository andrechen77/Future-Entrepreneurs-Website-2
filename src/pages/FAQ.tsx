// // import { useState } from "react";
// import Card from "@mui/material/Card";
// import Collapse from "@mui/material/Collapse";
// import CardHeader from "@mui/material/CardHeader";
// import Container from "@mui/material/Container";
// import CardContent from "@mui/material/CardContent";
// import KeyboardArrowDownIcon from
// 	"@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from
// 	"@mui/icons-material/KeyboardArrowUp";
// import IconButton from "@mui/material/IconButton";

// import { ThemeProvider } from '@mui/material/';
// import theme from './../theme';

// // const [open, setOpen] = useState(false);

// const FAQ = () => 
// {	
	
// 	return (
//         <>

//         <ThemeProvider theme = {theme}>

// 			<h1 style={{
// 				display: "flex",
// 				justifyContent: "center",
// 				color: "green"
// 			}}>	</h1>

// 			<Card sx={{
// 				minWidth: 300,
// 				border: "1px solid rgba(211,211,211,0.6)"
// 			}}>
// 				<CardHeader
// 					title="Q1"
// 					action={
// 						<IconButton
// 							onClick={() => setOpen(!open)}
// 							aria-label="expand"
// 							size="small"
// 						>
// 							{open ? <KeyboardArrowUpIcon />
// 								: <KeyboardArrowDownIcon />}
// 						</IconButton>
// 					}
// 				></CardHeader>
// 				<div style={{
// 					backgroundColor: "rgba(211,211,211,0.4)"
// 				}}>
// 					<Collapse in={open} timeout="auto"
// 						unmountOnExit>
// 						<CardContent>
// 							<Container sx={{
// 								height: 100,
// 								lineHeight: 2
// 							}}>
//                                 the future of business
// 							</Container>
// 						</CardContent>
// 					</Collapse>
// 				</div>
// 			</Card>

//             </ThemeProvider>

// </>
// 	);
// }

// export default FAQ;


import { ThemeProvider } from '@mui/material/';
import theme from './../theme';

const FAQ = () =>{
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

export default FAQ;