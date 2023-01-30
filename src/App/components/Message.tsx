import { IMessage } from '../interfaces/IMessage';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../hook/redux';
import Box from '@mui/material/Box';

interface IMessageProps {
    message: IMessage;
}

function Message({ message }: IMessageProps) {
    let { author, recepient, title, text, timestamp } = message;
    let date = new Date(timestamp * 1000);
    let formatedDate = `${date.getDate()}.${
        date.getMonth() + 1
    } / ${date.getHours()}:${date.getMinutes()}`;

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
                        <div>
                            {option === 'inbox' ? (
                                <div>
                                    <div className="">
                                        <Box>
                                            <span className="font-semibold ">
                                                from:
                                            </span>
                                            <span className="font-thin">
                                                _{author}
                                            </span>
                                        </Box>

                                        <Box>
                                            <span className="font-semibold">
                                                date:
                                            </span>{' '}
                                            <span className="font-thin">
                                                {formatedDate}
                                            </span>
                                        </Box>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="">
                                        <Box>
                                            <span className="font-semibold">
                                                to:
                                            </span>
                                            <span className="font-thin">
                                                _{recepient}
                                            </span>
                                        </Box>
                                        <Box>
                                            <span className="font-semibold">
                                                date:
                                            </span>{' '}
                                            <span className="font-thin">
                                                {formatedDate}
                                            </span>
                                        </Box>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <span className="font-semibold">Subject:</span>{' '}
                            <span className="font-thin">{title}</span>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className="font-style: italic">{text}</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Message;
