import { ticketSlice } from '../slices/tickets.slice';
import { AppDispatch } from '..';
import { ITicket } from '../../interfaces/ITicket';

export const fetchMessages = (messages: ITicket[], username: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(ticketSlice.actions.fetching());
            dispatch(ticketSlice.actions.fetchSuccess(messages));
        } catch (e) {
            dispatch(ticketSlice.actions.fetchError(e as Error));
        }
    };
};

export const setTickets = (tickets: ITicket[]) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(ticketSlice.actions.fetchSuccess(tickets));
        } catch (e) {
            dispatch(ticketSlice.actions.fetchError(e as Error));
        }
    };
};

export const setFilterAction = (filter: number[]) => {
    console.log(filter, 'filterACtion');
    return async (dispatch: AppDispatch) => {
        try {
            console.log('filter1111!!!');
            dispatch(ticketSlice.actions.setFilter(filter));
        } catch (e) {
            dispatch(ticketSlice.actions.fetchError(e as Error));
        }
    };
};
