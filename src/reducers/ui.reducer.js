import * as types from '../constants/action';
import createReducer from '../lib/createReducer';

export const ui = createReducer({}, {
    [types.SIDEMENU_TOGGLE](state, action) {
        return {togle: action.type};
    }
});