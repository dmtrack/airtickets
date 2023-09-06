import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITicket, ITicketState } from '../../interfaces/IMessage';

const initialState: ITicketState = {
    loading: false,
    error: '',
    tickets: [],
    option: 'inbox',
};

interface ITicketsOptions {
    messages: ITicket[];
    username: string | null;
}

export const ticketSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<ITicket[]>) {
            state.loading = false;
            state.tickets = action.payload;
        },

        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message + ': ' + action.payload?.cause;
        },
        // setInboxMessages(state, action: PayloadAction<ITicketsOptions>) {
        //     state.option = 'inbox';
        //     state.tickets = state.tickets.filter(
        //         (m) => m.recepient === action.payload.username
        //     );
        // },
        // setOutboxMessages(state, action: PayloadAction<ITicketsOptions>) {
        //     state.option = 'outbox';
        //     state.tickets = state.tickets.filter(
        //         (m) => m.author === action.payload.username
        //     );
        // },
    },
});

export default ticketSlice.reducer;
