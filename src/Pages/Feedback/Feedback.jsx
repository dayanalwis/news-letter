import React from "react";
import Icon from "../../assets/images/icon-success.svg";
import "./Feedback.css";

function Feedback({ email, onDismiss }) {
  return (
    <div className="feedback-card">
      <img src={Icon} alt="iconImg" className="icon-success" />
      <div className="feedback-box">
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong> Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>
      <button className="dismiss-btn" onClick={onDismiss}>
        Dismiss Message
      </button>
    </div>
  );
}

export default Feedback;
