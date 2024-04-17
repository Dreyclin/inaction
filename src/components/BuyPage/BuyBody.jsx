import React from "react";

export default function BuyBody() {
    return (
        <div className="container">
            <div className="buy-body">
                <div className="list-item">
                    <div className="list-item-container">
                        <div className="number-container">
                            <span className="number">1</span>
                        </div>
                        <h3 className="list-item-header">Онлайн</h3>
                    </div>
                    <p className="list-item-info">Натиснувши на кнопку «Перейти до джерела», ви переходите на офіційну сторінку заходу та можете обрати потрібні вам квитки і оплатити їх через VISA або MasterCard.</p>
                </div>
                <div className="list-item">
                    <div className="list-item-container">
                        <div className="number-container">
                            <span className="number">2</span>
                        </div>
                        <h3 className="list-item-header">Каси</h3>
                    </div>
                    <p className="list-item-info">Квитки можна придбати в будь-якій касі Запоріжжя. Касири допоможуть вам обрати найкращі місця.</p>
                </div>
                <div className="list-item">
                    <div className="list-item-container">
                        <div className="number-container">
                            <span className="number">3</span>
                        </div>
                        <h3 className="list-item-header">Кур'єр</h3>
                    </div>
                    <p className="list-item-info">У деяких замовників існує функція «Доставка кур’єром». Щоб дізнатися чи присутня вона для обраного заходу, потрібно перейти по кнопці «Перейти до джерела». Кур'єрська доставка здійснюється протягом 2-х діб з моменту замовлення.</p>
                </div>
                <div className="list-item">
                    <div className="list-item-container">
                        <div className="number-container">
                            <span className="number"><i class="fa-solid fa-check"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}