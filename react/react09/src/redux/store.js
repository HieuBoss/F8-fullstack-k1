// kho chua state
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { counterReducer } from "./reducer/counterReducer";
import { todoReducer } from "./reducer/todoReducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// console.log(store);
// store.dispatch({
//   type: "counter/increment",
// });
// console.log(store.getState());
/*
rootReducer
- counterReducer
- todoReducer
- productReducer
*/
