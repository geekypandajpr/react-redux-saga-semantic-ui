import {LOGIN_REQUEST,FORGOT_REQUEST,LOGIN_RESPONSE} from '../constants/action';


export const loginRequest  = user => ({type: LOGIN_REQUEST, user});
export const forgotRequest = user => ({type: FORGOT_REQUEST,user});



