// actions.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './Constant';

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: { email, password }
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});
