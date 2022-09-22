import {
    createAction,
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { Signin, Signup } from "./auth.services";

const initialState: Auth = {
    loading: false,
    isLoggedIn: false,
    currentUser: null,
};

export const login = createAction<Signin>("auth/login");
export const register = createAction<Signup>("auth/signup");
export const logout = createAction("auth/logout");
export const getLoggedInUser = createAction("auth/getLoggedInUser");

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<boolean>) {
            state.isLoggedIn = action.payload;
        },

        setUser(state, action: PayloadAction<User | null>) {
            state.currentUser = action.payload;
        },
    },
    extraReducers: {},
});

export const authReducer = authSlice.reducer;
export const { setIsLoggedIn, setUser } = authSlice.actions;

export const userSelector = (state: RootState) => state.auth.currentUser;
export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;
