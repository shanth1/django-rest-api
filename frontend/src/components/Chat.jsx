import { DeepChat } from 'deep-chat-react';
import { useEffect, useState } from 'react';

export const Chat = () => {
    const [connectedMessage, setConnectedMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/api/dev/connect')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setConnectedMessage(data.text);
            })
            .catch(error => {
                console.error('Fetch Error:', error);
            });
    }, []);

    return (
        <DeepChat
            style={{ borderRadius: '10px' }}
            introMessage={{ text: connectedMessage }}
            request={{
                url: 'http://localhost:8000/api/dev/send',
                method: 'POST',
            }}
            requestBodyLimits={{ maxMessages: -1 }}
            requestInterceptor={details => {
                return details;
            }}
            responseInterceptor={response => {
                return response;
            }}
            textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
        />
    );
};
