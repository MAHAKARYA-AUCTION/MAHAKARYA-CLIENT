import { combineReducers } from "redux";
import globalReducer from "./global";
import lotsReducer from "./lots";

const rootReducer = combineReducers({
  globalReducer,
  lotsReducer,
});

export default rootReducer;
