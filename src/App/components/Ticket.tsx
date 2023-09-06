import { ITicket } from '../interfaces/IMessage';
import Typography from '@mui/material/Typography';
import AccordionSummary from '@mui/material/AccordionSummary';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../hook/redux';
import Box from '@mui/material/Box';

interface ITicketProps {
    ticket: ITicket;
}

// arrival_date: string;
// arrival_time: string;
// carrier: string;
// departure_date: string;
// destination: string;
// origin: string;
// origin_name: string;
// price: number;
// stops: number;

function Message({ ticket }: ITicketProps) {
    let {
        carrier,
        origin,
        origin_name,
        price,
        stops,
        departure_date,
        destination,
        arrival_date,
        arrival_time,
    } = ticket;
    // let formatedDate = `${date.getDate()}.${
    //     date.getMonth() + 1
    // } / ${date.getHours()}:${date.getMinutes()}`;

    const { option } = useAppSelector((state) => state.tickets);

    return (
        <div>
            <Accordion sx={{ minWidth: '350px' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'>
                    <Typography component={'span'}>
                        <div>
                            {option === 'inbox' ? (
                                <div>
                                    <div className=''>
                                        <Box>
                                            <span className='font-semibold '>
                                                from:
                                            </span>
                                            <span className='font-thin'>
                                                origin_name: {origin_name}-
                                                {destination}
                                            </span>
                                        </Box>

                                        <Box>
                                            <span className='font-semibold'>
                                                date:
                                            </span>{' '}
                                            <span className='font-thin'>
                                                departure_date: {departure_date}
                                            </span>
                                        </Box>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    {/* <div className=''>
                                        <Box>
                                            <span className='font-semibold'>
                                                to:
                                            </span>
                                            <span className='font-thin'>
                                                _{recepient}
                                            </span>
                                        </Box>
                                        <Box>
                                            <span className='font-semibold'>
                                                date:
                                            </span>{' '}
                                            <span className='font-thin'>
                                                {formatedDate}
                                            </span>
                                        </Box>
                                    </div> */}
                                </div>
                            )}
                        </div>
                        <div>
                            <span className='font-semibold'>Subject:</span>{' '}
                            <span className='font-thin'>price: {price}</span>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className='font-style: italic'>
                            stops: {stops}
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Message;
