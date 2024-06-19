import { useReducer } from "react";
import {
  CounterReducer,
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  INITIAL_COUNTER,
} from "../reducers/CounterReducer.ts";

const Counter = () => {
  const [number, numberDispatch] = useReducer(CounterReducer, INITIAL_COUNTER);

  const onIncrease = () => {
    numberDispatch({ type: INCREASE_COUNTER });
  };

  const onDecrease = () => {
    numberDispatch({ type: DECREASE_COUNTER });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
