import React from "react";
import "./card.css";
import PaymentCard from "./PaymentCard";
import PaytmSvg from '../assets/paytm.png'
const Card = () => {
  return (
    <div>
      <div className="text__container">
        <span className="text">man</span>
        <br />
        <span className="text__heading">matters</span>
        <br />
        <span className="greeting">Congratulations 🥳</span>

        <div className="info__container">
          <div className="info">
            {/* <p className="paytm__info">Paytm</p> */}
            <img src={PaytmSvg} alt="logo" />
            <div className="giftCard__container">
              <span className="gift__card">
                Gift
                <br />
                <span className="card">Cards</span>
              </span>

              <p className="price">200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="message__container">
        <span>You have WON Paytm Gift</span>
        <span>Card of Rs 200 for<strong> placing the order</strong></span>
        <span><strong>on Man Matters</strong></span>
      </div>
    </div>
  );
};

export default Card;
