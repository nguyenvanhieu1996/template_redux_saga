import { combineReducers } from 'redux'
import usersReducer from "../User/Reducer";
import users1Reducer from "../Users1/Reducer";
import loadingReducer from "../Loading/Reducer";
import errorReducer from "../Error/Reducer";

const rootReducer = combineReducers({
    users: usersReducer,
    error: errorReducer,
    loading: loadingReducer,
    users1: users1Reducer,
})
export default rootReducer