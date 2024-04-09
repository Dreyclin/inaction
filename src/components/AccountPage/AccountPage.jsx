import React from "react";
import Header from "../Patterns/Header";
import AddEventHeader from "../AddEventPage/AddEventHeader";
import AccountNavigation from "./AccountNavigation";
import AccountPageBody from "./AccountPageBody";
import Socials from "../Patterns/Socials"
import Footer from "../Patterns/Footer"

export default function AccountPage(props) {
    return(
        <div className="account-page">
            <Header />
            <AddEventHeader title="ОСОБИСТИЙ КАБІНЕТ"/>
            <AccountNavigation />
            <AccountPageBody />
            <Socials />
            <Footer />
        </div>
    )
}