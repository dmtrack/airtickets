import ky from 'ky';

const URL = process.env.REACT_APP_BASE_URL;
export const fetchUsers = async () => {
    const users: any = await ky.get(`${URL}/getusers`).json();
    return users;
};
