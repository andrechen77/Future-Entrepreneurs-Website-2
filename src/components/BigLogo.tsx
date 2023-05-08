const style = {
	maxWidth: 300,
	maxHeight: 200,
};

function BigLogo() {
	return (
		<a href="/" onClick={() => console.log("I've been clicked")}>
			<img style={style} src={"images/logobetter.png"} alt="logo"/>
		</a>
	);
}

export default BigLogo;
