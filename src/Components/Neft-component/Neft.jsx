import React from 'react';
import './Neft.css';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Validation Schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  account: Yup.string()
    .matches(/^\d+$/, "Account number must be digits only")
    .min(9, "Account number is too short")
    .max(18, "Account number is too long")
    .required("Required"),
  ifsc: Yup.string()
    // .matches( "Invalid IFSC code")
    .min(9, "Account number is too short")

    .required("Required"),
});

const Neft = () => {
  const navigate = useNavigate();

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
              <li><a href='/upi'>UPI</a></li>
              <li><a className='neft' href='/neft'>NEFT</a></li>
              <li><a href='/ewallet'>E-WALLET</a></li>
            </ul>
          </div>

          <Formik
            initialValues={{
              name: '',
              account: '',
              ifsc: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // Submit and navigate on successful validation
              console.log(values);
              navigate('/Last');
            }}
          >
            {({ errors, touched, values, handleBlur, handleChange, handleSubmit }) => (
              <>
                <Form>
                  <div className='form-section'>
                    <div>
                      <input
                        type='text'
                        placeholder='Enter Name'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name && <span className='error'>{errors.name}</span>}
                    </div>
                    <div>
                      <input
                        type='number'
                        placeholder='Enter Account Number'
                        name='account'
                        value={values.account}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.account && touched.account && (
                        <span className='error'>{errors.account}</span>
                      )}
                    </div>
                    <div>
                      <input
                        type='text'
                        placeholder='Enter IFSC code'
                        name='ifsc'
                        value={values.ifsc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.ifsc && touched.ifsc && <span className='error'>{errors.ifsc}</span>}
                    </div>
                  </div>
                </Form>

                <div className='submit-btn'>
                  <button type='button' onClick={handleSubmit}>
                    SUBMIT
                  </button>
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Neft;
