import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import SocialIcons from './SocialIcons';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Rock Climbing Bulgaria
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Box sx={{ display: 'flex' }}>
                <Container sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h6">
                        Company
                    </Typography>
                    <Box component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Link color="inherit" href="" underline="none">
                            About
                        </Link>
                        <Link color="inherit" href="" underline="none">
                            Blog
                        </Link>
                        <Link color="inherit" href="" underline="none">
                            Contact
                        </Link>
                    </Box>
                </Container>
                <Container sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h6">
                        Support
                    </Typography>
                    <Box component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Link color="inherit" href="" underline="none">
                            FAQ
                        </Link>
                        <Link color="inherit" href="" underline="none">
                            Booking first climb?
                        </Link>
                        <Link color="inherit" href="" underline="none">
                            Climbing Tips
                        </Link>
                    </Box>
                </Container>
                <Container sx={{ textAlign: 'center' }}>
                    <Typography gutterBottom variant="h6">
                        Terms & Policies
                    </Typography>
                    <Box component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Link color="inherit" href="" underline="none">
                            Terms of service
                        </Link>
                        <Link color="inherit" href="" underline="none">
                            Privacy Policy
                        </Link>
                        <Link color="inherit" href="" underline="none">
                            Security
                        </Link>
                    </Box>
                </Container>
            </Box>
            <Container maxWidth="sm" sx={{ textAlign: 'center'}}>
                <SocialIcons fontSize="45px" color="#296573" />
                <Copyright />
            </Container>
        </Box>
    )
}