import { useAppSelector } from '../hook/redux';
import Message from './Message';

const MessagesList = () => {
    const { username } = useAppSelector((state) => state.auth);
    const { messages } = useAppSelector((state) => state.messages);
    const { option } = useAppSelector((state) => state.messages);
    const filterMessages = messages.filter((m) => {
        if (m.recepient === m.author && m.recepient !== username) return false;
        return option === 'inbox'
            ? m.recepient === username
            : m.author === username;
    });

    return (
        <div className="container">
            {messages &&
                filterMessages.map((message) => (
                    <div className="m-2" key={message.id}>
                        <Message message={message} />
                    </div>
                ))}
        </div>
    );
};

export default MessagesList;
