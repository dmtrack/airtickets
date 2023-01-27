import { messageSlice } from '../slices/message.slice';
import { AppDispatch } from '..';
import {
    IServerResponce,
    IMessage,
    IMessageState,
} from '../../interfaces/IMessage';
import localStorageService from '../../utils/localStorage';
import ky from 'ky';
const URL = process.env.REACT_APP_BASE_URL;
export const fetchMessages = (username: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(messageSlice.actions.fetching());
            const response: any = await ky
                .get(`${URL}/getmessages?username=${username}`)
                .json();
            console.log(response);
            dispatch(messageSlice.actions.fetchSuccess(response.data));
        } catch (e) {
            dispatch(messageSlice.actions.fetchError(e as Error));
        }
    };
};

export const getCurrentUserData = () => (state: IMessageState) => {
    return state.messages
        ? state.messages.find(
              (u: IMessage) => String(u.id) === localStorageService.getUserId()
          )
        : null;
};
