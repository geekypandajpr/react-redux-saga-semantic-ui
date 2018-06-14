import { takeLatest } from 'redux-saga/effects';
import {LOGIN_REQUEST,FORGOT_REQUEST,SIDEMENU_TOGGLE} from '../constants/action';
import { loginRequest,forgotRequest } from './user.sagas';
import { sideMenuToggleRequest } from './ui.sagas';

export default function* rootSaga() {

  // User Request Sagas Implementations
  yield takeLatest(LOGIN_REQUEST, loginRequest);
  yield takeLatest(FORGOT_REQUEST, forgotRequest);

  // UI Sagas Implementation 
  yield takeLatest(SIDEMENU_TOGGLE,sideMenuToggleRequest);

}