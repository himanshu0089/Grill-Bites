import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-neutral-700 p-2">
      <div className="flex justify-between m-8 px-8">
        <div className="text-white">
          <h1 className=" text-orange-500 text-2xl">Grill Bites</h1>
          <p className="py-3">
            We aim to provide the best food and services.
          </p>
        </div>
        
        <div className="text-white mx-6">
          <h2 className="text-green-400">Order Your food:</h2>
          <p>contact@pirate.com</p>
          <p>+91 765259868</p>
        </div>
        </div>
        <hr className=" bg-gray-400 h-[2px] w-11/12 border-0 mx-[2rem]" />
        <div className="text-white text-center my-4">
          <p>Copyright @ All rights Reversed</p>
         <Link to="https://himanshu0089.netlify.app"><h2 className="text-green-400">Designed by Pir@te</h2></Link> 
        </div>
      
    </div>
  );
}

export default Footer;
