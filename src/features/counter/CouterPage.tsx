import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
    counterSelector,
    decrement,
    increment,
    incrementAsync,
} from "./counter.slice";

const Couter = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector(counterSelector);

    return (
        <div className="card">
            <div>Count is {value}</div>

            <button onClick={() => dispatch(increment())}>Up</button>
            <button onClick={() => dispatch(decrement())}>Down</button>
            <button onClick={() => dispatch(incrementAsync())}>
                IncrementAsync
            </button>
        </div>
    );
};

export default Couter;
