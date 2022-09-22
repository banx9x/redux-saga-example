import { createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { increment, incrementAsync } from "./counter.slice";

export const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export function* incrementAsyncFlow() {
    yield call(delay, 1000);
    yield put(increment());
}

export function* incrementAsyncWatcher() {
    yield takeEvery(incrementAsync, incrementAsyncFlow);
}
