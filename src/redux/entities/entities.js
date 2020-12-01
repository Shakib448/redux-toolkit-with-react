import { combineReducers } from "redux";
import countReducer from "../slices/count";
import formReducer from "../slices/form";

export default combineReducers({
  counts: countReducer,
  form: formReducer,
});
