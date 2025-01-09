import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home-component/Home';
import Login from './Components/Login-component/Login';
import Otp from './Components/Otp-component/Otp';
// import PaymentMethods from './Components/Payment-components/PaymentMethods';
import Upi from './Components/Upi-component/Upi';
import Neft from './Components/Neft-component/Neft';
import Ewallet from './Components/Ewallet-component/Ewallet';
import Last from './Components/Last-component/Last';


function App() {
return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Otp' element={<Otp/>}/>
      <Route path='/Upi' element={<Upi/>}/> 
      <Route path='/Neft' element={<Neft/>}/> 
      <Route path='/Ewallet' element={<Ewallet/>}/> 
      <Route path='/Last' element={<Last/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
