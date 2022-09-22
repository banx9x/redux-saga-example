import axios from "axios";

const SIGNIN_API = "https://todo-api-with-auth.herokuapp.com/api/auth/signin";
const SIGNUP_API = "https://todo-api-with-auth.herokuapp.com/api/auth/signup";
const USER_API = "https://todo-api-with-auth.herokuapp.com/api/auth/user";

export interface Signin {
    username: string;
    password: string;
}

export const signinApi = async function (user: Signin) {
    return axios.post<AuthResponse>(SIGNIN_API, user, {});
};

export interface Signup {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
}

export const signupApi = async function (user: Signup) {
    return axios.post<AuthResponse>(SIGNUP_API, user);
};

export const getLoggedInUserApi = async function () {
    return axios.get<AuthResponse>(USER_API, {
        headers: {
            Authorization: localStorage.getItem("token") || "",
        },
    });
};
