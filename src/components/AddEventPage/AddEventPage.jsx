import React from "react";
import Header from "../Patterns/Header"
import AddEventHeader from "./AddEventHeader";
import Socials from "../Patterns/Socials"
import Footer from "../Patterns/Footer"
import img from "../../images/add-event-right.png"
import DatePicker from "react-datepicker";
import { useState } from "react";

export default function AddEventPage() {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="add-event-page">
            <Header />
            <AddEventHeader title="ДОДАТИ СВОЮ ПОДІЮ" />
            <div className="add-event-body">
                <div className="container">
                    <div className="add-event-flex">
                        <div className="info">
                            <form action="/" method="post">
                                <div className="organization-info">
                                    <h3>Інформація про організацію: </h3>
                                    <input className="form-control" type="text" placeholder="Ім'я" />
                                    <input className="form-control" type="email" placeholder="Email" />
                                    <input className="form-control" type="tel" placeholder="Номер телефону" />
                                </div>
                                <div className="event-info">
                                    <h3>Інформація щодо заходу:</h3>
                                    <input className="form-control" type="text" placeholder="Назва події" />
                                    <select className="form-select form-control">
                                        <option value="" disabled selected hidden>Рубрика</option>
                                        <option value="Прем'єра">Прем'єра</option>
                                        <option value="Для дітей">Для дітей</option>
                                        <option value="Стендап шоу">Стендап шоу</option>
                                        <option value="Концерти">Концерти</option>
                                        <option value="Театр">Театр</option>
                                        <option value="Цирк">Цирк</option>
                                        <option value="Для ВПО">Для ВПО</option>
                                        <option value="Освіта">Освіта</option>
                                    </select>
                                    <input className="form-control" type="tel" placeholder="Організатор події" />
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    <input className="form-control" type="text" placeholder="Час проведення" />
                                    <input className="form-control" type="email" placeholder="Адреса проведення" />
                                    <input className="form-control" type="tel" placeholder="Вартість (не вказуйте, якщо безкоштовно)" />
                                    <label htmlFor="image_uploads">Додайте фото</label>
                                    <input className="form-control" type="file" id="image_uploads" name="image_uploads" accept="image/png, image/jpeg" />
                                    <textarea className="form-control" name="" id="" cols="30" rows="5" placeholder="Опис події"></textarea>
                                </div>
                                <button type="submit">ДОДАТИ ЗАХІД</button>
                            </form>
                        </div>
                        <div className="right-section">
                            <div className="circles-container blue-container"></div>
                            <div className="circles-container purple-container"></div>
                            <img src={img} alt="" />
                            <p>Хочеш вивести подію у ТОП?</p>
                            <i class="fa-regular fa-circle-question"></i>
                            <button>ОФОРМИТИ</button>
                        </div>
                    </div>
                </div>
            </div>
            <Socials />
            <Footer />
        </div>
    )
}