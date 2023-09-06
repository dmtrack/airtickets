import { ticketSlice } from '../slices/tickets.slice';
import { AppDispatch } from '..';
import { ITicket, ITicketState } from '../../interfaces/IMessage';

const URL = process.env.REACT_APP_BASE_URL;

export const fetchMessages = (messages: ITicket[], username: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(ticketSlice.actions.fetching());
            dispatch(ticketSlice.actions.fetchSuccess(messages));
            // dispatch(
            //     ticketSlice.actions.setInboxMessages({
            //         username: username,
            //         messages: messages,
            //     })
            // );
        } catch (e) {
            dispatch(ticketSlice.actions.fetchError(e as Error));
        }
    };
};

// export const setInbox = (tickets: ITicket[]) => {
//     return async (dispatch: AppDispatch) => {
//         try {
//             dispatch(ticketSlice.actions.fetchSuccess(tickets));
//         } catch (e) {
//             dispatch(ticketSlice.actions.fetchError(e as Error));
//         }
//     };
// };

// export const setOutbox = (tickets: ITicket[]) => {
//     return async (dispatch: AppDispatch) => {
//         try {
//             dispatch(ticketSlice.actions.fetchSuccess(tickets));
//         } catch (e) {
//             dispatch(ticketSlice.actions.fetchError(e as Error));
//         }
//     };
// };
