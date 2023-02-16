import { LoremIpsum } from "lorem-ipsum";

const lipsum = new LoremIpsum({
	sentencesPerParagraph: {
		min: 4,
		max: 8,
	},
	wordsPerSentence: {
		min: 4,
		max: 30,
	},
});

function Lipsum({ p, s }: { p: number, s: number }) {
	return (
		<>
			{Array(p).fill(s).map(numSentences => <p>{lipsum.generateSentences(numSentences)}</p>)}
		</>
	)
}

export default Lipsum;
