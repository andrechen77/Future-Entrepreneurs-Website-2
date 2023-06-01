/** @jsxImportSource @emotion/react */

function BigLogo() {
	return (
		<a href="/" onClick={() => console.log("I've been clicked")}>
			<img css={{ maxHeight: 80 }} src={"images/logo.png"} alt="logo"/>
		</a>
	);
}

export default BigLogo;
