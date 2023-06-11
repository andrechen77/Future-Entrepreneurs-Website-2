import { Box, Paper, Stack } from '@mui/material/';
import AboutSection from '../components/AboutSection';
import Banner from '../components/Banner';

function AboutUs() {
	return (
		<Box>
			<Banner imgsrc="/images/chicago_skyline.jpg" ht={200}>Meet the Team</Banner>
			<Paper elevation={0} square sx={{typography: "body1", p: 3}}>
			</Paper>
			<Box sx={{ p: 3 }}>
				<Stack direction="column" spacing={10}>
					<AboutSection name="Sofia Feijoo" left={false} profile="/images/profiles/sofia_feijoo.jpg">
						Sofia Feijoo currently attends DePaul University and is studying Entrepreneurship and Management in the Driehaus College of Business. Sofia has been involved with many startups over the last few years, including a student networking app called StudyBuddy and a sustainable fashion company called Clueless Closet. Sofia has a passion for entrepreneurship and is dedicated to helping students become inspired and learn the ins and outs of the business world.
						Sofia is currently a Lead mentor at DePaul for the Students Together are Reaching for Success (STARS) with the Office of Multicultural Student Success (OMSS). In this role, Sofia is responsible for the management of 35 mentors, as well as their 15 mentees each, which is over 500 students that Sofia is involved with. Through this program, they are able to assist first year students with properly adjusting to the college experience.
						Sofia is also the Vice President of the Distributive Education Clubs of America (DECA), where she plans events for members and is incharge of the social media page that they use to recruit new members and post information about upcoming events or competitions. Sofia had the opportunity to compete for the very first time with DECA at an international competition in Baltimore, where she competed in Event Planning and placed first.
						Throughout all four years of high school, Sofia was involved in the Future Business Leaders of America (FBLA), where she served as the president and the Illinois FBLA State Secretary during her senior year. Sofia worked to secure funding for the organization, as well as plan events and community service experiences.
					</AboutSection>
					<AboutSection name="Mario Feijoo" left={true} profile='images/profiles/mario_feijoo.jpeg'>
						“Growth is not a destination, it’s a journey.”
						Mario E. Feijoo is a professional business coach, entrepreneur, motivational speaker, and writer, who helps people around the U.S. attain more success amid great challenges. His leadership is characterized by creative thinking, brilliant intuition, and well-rounded insight. Mario is equipped with sound consulting principles and well-validated techniques which produce amazing results.
						He is a Partner with Smith and Feijoo Ltd. an Accounting and Business Consulting Firm a Chicago, IL based company where he provides clients with customized one-on-one consulting, strategic business planning and a complete business assessment in areas that concern finance, budgets, hiring and training. Mario is also the CEO and Founder of Virtual Consultant International, - a company launched in March 2014 and dedicated to providing small businesses with an affordable advertising platform needed to grow their client-base. Moreover, in November that same year, he established The Dream Team Project to help promote businesses, nonprofits and communities through social media and also to provide high school students with real-world business experience that prepares them for life after high school.
						He has been a mentor, coach and educator for the INCubatoredu program at Mundelein High School since 2016 where he has taken numerous teams to top two wins in the final pitch segment of the program. He is also involved with the Greenwood Project out of DePaul University where he has run Jam Sessions with both high school and college students who are interested in the financial industry.
						As a professional speaker, he runs a speaking business called, Mario’s Message. For nearly a decade now, he has been speaking and hosting presentations & workshops for high school students, college students, professionals, and business owners. Being a leading-edge consultant, he leverages his depth of business knowledge to motivate, educate and inspire students and entrepreneurs to achieve a higher level of success both individually and professionally. Professionally, his area of keynote speaking specializes in motivation, leadership, and business – sales, marketing & advertising.
						Seeking to impact his passion to many, he is in the process of publishing his first book/e-book. Aside from English, Mario also speaks Spanish fluently and is a U.S. Veteran who served 1985 to 1991 as a Combat Medic with the 808th unit out of Chicago, IL. He is also a proud dad of four beautiful daughters, and he currently resides in (Mundelein, IL) with his family.
					</AboutSection>
				</Stack>
			</Box>
		</Box>
	);
}

export default AboutUs;
