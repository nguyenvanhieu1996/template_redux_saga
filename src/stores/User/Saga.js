import { takeEvery, call, put } from 'redux-saga/effects'
import { USERS } from "../constant";
import { fetchImages } from "../../api";
import { setUsers, setError } from "../User/Action";
import { showLoadingPage, hideLoadingPage } from '../Loading/Action.js'

// const getPage = state => state.nextPage

function* handleUsersLoad({ page }) {
    try {
        // const page = yield select(getPage)
        yield put(showLoadingPage())
        const images = yield call(fetchImages, page)
        console.log('images', images);
        yield put(setUsers(images))
        yield put(hideLoadingPage())
    } catch (error) {
        console.log('error', error);
        yield put(setError(error.toString()))
    }
}

export default function* watchImagesLoad() {
    // non-blocking
    yield takeEvery(USERS.LOAD, handleUsersLoad)





    // blocking
    // yield take(IMAGES.LOAD)
    // yield call(handleImagesLoad)
    // yield take('test')
    // yield call(test)
}

// export default watchImagesLoad