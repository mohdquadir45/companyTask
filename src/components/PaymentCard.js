import React from "react";
import {FiChevronRight} from 'react-icons/fi'
import "./paymentCard.css";
const PaymentCard = () => {
  return (
    <form className="payment__card">
      <div className="new-expense__controle">
        <input type="tel" placeholder="Enter your mobile number" required />
        
      </div>
      <div className="new-expense__action">
      <button type="submit">Wow ! Get My Payment Card <span className="icons__container"><FiChevronRight className="icons" /></span> </button>
      </div>
    </form>
  );
};

export default PaymentCard;
