import { fork, all } from 'redux-saga/effects';
import user from '../User/Saga';
import user1 from '../Users1/Saga';

export default function* rootSaga() {
    yield all([
        user(),
        user1()
    ])
    // code after all-effect
}
