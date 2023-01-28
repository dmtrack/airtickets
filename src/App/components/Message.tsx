import React from 'react';
import { IMessage } from '../interfaces/IMessage';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../hook/redux';

interface IMessageProps {
    message: IMessage;
}

function Message({ message }: IMessageProps) {
    const { id, author, recepient, title, text, timestamp } = message;
    const { option } = useAppSelector((state) => state.messages);

    return (
        <div>
            <Accordion sx={{ minWidth: '350px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography component={'span'}>
                        <div>{title}</div>
                        <div>date: {timestamp}</div>
                        <div>
                            {option === 'inbox' ? (
                                <div>from: {author}</div>
                            ) : (
                                <div>to: {recepient}</div>
                            )}
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{text}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Message;
