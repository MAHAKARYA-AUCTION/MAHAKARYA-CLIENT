import { combineReducers } from "redux";
import globalReducer from "./global";
import userReducer from "./user";


const rootReducer = combineReducers({
    globalReducer,
    userReducer
});

export default rootReducer;