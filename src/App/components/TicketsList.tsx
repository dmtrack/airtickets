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
    console.log(filters);
    const filteredTickets = tickets.filter((ticket: ITicket) => {
        return filters.find((filter) => {
            console.log(Number(ticket.stops) === filter, 'equal');
            return ticket.stops === filter;
        });
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
