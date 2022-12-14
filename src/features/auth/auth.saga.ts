import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import {
    getLoggedInUser,
    login,
    logout,
    register,
    setIsLoggedIn,
    setUser,
} from "./auth.slice";

import {
    getLoggedInUserApi,
    Signin,
    signinApi,
    Signup,
    signupApi,
} from "./auth.services";

export const loginFlow = function* (action: PayloadAction<Signin>) {
    try {
        const res: AxiosResponse<AuthResponse> = yield call(
            signinApi,
            action.payload
        );

        yield call(
            [localStorage, localStorage.setItem],
            "token",
            res.headers.authorization
        );

        yield put(setUser(res.data.data));
        yield put(setIsLoggedIn(true));
    } catch (err) {
        console.log(err);
    }
};

export const loginWatcher = function* () {
    yield takeEvery(login, loginFlow);
};

export const registerFlow = function* (action: PayloadAction<Signup>) {
    try {
        const res: AxiosResponse<AuthResponse> = yield call(
            signupApi,
            action.payload
        );

        yield call(
            [localStorage, localStorage.setItem],
            "token",
            res.headers.authorization
        );

        yield put(setUser(res.data.data));
        yield put(setIsLoggedIn(true));
    } catch (err) {
        console.log(err);
    }
};

export const registerWatcher = function* () {
    yield takeEvery(register, registerFlow);
};

export const logoutFlow = function* () {
    yield call([localStorage, localStorage.removeItem], "token");

    yield put(setUser(null));
    yield put(setIsLoggedIn(false));
};

const logoutWatcher = function* () {
    yield takeEvery(logout, logoutFlow);
};

const getLoggedInUserFlow = function* () {
    try {
        const res: AxiosResponse<AuthResponse> = yield call(getLoggedInUserApi);

        yield put(setUser(res.data.data));
        yield put(setIsLoggedIn(true));
    } catch (err) {
        console.log(err);
    }
};

const getLoggedInUserWatcher = function* () {
    yield takeEvery(getLoggedInUser, getLoggedInUserFlow);
};

export const authSaga = function* () {
    yield all([
        loginWatcher(),
        registerWatcher(),
        logoutWatcher(),
        getLoggedInUserWatcher(),
    ]);
};
