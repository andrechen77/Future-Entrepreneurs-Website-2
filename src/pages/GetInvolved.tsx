import {DonatePopup, VolunteerPopup} from './../components/GetInvolvedPopup';
import {Box, Paper, Typography, Grid, Container} from '@mui/material';
import Banner from '.././components/Banner';

const GetInvolved = () =>{
	return (
        <Box sx={{backgroundColor: 'common.white'}}>
            <div>
            <Banner imgsrc="/images/chicago_skyline.jpg" ht={200}>Getting Involved</Banner>

            <Typography align="center" variant="body1" sx={{padding:3}}>
            </Typography>

            <Container sx={{ padding:1}}>
                <Grid container spacing={2} justifyContent = 'center'>
                    <Paper elevation={1} sx={{ p:2, boxShadow: 3}}>
                            <img src='/images/get-involved2.jpg' alt="Logo" width ='800' />
                    </Paper >

                    <Grid item xs={15} sx={{padding:0}}>
                        <Typography align="left" variant="h3" color = "primary.main">
                            Donate
                        </Typography>
                    </Grid>

                    <Grid item xs={0} sx={{padding:5}}>
                        <Typography align="left" variant="body1">
                            Welcome to FE USA's donation page! Your contribution can make a real difference in the lives of the people we serve. Whether you are donating for the first time or have been a long-time supporter, we thank you for considering our cause. Your donation will help us continue to provide vital services and programs that directly impact the lives of those in need. From funding research to providing basic necessities, your generosity will help us make a positive impact in the world. With your support, we can create lasting change and help those in need reach their full potential. Thank you for being a part of our mission and helping us make a difference.
                            <br />
                            <br />
                            Future Entrepreneurs is a Section 501(c) (3) charitable organization, EIN 92-1488576. All donations are deemed tax-deductible absent any limitations on deductibility applicable to a particular taxpayer. No goods or services were provided in exchange for your contribution.

                            <br />
                            <br />
                            <DonatePopup/>
                        </Typography>
                    </Grid>
                    <Paper elevation={1} sx = {{ p:2, boxShadow: 3 }} > 
                            <img src='/images/get-involved1.jpg' alt="Logo" width = "800" />
                    </Paper>
                    <Grid item xs={15} sx={{padding:0}}>
                        <Typography align="left" variant="h3" color = "primary.main">
                            Volunteer
                        </Typography>
                    </Grid>
                    <Grid item xs={0} sx={{padding:5}}>
                        <Typography align="left" variant="body1">
                            We at Future Entrepreneurs are looking for volunteers, mentors, and coaches to help develop programs and workshops for students ages 14 to 22 years old.
                            <br />
                            <br />
                            We are looking for:
                            <Typography component="div">
                                <ul>
                                    <li>dedicated individuals who have a passion for helping students</li>
                                    <li>business owners from all industries to help conduct workshops, create curriculum for certain programs, and participate in brainstorming sessions</li>
                                    <li>project managers to be able to help with organization of teams</li>
                                    <li>certified financial planners and Financial brokers for the investment club to teach students about the stock market and investment management</li>
                                    <li>someone who has coding and engineering experience</li>
                                </ul>
                             </Typography>
                            <br />
                            Anyone interested in volunteering will be subjected to a thorough background check to ensure the safety of our staff and students.
                            <br />
                            <br />
                            If you are interested in volunteering, please fill out the form below and we will get back to you through email.
                            <br />
                            <br />
                            <VolunteerPopup/>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </Box>
	);
}

export default GetInvolved;
