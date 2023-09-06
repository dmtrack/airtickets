import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITicket, ITicketState } from '../../interfaces/ITicket';
import { FilterType } from '../../interfaces/ITicket';

const initialState: ITicketState = {
    loading: false,
    error: '',
    tickets: [],
    filters: [],
};

interface ITicketsOptions {
    messages: ITicket[];
    username: string | null;
}

export const ticketSlice = createSlice({
    name: 'tickets',
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

        setFilter(state, action: PayloadAction<number[]>) {
            console.log(action.type, 'payload');
            state.filters = action.payload;
            // state.tickets = state.tickets.filter((ticket: ITicket) =>
            //     state.filters.every(
            //         (filter: FilterType) => ticket.stops === filter.value
            //     )
            // );
        },
        // setOutboxMessages(state, action: PayloadAction<ITicketsOptions>) {
        //     state.option = 'outbox';
        //     state.tickets = state.tickets.filter(
        //         (m) => m.author === action.payload.username
        //     );
        // },
    },
});

export default ticketSlice.reducer;
