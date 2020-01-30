import { HANDLE } from "../constant";

const errorReducer = (state = false, action) => {
    switch (action.type) {
        case HANDLE.FAIL:
            return true
        case HANDLE.SUCCESS:
            return false
        default:
            return state
    }
}
export default errorReducer;