import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CustomCard from '../components/CustomCard';
import TextField from '@mui/material/TextField';
import offers from '../data/offers';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../chatbot/config.js';
import MessageParser from '../chatbot/MessageParser.js';
import ActionProvider from '../chatbot/ActionProvider.js';
import IconButton from '@mui/material/IconButton';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';

import './AboutPage.css';
import StickyFooter from '../components/StickyFooter';

function AboutPage() {
    const [showBot, setShowBot] = useState(false);
    const logo = require('../images/logo_transparent.png')
    return (
        <div className="about-section">
            <AppBar position="static" sx={{ backgroundColor: 'transparent', color: 'black' }}>
                <Toolbar className="toolbar">
                    <img src={logo} alt='Logo' style={{ width: '5rem', marginTop: '1rem' }}></img>
                    {/* <Typography variant="h6" component="div">
                        LOGO
                    </Typography> */}
                    <div className='nav-btns'>
                        <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography variant="h6" component="div">
                                Home
                            </Typography></a>
                        <a href='#about' style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography variant="h6" component="div">
                                About
                            </Typography></a>
                        <a href='#offers' style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography variant="h6" component="div">
                                Offers
                            </Typography></a>
                        <a href='#contact' style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography variant="h6" component="div">
                                Contact
                            </Typography></a>
                    </div>
                </Toolbar>
            </AppBar>
            <a name="about"></a>
            <Typography variant="h2" component="div" pl={10} py={4}>ABOUT</Typography>
            <Box>
                <Masonry columns={2} spacing={8} sx={{ px: 10 }}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="body1" gutterBottom>
                            Hi, my name is John Doe, and I am a professional rock climber.
                        </Typography>
                        <br />
                        <Typography variant="body1" gutterBottom>
                            I've been climbing rocks for almost 20 years now - it is my biggest passion in life.
                            Thanks to this passion I have travelled the world, and have been to 100+ countries in search of the climbing thrill.
                            During all those years, I have realized that rock climbing isn't just a sport - it is a way to free your mind, be one
                            with nature, express yourself if you will.
                        </Typography>
                        <br />
                        <Typography variant="body1" gutterBottom>
                            In 2015 I got certified as an instructor and decided that I want to help people experience everything I did.
                        </Typography>
                    </Paper>
                    <img src={require("../images/john-doe.jpg")} alt="John Doe" />
                    <img src={require("../images/the-team.jpg")} alt="Our Team" />
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="body1" gutterBottom>
                            We have an amazing team of 5 people - absolute experts in the area. Each an every one of them is really friendly and
                            patient, ready to guide you all the way step by step.
                        </Typography>
                        <br />
                        <Typography variant="body1" gutterBottom>
                            We chose Bulgaria, because it is and incredibly beautiful country with amazing nature and great people.
                            It has so many breathtaking views one can see only from above and it will be a shame if no one was to discover them.
                        </Typography>
                        <br />
                        <Typography variant="body1" gutterBottom>
                            Come join us for the adventure of a lifetime!
                        </Typography>
                    </Paper>
                </Masonry>
            </Box>
            <a name="offers"></a>
            <Typography variant="h2" component="div" pl={10} py={4}>WHAT WE OFFER</Typography>
            <Box sx={{ px: 20 }}>
                <Masonry columns={2} spacing={6}>
                    {offers.map((offer, i) => <CustomCard offer={offer} key={i} />)}
                </Masonry>
            </Box>
            <div style={{ position: 'relative' }}>
                <Typography variant="h2" component="div" pl={10} py={4}>HAVE MORE QUESTIONS?</Typography>
                <div className='bot-container'>
                    <IconButton color="primary" aria-label="chatbot" onClick={() => setShowBot(!showBot)}>
                        {showBot ? <CloseIcon sx={{ fontSize: "20px" }} /> : <SmartToyIcon sx={{ fontSize: "45px" }} />}
                    </IconButton>
                    {showBot &&
                        <Chatbot
                            config={config}
                            messageParser={MessageParser}
                            actionProvider={ActionProvider}
                        />}
                </div>
                <a name="contact"></a>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 20, paddingBottom: 10, paddingTop: 2 }}>
                    <Grid>
                        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Contact Us
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                                    Fill up the form and our team will get back to you within 24 hours.
                                </Typography>
                                <form>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} item>
                                            <TextField placeholder="Enter name" label="Name" variant="outlined" fullWidth required />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Find Us:
                            </Typography>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46924.89727829299!2d23.25047722370616!3d42.68664991643053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9b2543b14005%3A0xea8e06ca71a2aede!2sNew%20Bulgarian%20University!5e0!3m2!1sen!2sbg!4v1624027100336!5m2!1sen!2sbg"
                                width="600" height="400" loading="lazy" title="maps"></iframe>
                        </CardContent>
                    </Card>
                </Box>
            </div>
            <StickyFooter />
        </div>
    )
}

export default AboutPage;