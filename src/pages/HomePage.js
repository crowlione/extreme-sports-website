import { Parallax } from 'react-parallax';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MouseScroll from '../components/MouseScroll.js'

import './HomePage.css';

function HomePage() {
    return (
        <div className="HomePage">
            <Parallax
                // blur={{ min: -15, max: 15 }}
                bgImage={require('../images/header-photo.jpg')}
                bgImageAlt="Rock Climber"
                strength={-200}
            >
                <div style={{ height: '100vh' }}>
                    <div className="header-icons">
                        <div id="social">
                            <InstagramIcon sx={{ paddingRight: 1 }}/>
                            <TwitterIcon sx={{ paddingRight: 1 }}/>
                            <FacebookIcon />
                        </div>
                        <div id="search">
                            BG/EN
                        </div>
                    </div>
                    <div className="header-text">
                        <Typography variant="h2" component="div" sx={{ fontWeight: 500 }}>
                            Rock Climbing Bulgaria
                        </Typography>
                        <Typography className="sub-text" variant="h4" component="div">
                            Explore with a professional instructor.
                        </Typography>
                    </div>
                    <div className='header-chevron'>
                        <MouseScroll />
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default HomePage;
