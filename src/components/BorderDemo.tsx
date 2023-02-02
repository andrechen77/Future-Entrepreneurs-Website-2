/** @jsxImportSource @emotion/react */

function BorderDemo({size, color, children}: {size: number, color: string, children: any}) {
	const style = {
		border: `${size}px solid ${color}`,
	}

	return (
		<div>
			<p css={style}>Hi I'm BorderDemo. Your text here:<br/>{children}</p>
		</div>
	);
}

export default BorderDemo;
