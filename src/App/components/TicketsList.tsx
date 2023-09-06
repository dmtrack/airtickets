import { useAppSelector } from '../hook/redux';
import data from '../moke-data/tickets.json';
import Ticket from './Ticket';
import { ITicket } from '../interfaces/IMessage';
import uuid from 'uuidv4';

export type TicketsListProps = {
    tickets: ITicket[];
    loading: boolean;
};

const TicketsList = () => {
    // const { tickets } = useAppSelector((state) => state);
    const { option } = useAppSelector((state) => state.tickets);
    const tickets: ITicket[] = data.tickets;

    return (
        <div className='container'>
            {tickets &&
                tickets.map((ticket) => (
                    <div className='pb-5' key={uuid()}>
                        <Ticket ticket={ticket} />
                    </div>
                ))}
        </div>
    );
};

export default TicketsList;
