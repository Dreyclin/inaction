import React from "react";
import Header from "../Patterns/Header";
import BuyHeader from "./BuyHeader";
import Socials from "../Patterns/Socials";
import Footer from "../Patterns/Footer";
import BuyBody from "./BuyBody";


export default function BuyPage() {
    return (
        <div className="buy-page">
            <Header />
            <BuyHeader />
            <div className="line"></div>
            <BuyBody />
            <Socials />
            <Footer />
        </div>
    )
}