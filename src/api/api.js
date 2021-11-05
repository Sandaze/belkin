import axios from "axios";

const baseURL = 'https://api.pokemontcg.io/v2/'
const instance = axios.create({
    withCredentials: true,
    headers: {
        'X-Api-Key': 'd800239c-ade8-4890-85a0-04e021a8e2b1'
    },
    baseURL: baseURL,
});

export const authApi = {
    getOneTimePassword: () => {
        let password = "";
        let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 15; i++)
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));

        return password;
    },
    getPortionCards: () => {
        return instance.get('cards?page=1&pageSize=10').then(response => response);
    }
}