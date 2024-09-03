import React from "react";
import { useState } from "react";
import { useCart } from "./cart-context"; 

function Navbar({showCart,setShowCart, itemCounter }) {
  return (
    <div className="bg-lime-200 flex justify-between w-screen">
      <div className="mx-20 my-5 font-bold">
        {" "}
        <h2>Laziz Food</h2>
      </div>
      <div className="mx-20 my-5 font-bold">
        <button
          className=""
          onClick={() => setShowCart((prev) => !prev)}
        >

          Your Cart  {itemCounter}
         
        </button>
      </div>

      
    </div>
  );
}

export default Navbar;
