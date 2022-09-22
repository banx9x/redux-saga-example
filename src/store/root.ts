import * as counter from "@/features/counter";
import * as auth from "@/features/auth";
import { all } from "redux-saga/effects";

export const rootReducer = {
    counter: counter.counterReducer,
    auth: auth.authReducer,
};

export const rootSaga = function* () {
    yield all([counter.incrementAsyncWatcher(), auth.authSaga()]);
};
