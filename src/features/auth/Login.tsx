import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, isLoggedInSelector } from "./auth.slice";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(isLoggedInSelector);

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        if (isLoggedIn) return navigate("/");
    }, [isLoggedIn]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(login(user));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                />
            </div>

            <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                />
            </div>

            <div className="form-field">
                <button>Submit em đi :)</button>
            </div>
        </form>
    );
};

export default Login;
