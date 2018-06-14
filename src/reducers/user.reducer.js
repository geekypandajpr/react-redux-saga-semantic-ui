import * as types from '../constants/action';
import createReducer from '../lib/createReducer';

export const login = createReducer({}, {
    [types.LOGIN_RESPONSE](state={sessionService}, action) {
        return {};
    }
});


