import { SET_EMAIL, SET_PASSWORD, SET_FIRSTNAME, SET_LASTNAME } from './actionTypes';

export const setEmail = (email: string) => ({
    type: SET_EMAIL,
    payload: { email },
});

export const setPassword = (password: string) => ({
    type: SET_PASSWORD,
    payload: { password },
});

export const setFirstName = (firstName: string) => ({
    type: SET_FIRSTNAME,
    payload: { firstName },
});

export const setLastName = (lastName: string) => ({
    type: SET_LASTNAME,
    payload: { lastName },
});
