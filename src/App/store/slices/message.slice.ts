import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMessage, IMessageState } from '../../interfaces/IMessage';

const initialState: IMessageState = {
    loading: false,
    error: '',
    messages: [],
};

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IMessage[]>) {
            state.loading = false;
            state.messages = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message + ': ' + action.payload?.cause;
        },
    },
});

export default messageSlice.reducer;
