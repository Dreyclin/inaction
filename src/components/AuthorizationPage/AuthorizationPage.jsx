import React from "react";
import AuthorizationHeader from "./AuthorizationHeader";
import { useState } from "react";

export default function AuthorizationPage() {

    const [authSelected, setAuthSelected] = useState(false);
    const [registerSelected, setRegisterSelected] = useState(true);

    function handleSelectClick() {
        setAuthSelected(!authSelected);
        setRegisterSelected(!registerSelected);
    }
    return (
        <div className="auth-page">
            <AuthorizationHeader />
            <div className="">
                <h3>Авторизація</h3>
                <div className="auth-container">
                    <div className="auth-buttons">
                        <button className={authSelected ? "selected" : ""} onClick={handleSelectClick}>Вхід</button>
                        <button className={registerSelected ? "selected" : ""} onClick={handleSelectClick}>Реєстрація</button>
                    </div>
                    <div className="line"></div>
                    <div className="container">
                        <form className={registerSelected ? "registration-form" : "registration-form hidden"} action="/" method="post">
                            <input type="email" className="form-control" placeholder="Email" />
                            <input type="text" className="form-control" placeholder="Ім'я" />
                            <input type="tel" className="form-control" placeholder="+380 (00) 222 11 11" />
                            <input type="text" className="form-control" placeholder="Пароль" />
                            <input type="text" className="form-control" placeholder="Повторіть пароль" />
                            <input type="submit" className="form-control" value={"ЗАРЕЄСТРУВАТИСЯ"} />
                        </form>
                        <form className={authSelected ? "auth-form" : "auth-form hidden"} action="/" method="post">
                            <input type="email" className="form-control" placeholder="Email" />
                            <input type="text" className="form-control" placeholder="Пароль" />
                            <input type="submit" className="form-control" value={"УВІЙТИ"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}