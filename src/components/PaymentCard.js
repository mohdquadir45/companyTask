import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import "./paymentCard.css";
const PaymentCard = () => {
  const [number, setNumber] = useState("");

  const saveNumber = () => {
    localStorage.setItem("mobile", number);
  };
  return (
    <form className="payment__card">
      <div className="new-expense__controle">
        <input
          type="text"
          pattern="\d*"
          maxLength={10}
          placeholder="Enter your mobile number"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="new-expense__action">
        <button
          type="submit"
          style={
            number.length === 10
              ? { backgroundColor: "#00baf2", borderColor: "#ccc" }
              : null
          }
          onClick={saveNumber}>
          Wow ! Get My Payment Card{" "}
          <span className="icons__container">
            <FiChevronRight className="icons" />
          </span>{" "}
        </button>
      </div>
    </form>
  );
};

export default PaymentCard;
