import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import "./paymentCard.css";
import Message from "./Message";
const PaymentCard = () => {
  // const [number, setNumber] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if mobile number is already stored in local storage
    const storedNumber = localStorage.getItem("mobileNumber");
    if (storedNumber) {
      setMobileNumber(storedNumber);
      setIsSubmitted(true);
    }
  }, []);

  // const saveNumber = () => {
  //   localStorage.setItem("mobile", number);


  const handleNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate mobile number using regex
    const regex = /^[6-9]\d{9}$/;
    if (regex.test(mobileNumber)) {
      // Store mobile number in local storage
      localStorage.setItem("mobileNumber", mobileNumber);
      setIsSubmitted(true);
    } else {
      alert("Please enter a valid Indian mobile number.");
    }
  };

  if (isSubmitted) {
    // <Message />
   
  } else {

    return (
      <form className="payment__card" onSubmit={handleSubmit}>
        <div className="new-expense__controle">
          <input
            type="tel"
            value={mobileNumber}
            onChange={handleNumberChange}
            // pattern="\d*"
            // maxLength={10}
            placeholder="Enter your mobile number"
            required
          // value={number}

          // onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="new-expense__action">
          <button
            type="submit"
            style={
              mobileNumber.length === 10
                ? { backgroundColor: "#00baf2", borderColor: "#ccc" }
                : null
            }
          >
            Wow ! Get My Payment Card{" "}
            <span className="icons__container">
              <FiChevronRight className="icons" />
            </span>{" "}
          </button>
        </div>
      </form>
    );
  };
}
export default PaymentCard;
