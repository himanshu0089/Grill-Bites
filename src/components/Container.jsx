import React from "react";
function Container() {

  return (
    <div className="mb-6 bg-black">
    <img className="w-[84vw] h-[30vw] m-auto" src="food.jpg" alt="" />
    <div className="bg-gray-300 text-green-600 text-center mx-[6rem] py-5 rounded-sm">
      {" "}
      <h2 className="font-bold"> Delicious Food, Delivered To You </h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All of our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
    </div>
  );
}

export default Container;
