import React from "react";
import { FaAlignLeft, FaUserAstronaut, FaShoppingBasket } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

function Header() {
  return (
    <header className="bg-orange-100/20 p-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* LEFT SIDE: Logo & Brand Name */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaShoppingBasket size={22} className="text-orange-800" />
            <h1 className="text-lg font-bold text-orange-800">9 to 9</h1>
          </div>
          <FaAlignLeft size={26} className="cursor-pointer" />
        </div>

        {/* RIGHT SIDE: Branch, Language, Static Profile */}
        <div className="flex items-center space-x-4">
          <p className="text-sm max-sm:hidden">Branch: Bettiah (Main)</p>
          <select className="border rounded px-2 py-1 text-black max-sm:hidden">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>

          <div className="relative">
            <button className="bg-orange-700 flex items-center gap-1 text-white px-3 py-2 rounded">
              <FaUserAstronaut />  9 to 9
            </button>
            {/* Static profile: you can render <Profile /> here directly if needed */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
