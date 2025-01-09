import React, { useState } from 'react';
import './Upi.css';
import { useNavigate } from 'react-router-dom';

const Upi = () => {
  const [upiNumber, setUpiNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('UPI number:', upiNumber);
    
    // Validation for UPI number
    if (upiNumber.trim() === '' || upiNumber.length < 8) {
      setError('UPI number is required and must be at least 8 digits.');
    } else {
      setError('');
      navigate('/Last'); // Navigate only if validation passes
    }
  };

  return (
    <div className='container'>
      <div className='home-container'>
        <div className='image-section'>
          <div className='gifts'>
            <img src='./Assets/Bannner.png' alt='' />
          </div>
          <p>
            CHOOSE YOUR PREFERRED <br /> MODE OF CASHBACK PAYOUT
          </p>
          <div className='mode'>
            <ul>
              <li><a className='upi' href="/upi">UPI</a></li>
              <li><a href="/neft">NEFT</a></li>
              <li><a href="/ewallet">E-WALLET</a></li>
            </ul>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='form-section'>
              <div>
                <input
                  type='number'
                  placeholder='Enter UPI Number'
                  value={upiNumber}
                  onChange={(e) => setUpiNumber(e.target.value)}
                />
              </div>
              {error && <p className='error-message'>{error}</p>}
            </div>
          </form>

          <div className='submit-btn'>
            <button type='button' onClick={handleSubmit}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upi;
