import React from "react";
import AddEventSection from "./AddEventSection";
import Header from "../Patterns/Header";
import Navigation from "./Navigation";
import TopEventSection from "./TopEventSection";
import Socials from "../Patterns/Socials";
import Footer from "../Patterns/Footer";


export default function HomePage(props) {
    return (
        <div className="">
            <Header />
            <Navigation />
            <AddEventSection />
            <TopEventSection />
            <Socials />
            <Footer />
        </div>
    )
}