/** @jsxImportSource @emotion/react */

const logoHeight = 80;

function BigLogo() {
	return (
		<a href="/" onClick={() => console.log("I've been clicked")}>
			<div css={{ maxHeight: logoHeight }}>
				<img css={{ maxHeight: logoHeight }} src={"images/logo.png"} alt="logo"/>
			</div>
		</a>
	);
}

export default BigLogo;
