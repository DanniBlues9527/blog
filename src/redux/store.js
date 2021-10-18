import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import blogReducer from "./reducers/blog";

const allReducer = combineReducers({
  blog: blogReducer,
});

export default createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
