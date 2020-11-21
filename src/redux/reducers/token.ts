import { SET_TOKEN, CLEAR_TOKEN } from '../actionTypes';

const initialState = '';

interface tokenAction {
    type: string;
    payload?: tokenPayload;
}

interface tokenPayload {
    token: string;
}

export default function (state = initialState, action: tokenAction) {
    switch (action.type) {
        case SET_TOKEN: {
            return action.payload?.token;
        }
        case CLEAR_TOKEN: {
            return '';
        }
        default:
            return state;
    }
}
