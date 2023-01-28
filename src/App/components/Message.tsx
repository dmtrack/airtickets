import React from 'react';
import { IMessage } from '../interfaces/IMessage';

interface IMessageProps {
    message: IMessage;
}

function Message({ message }: IMessageProps) {
    const { id, author, recepient, title, text, timestamp } = message;

    return (
        <>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-3">
                    <input
                        type="checkbox"
                        value={id}
                        id={String(id)}
                        checked={dataId.includes(id) ? true : false}
                        onChange={chooseCheckbox}
                    />
                </td>
                <td className="px-5 py-4">{id}</td>
                <td className="px-5 py-4">{nickname}</td>
                <td className="px-5 py-4">{email}</td>
                <td className="px-5 py-4">{registered}</td>
                <td className="px-5 py-4">{login}</td>
                <td className="px-5 py-4">{blocked ? 'blocked' : 'active'}</td>
            </tr> */}
        </>
    );
}

export default Message;
