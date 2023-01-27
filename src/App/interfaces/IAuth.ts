export interface IError extends Error {
    response: { data: { message: string; error: number } };
}

export interface ILoginData {
    username: string;
}

export interface IAuthResponse {
    data: {
        id: number;
        username: string;
    };
}

export type LogOutProps = {
    id?: number;
};
