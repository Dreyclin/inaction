import React from "react";
import AuthorizationHeader from "./AuthorizationHeader";


export default function AuthorizationPage() {
    return (
        <div className="auth-page">
            <AuthorizationHeader />
            <div className="">
                <h3>Авторизація</h3>
                <div className="auth-container">
                    <div className="auth-buttons">
                        <button>Вхід</button>
                        <button className="selected">Реєстрація</button>
                    </div>
                    <div className="line"></div>
                    <div className="container">
                        <form className="registration-form" action="/" method="post">
                            <input type="email" className="form-control" placeholder="Email" />
                            <input type="text" className="form-control" placeholder="Ім'я" />
                            <input type="tel" className="form-control" placeholder="+380 (00) 222 11 11" />
                            <input type="text" className="form-control" placeholder="Пароль" />
                            <input type="text" className="form-control" placeholder="Повторіть пароль" />
                            <input type="submit" className="form-control" value={"ЗАРЕЄСТРУВАТИСЯ"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}