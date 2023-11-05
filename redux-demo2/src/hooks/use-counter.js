import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counter-redux"

const useCounter = () => {
    const count = useSelector((state => state.counter.counter));
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    return {count, incrementHandler, decrementHandler};
}

export default useCounter;