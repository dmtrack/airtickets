export interface ITicket {
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    departure_date: string;
    destination: string;
    origin: string;
    origin_name: string;
    price: number;
    stops: number;
}

export interface ITicketState {
    loading: boolean;
    error: string;
    tickets: ITicket[];
    option: string;
}

export interface ITicketsOptions {
    messages: ITicket[];
    username: string | null;
}
