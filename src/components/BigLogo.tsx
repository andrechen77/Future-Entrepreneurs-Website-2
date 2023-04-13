/** @jsxImportSource @emotion/react */

const logoHeight = 80;
const style = {
	maxWidth: 300,
	maxHeight: 200,
	"&:hover": {
		maxWidth: 301,
		maxHeight: logoHeight + 1,
	},
};

function BigLogo() {
	return (
		<a href="/" onClick={() => console.log("I've been clicked")}>
			<img css={style} src={"images/logobetter.png"} alt="logo"/>
		</a>
	);
}

export default BigLogo;
