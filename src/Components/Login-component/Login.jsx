// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  code: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mobile: Yup.string()
    .matches(/^[5-9]{1}[0-9]{9}$/, "Invalid mobile")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  check: Yup.boolean().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setDetails((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  return (
    <div className="container">
      <div className="home-container">
        <div className="image-section">
          <div className="gifts">
            <img src="./Assets/Bannner.png" alt="Banner" />
          </div>
          <Formik
            initialValues={{
              code: "",
              name: "",
              mobile: "",
              check: false,
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
              navigate("/Otp");
            }}
          >
            {({ errors, touched, values, handleBlur, handleChange }) => (
              <Form>
                <div className="form-section">
                  <h2>REGISTER</h2>

                  <div>
                    <input
                      type="text"
                      name="code"
                      value={values.code}
                      placeholder="Enter the Unique Code"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.code && touched.code && (
                      <span className="error">{errors.code}</span>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      placeholder="Enter Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <input
                      type="number"
                      name="mobile"
                      value={values.mobile}
                      placeholder="Enter Mobile Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.mobile && touched.mobile && (
                      <span className="error">{errors.mobile}</span>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Enter Email ID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>

                  <div className="check-box">
                    <label>
                      <input
                        name="check"
                        type="checkbox"
                        checked={values.check}
                        onChange={handleChange}
                      />
                      I Accept the Terms & Conditions
                    </label>
                    {errors.check && touched.check && (
                      <span className="error">{errors.check}</span>
                    )}
                  </div>

                  <div className="submit-btn">
                    <button type="submit">SUBMIT</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
