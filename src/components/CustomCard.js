import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

function CustomCard(props) {
    const url = window.location.origin+props.offer.imageUrl;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                src={url}
                alt={props.offer.imageAlt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.offer.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.offer.description}
                </Typography>
                {props.offer.details && <div><br/><Typography variant="body2" color="text.secondary">
                    {props.offer.details}
                </Typography></div>}
                <Typography gutterBottom variant="h5" component="div" pt={1}>
                    {props.offer.price}
                </Typography>
                {props.offer.tags.map((tag, i) => <Chip size="small" label={tag} key={i} sx={{mr: 1, mt:1}}></Chip>)}
            </CardContent>
            <CardActions>
                <Button size="small">Book</Button>
                <Button size="small">Share</Button>
            </CardActions>
        </Card>
    );
}

export default CustomCard