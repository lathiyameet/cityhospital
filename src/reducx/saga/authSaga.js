import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as ActionType from '../Actiontype'
import { ForgetAPI, LoginAPI, LogoutAPI, singAPI } from '../../common/apis/Auth.api'
import { setAlert } from '../Slice/alertSlice';
import { Logged_out, authError, emailVerification, loggdeIn } from '../action/auth.action';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
  try {
    const user = yield call(singAPI, action.payload)
    yield put(emailVerification());
    yield put(setAlert({ text: user.Message, color: 'success' }))

  } catch (e) {
    console.log(e);
    yield put(authError(e.Message))
    yield put(setAlert({ text: e.Message, color: 'error' }))
  }
}
function* loginUser(action) {
  try {
    const user = yield call(LoginAPI, action.payload.data)
    action.payload.callback("/")
   yield put(loggdeIn(user.user))
    yield put(setAlert({ text: user.Message, color: 'success' }))

    console.log(user);
  } catch (e) {
    yield put(authError(e.Message))
    yield put(setAlert({ text: e.Message, color: 'error' }))
  }
}
function* ForgetUser(action) {
  try {
    const user = yield call(ForgetAPI, action.payload)
    yield put(setAlert({ text: user.Message, color: 'success' }))
    console.log(user);
  } catch (e) {
    console.log(e);
    yield put(setAlert({ text: e.Message, color: 'error' }))
  }
}
function* logout(){

  const user = yield call(LogoutAPI)
  yield put(Logged_out())
  yield put(setAlert({ text: user.Message, color: 'success' }))
}





function* SignupSaga() {
  yield takeEvery(ActionType.SIGNUP_REQEST, signupUser)
}
function* LoginSaga() {
  yield takeEvery(ActionType.LOGIN_REQEST, loginUser)
}
function* ForgetSaga() {
  yield takeEvery(ActionType.FORGET_REQEST, ForgetUser)
}
function* Logout() {
  yield takeEvery(ActionType.LOG_OUt, logout)
}


export default function* authsaga() {
  yield all([
    SignupSaga(),
    LoginSaga(),
    ForgetSaga(),
    Logout()
  ])
}