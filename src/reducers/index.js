import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { catReducer } from "./cat_reducer";

const rootReducer = combineReducers({
  router: routerReducer
});

export default rootReducer;
