import { LOADING_ACTION, LOADING_PAGE } from "../Loading/constant";

const showLoadingPage = () => ({
    type: LOADING_PAGE.SHOW,
    loading: true
})
const hideLoadingPage = () => ({
    type: LOADING_PAGE.HIDE,
    loading: false
})
const showLoadingAction = () => ({
    type: LOADING_ACTION.SHOW,
    loading: true
})
const hideLoadingAction = () => ({
    type: LOADING_ACTION.HIDE,
    loading: false
})
export {
    showLoadingPage,
    hideLoadingPage,
    showLoadingAction,
    hideLoadingAction,
}