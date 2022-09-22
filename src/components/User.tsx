import { logout, setUser, userSelector } from "@/features/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";
import { Link } from "react-router-dom";

const User = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(userSelector);

    if (!user) {
        return (
            <>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/register">Register</Link>
            </>
        );
    }

    return (
        <div
            className="user"
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
            <img
                src={"https://todo-api-with-auth.herokuapp.com" + user.avatar}
                alt={user.firstname + " " + user.lastname}
                style={{ width: 30, borderRadius: "50%" }}
            />
            <span className="username">
                {user.firstname} {user.lastname}
            </span>

            <button onClick={() => dispatch(logout())}>Logout em đi :(</button>
        </div>
    );
};

export default User;
