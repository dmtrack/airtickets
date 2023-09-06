import { useAppSelector } from '../hook/redux';
import data from '../moke-data/tickets.json';
import Ticket from './Ticket';
import { ITicket } from '../interfaces/ITicket';
import uuid from 'uuidv4';

export type TicketsListProps = {
    tickets: ITicket[];
    loading: boolean;
};

const TicketsList = () => {
    const { tickets } = useAppSelector((state) => state.tickets);
    const { filters } = useAppSelector((state) => state.tickets);
    // const sortedTickets: ITicket[] = tickets.sort((a, b) => a.price - b.price);
    console.log(filters, 'filters');

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
