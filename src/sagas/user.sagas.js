import {call,put} from 'redux-saga/effects';
import { sessionService } from 'redux-react-session';
import { userService } from '../services';
import {loginResponse} from '../actions/user.actions';
import {LOGIN_RESPONSE} from '../constants/action';

// Log in service saga
export function* loginRequest(action){
    try {
        const data = yield call(userService.login, action.user);       
        sessionService.saveSession(data.token);
        sessionService.saveUser(data);    
        window.open('/home', '_self');

        // yield put({type:LOGIN_RESPONSE,data:'maan'});


    } catch (err) {
        alert(err);
    }
}

// Forgot password service saga
export function* forgotRequest(action){
    try{ 
        // const user = yield call(userService.forgot, action.user);

        // alert('forgot respose'+JSON.stringify(user));
    }catch(err){
        alert(JSON.stringify(err));
    }
       
}
