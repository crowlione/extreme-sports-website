import { createChatBotMessage } from "react-chatbot-kit";
import BotLink from "../components/BotLink";
import BotOption from "../components/BotOption";

const config = {
    botName: "Cliff, the Rock Climbing Bot",
    initialMessages: [createChatBotMessage(`Hi! How may I help you?`)],
    customStyles: {
        // Overrides the chatbot message styles
        botMessageBox: {
            backgroundColor: "#296573",
        },
        // Overrides the chat button styles
        chatButton: {
            backgroundColor: "#296573",
        },
    },
    widgets: [
        {
            widgetName: 'botOption',
            widgetFunc: (props) => <BotOption {...props} />,
        },
        {
            widgetName: "offersLink",
            widgetFunc: (props) => <BotLink {...props} />,
            props: {link: '#offers', text: "Click me!"}
        },
        {
            widgetName: "aboutLink",
            widgetFunc: (props) => <BotLink {...props} />,
            props: {link: '#about', text: "Click me!"}
        },
        {
            widgetName: "contactLink",
            widgetFunc: (props) => <BotLink {...props} />,
            props: {link: '#contact', text: "Contact us"}
        }
    ],

}

export default config