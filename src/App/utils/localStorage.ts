const USERID_KEY = 'USERID_KEY';
const USERNAME_KEY = 'USERNAME_KEY';

type SetUserProps = {
    userId: string;
    username: string;
};

export function setUser({ userId, username }: SetUserProps) {
    localStorage.setItem(USERID_KEY, String(userId));
    localStorage.setItem(USERNAME_KEY, String(username));
}

export function removeAuthData() {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(USERNAME_KEY);
}

export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}
const localStorageService = {
    getUserId,
    removeAuthData,
    setUser,
};
export default localStorageService;
