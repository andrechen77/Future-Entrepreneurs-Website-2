
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import stockphoto from 'images/fe-stockphoto.png'
const Badge = styled.span`
	background-color: red;
`

//function Homepicture({imagesrc}: {imagesrc: string}) {
function Homepicture() {
	const style = {
		Height: '100%',
		backgroundImage: `url()`,
		backgroundColor: "pink",
		backgroundSize: "cover",
		color:'white'
	};

	return (
		<>
			<h1 style={style}>Strive for the best.</h1>
			<Badge>value</Badge>
		</>
		
	);
}

export default Homepicture