import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import store from "@/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CouterPage from "@/features/counter/CouterPage";
import LoginPage from "@/features/auth/LoginPage";
import RegisterPage from "@/features/auth/RegisterPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<div>Homepage</div>} />
                        <Route path="counter" element={<CouterPage />} />
                        <Route path="auth/login" element={<LoginPage />} />
                        <Route
                            path="auth/register"
                            element={<RegisterPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
