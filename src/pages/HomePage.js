import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Typography from '@mui/material/Typography';
import MouseScroll from '../components/MouseScroll.js'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SocialIcons from '../components/SocialIcons.js';

import './HomePage.css';

function HomePage() {
    const [alignment, setAlignment] = useState('en');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div className="HomePage">
            <Parallax
                // blur={{ min: -15, max: 15 }}
                bgImage={require('../images/climber.jpg')}
                bgImageAlt="Rock Climber"
                strength={-500}
            >
                <div style={{ height: '100vh' }}>
                    <div className="header-icons">
                        <SocialIcons color='white' />
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            size="small"
                            onChange={handleChange}
                        >
                            <ToggleButton value="en">EN</ToggleButton>
                            <ToggleButton value="bg">BG</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div className="header-text">
                        <Typography variant="h2" component="div" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
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
