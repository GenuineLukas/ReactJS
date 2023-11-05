import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {counterActions} from "../store/counter-redux";
import classes from './Counter.module.css';


const Counter = () => {
    const count = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);
    const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
      dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
      dispatch(counterActions.increase(5)) // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  }

  const decrementHandler = () => {
      dispatch(counterActions.decrement());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{count}</div>}
        <div>
            <button onClick={incrementHandler}>
                increment
            </button>
            <button onClick={increaseHandler}>
                increase by 5
            </button>
            <button onClick={decrementHandler}>
                decrement
            </button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
