import { call, put, takeEvery, takeLatest ,all } from 'redux-saga/effects'
import * as ActionType from '../Actiontype'
import { ForgetAPI, LoginAPI, singAPI } from '../../common/apis/Auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
  try {
    const user = yield call(singAPI, action.payload)
    console.log(user);
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}
function* loginUser(action) {
  try {
    const user = yield call(LoginAPI, action.payload)
    console.log(user);
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}
function* ForgetUser(action) {
  try {
    const user = yield call(ForgetAPI, action.payload)
    console.log(user);
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e);
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
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


export default function* authsaga () {
    yield all ([
        SignupSaga(),
        LoginSaga(),
        ForgetSaga()
    ])
}