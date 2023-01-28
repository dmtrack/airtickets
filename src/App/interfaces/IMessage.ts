export interface IMessage {
    id: number;
    author: string;
    title: string;
    text: string;
    recepient: string;
    timestamp: number;
}

export interface ICreateMessage {
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
    option: string;
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
    mesages: IMessage[];
    loading: boolean;
};

export type DeleteUserProp = string[];

export interface IMessagesOptions {
    messages: IMessage[];
    username: string | null;
}
