import { combineReducers } from 'redux';
import signin from './signin';
import signup from './signup';
import token from './token';

export default combineReducers({ signin, signup, token });
