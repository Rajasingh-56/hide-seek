import React from "react";
import "./Last.css";

const Last = () => {
  return (
    <div className="container">
      <div className="home-container section1">
        <div className="image-section ">
          <div className="gifts">
            <img src="./Assets/Bannner.png" alt="" />
          </div>
          <p>
            CHOOSE YOUR PREFERRED <br /> MODE OF CASHBACK PAYOUT
          </p>
          <div className="mode">
            <ul>
              <li>
                <a href="#">UPI</a>
              </li>
              <li>
                <a href="#">NEFT</a>
              </li>
              <li>
                <a href="#">E-WALLET</a>
              </li>
            </ul>
          </div>

          <div className="submit-btn">
            <button type="submit">SUBMIT</button>
          </div>
        </div>
        <div className="message-section">
          <div className="extra"></div>
          <div className="message">
            <div className="text-section">
              <img src="./Assets/last.png" alt="" />
              <h2>Congratulation!</h2>
              <p>
                Your Cashback will be credited <br />
                To the selected payout mode <br /> within 24-business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
