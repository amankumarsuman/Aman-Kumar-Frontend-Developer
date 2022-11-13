import { legacy_createStore as createStore } from "redux";
import { tableReducer } from "./reducer";
export const store = createStore(
  tableReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
