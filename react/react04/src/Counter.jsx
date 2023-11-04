import React from "react";
import { useReducer } from "react";

export default function Counter() {
  const reducer = (state, action = {}) => {
    switch (action.type) {
      case "counter/increment":
        return { ...state, count: state.count + action.payload };
      case "counter/decrement":
        return { ...state, count: state.count - action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 2,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 5,
    });
  };
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

/*redux
    cách hoạt động reduce, ueState,context,closure

    buổi sau build Store State sử dụng useReducer
    +React context
    action
    actionCreator
    selector
    dispatch
    làm sao callAPI -> setState bằng useReduce-> thông qua Middleware
*/
