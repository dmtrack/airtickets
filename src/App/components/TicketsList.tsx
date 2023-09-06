import { useAppSelector } from '../hook/redux';
import data from '../moke-data/tickets.json';
import Ticket from './Ticket';
import { ITicket } from '../interfaces/IMessage';

export type TicketsListProps = {
    tickets: ITicket[];
    loading: boolean;
};

const TicketsList = () => {
    // const { tickets } = useAppSelector((state) => state);
    const { option } = useAppSelector((state) => state.tickets);
    const tickets: ITicket[] = data.tickets;
    const date = new Date().getTime();

    return (
        <div className='container'>
            {tickets &&
                tickets.map((ticket) => (
                    <div className='m-2' key={date}>
                        <Ticket ticket={ticket} />
                    </div>
                ))}
        </div>
    );
};

export default TicketsList;
