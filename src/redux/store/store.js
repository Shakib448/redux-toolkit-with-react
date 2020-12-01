import { configureStore } from "@reduxjs/toolkit";
import reducer from "../combineReducer/reducer";

const store = configureStore({
  reducer,
});

export default store;
