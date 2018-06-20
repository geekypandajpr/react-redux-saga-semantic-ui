import * as types from '../constants/action';
import createReducer from '../lib/createReducer';
import { sessionService } from 'redux-react-session';

export const login = createReducer({}, {
    [types.LOGIN_RESPONSE](state={sessionService}, action) {
        return {};
    }
});


