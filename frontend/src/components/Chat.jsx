import { DeepChat } from 'deep-chat-react';

export const Chat = () => {
    const initialMessages = [
        { role: 'user', text: 'Hey, how are you today?' },
        { role: 'ai', text: 'I am doing very well!' },
    ];

    return (
        <DeepChat
            style={{ borderRadius: '10px' }}
            introMessage={{ text: 'Send a chat message to an example server.' }}
            request={{ url: 'http://localhost:8080/chat' }}
            requestBodyLimits={{ maxMessages: -1 }}
            requestInterceptor={details => {
                console.log(details);
                return details;
            }}
            responseInterceptor={response => {
                console.log(response);
                return response;
            }}
            textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
            initialMessages={initialMessages}
        />
    );
};
