import { useAppSelector } from '../hook/redux';
import Message from './Message';

const MessagesList = () => {
    const { messages } = useAppSelector((state) => state.messages);

    return (
        <div className="container">
            {messages &&
                messages.map((message) => (
                    <div className="m-2" key={message.id}>
                        <Message message={message} />
                    </div>
                ))}
        </div>
    );
};

export default MessagesList;
