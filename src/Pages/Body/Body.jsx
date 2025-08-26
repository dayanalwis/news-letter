import React, { useState } from "react";
import checkIcon from "../../assets/images/icon-list.svg";
import desktopImg from "../../assets/images/illustration-sign-up-desktop.svg";
import mobileImg from "../../assets/images/illustration-sign-up-mobile.svg";
import "./Body.css";
import Feedback from "../Feedback/Feedback";

function Body() {
  const [email, setEmail] = useState("");
  const [SubmittedEmail, setsubmittedEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setsubmittedEmail(email);
      setEmail(""); // clear input
    }
  };

  const handleDismiss = () => {
    setsubmittedEmail(null);
  };

  return (
    <>
      {!SubmittedEmail ? (
        <div className="wrapper">
          <div className="text-box">
            <h1>Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="check-list">
              <ul className="features">
                <li>
                  <img src={checkIcon} alt="check" className="icon" />
                  Product discovery and building what matters
                </li>
                <li>
                  <img src={checkIcon} alt="check" className="icon" />
                  Measuring to ensure updates are a success
                </li>
                <li>
                  <img src={checkIcon} alt="check" className="icon" />
                  And much more!
                </li>
              </ul>
            </div>
            <div className="email-container">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe to monthly newsletter</button>
              </form>
            </div>
          </div>
          <div className="background">
            <img src={desktopImg} alt="signupbackround" className="desktop" />
            <img src={mobileImg} alt="mobilebackground" className="mobile" />
          </div>
        </div>
      ) : (
        <Feedback email={SubmittedEmail} onDismiss={handleDismiss} />
      )}
    </>
  );
}

export default Body;
