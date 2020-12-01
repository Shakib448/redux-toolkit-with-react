import { combineReducers } from "redux";
import entitiesReducer from "../entities/entities";

export default combineReducers({
  entities: entitiesReducer,
});
