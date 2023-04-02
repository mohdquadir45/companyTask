import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import "./paymentCard.css";
import Message from "./Message";
const PaymentCard = ({ mobileNumber, handleNumberChange, handleSubmit }) => {
  return (
    <form className="payment__card" onSubmit={handleSubmit}>
      <div className="new-expense__controle">
        <input
          type="tel"
          value={mobileNumber}
          onChange={handleNumberChange}
          pattern="\d*"
          maxLength={10}
          placeholder="Enter your mobile number"
          required
        />
      </div>
      <div className="new-expense__action">
        <button
          type="submit"
          style={
            mobileNumber.length === 10
              ? { backgroundColor: "#00baf2", borderColor: "#ccc" }
              : null
          }>
          Wow ! Get My Payment Card{" "}
          <span className="icons__container">
            <FiChevronRight className="icons" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default PaymentCard;
