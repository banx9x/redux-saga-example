import { getLoggedInUser } from "@/features/auth";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import User from "@/components/User";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) dispatch(getLoggedInUser());
    }, []);

    return (
        <div className="app">
            <header className="app-header">
                <nav
                    className="app-nav"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <Link to="/">Home</Link>
                    <Link to="/counter">Counter</Link>

                    <User />
                </nav>
            </header>

            <Outlet />
        </div>
    );
}

export default App;
