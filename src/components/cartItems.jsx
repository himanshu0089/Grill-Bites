import React, { useEffect } from "react";
import { useCart } from "./cart-context";
import { menuList } from "./menuList";
import { Link } from "react-router-dom";

function CartItems({ setItemCounter }) {
  const { itemRef, RemoveFromCart, addToCart, totalCartAmount } = useCart();
  const addToCarthandler = (id) => {
    addToCart(id);
    setItemCounter(prev => prev + 1)
  }
  const RemoveFromCarthandler = (id) => {
    RemoveFromCart(id);
    setItemCounter(prev => prev - 1)
  }
  useEffect(() => {
    console.log({ menuList });
  }, []);
  return (
    <div className="bg-neutral-600 m-auto p-[2rem] mt-0.2">
      <div className=" w-[80%] m-auto ">
        <div className="">
          {menuList.map((item, index) => {
            if (itemRef[item.id] > 0) {
              return (
                <div key={index} className="flex bg-white justify-between px-[2rem] py-[0.8rem]">
                  <div className="">
                    <p className=""> {item.name}</p>
                    <p className="">Rs. {item.price} </p>
                    <p className="border-2 border-grey-900 rounded-lg w-12 px-2"> x {itemRef[item.id]}</p>
                  </div>

                  <div className="">
                    <button className="cursor-pointer border border-grey-800 px-[0.8rem] mx-6" onClick={() => addToCarthandler(item.id)}> + </button>
                    <button className="cursor-pointer border border-grey-800 px-[0.8rem]" onClick={() => RemoveFromCarthandler(item.id)}>-</button>
                  </div>

                  {/* <hr /> */}
                </div>
              );
            }
          })}
        </div>
        <div className="px-[2rem] mt-[2rem]">
          <div className="flex justify-between text-lg ">
            <p className="text-white font-bold ">CartAmount : </p>
            <p className="text-white font-bold "> Rs. {totalCartAmount()}</p>
          </div>
          <div className="flex justify-end gap-[3rem] text-green-400 mt-[1rem] text-lg">
            <Link to='/'><button className="border border black px-[2rem] rounded-xl hover:text-orange-500"> Close</button></Link>
           {totalCartAmount() && <Link to='/order'><button className="border border black px-[2rem] rounded-xl  hover:text-orange-500">Order</button></Link>} 
          </div>

        </div>

      </div>
    </div>
  );
}

export default CartItems;
