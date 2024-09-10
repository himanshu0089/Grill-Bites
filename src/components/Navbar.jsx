import React from "react";
import { useState } from "react";
import { useCart } from "./cart-context";
import { Link } from "react-router-dom";

function Navbar({ showCart, setShowCart, itemCounter }) {
  return (
    <div className="bg-lime-200 flex justify-between p-0 sticky top-0 z-1 rounded">
      <div className="mx-[8rem] mt-5 font-bold">
        {" "}
        <Link to="/"><h1 className="text-orange-700 font-bold text-2xl">Laziz Food</h1></Link>
      </div>
      <div className="mx-[8rem] my-5 font-bold rounded-xl border-x-2  border-green-500 p-[0.5rem] hover:border-y-2 hover:border-x-0 hover:text-orange-600">
      <Link to="/cart"> 
          Your Cart {itemCounter}
  
      </Link>  
      </div>
    </div>
  );
}

export default Navbar;
