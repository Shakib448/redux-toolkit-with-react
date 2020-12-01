import { combineReducers } from "redux";
import countReducer from "../slices/count";

export default combineReducers({
  counts: countReducer,
});
