/** @jsxImportSource @emotion/react */

import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

function Echoer() {
	const [text, setText] = useState('');
	const isEmpty = text === "";
	const [counter, setCounter] = useState(0);

	function onClick() {
		setText("");
	}

	const style = {
		border: "10px solid red",
		paddingTop: 100
	};

	return (
		<div css={style}>
			<p>I echo everything you say. Counter is currently {counter}.</p>
			{!isEmpty && <Echo>{text}</Echo>}
			<input value={text} onChange={e => setText(e.target.value)}/>
			<br/>
			<button onClick={onClick}>Clear text.</button>
			<br/>
			<Button onClick={() => setCounter(counter + 1)}>Increment counter.</Button>
		</div>
	);
}

function Echo({children}: {children: string}) {
	useEffect(() => {
		console.log("Boo!");

		return () => {
			console.log("Bye...");
		};
	}, []);

	return (
		<p>{children}</p>
	);
}

export default Echoer;
