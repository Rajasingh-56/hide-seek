import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    
    navigate("./Login");
  };

  return (
    <div className="container">
      <div className="home-container">
        <div className="image-section">
          <div className="gift">
            <img src="./Assets/Main asset.png" alt="" />
          </div>
          <div className="gifted">
            <img src="./Assets/centerImage.png" alt="" />
          </div>
          <div className="btn" onClick={handleGetStarted}>
            <img src="./Assets/btn.png" alt="" />
            <p className="play-btn">GET STARTED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


// import "./PaymentPage.scss";
// import MainLayout from "../../layouts/MainLayout";
// import { ROUTES } from "../../lib/consts";
// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import API from "../../api";
// // import { QuestionItem } from "../../interface/api";
// import { useDispatch, useSelector } from "react-redux";
// // import {
// //   isFirstGame,
// //   setIndividualScore,
// // } from "../../store/actions/authAction";
// import { useAuthentication } from "../../hooks/useAuthentication";
// import { RootState } from "../../store/store";
// import { GA_EVENTS, gtagTrackEvent } from "../../lib/utils";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import neft from "../../assets/images/neft.svg";
// import neftselected from "../../assets/images/neft-selected.svg";
// import upi from "../../assets/images/upi.svg";
// import upiselected from "../../assets/images/upi-selected.svg";
// import amazon from "../../assets/images/amazon.svg";
// import amazonselected from "../../assets/images/amazon-selected.svg";
// import { ERROR_IDS } from "../../api/utils";

// interface PaymentPageProps {
//   onSubmit: (values: any) => void;
// }

// const PaymentPage: React.FC<PaymentPageProps> = ({ onSubmit }) => {
//   const PayoutValidation = Yup.object().shape({
//     payoutMethod: Yup.string().required("Please choose a payout method"),
//     upiNumber: Yup.string().when("payoutMethod", (payoutMethod, schema) =>
//       payoutMethod.toString() === "upi"
//         ? schema
//           .required("Enter valid UPI")
//           .matches(
//             /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/,
//             "Enter valid UPI"
//           )
//         : schema
//     ),
//     name: Yup.string().when("payoutMethod", (payoutMethod, schema) =>
//       payoutMethod.toString() === "neft"
//         ? schema
//           .required("Enter valid account name")
//           .matches(/^[a-zA-Z]{1}[a-zA-Z\s]{2,}$/, "Enter valid account name")
//         : schema
//     ),

//     accountNumber: Yup.string().when("payoutMethod", (payoutMethod, schema) =>
//       payoutMethod.toString() === "neft"
//         ? schema
//           .required("Enter valid account number")
//           .matches(/^\d{7,20}$/, "Enter valid account number")
//         : schema
//     ),
//     ifscCode: Yup.string().when("payoutMethod", (payoutMethod, schema) =>
//       payoutMethod.toString() === "neft"
//         ? schema
//           .required("Enter valid IFSC code")
//           .matches(/^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/, "Enter valid IFSC code")
//         : schema
//     ),
//     amazonPayId: Yup.string().when("payoutMethod", (payoutMethod, schema) =>
//       payoutMethod.toString() === "amazon"
//         ? schema.required("Enter valid Amazon Pay ID")
//         : schema
//     ),
//   });

//   const amt = localStorage.getItem("amt")
//   const navigate = useNavigate();
//   return (
//     <MainLayout className="register-page">
//       <div className="redeem-payment-form">
//         <div className="game-container">
//           {/<img src={Text} alt="logo-top" />/}
//           <p className="payment-title">
//             You are about to redeem
//             <br />
//             <p className="cashback" style={{ color: "#fff", fontFamily: "RobotoBold", fontSize:"1.5em",}}> ₹{amt} Cashback</p>
//           </p>

//           <Formik
//             initialValues={{
//               payoutMethod: "upi",
//               upiNumber: "",
//               name: "", // Add Name for NEFT
//               accountNumber: "", // Add Account Number for NEFT
//               ifscCode: "", // Add IFSC Code for NEFT
//               amazonPayId: "",
//             }}
//             validationSchema={PayoutValidation}
//             onSubmit={async (values, errors) => {
//               // navigate(ROUTES.CONGRATULATION);
//               try {
//                 switch (values.payoutMethod) {
//                   case "upi":
//                     await API.saveUPIDetails(values.upiNumber);
//                     gtagTrackEvent(GA_EVENTS.UPI_click);
//                     break;
//                   case "amazon":
//                     await API.saveAmazonDetails(values.amazonPayId);
//                     gtagTrackEvent(GA_EVENTS.Amazon_Pay);
//                     break;
//                   case "neft":
//                     await API.saveNEFTDetails(
//                       values.name,
//                       values.accountNumber,
//                       values.ifscCode
//                     );
//                     gtagTrackEvent(GA_EVENTS.NEFT_click);
//                     break;
//                   default:
//                     break;
//                 }
//                 onSubmit(values);
//                 //   console.log(errors);
//                 // Navigate to the Thank You page
//                 navigate(ROUTES.CONGRATULATION);
//               } catch (err: any) {
//                 const { messageId } = err;
//                 switch (messageId) {
//                   case ERROR_IDS.INVALID_UPI:
//                     errors.setErrors({
//                       upiNumber: "Please enter valid UPI",
//                     });
//                     break;

//                   default:
//                     errors.setErrors({
//                       upiNumber: err.message,
//                     });
//                     break;
//                 }
//               }
//             }}
//           >
//             {({
//               values,
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               setFieldValue,
//               touched,

//               errors,
//             }) => (
//               <Form className="cashback-payout-form" onSubmit={handleSubmit}>
//                 <div className="payment-payout-option-container">
//                   <div
//                     className={`payout-option ${values.payoutMethod === "upi" ? "selected" : ""
//                       }`}
//                     style={{
//                       borderRadius: "10px 10px 10px 10px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       // gap: "5px",
//                       width: "40%",
//                       padding: "0px",
//                       gap: "10px",

//                     }}
//                     onClick={(e) => {
//                       // e.target.classList.add("selected");
//                       setFieldValue("payoutMethod", "upi");
//                       // gtagTrackEvent(GA_EVENTS.UPI_click);
//                     }}
//                     >
//                     <img
//                       src={values.payoutMethod === "upi" ? upiselected : upi}
//                       alt="upi"
//                       />
//                       UPI
//                   </div>
//                   <div
//                     className={payout-option ${values.payoutMethod === "amazon" ? "selected" : ""}}

// style={{
//   borderRadius: "10px 10px 10px 10px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   // gap: "5px",
//   width: "100%",
//   padding: "0",
//   // gap:"10px"

// }}
// onClick={(e) => {
//   // e.target.classList.add("selected");
//   setFieldValue("payoutMethod", "amazon");
// }}
// >
// <img
//   src={values.payoutMethod === "amazon" ? amazonselected : amazon}
//   alt="Amazon Pay"
//   />
//   AMAZON-WALLET
// </div>

// <div
// className={`payout-option ${values.payoutMethod === "neft" ? "selected" : ""
//   }`}
// style={{
//   borderRadius: "10px 10px 10px 10px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   // gap: "5px",
//   padding: "0",
// }}
// onClick={(e) => {
//   // e.target.classList.add("selected");
//   setFieldValue("payoutMethod", "neft");
// }}
// >
// <img
//   src={values.payoutMethod === "neft" ? neftselected : neft}
//   alt="NEFT"
//   />
//   NEFT
// </div>
// </div>

// <div className="payment-input-container">
// {values.payoutMethod === "upi" && (
// <div className="input-group">
//   <label htmlFor="upiNumber"></label>
//   <Field
//     type="text"
//     id="upiNumber"
//     name="upiNumber"
//     placeholder="Enter UPI ID*"
//   />
//   <ErrorMessage
//     name="upiNumber"
//     component="p"
//     className="error-payment"
//   />
// </div>
// )}
// {values.payoutMethod === "amazon" && (
// <div className="input-group">
//   <label htmlFor="amazonPayId"></label>
//   <Field
//     type="text"
//     id="amazonPayId"
//     name="amazonPayId"
//     placeholder="Enter Amazon Pay Number*"
//     // maxLength={10}

//   />
//   <ErrorMessage
//     name="amazonPayId"
//     component="p"
//     className="error-payment"
//   />
// </div>
// )}

// {values.payoutMethod === "neft" && (
// <div>
//   <div className="input-group">
//     <label htmlFor="name"></label>
//     <Field
//       type="text"
//       id="name"
//       name="name"
//       placeholder="Enter Full Name*"
//       // maxLength={20}
//     // onBlur={handleBlur} // Add onBlur event handler
//     />
//   </div>
//   <div className="input-group">
//     <label htmlFor="accountNumber"></label>
//     <Field
//       type="number"
//       id="accountNumber"
//       name="accountNumber"
//       // maxLength={20}
//       placeholder="Enter Account Number*"
//     // onBlur={handleBlur} // Add onBlur event handler
//     />
//   </div>
//   <div className="input-group">
//     <label htmlFor="ifscCode"></label>
//     <Field
//       type="text"
//       id="ifscCode"
//       name="ifscCode"
//       placeholder="Enter IFSC Code*"
//       // maxLength={11}
//     // onBlur={handleBlur} // Add onBlur event handler
//     />
//   </div>
//   {errors.name && touched.name && errors.name && (
//     <p className="error-payment">{errors.name}</p>
//   )}
//   {!errors.name &&
//     errors.accountNumber &&
//     touched.accountNumber &&
//     errors.accountNumber && (
//       <p className="error-payment">
//         {errors.accountNumber}
//       </p>
//     )}
//   {!errors.name &&
//     !errors.accountNumber &&
//     errors.ifscCode &&
//     touched.ifscCode &&
//     errors.ifscCode && (
//       <p className="error-payment">{errors.ifscCode}</p>
//     )}
// </div>
// )}

// </div>
// <div className="payment-btn-container">
// <button className="btn btn-primary" type="submit">
// Submit
// </button>
// </div>
// </Form>
// )}
// </Formik>
// </div>
// </div>
// </MainLayout>
// );
// };