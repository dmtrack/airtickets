import { messageSlice } from '../slices/message.slice';
import { AppDispatch } from '..';
import {
    ICreateMessage,
    IMessage,
    IMessageState,
} from '../../interfaces/IMessage';
import localStorageService from '../../utils/localStorage';
import ky from 'ky';
const URL = process.env.REACT_APP_BASE_URL;

export const fetchMessages = (messages: IMessage[], username: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(messageSlice.actions.fetchSuccess(messages));
            dispatch(
                messageSlice.actions.setInboxMessages({
                    username: username,
                    messages: messages,
                })
            );
        } catch (e) {
            dispatch(messageSlice.actions.fetchError(e as Error));
        }
    };
};

// export const fetchMessages = (username: string) => {
//     return async (dispatch: AppDispatch) => {
//         try {
//             dispatch(messageSlice.actions.fetching());
//             const messages: any = await ky
//                 .get(`${URL}/getmessages?username=${username}`)
//                 .json();
//             dispatch(messageSlice.actions.fetchSuccess(messages.data));
//             dispatch(
//                 messageSlice.actions.setInboxMessages({
//                     username: username,
//                     messages: messages,
//                 })
//             );
//         } catch (e) {
//             dispatch(messageSlice.actions.fetchError(e as Error));
//         }
//     };
// };

export const createSocketMessage = (message: ICreateMessage) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(messageSlice.actions.fetching());
            const message: any = await ky
                .post(`${URL}/createsocketmessage`)
                .json();
            dispatch(messageSlice.actions.createMessage(message));
        } catch (e) {
            dispatch(messageSlice.actions.fetchError(e as Error));
        }
    };
};

export const createStateMessage = (message: ICreateMessage) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(messageSlice.actions.createMessage(message));
        } catch (e) {
            dispatch(messageSlice.actions.fetchError(e as Error));
        }
    };
};

export const setInbox = (username: string | null) => {
    return async (dispatch: AppDispatch) => {
        try {
            const messages: any = await ky
                .get(`${URL}/getmessages?username=${username}`)
                .json();
            dispatch(messageSlice.actions.fetchSuccess(messages.data));
            dispatch(
                messageSlice.actions.setInboxMessages({
                    username: username,
                    messages: messages,
                })
            );
        } catch (e) {
            dispatch(messageSlice.actions.fetchError(e as Error));
        }
    };
};

export const setOutbox = (username: string | null) => {
    return async (dispatch: AppDispatch) => {
        try {
            const messages: any = await ky
                .get(`${URL}/getmessages?username=${username}`)
                .json();
            dispatch(messageSlice.actions.fetchSuccess(messages.data));
            dispatch(
                messageSlice.actions.setOutboxMessages({
                    username: username,
                    messages: messages,
                })
            );
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
