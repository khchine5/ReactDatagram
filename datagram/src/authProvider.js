import Cookies from 'universal-cookie';
import {mainHost } from './utils';
const cookies = new Cookies();

const authProvider = {
    login: ({ username, password }) =>  {
        let loginUrl = mainHost + "/rest-auth/login/";
        console.log(loginUrl);
        let email = username;
        let csrftoken = cookies.get('csrftoken');
        // console.log('csrfmiddlewaretoken',csrfmiddlewaretoken);
        const request = new Request(loginUrl, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            //mode: 'same-origin',
            body: JSON.stringify({ 'email':email, 'password':password}),
            //headers: new Headers({ 'Content-Type': 'multipart/form-data',
            //                        'Accept': 'text/html,application/xhtml+xml'})
            //headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'}),
            headers: new Headers({ 'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    'X-CSRFToken': csrftoken}),
        });
        return fetch(request).then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                localStorage.setItem('token', response['key']);
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => Promise.reject('Unknown method'),

};

export default authProvider;
