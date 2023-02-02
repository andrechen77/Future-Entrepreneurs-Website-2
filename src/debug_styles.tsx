export function border(level: number) {
	let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
	return {
		border: `5px solid ${colors[level]}`,
	};
}
