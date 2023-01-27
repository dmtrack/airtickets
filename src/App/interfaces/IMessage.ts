export interface IMessage {
    id: number;
    author: string;
    title: string;
    text: string;
    recepient: string;
    timestamp: number;
}

export interface IMessageState {
    loading: boolean;
    error: string;
    messages: IMessage[];
}

export interface IServerResponce<T> {
    config: {};
    data: T[];
    message: string;
    headers: {};
    request: {};
    status: number;
    statusText: string;
}

export type MessagesListProps = {
    user: IMessage[];
    loading: boolean;
};

export type DeleteUserProp = string[];
