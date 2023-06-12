// Do we understand how this mstery Faq component works? How can we elegantly get it to follow the
// website theme? - Andre
import Faq from "react-faq-component";
import "./FAQ.css";
import Banner from '../components/Banner';
import { Paper } from '@mui/material/';

const data = {
	// title: "FAQ",
	rows: [
		{
			title: "Who is Future Entrepreneurs intended for?",
			content: "We recommend that any young adult (aged 14-22) interested in learning business, management, and leadership skills in a hands-on environment should join the FE community.",
		},
		{
			title: "Do you have to have an interest in business to be part of Future Entrepreneurs?",
			content: "No, Future Entrepreneurs is open to all young adults interested in developing their business or communication skills.",
		},
		{
			title: "How is this program going to benefit myself or my child in the long run?",
			content: "As future entrepreneurs, we are dedicated to providing our students with the necessary resources to learn management, financial literacy, and other life skills to be a successful and contributing member of the business world.",
		},
		{
			title: "There is a fee to join Future Entrepreneurs?",
			content:
				"We will offer both some programs that do require a minimal fee to cover expenses. However, cost will never prohibit a student from being involved with our organization. Scholarships will be awarded as needed to students that demonstrate need and payment is not required to be a part of our programs.",
		},
		{
			title: "Who will be leading the workshops and courses at Future Entrepreneurs USA?",
			content: "The Executive Director Mario Feijoo will be in charge of coordinating all workshops, classes, and seminars. Business owners and professionals in their field of expertise will also be leading sessions for young adults.  ",
		},
	],
};

const styles = {
	// bgColor: 'white',
	titleTextColor: "black",
	rowTitleColor: "black",
	rowContentColor: 'black',
	// arrowColor: "red",
	rowContentPaddingBottom: '10px',
	rowContentPaddingLeft: '25px',
	rowContentPaddingRight: '25px',
	rowTitleTextSize: '24px',
	titleTextSize: '30px',
};

const config = {
	animate: true,
	arrowIcon: "V",
	tabFocus: false,
};

function FAQ() {
	return (
		<div>
			<Banner imgsrc="/images/chicago_skyline.jpg" ht={200}>Frequently Asked Questions</Banner>
			<Paper elevation={5} sx={{ boxShadow: 3 }}>
				{/* bruh what's with the inconsistent use of styles here */}
				<div className="faq-style-wrapper">
					<Faq
						data={data}
						styles={styles}
						config={config}
					/>
				</div>
			</Paper>
		</div>
	);
}

export default FAQ
