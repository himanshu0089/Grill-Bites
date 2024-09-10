import React, { useReducer, useRef } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useCart } from "./cart-context";

import { menuList } from "./menuList";

function Menu({ setItemCounter }) {
  const[val, setVal]=useState(1)
  const { addToCart, RemoveFromCart } = useCart();
  const setValue = (e) => {
    setVal(e.target.value)
  };
  const handleCart = (id) => {
    setItemCounter((prev) => prev + 1);
    addToCart(id);
  };
  return (
    <div className="bg-white flex flex-col">
      

      {menuList.map((item, id) => {
        return (
          <div key={id} className="">
            <div className="flex justify-between mx-40 bg-white rounded">
              <div className=" mx-8 my-4">
                <h1 className="font-medium text-xl">{item.name}</h1>
                <p className="italic font-normal">{item.description}</p>
                <h2 className="font-medium text-base">Rs. {item.price}</h2>
              </div>
              <div className="flex flex-col">
                <div>
                  <label>
                    Amount
                    <input
                     className="mx-3 border-2 border-grey-500 text-black my-1"
                      type="number"
                      value={val}
                      min="1"
                      max="1"
                      step="1"
                      onChange={setValue}
                    />
                  </label>
                </div>
                <div className="">
                  <button
                    className="bg-lime-300 rounded-3xl m-2 px-9 py-2"
                    onClick={() => handleCart(item.id)}
                  >
                    {" "}
                    +Add
                  </button>
                </div>
                
              </div>
            </div>
            <hr className="text-green-600 mx-40 px-8" /> 
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
