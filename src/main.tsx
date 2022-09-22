import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import store from "@/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Couter from "./features/counter/Couter";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<div>Homepage</div>} />
                        <Route path="counter" element={<Couter />} />
                        <Route path="auth/login" element={<Login />} />
                        <Route path="auth/register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
