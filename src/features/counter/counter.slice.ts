import { createAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

export const incrementAsync = createAction("counter/incrementAsync");

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment(state) {
            return state + 1;
        },
        decrement(state) {
            return state - 1;
        },
    },
    extraReducers: {},
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;

export const counterSelector = (state: RootState) => state.counter;
