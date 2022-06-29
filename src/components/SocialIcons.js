import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';

export default function SocialIcons(props) {
    return (
        <Box sx={{ paddingBottom: 2, paddingTop: 2 }}>
            <InstagramIcon sx={{ fontSize: props.fontSize, color: props.color, cursor: 'pointer', ':hover': { transform: 'scale(1.25)' } }} />
            <TwitterIcon sx={{ fontSize: props.fontSize, color: props.color, cursor: 'pointer', ':hover': { transform: 'scale(1.25)' } }} />
            <FacebookIcon sx={{ fontSize: props.fontSize, color: props.color, cursor: 'pointer', ':hover': { transform: 'scale(1.25)' } }} />
        </Box>
    )
}