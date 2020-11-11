import { SET_EMAIL, SET_PASSWORD } from '../actionTypes';

const initialState = {
    email: '',
    password: '',
};

interface Action {
    type: string;
    payload: EmailPayload & PasswordPayload;
}

interface EmailPayload {
    email: string;
}

interface PasswordPayload {
    password: string;
}

export default function (state = initialState, action: Action) {
    switch (action.type) {
        case SET_EMAIL: {
            const { email } = action.payload;
            return {
                ...state,
                email,
            };
        }
        case SET_PASSWORD: {
            const { password } = action.payload;
            return {
                ...state,
                password,
            };
        }
        default:
            return state;
    }
}
