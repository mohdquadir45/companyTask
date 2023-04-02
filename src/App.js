import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Message from "./components/Message";
import PaymentCard from "./components/PaymentCard";

function App() {
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
    setMobileNumber("")
  };

  const Back = () => {
    localStorage.removeItem("mobileNumber");
    setIsSubmitted(false);
  };

  return (
    <div className="App">
      {isSubmitted ? (
        <Message onBack={Back} />
      ) : (
        <>
          <Card />
          <PaymentCard
            mobileNumber={mobileNumber}
            handleNumberChange={handleNumberChange}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
}

export default App;
