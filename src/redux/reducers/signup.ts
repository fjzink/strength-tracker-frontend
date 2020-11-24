import { SET_EMAIL, SET_PASSWORD, SET_FIRSTNAME, SET_LASTNAME } from '../actionTypes';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

interface Action {
    type: string;
    payload: EmailPayload & PasswordPayload & FirstNamePayload & LastNamePayload;
}

interface EmailPayload {
    email: string;
}

interface PasswordPayload {
    password: string;
}

interface FirstNamePayload {
    firstName: string;
}

interface LastNamePayload {
    lastName: string;
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
        case SET_FIRSTNAME: {
            const { firstName } = action.payload;
            return {
                ...state,
                firstName,
            };
        }
        case SET_LASTNAME: {
            const { lastName } = action.payload;
            return {
                ...state,
                lastName,
            };
        }
        default:
            return state;
    }
}
