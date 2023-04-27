import { combineReducers } from "redux";

import countReducer from "./reducers/countReducer";
import converterReducer from "./reducers/converterReducer";

const rootReducer = combineReducers({
  count: countReducer,
  converter: converterReducer,
});

export default rootReducer;
