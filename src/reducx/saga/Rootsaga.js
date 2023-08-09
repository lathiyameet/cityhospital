import { all } from 'redux-saga/effects'
import authsaga from './authSaga'

export default function* Rootsaga () {
    yield all ([
        authsaga()
    ])
}
