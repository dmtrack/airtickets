export interface ITicket {
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    departure_date: string;
    departure_time: string;
    destination: string;
    destination_name: string;
    origin: string;
    origin_name: string;
    price: number;
    stops: number;
}

export interface ITicketState {
    loading: boolean;
    error: string;
    tickets: ITicket[];
    filters: number[];
}

export interface ITicketsOptions {
    messages: ITicket[];
    username: string | null;
}

export type FilterType = {
    value: number;
};
