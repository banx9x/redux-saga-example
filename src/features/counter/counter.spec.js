import { call, put } from "redux-saga/effects";
import { assert, expect, test } from "vitest";
import store from "../../store";
import { delay } from "./counter.saga";
import { incrementAsyncFlow } from "./counter.saga";
import { decrement, increment } from "./counter.slice";

test("Increment", () => {
    const current = store.getState().counter;

    store.dispatch(increment());

    expect(store.getState().counter).toBe(current + 1);
});

test("Decrement", () => {
    const current = store.getState().counter;

    store.dispatch(decrement());

    expect(store.getState().counter).toBe(current - 1);
});

test("Increment Saga", () => {
    const gen = incrementAsyncFlow();

    assert.deepEqual(gen.next().value, call(delay, 1000));

    assert.deepEqual(gen.next().value, put(increment()));

    assert.deepEqual(gen.next(), { done: true, value: undefined });
});
