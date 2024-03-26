import React from "react";
import projLogo from "../images/logo.svg"
import upshiftLogo from "../images/footer-logos/white_horizontal_ UPSHIFT Ukraine Logo 1.svg"
import culturalLeagueLogo from "../images/footer-logos/white_horizontal_ UPSHIFT Ukraine Logo 2.svg"

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-flex">
                    <img className="project-logo" src={projLogo} alt="" />
                    <img className="upshift-logo" src={upshiftLogo} alt="" />
                    <p className="disclaimer">Проєкт “InAction” створений в межах програми UPSHIFT, яку в Запорізькій області реалізує “Культурна Ліга Сходу”, за підтримки ЮНІСЕФ та уряду Японії</p>
                    <img className="league-logo" src={culturalLeagueLogo} alt="" />
                </div>
            </div>
        </div>
    )
}