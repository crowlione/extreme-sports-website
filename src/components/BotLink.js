import Link from '@mui/material/Link';

export default function BotLink(props) {
    return (
        <Link href={props.link}>{props.text}</Link>
    )
}