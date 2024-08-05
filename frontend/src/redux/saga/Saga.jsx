// sagas.js
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import Cookies from 'js-cookie';
import {  loginSuccess, loginFailure } from '../action/Action';
import { LOGIN_REQUEST } from '../action/Constant';

function* loginSaga(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:8000/api/auth/admin/login', action.payload);
    const token = response.data.token;

    // Token ko cookies me set karo (1 hour expiry)
    Cookies.set('adminToken', token, { expires: 1 / 24 });
    alert('Welcome To Admin Dashboard ')

    // Success action dispatch karo
    yield put(loginSuccess(token));

    // Redirect to dashboard
    window.location.href = '/Dashboard';
  } catch (error) {
    yield put(loginFailure(error.message));
    alert('admin not found ')
  }
}

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
