import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./components/Home";
import CartItems from "./components/cartItems";

function App() {
  const [showCart, setShowCart] = useState(true); 
  const[itemCounter,setItemCounter]=useState(0)

  return (
    <>
       {showCart && <CartItems setShowCart={setShowCart} setItemCounter={setItemCounter} />}
      <div>
        <Navbar showCart={showCart} setShowCart={setShowCart} itemCounter={itemCounter} />
        <Home showCart={showCart} setShowCart={setShowCart} setItemCounter={setItemCounter}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
