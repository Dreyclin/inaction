import React from "react";
import Item from "../Patterns/Item";

export default function EventPageAbout() {
    return (
        <div className="container">
            <div className="event-page-about">
                <div className="about-section">
                    <h3>Про подію: </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum tortor sed tincidunt consequat. Curabitur eget sapien pellentesque, fermentum dolor sed, hendrerit libero. Suspendisse fringilla bibendum varius. Sed luctus, sapien in dignissim feugiat, nibh libero luctus erat, nec feugiat arcu nisl vel lacus. Praesent ut ligula porta, suscipit ante nec, scelerisque ipsum. Aliquam posuere placerat luctus. Vestibulum interdum, urna vel dignissim egestas, mi odio sagittis ante, a tincidunt ante metus sed lectus. Sed orci elit, gravida sit amet metus quis, tincidunt laoreet ex. Vivamus congue in quam at interdum.
                        Etiam malesuada rutrum ultricies. In bibendum, quam id sodales auctor, tortor dui mattis sapien, sed accumsan quam magna in augue. Fusce congue ex at lacinia condimentum. Fusce tempor, neque nec dapibus malesuada, magna odio hendrerit arcu, vitae condimentum tortor risus consequat felis. Nullam nec dapibus elit, vitae posuere nulla. Nulla ultricies volutpat sapien. Aenean pulvinar blandit leo quis ullamcorper. Praesent consequat sodales mauris, quis pharetra mi dictum vel. Pellentesque sagittis vestibulum fringilla.
                        Donec in risus non diam blandit blandit. Nullam rutrum tempus mi, nec imperdiet ex tristique et. Ut molestie, erat sit amet faucibus volutpat, tellus urna placerat magna, at efficitur ligula arcu at diam. In sem turpis, mattis id sapien at, blandit maximus purus. In a dignissim tortor. Maecenas rutrum justo eget metus tincidunt, sed tincidunt mauris iaculis. Morbi volutpat posuere sapien, id consequat turpis suscipit sed. Phasellus at ante leo. In hendrerit nisl non ligula consequat commodo.</p>
                </div>
                <div className="similar-section">
                    <h3 className="similar-header">Вас можуть <span className="similar-header-highlight">зацікавати:</span> </h3>
                    <div className="similar-item-container">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    )
}