import { LOADING_PAGE,LOADING_ACTION } from "../constant.js";

const loadingReducer = (state = false, action) => {
    console.log('action', action);
    switch (action.type) {
        case LOADING_PAGE.SHOW:
            return true
        case LOADING_PAGE.HIDE:
            return false
        case LOADING_ACTION.SHOW:
            return true
        case LOADING_ACTION.HIDE:
            return false
        default:
            return state
    }
}
export default loadingReducer;