class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
            this.actionProvider.greet();
        }
        if(lowerCaseMessage.includes('offer')) {
            this.actionProvider.handleOffers();
        }
        if(lowerCaseMessage.includes('about')){
            this.actionProvider.handleAbout();
        }
        if(lowerCaseMessage.includes('contact')){
            this.actionProvider.handleContact();
        }

    }
}

export default MessageParser;