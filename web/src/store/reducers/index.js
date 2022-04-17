import { combineReducers } from "redux";
import globalReducer from "./global";
import userReducer from "./user";
import lotsReducer from "./lots";


const rootReducer = combineReducers({
    globalReducer,
    userReducer,
    lotsReducer
})


export default rootReducer;
