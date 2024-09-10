import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./components/Home";
import Order from "./components/order";
import CartItems from "./components/cartItems";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [showCart, setShowCart] = useState(true); 
  const[itemCounter,setItemCounter]=useState(0)

  return (
    <div className="p-0 m-auto">
    <Navbar  itemCounter={itemCounter} /> 
     
     <Routes>
      <Route path="/cart" element={< CartItems setItemCounter={setItemCounter}/>} />

      <Route path="/" element={ <Home  setItemCounter={setItemCounter}/>} />

      <Route path="/order" element={ < Order />} />

     </Routes>
      
       {/* {showCart && <CartItems setShowCart={setShowCart} setItemCounter={setItemCounter} />}   This is to be used for popup window in Navbar and Home*/}
      
    <Footer />  
    </div>
  );
}

export default App;
