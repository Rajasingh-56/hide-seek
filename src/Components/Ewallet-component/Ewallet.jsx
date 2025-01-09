import React from 'react'
import "./Ewallet.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Ewallet = () => {
  const [eNumber, setENumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('E-wallet:', eNumber);
    
    // Validation for UPI number
    if (eNumber.trim() === '') {
      setError('E-wallet number is required and must be at least 8 digits.');
    } else {
      setError('');
      navigate('/Last'); // Navigate only if validation passes
    }
  };


  return (
    <div className='container'>
    <div className="home-container">
      <div className="image-section">
        <div className="gifts">
          <img src="./Assets/Bannner.png" alt="" />
        </div>
            <p>CHOOSE YOUR PREFERRED <br /> MODE OF CASHBACK PAYOUT</p>
            <div className="mode">
                <ul>
                    <li><a  href="/upi">UPI</a></li>
                    <li><a  href="neft">NEFT</a></li>
                    <li><a className='wallet' href="/ewallet">E-WALLET</a></li>
                </ul>
            </div>

      <form  onSubmit={handleSubmit}>
      <div className='form-section'>
        <div>
          <input type="number" placeholder='Enter Mobile Number'  value={eNumber} onChange={(e) => setENumber(e.target.value)}/>
        </div>
        {error && <p className='error-message'>{error}</p>}

      </div>
      </form>
      
      <div className='submit-btn'>
            <button type="submit" onClick={handleSubmit}>SUBMIT</button>
          </div>
       
      </div>
    </div>
</div>
  )
}

export default Ewallet
