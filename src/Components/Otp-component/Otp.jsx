import React, { useState, useEffect } from 'react';
import "./Otp.css";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(10);
  const [otpResent, setOtpResent] = useState(false); 
  const [error, setError] = useState('');

  useEffect(() => {
    if (countdown > 0) {
      const intervalId = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(intervalId); 
    }
  }, [countdown]);

  // Resend OTP logic
  const handleResendOtp = (e) => {
    e.preventDefault();
    if (!otpResent && countdown === 0) {
      console.log('Resending OTP...');
      setOtpResent(true);
      setCountdown(10); // Reset countdown when resending
    }
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    if (e.target.value.trim() === '' || e.target.value.length !== 4) {
      setError('OTP is required');
    } else {
      setError(''); 
    }
  };

  // Handle OTP form submission
  const handleSubmit = (e) => {
    e.preventDefault();     
    console.log('Verifying OTP:', otp);
    navigate("/Upi");
  };

  return (
    <div className='container'>
      <div className="home-container">
        <div className="image-section">
          <div className="gifts">
            <img src="./Assets/Bannner.png" alt="Banner" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className='form-section'>
              <p>ENTER OTP</p>
              <div>
                <input
                  type="text"
                  placeholder='Enter OTP'
                  value={otp}
                  onChange={handleOtpChange}
                />
              </div>
              {error && <p className="error-message">{error}</p>} {/* Display error message */}

              <div className='check-box'>
                <label>
                  {countdown > 0 ? (
                    `Resend OTP in ${countdown} seconds`
                  ) : (
                    <a href="#" onClick={handleResendOtp}>Resend</a>
                  )}
                </label>
              </div>
            </div>
          </form>
          
          <div className='submit-btn'>
            <button type="submit" onClick={handleSubmit} disabled={otp.trim() === '' || otp.length !== 4}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
