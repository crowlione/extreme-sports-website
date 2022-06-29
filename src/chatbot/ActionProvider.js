class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend. What can I help you with?", {
            widget: 'botOption',
        });
        this.updateChatbotState(greetingMessage);
    };

    handleOffers = () => {
        const message = this.createChatBotMessage(
            "Here is the link to all of our offers:",
            {
              widget: "offersLink",
            }
          );
      
        this.updateChatbotState(message);
    }

    handleAbout = () => {
        const message = this.createChatBotMessage(
            "You can learn more about us  here:",
            {
              widget: "aboutLink",
            }
          );
      
        this.updateChatbotState(message);
    }

    handleContact = () => {
        const message = this.createChatBotMessage(
            'You can either keep chatting with me, or, if you want, you can fill out our contact form below and a real person will answer you within 24 hours!',
            {
              widget: "contactLink",
            }
          );
      
        this.updateChatbotState(message);
    }

    updateChatbotState(message) {

        // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;