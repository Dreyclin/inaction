import React from "react";
import Header from "../Patterns/Header";
import Socials from "../Patterns/Socials"
import Footer from "../Patterns/Footer"
import EventPageHeader from "./EventHeader"
import EventPageBody from "./EventPageBody"
import EventPageAbout from "./EventPageAbout"

export default function EventPage(props) {

    return (
        <div className="event-page">
            <Header />
            <div className="event-page-container">
                <div className="container">
                    <div className="event-page">
                        <EventPageHeader />
                        <EventPageBody />
                        <div className="circles-container blue-container"></div>
                        <div className="circles-container purple-container"></div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
            <EventPageAbout />
            <Socials />
            <Footer />
        </div>
    )
}