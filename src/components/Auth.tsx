import { createContext, useEffect } from "react";

const AuthContent = createContext({});

import { useAppDispatch } from "@/store/hooks";
import { getLoggedInUser } from "@/features/auth";

interface AuthInterface {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthInterface) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getLoggedInUser());
    }, []);

    return <div>{children}</div>;
};

export default AuthProvider;
