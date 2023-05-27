const TOKEN = 'token';

export const getToken = () => {
    const token = localStorage.getItem(TOKEN);
    return token;
}

export const setToken = token => {
    localStorage.setItem(TOKEN, token);
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}
