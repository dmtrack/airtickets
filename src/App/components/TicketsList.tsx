import { useAppSelector } from '../hook/redux';
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
    const filteredTickets = tickets.filter((ticket: ITicket) => {
        let filterResult = filters.find((filter) => {
            return ticket.stops === filter;
        });
        if (filterResult === 0) filterResult = 1;
        return filterResult;
    });

    return (
        <div className='container'>
            {filteredTickets.length > 0
                ? filteredTickets.map((ticket) => (
                      <div className='pb-5' key={uuid()}>
                          <Ticket ticket={ticket} />
                      </div>
                  ))
                : tickets.map((ticket) => (
                      <div className='pb-5' key={uuid()}>
                          <Ticket ticket={ticket} />
                      </div>
                  ))}
        </div>
    );
};

export default TicketsList;
