import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { sessionReducer } from 'redux-react-session';
import * as userReducer from './user.reducer';
import * as uiReducer from './ui.reducer';
  
export default combineReducers(Object.assign(
    {routing : routerReducer},    
    {session : sessionReducer}, 
    userReducer,   
    uiReducer
));


