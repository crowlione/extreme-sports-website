import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BotOption(props) {
    const options = [
        { text: "Offers", handler: props.actionProvider.handleOffers, id: 1 },
        { text: "About", handler: props.actionProvider.handleAbout, id: 2 },
        { text: "Contact", handler: props.actionProvider.handleContact, id: 3 },
    ];

    return (
        <Stack direction="row" spacing={1}>
            {options.map((option) => (
                <Chip label={option.text} onClick={option.handler} key={option.id} variant="outlined" />
            ))}
        </Stack>
    )
}