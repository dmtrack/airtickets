import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from '../../interfaces/IAuth';
import localStorageService from '../../utils/localStorage';

interface IAuthState {
    userId: number;
    username: string;
    isAuth: boolean;
    error: string;
}
interface IAuthPayload {
    userId: number;
    username: string;
}

const initialState: IAuthState = {
    userId: Number(localStorageService.getUserId() ?? null),
    username: localStorageService.getUserName() ?? '',
    isAuth: Boolean(localStorageService.getUserId() ?? ''),
    error: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<IAuthPayload>) {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.isAuth = Boolean(action.payload.userId);
            localStorageService.setUser({
                userId: String(action.payload.userId),
                username: action.payload.username,
            });
        },
        fetchError(state, action: PayloadAction<IError>) {
            state.error = action.payload.response.data.message;
        },
        userLoggedOut(state) {
            state.isAuth = false;
            state.userId = 0;
            state.username = '';
        },
    },
});

export default authSlice.reducer;
